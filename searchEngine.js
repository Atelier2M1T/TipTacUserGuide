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

const STEM_SUFFIXES = [
    'issements', 'issement', 'ements', 'ement',
    'ations', 'ation', 'ateurs', 'ateur', 'atrices', 'atrice',
    'ables', 'able', 'ibles', 'ible', 'iques', 'ique',
    'euses', 'euse', 'eurs', 'eur', 'aient', 'erait',
    'ions', 'ient', 'ees', 'ee', 'es', 'er', 'ir', 're',
    'ez', 'ai', 'as', 'is', 'it', 'e', 's', 'x'
];

/**
 * Racinisation française légère pour regrouper singulier/pluriel, participes et dérivés métier.
 */
export const stemFr = (word) => {
    if (!word || word.length < 4) return word;

    let stem = word;
    for (const suffix of STEM_SUFFIXES) {
        if (stem.endsWith(suffix) && stem.length - suffix.length >= 4) {
            stem = stem.slice(0, -suffix.length);
            break;
        }
    }

    if (stem === 'retourn') return 'retour';
    if (stem === 'raccourc' || stem === 'raccourci') return 'raccourc';
    return stem;
};

// Synonymes directionnels précis (sans mots fourre-tout qui polluent les résultats)
const RAW_SYNONYM_EXPANSIONS = {
    remboursement: ['retour', 'avoir', 'annulation'],
    rembourser: ['retour', 'avoir', 'annulation'],
    retour: ['remboursement', 'avoir', 'reprise'],
    retourner: ['retour', 'remboursement', 'avoir'],
    avoir: ['retour', 'remboursement', 'credit'],
    douchette: ['scanner', 'barres', 'ean', 'lecteur', 'bip'],
    scanner: ['douchette', 'barres', 'ean', 'lecteur'],
    tpe: ['cb', 'bancaire', 'concert'],
    cb: ['tpe', 'bancaire', 'concert', 'carte'],
    z: ['cloture', 'fermeture', 'session'],
    cloture: ['z', 'fermeture', 'session'],
    cloturer: ['z', 'fermeture', 'session'],
    casse: ['demarque', 'perte', 'perime'],
    demarque: ['casse', 'perte', 'vol', 'perime'],
    pin: ['mdp', 'badge', 'passe', 'manager'],
    mdp: ['pin', 'passe', 'badge'],
    reassort: ['fournisseur', 'achat', 'reception', 'commande'],
    devis: ['acompte', 'commande'],
    acompte: ['devis', 'commande'],
    fidelite: ['points', 'cagnotte'],
    raccourci: ['clavier', 'touche', 'pave'],
    imprimante: ['imprimer', 'ticket', 'thermique', 'etiquette'],
    imprimer: ['imprimante', 'ticket', 'thermique', 'etiquette'],
    inventaire: ['stock', 'comptage', 'transfert']
};

const SYNONYM_MAP = new Map();
for (const [key, targets] of Object.entries(RAW_SYNONYM_EXPANSIONS)) {
    const stemmedKey = stemFr(key);
    if (!SYNONYM_MAP.has(stemmedKey)) {
        SYNONYM_MAP.set(stemmedKey, new Set());
    }
    const set = SYNONYM_MAP.get(stemmedKey);
    for (const target of targets) {
        const stemmedTarget = stemFr(target);
        if (stemmedTarget && stemmedTarget !== stemmedKey) {
            set.add(stemmedTarget);
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
    return stemFr(term);
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
            fields: ['articleTitle', 'sectionTitle', 'chapterTitle', 'cleanText'],
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
 * Construit un extrait (~maxLen caractères) centré sur les termes (ou radicaux) trouvés.
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

const getChunkTokensSet = (text) => {
    const tokens = new Set();
    for (const rawTok of tokenizeForIndex(text)) {
        const stemmed = processTerm(rawTok);
        if (stemmed) tokens.add(stemmed);
    }
    return tokens;
};

/**
 * Recherche plein-texte hors-ligne avec MiniSearch, racinisation FR, synonymes directionnels et diversité par article.
 */
export const searchGuide = async (query, manifest, loadedModulesCacheRef = null, options = {}) => {
    const { limit = 15, maxPerArticle = 2 } = options;
    const raw = String(query || '').trim();
    if (!raw || raw.length < 2) return [];

    const { miniSearch, chunksById } = await buildOrGetSearchIndex(manifest, loadedModulesCacheRef);

    const baseTokens = Array.from(new Set(tokenizeForIndex(raw).map(processTerm).filter(Boolean)));
    if (baseTokens.length === 0) return [];

    const searchOptions = {
        prefix: true,
        fuzzy: 0.2,
        combineWith: 'OR',
        boost: {
            articleTitle: 3.5,
            sectionTitle: 3.0,
            chapterTitle: 1.5,
            cleanText: 1.2
        }
    };

    const primaryResults = miniSearch.search(baseTokens.join(' '), searchOptions);

    const combinedById = new Map();
    let minPrimaryScore = Infinity;

    for (const r of primaryResults) {
        const chunk = chunksById.get(r.id);
        if (!chunk) continue;

        const artTokens = getChunkTokensSet(chunk.articleTitle);
        const bodyTokens = getChunkTokensSet(`${chunk.sectionTitle} ${chunk.cleanText}`);
        const allDocTokens = new Set([...artTokens, ...bodyTokens]);

        let score = r.score;
        const allMatch = baseTokens.every((t) => allDocTokens.has(t));
        if (allMatch) score *= 1.65;

        // Bonus si un mot-clé de la requête est présent à la fois dans le titre de l'article ET dans la sous-section/corps
        const hasTitleAndBodyOverlap = baseTokens.some((t) => artTokens.has(t) && bodyTokens.has(t));
        if (hasTitleAndBodyOverlap) score *= 1.45;

        if (score < minPrimaryScore) minPrimaryScore = score;
        combinedById.set(r.id, { score, chunk, isPrimary: true });
    }

    // Expansion synonyme directionnelle (poids réduit et plafonné sous les correspondances directes)
    const synonymOnlyTokens = new Set();
    for (const token of baseTokens) {
        const aliases = SYNONYM_MAP.get(token);
        if (aliases) {
            for (const alias of aliases) {
                if (!baseTokens.includes(alias)) synonymOnlyTokens.add(alias);
            }
        }
    }

    if (synonymOnlyTokens.size > 0) {
        const synResults = miniSearch.search(Array.from(synonymOnlyTokens).join(' '), {
            ...searchOptions,
            fuzzy: 0.15
        });
        const synCeiling = minPrimaryScore < Infinity ? minPrimaryScore * 0.85 : Infinity;

        for (const r of synResults) {
            const chunk = chunksById.get(r.id);
            if (!chunk) continue;
            if (!combinedById.has(r.id)) {
                const synScore = Math.min(r.score * 0.3, synCeiling);
                combinedById.set(r.id, { score: synScore, chunk, isPrimary: false });
            } else {
                // Léger renfort si un résultat déjà pertinent contient aussi un synonyme
                const existing = combinedById.get(r.id);
                existing.score += r.score * 0.15;
            }
        }
    }

    const highlightTerms = [...baseTokens, ...Array.from(synonymOnlyTokens)];
    const sorted = Array.from(combinedById.values()).sort((a, b) => b.score - a.score);

    // Diversité par article : évite qu'un seul long article monopolise le top résultats
    const perArticleCounts = new Map();
    const diverseResults = [];
    for (const entry of sorted) {
        const artKey = `${entry.chunk.chapterKey}::${entry.chunk.articleId}`;
        const count = perArticleCounts.get(artKey) || 0;
        if (maxPerArticle > 0 && count >= maxPerArticle) continue;
        perArticleCounts.set(artKey, count + 1);
        diverseResults.push(entry);
        if (diverseResults.length >= limit) break;
    }

    return diverseResults.map(({ chunk, score }) => ({
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
 * Sélectionne les meilleurs extraits [T] diversifiés pour le RAG léger de l'assistant IA.
 */
export const getTopChunksForAi = async (query, manifest, loadedModulesCacheRef = null, limit = 10) => {
    const results = await searchGuide(query, manifest, loadedModulesCacheRef, {
        limit,
        maxPerArticle: 2
    });
    return results.map((r) => ({
        chapterKey: r.chapterKey,
        chapterTitle: r.chapterTitle,
        articleId: String(r.articleId),
        articleTitle: r.articleTitle,
        sectionTitle: r.sectionTitle || '',
        sectionAnchor: r.sectionAnchor || '',
        content: (r.cleanText || '').slice(0, 2800)
    }));
};
