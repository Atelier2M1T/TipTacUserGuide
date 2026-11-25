import MiniSearch from 'minisearch';

const FRENCH_STOP_WORDS = new Set([
    'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'd', 'l',
    'et', 'ou', 'en', 'au', 'aux', 'pour', 'par', 'sur', 'dans', 'avec', 'sans',
    'comment', 'faire', 'est', 'ce', 'que', 'qui', 'je', 'tu', 'il', 'elle',
    'nous', 'vous', 'ils', 'elles', 'mon', 'ma', 'mes', 'ton', 'ta', 'tes',
    'son', 'sa', 'ses', 'quel', 'quelle', 'quels', 'quelles', 'peut', 'peux',
    'puis', 'on', 'ne', 'pas', 'plus', 'se', 'a', 'y', 'effectuer', 'etre',
    'quand', 'quoi', 'donc', 'si', 'tout', 'tous', 'toutes'
]);

const POS_SYNONYM_GROUPS = [
    ['douchette', 'scanner', 'bip', 'bipper', 'code', 'barres', 'ean', 'lecteur'],
    ['tpe', 'cb', 'carte', 'bancaire', 'concert', 'contact'],
    ['z', 'cloture', 'fermeture', 'fin', 'journee', 'session'],
    ['casse', 'demarque', 'perte', 'vol', 'perime', 'poubelle', 'ecart'],
    ['pin', 'mdp', 'badge', 'mot', 'passe', 'manager', 'superviseur'],
    ['avoir', 'bon', 'remboursement', 'retour', 'cadeau', 'cheque'],
    ['reassort', 'commande', 'fournisseur', 'achat', 'franco', 'pcb', 'reception'],
    ['devis', 'acompte', 'facture', 'b2b', 'pro', 'encours'],
    ['fidelite', 'points', 'cagnotte', 'remise', 'promo', 'promotion', 'solde'],
    ['imprimante', 'ticket', 'thermique', 'etiquette', 'tiroir', 'caisse'],
    ['inventaire', 'stock', 'comptage', 'transfert', 'entree', 'sortie'],
    ['raccourci', 'clavier', 'touche', 'pave', 'numerique'],
    ['annuler', 'supprimer', 'effacer', 'corriger', 'modifier']
];

const SYNONYM_MAP = new Map();
for (const group of POS_SYNONYM_GROUPS) {
    for (const term of group) {
        if (!SYNONYM_MAP.has(term)) {
            SYNONYM_MAP.set(term, new Set());
        }
        const set = SYNONYM_MAP.get(term);
        for (const alias of group) {
            if (alias !== term) set.add(alias);
        }
    }
}

/**
 * Supprime les balises internes du manuel tout en conservant le texte lisible.
 */
export const stripMarkup = (text) => {
    if (typeof text !== 'string') return '';
    return text
        .replace(/\[📸[^\]]+\]|\[ICON:[^\]]+\]|\[CLEAR\]/g, ' ')
        .replace(/\[LINK:[^|\]]+\|([^\]]+)\]/g, '$1')
        .replace(/\[LINK:([^\]]+)\]/g, '$1')
        .replace(/\[(BTN|KEY|PERM|PLAN):([^\]]+)\]/g, '$2')
        .replace(/\[(T|ST|WARNING|TIP)\]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
};

/**
 * Normalise une chaîne française (minuscules, sans accents, sans ponctuation).
 */
export const normalizeFr = (str) => {
    if (!str) return '';
    return String(str)
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/['’`\-_/.,:;!?()[\]{}«»"“”+|*]+/g, ' ');
};

const tokenizeForIndex = (text) =>
    normalizeFr(text)
        .split(/\s+/)
        .filter(Boolean);

const processTerm = (term) => {
    if (!term) return null;
    if (term.length < 2 && term !== 'z') return null;
    if (FRENCH_STOP_WORDS.has(term)) return null;
    return term;
};

/**
 * Découpe un chapitre (articles [T] ou sections de raccourcis) en chunks indexables.
 */
export const chunkChapterData = (chapterKey, manifest, data) => {
    const chunks = [];
    const chapterTitle = manifest?.title || data?.title || chapterKey;
    const category = manifest?.category || data?.category || '';

    if (Array.isArray(data?.articles)) {
        data.articles.forEach((art, idx) => {
            const articleId = art.id || idx;
            const articleTitle = art.title || `Article ${idx + 1}`;
            const rawContent = typeof art.content === 'string' ? art.content : '';

            const parts = rawContent.split(/(?=\[T\])/);
            let tIndex = 0;

            parts.forEach((part, partIdx) => {
                if (part.startsWith('[T]')) {
                    const firstNewline = part.indexOf('\n');
                    const firstLine = firstNewline === -1 ? part : part.slice(0, firstNewline);
                    const sectionTitle = stripMarkup(firstLine.replace(/^\[T\]/, ''));
                    const cleanText = stripMarkup(part);
                    const sectionAnchor = `${articleId}__t_${tIndex}`;

                    if (cleanText || sectionTitle) {
                        chunks.push({
                            id: `${chapterKey}::${articleId}::t${tIndex}`,
                            chapterKey,
                            chapterTitle,
                            category,
                            articleId,
                            articleTitle,
                            sectionTitle,
                            sectionAnchor,
                            cleanText
                        });
                    }
                    tIndex += 1;
                } else {
                    const cleanText = stripMarkup(part);
                    // On indexe l'introduction si elle est significative ou s'il n'y a aucun [T]
                    if (cleanText && (cleanText.length > 20 || parts.length === 1)) {
                        chunks.push({
                            id: `${chapterKey}::${articleId}::intro${partIdx}`,
                            chapterKey,
                            chapterTitle,
                            category,
                            articleId,
                            articleTitle,
                            sectionTitle: '',
                            sectionAnchor: null,
                            cleanText
                        });
                    }
                }
            });
        });
    } else if (Array.isArray(data?.sections)) {
        data.sections.forEach((sec, idx) => {
            const secId = sec.id || idx;
            const secTitle = sec.title || `Section ${idx + 1}`;
            const itemsText = Array.isArray(sec.items)
                ? sec.items.map((it) => `${it.key || ''} : ${it.desc || ''}`).join(' • ')
                : '';
            const cleanText = stripMarkup(`${secTitle} — ${itemsText}`);

            chunks.push({
                id: `${chapterKey}::sec::${secId}`,
                chapterKey,
                chapterTitle,
                category,
                articleId: secId,
                articleTitle: secTitle,
                sectionTitle: '',
                sectionAnchor: null,
                cleanText
            });
        });
    }

    return chunks;
};

let cachedIndexPromise = null;
let cachedIndexState = null;

/**
 * Charge tous les chapitres (si non déjà en cache) et construit l'index MiniSearch une seule fois.
 */
export const buildOrGetSearchIndex = async (manifest, loadedModulesCacheRef = null) => {
    if (cachedIndexState) return cachedIndexState;
    if (cachedIndexPromise) return cachedIndexPromise;

    cachedIndexPromise = (async () => {
        const allChunks = [];
        const chapters = Object.entries(manifest || {});

        await Promise.all(
            chapters.map(async ([key, entry]) => {
                let data = loadedModulesCacheRef?.current?.[key];
                if (!data && entry?.load) {
                    try {
                        const mod = await entry.load();
                        data = mod.default || mod;
                        if (loadedModulesCacheRef?.current) {
                            loadedModulesCacheRef.current[key] = data;
                        }
                    } catch (_err) {
                        return;
                    }
                }
                if (data) {
                    const chapterChunks = chunkChapterData(key, entry, data);
                    allChunks.push(...chapterChunks);
                }
            })
        );

        const miniSearch = new MiniSearch({
            fields: ['sectionTitle', 'articleTitle', 'chapterTitle', 'cleanText'],
            storeFields: [
                'chapterKey',
                'chapterTitle',
                'category',
                'articleId',
                'articleTitle',
                'sectionTitle',
                'sectionAnchor',
                'cleanText'
            ],
            tokenize: tokenizeForIndex,
            processTerm
        });

        miniSearch.addAll(allChunks);

        const chunksById = new Map();
        for (const c of allChunks) {
            chunksById.set(c.id, c);
        }

        cachedIndexState = { miniSearch, chunksById };
        cachedIndexPromise = null;
        return cachedIndexState;
    })();

    return cachedIndexPromise;
};

export const resetSearchIndexCache = () => {
    cachedIndexPromise = null;
    cachedIndexState = null;
};

/**
 * Construit un extrait (~maxLen caractères) centré sur les termes trouvés, avec découpage surlignable.
 */
export const buildSnippet = (cleanText, highlightTerms = [], maxLen = 130) => {
    if (!cleanText) return { parts: [] };

    const rawChars = Array.from(cleanText);
    let normText = '';
    const normToRawStart = [];

    for (let rawIdx = 0; rawIdx < rawChars.length; rawIdx++) {
        const ch = rawChars[rawIdx];
        const normCh = ch.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        for (let j = 0; j < normCh.length; j++) {
            normText += normCh[j];
            normToRawStart.push(rawIdx);
        }
    }

    const terms = Array.from(new Set(highlightTerms.filter((t) => t && (t.length >= 2 || t === 'z'))));
    let firstMatchNormIdx = -1;
    const matchRanges = [];

    for (const term of terms) {
        let pos = 0;
        while (pos < normText.length) {
            const found = normText.indexOf(term, pos);
            if (found === -1) break;
            const prevChar = found === 0 ? ' ' : normText[found - 1];
            const isWordStart = /[\s'’\-_/.,:;!?()[\]{}«»"“”+|*]/.test(prevChar);
            if (isWordStart) {
                const startRaw = normToRawStart[found];
                const endNormIdx = Math.min(normText.length - 1, found + term.length - 1);
                const endRaw = normToRawStart[endNormIdx] + 1;
                matchRanges.push([startRaw, endRaw]);
                if (firstMatchNormIdx === -1 || found < firstMatchNormIdx) {
                    firstMatchNormIdx = found;
                }
            }
            pos = found + term.length;
        }
    }

    let sliceStart = 0;
    if (firstMatchNormIdx !== -1) {
        const firstRaw = normToRawStart[firstMatchNormIdx];
        sliceStart = Math.max(0, firstRaw - Math.floor(maxLen * 0.35));
        if (sliceStart > 0) {
            const nextSpace = cleanText.indexOf(' ', sliceStart);
            if (nextSpace !== -1 && nextSpace - sliceStart < 18) {
                sliceStart = nextSpace + 1;
            }
        }
    }

    let sliceEnd = Math.min(cleanText.length, sliceStart + maxLen);
    if (sliceEnd < cleanText.length) {
        const lastSpace = cleanText.lastIndexOf(' ', sliceEnd);
        if (lastSpace > sliceStart + Math.floor(maxLen * 0.6)) {
            sliceEnd = lastSpace;
        }
    }

    // Fusionner les plages qui se chevauchent dans la fenêtre [sliceStart, sliceEnd]
    const visibleRanges = matchRanges
        .map(([s, e]) => [Math.max(sliceStart, s), Math.min(sliceEnd, e)])
        .filter(([s, e]) => s < e)
        .sort((a, b) => a[0] - b[0]);

    const merged = [];
    for (const [s, e] of visibleRanges) {
        if (merged.length === 0 || s > merged[merged.length - 1][1]) {
            merged.push([s, e]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], e);
        }
    }

    const parts = [];
    if (sliceStart > 0) parts.push({ text: '…', match: false });

    let cursor = sliceStart;
    for (const [s, e] of merged) {
        if (s > cursor) {
            parts.push({ text: cleanText.slice(cursor, s), match: false });
        }
        parts.push({ text: cleanText.slice(s, e), match: true });
        cursor = e;
    }
    if (cursor < sliceEnd) {
        parts.push({ text: cleanText.slice(cursor, sliceEnd), match: false });
    }
    if (sliceEnd < cleanText.length) parts.push({ text: '…', match: false });

    return { parts };
};

/**
 * Recherche plein-texte hors-ligne avec MiniSearch + synonymes métier POS.
 */
export const searchGuide = async (query, manifest, loadedModulesCacheRef = null, options = {}) => {
    const { limit = 15 } = options;
    const raw = String(query || '').trim();
    if (!raw || raw.length < 2) return [];

    const { miniSearch, chunksById } = await buildOrGetSearchIndex(manifest, loadedModulesCacheRef);

    const baseTokens = tokenizeForIndex(raw)
        .map(processTerm)
        .filter(Boolean);

    if (baseTokens.length === 0) return [];

    const searchOptions = {
        prefix: true,
        fuzzy: 0.2,
        combineWith: 'OR',
        boost: {
            sectionTitle: 3.5,
            articleTitle: 3.0,
            chapterTitle: 1.5,
            cleanText: 1.0
        }
    };

    const primaryResults = miniSearch.search(baseTokens.join(' '), searchOptions);

    // Expansion avec synonymes métier
    const synonymTokens = new Set(baseTokens);
    for (const token of baseTokens) {
        const aliases = SYNONYM_MAP.get(token);
        if (aliases) {
            for (const alias of aliases) synonymTokens.add(alias);
        }
    }

    const combinedById = new Map();
    for (const r of primaryResults) {
        const chunk = chunksById.get(r.id);
        if (!chunk) continue;
        // Bonus si tous les mots de la requête apparaissent dans le chunk
        const normDoc = normalizeFr(`${chunk.sectionTitle} ${chunk.articleTitle} ${chunk.cleanText}`);
        const allMatch = baseTokens.every((t) => normDoc.includes(t));
        const boostedScore = r.score * (allMatch ? 1.65 : 1.0);
        combinedById.set(r.id, { ...r, score: boostedScore, chunk });
    }

    if (synonymTokens.size > baseTokens.length) {
        const synResults = miniSearch.search(Array.from(synonymTokens).join(' '), {
            ...searchOptions,
            fuzzy: 0.15
        });
        for (const r of synResults) {
            if (!combinedById.has(r.id)) {
                const chunk = chunksById.get(r.id);
                if (chunk) {
                    combinedById.set(r.id, { ...r, score: r.score * 0.55, chunk });
                }
            }
        }
    }

    const highlightTerms = Array.from(synonymTokens);

    return Array.from(combinedById.values())
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(({ chunk, score }) => ({
            id: chunk.id,
            score,
            chapterKey: chunk.chapterKey,
            chapterTitle: chunk.chapterTitle,
            articleId: chunk.articleId,
            articleTitle: chunk.articleTitle,
            sectionTitle: chunk.sectionTitle,
            sectionAnchor: chunk.sectionAnchor,
            snippet: buildSnippet(chunk.cleanText, highlightTerms, 130),
            cleanText: chunk.cleanText
        }));
};

/**
 * Sélectionne les meilleurs extraits [T] pour le RAG léger de l'assistant IA.
 */
export const getTopChunksForAi = async (query, manifest, loadedModulesCacheRef = null, limit = 7) => {
    const results = await searchGuide(query, manifest, loadedModulesCacheRef, { limit });
    return results.map((r) => ({
        chapterKey: r.chapterKey,
        chapterTitle: r.chapterTitle,
        articleId: String(r.articleId),
        articleTitle: r.articleTitle,
        sectionTitle: r.sectionTitle || '',
        content: (r.cleanText || '').slice(0, 2800)
    }));
};
