import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import {
    HelpCircle, Zap, Server, ShoppingCart, Archive, Shield, Settings, Minus, Tag, Eye,
    Sliders, Target, Users, Box, Truck, ClipboardList, BarChart3, Crown, MapPin, Package,
    Smartphone, Cloud, Globe, X, Leaf, Star, Search, Loader2, ChevronRight, Image as ImageIcon,
    SquarePen, Plus, Trash2, Download, Upload, Lock, Percent, CircleQuestionMark, Layers,
    CornerDownLeft, Calculator, ArrowDownUp, Printer, Coins, Building, CreditCard, Store,
    ShieldCheck, List, FileText, Unlock, TrendingUp, DollarSign, TrendingDown, Calendar,
    Barcode, User, ArrowUpDown, RefreshCcw, Briefcase, Undo, CheckCircle, AlertTriangle, Merge,
    Gift, Mail, Grid, Video, Layout, History, Link as IconLink, Monitor, Clock, Banknote
} from 'lucide-react';
import { USER_GUIDE_MANIFEST } from './data/userGuide';

const ICON_MAP = {
    Zap, Server, ShoppingCart, Archive, Shield, Settings, Sliders, Lock, Crown, Tag, ImageIcon,
    Target, Users, Box, Truck, ClipboardList, BarChart3, Smartphone, X, Minus, MapPin, Eye,
    Cloud, Globe, HelpCircle, Leaf, SquarePen, Plus, Trash2, Download, Upload, Store, Package,
    Percent, CircleQuestionMark, Layers, CornerDownLeft, Calculator, ArrowDownUp, Printer,
    Coins, Building, CreditCard, ShieldCheck, List, FileText, Unlock, TrendingUp, DollarSign,
    TrendingDown, Barcode, User, ArrowUpDown, RefreshCcw, Briefcase, Undo, CheckCircle, AlertTriangle,
    Merge, Gift, Star, Calendar, Mail, Grid, Video, Layout, History, IconLink, Monitor, Clock, Banknote
};

// Rendu dynamique du texte avec support multi-images, alertes, boutons, permissions et structuration (Titres/Sous-titres)
const FormattedGuideContent = ({ content }) => {
    if (!content) return null;

    // 1. Parseur des éléments intégrés au texte (Inline)
    const parseInlineElements = (text) => {
        if (typeof text !== 'string') return text;

        // 1. Ajouter \[ICON:[^\]]+\] dans la Regex
        const inlineRegex = /(\[BTN:[^\]]+\]|\[KEY:[^\]]+\]|\[PERM:[^\]]+\]|\[ICON:[^\]]+\]|\[PLAN:[^\]]+\]|\[LINK:[^\]]+\])/g;
        const pieces = text.split(inlineRegex);

        return pieces.map((piece, i) => {
            if (piece.startsWith('[BTN:')) {
                const val = piece.replace('[BTN:', '').replace(']', '').trim();
                return <span key={i} className="px-2 py-0.5 mx-1 bg-gradient-to-b from-white whitespace-nowrap to-gray-100 border border-gray-300 rounded shadow-sm text-xs font-bold text-gray-700">{val}</span>;
            }
            if (piece.startsWith('[KEY:')) {
                const val = piece.replace('[KEY:', '').replace(']', '').trim();
                return <span key={i} className="font-mono px-1.5 py-0.5 mx-1 bg-gray-100 whitespace-nowrap border border-gray-300 rounded text-blue-700 font-black text-xs shadow-sm">{val}</span>;
            }
            if (piece.startsWith('[PERM:')) {
                const val = piece.replace('[PERM:', '').replace(']', '').trim();
                return <span key={i} className="px-1.5 py-0.5 mx-1 bg-red-50 border whitespace-nowrap border-red-200 rounded text-red-700 font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 translate-y-[-1px]"><Shield size={10} strokeWidth={3} /> {val}</span>;
            }
            if (piece.startsWith('[PLAN:')) {
                const val = piece.replace('[PLAN:', '').replace(']', '').trim();
                return <span key={i} className="px-1.5 py-0.5 mx-1 bg-amber-50 border whitespace-nowrap border-amber-200 rounded text-amber-700 font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 translate-y-[-1px]"><Crown size={10} strokeWidth={3} /> {val}</span>;
            }

            // 2. Ajouter la gestion de l'icône
            if (piece.startsWith('[ICON:')) {
                const rawParams = piece.replace('[ICON:', '').replace(']', '').trim();
                const [iconName, sizeParam, colorParam] = rawParams.split('|').map(s => s ? s.trim() : '');

                const IconComponent = ICON_MAP[iconName] || HelpCircle; // HelpCircle par défaut si non trouvée
                const size = sizeParam ? parseInt(sizeParam, 10) : 14;
                const colorClass = colorParam ? (colorParam.startsWith('text-') ? colorParam : `text-${colorParam}`) : 'text-gray-700';

                return <IconComponent key={i} size={size} className={`inline-block align-text-bottom ${colorClass} mx-0.5`} />;
            }

            if (piece.startsWith('[LINK:')) {
                const rawParams = piece.replace('[LINK:', '').replace(']', '').trim();
                const [targetId, label] = rawParams.split('|').map(s => s ? s.trim() : '');

                return (
                    <button
                        key={i}
                        onClick={(e) => {
                            e.stopPropagation();
                            // Il faut passer une fonction via le contexte ou les props pour déclencher handleSelectGlobalResult ou setActiveTab
                            if (window.dispatchEvent) {
                                window.dispatchEvent(new CustomEvent('navigate-guide', { detail: { targetId } }));
                            }
                        }}
                        className="inline-flex items-center gap-1 px-1.5 py-0.5 mx-1 text-teal-700 font-bold text-xs hover:underline transition-all cursor-pointer"
                        title={`Aller vers la section : ${label || targetId}`}
                    >
                        <IconLink size={12} className="shrink-0" />
                        <span>{label || targetId}</span>
                    </button>
                );
            }
            return <span key={i}>{piece}</span>;
        });
    };

    // 2. Découpage des grands blocs
    const blockRegex = /(\[📸\s*[^\]]+\]|\[CLEAR\]|\[WARNING\][^\n]*|\[TIP\][^\n]*|\[T\][^\n]*|\[ST\][^\n]*)/g;
    const parts = content.split(blockRegex);

    const parseTag = (raw) => {
        const [imagesSection, ...paramParts] = raw.split('|');
        const params = paramParts.join('|').trim().toLowerCase();
        const images = imagesSection.split(',').map(s => s.trim()).filter(Boolean);

        let maxH = "340px";
        const hMatch = params.match(/h=(\d+)/);
        if (hMatch) maxH = `${hMatch[1]}px`;
        else if (params.includes('xs')) maxH = "140px";
        else if (params.includes('sm')) maxH = "200px";
        else if (params.includes('md')) maxH = "280px";
        else if (params.includes('lg')) maxH = "380px";
        else if (params.includes('xl')) maxH = "500px";

        let align = 'center';
        if (params.includes('left')) align = 'left';
        else if (params.includes('right')) align = 'right';

        return { images, maxH, align };
    };

    return (
        <div className="text-sm text-gray-700 leading-relaxed flow-root">
            {parts.map((part, index) => {
                if (!part) return null;

                // Balise de nettoyage manuel
                if (part === '[CLEAR]') {
                    return <div key={index} className="clear-both w-full h-px" />;
                }

                // Bloc Image
                const match = part.match(/\[📸\s*([^\]]+)\]/);
                if (match) {
                    const { images, maxH, align } = parseTag(match[1]);
                    const count = images.length;

                    let wrapperClass = "my-5 grid gap-4 ";
                    if (align === 'left') wrapperClass += "md:float-left md:mr-6 w-full md:w-1/3 md:min-w-[100px] md:max-w-[320px] clear-both ";
                    else if (align === 'right') wrapperClass += "md:float-right md:ml-6 w-full md:w-1/3 md:min-w-[260px] md:max-w-[320px] clear-both ";
                    else wrapperClass += count === 1 ? 'grid-cols-1 max-w-2xl mx-auto clear-both ' : count === 2 ? 'grid-cols-1 md:grid-cols-2 clear-both ' : 'grid-cols-1 md:grid-cols-3 clear-both ';

                    return (
                        <div key={index} className={wrapperClass}>
                            {images.map((imageName, imgIdx) => (
                                <div key={imgIdx} className="rounded-xl overflow-hidden flex flex-col">
                                    <div className="flex-1 flex justify-center items-center min-h-[50px]">
                                        <img
                                            src={new URL(`./assets/guide/${imageName}`, import.meta.url).href}
                                            alt={imageName}
                                            loading="lazy"
                                            style={{ maxHeight: maxH }}
                                            className="w-auto max-w-full rounded-md object-contain border border-gray-200 shadow-sm"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="hidden flex-col items-center justify-center p-4 text-gray-400 italic text-xs gap-1 text-center">
                                            <ImageIcon size={22} className="opacity-40" />
                                            <span>Image en attente :</span>
                                            <span className="font-bold text-gray-600 font-mono text-[10px] break-all">{imageName}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                }

                // 3. Blocs Textuels Structurés

                if (part.startsWith('[T]')) {
                    const textContent = part.replace('[T]', '').trim();
                    // clear-both conservé sur le grand titre pour forcer un nouveau bloc sous les images
                    return (
                        <h4 key={index} className="text-sm font-bold text-teal-700 underline uppercase mb-3 mt-6">
                            {parseInlineElements(textContent)}
                        </h4>
                    );
                }

                if (part.startsWith('[ST]')) {
                    const textContent = part.replace('[ST]', '').trim();
                    // Retrait du clear-both pour que le sous-titre puisse habiller l'image
                    return (
                        <h5 key={index} className="text-xs px-3 py-1.5 bg-gray-50 rounded-lg font-bold text-teal-600 uppercase mb-1.5 mt-3 truncate">
                            {parseInlineElements(textContent)}
                        </h5>
                    );
                }

                if (part.startsWith('[WARNING]')) {
                    const textContent = part.replace('[WARNING]', '').trim();
                    // Retrait du clear-both : l'alerte va maintenant se glisser à côté de l'image
                    return (
                        <div key={index} className="my-5 p-4 bg-orange-50 rounded-lg flex items-start gap-3 shadow-sm">
                            <Zap className="text-orange-500 shrink-0 mt-0.5" size={18} />
                            <div className="text-orange-900 font-medium leading-relaxed w-full">
                                {parseInlineElements(textContent)}
                            </div>
                        </div>
                    );
                }

                if (part.startsWith('[TIP]')) {
                    const textContent = part.replace('[TIP]', '').trim();
                    // Retrait du clear-both : l'astuce va maintenant se glisser à côté de l'image
                    return (
                        <div key={index} className="my-5 p-4 bg-teal-50  rounded-lg flex items-start gap-3 shadow-sm">
                            <HelpCircle className="text-teal-600 shrink-0 mt-0.5" size={18} />
                            <div className="text-teal-900 font-medium leading-relaxed w-full">
                                {parseInlineElements(textContent)}
                            </div>
                        </div>
                    );
                }

                // 4. Rendu standard
                const cleanPart = part.trim(); // On nettoie les sauts de ligne invisibles aux extrémités

                if (!cleanPart) return null; // Ignore les blocs vides

                return (
                    <div key={index} className="whitespace-pre-line text-justify [hyphens:auto] mb-2">
                        {parseInlineElements(cleanPart)}
                    </div>
                );
            })}
        </div>
    );
};

export const UserGuide = ({ onClose, defaultTab = 'TERMINAL_VENTE' }) => {
    const [activeTab, setActiveTab] = useState('TERMINAL_VENTE');
    const [activeArticleId, setActiveArticleId] = useState(null);
    const [currentSectionData, setCurrentSectionData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Filtres de recherche
    const [localFilter, setLocalFilter] = useState("");
    const [globalSearch, setGlobalSearch] = useState("");
    const [globalResults, setGlobalResults] = useState([]);
    const [isSearchingGlobal, setIsSearchingGlobal] = useState(false);

    // Caches et références DOM
    const loadedModulesCache = useRef({});
    const articleRefs = useRef({});
    const scrollContainerRef = useRef(null);
    const isManualScrolling = useRef(false);

    // 1. Chargement dynamique du module sélectionné
    useEffect(() => {
        let isMounted = true;
        const loadSection = async () => {
            setIsLoading(true);
            try {
                if (loadedModulesCache.current[activeTab]) {
                    setCurrentSectionData(loadedModulesCache.current[activeTab]);
                } else {
                    const manifestEntry = USER_GUIDE_MANIFEST[activeTab];
                    if (manifestEntry && manifestEntry.load) {
                        const module = await manifestEntry.load();
                        const data = module.default || module;
                        loadedModulesCache.current[activeTab] = data;
                        if (isMounted) setCurrentSectionData(data);
                    }
                }
            } catch (err) {
                console.error("Erreur lors du chargement du module :", err);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        loadSection();
        return () => { isMounted = false; };
    }, [activeTab]);

    // Écouteur pour la navigation interne via les balises [LINK:...]
    useEffect(() => {
        const handleNavigate = (e) => {
            const { targetId } = e.detail;
            if (!targetId) return;

            // Supporte la syntaxe "CHAPITRE" ou "CHAPITRE#id-article"
            const [chapter, article] = targetId.split('#');

            if (chapter && USER_GUIDE_MANIFEST[chapter]) {
                if (activeTab === chapter) {
                    if (article) {
                        scrollToArticle(article);
                    } else {
                        setActiveArticleId(null);
                        if (scrollContainerRef.current) {
                            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }
                } else {
                    setActiveTab(chapter);
                    if (article) {
                        // Léger délai pour laisser le module se charger avant de scroller
                        setTimeout(() => scrollToArticle(article), 200);
                    } else {
                        setActiveArticleId(null);
                    }
                }
            }
        };

        window.addEventListener('navigate-guide', handleNavigate);
        return () => window.removeEventListener('navigate-guide', handleNavigate);
    }, [activeTab]);

    // 2. Défilement immédiat et calé exactement en haut de l'article
    const scrollToArticle = (id) => {
        setActiveArticleId(id);
        const container = scrollContainerRef.current;
        const targetElement = articleRefs.current[id];

        if (container && targetElement) {
            isManualScrolling.current = true;

            // Calcul précis par rapport au conteneur de défilement
            const containerTop = container.getBoundingClientRect().top;
            const targetTop = targetElement.getBoundingClientRect().top;
            const targetScrollPosition = container.scrollTop + (targetTop - containerTop) - 16; // marge supérieure de 16px

            container.scrollTo({
                top: Math.max(0, targetScrollPosition),
                behavior: 'smooth'
            });

            // Réactive la détection au scroll dès que l'animation est finie
            setTimeout(() => {
                isManualScrolling.current = false;
            }, 300);
        }
    };

    // 3. Détection de l'article visible lors du défilement (Scroll Spy)
    const handleContentScroll = () => {
        if (isManualScrolling.current || !scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const containerTop = container.getBoundingClientRect().top;
        const articles = currentSectionData?.articles || [];

        let currentActive = null;

        for (let i = 0; i < articles.length; i++) {
            const id = articles[i].id || i;
            const el = articleRefs.current[id];
            if (el) {
                const elTop = el.getBoundingClientRect().top - containerTop;
                // Si le haut de l'article a dépassé le quart supérieur de l'écran de lecture
                if (elTop <= 120) {
                    currentActive = id;
                }
            }
        }

        if (currentActive !== null && currentActive !== activeArticleId) {
            setActiveArticleId(currentActive);
        }
    };

    // 4. Moteur de recherche globale cross-chapitres avec Fuse.js
    useEffect(() => {
        if (!globalSearch.trim() || globalSearch.trim().length < 2) {
            setGlobalResults([]);
            setIsSearchingGlobal(false);
            return;
        }

        let isCancelled = false;
        setIsSearchingGlobal(true);

        const executeGlobalSearch = async () => {
            const searchableData = [];
            const chapters = Object.entries(USER_GUIDE_MANIFEST);

            // 1. Charger et compiler tous les chapitres dans un tableau plat
            for (const [key, manifest] of chapters) {
                let data = loadedModulesCache.current[key];
                
                if (!data && manifest.load) {
                    try {
                        const mod = await manifest.load();
                        data = mod.default || mod;
                        loadedModulesCache.current[key] = data;
                    } catch (e) {
                        continue;
                    }
                }

                if (data?.articles) {
                    data.articles.forEach((art, idx) => {
                        searchableData.push({
                            chapterKey: key,
                            chapterTitle: manifest.title,
                            articleId: art.id || idx,
                            articleTitle: art.title,
                            content: typeof art.content === 'string' ? art.content : ''
                        });
                    });
                }
            }

            if (isCancelled) return;

            // 2. Configuration du moteur Fuse.js
            const fuseOptions = {
                keys: [
                    { name: 'articleTitle', weight: 3.0 }, // Priorité absolue au titre de l'article
                    { name: 'chapterTitle', weight: 1.5 }, // Priorité moyenne au nom du chapitre
                    { name: 'content', weight: 1.0 }       // Priorité basse pour le corps du texte
                ],
                threshold: 0.3,       // Tolérance aux fautes de frappe (0.0 = strict, 1.0 = très souple)
                ignoreLocation: true, // Recherche le terme n'importe où dans le texte
                includeScore: true,
                minMatchCharLength: 2
            };

            const fuse = new Fuse(searchableData, fuseOptions);
            const rawResults = fuse.search(globalSearch.trim());

            // 3. Formatage et limitation aux 15 résultats les plus pertinents
            const formattedResults = rawResults.slice(0, 15).map(res => ({
                chapterKey: res.item.chapterKey,
                chapterTitle: res.item.chapterTitle,
                articleId: res.item.articleId,
                articleTitle: res.item.articleTitle,
                // On signale si la correspondance est exacte dans le titre pour la mise en évidence UI
                isTitleMatch: res.item.articleTitle.toLowerCase().includes(globalSearch.toLowerCase())
            }));

            if (!isCancelled) {
                setGlobalResults(formattedResults);
                setIsSearchingGlobal(false);
            }
        };

        // Délai de temporisation (debounce) pour ne pas figer l'interface à chaque frappe
        const timer = setTimeout(executeGlobalSearch, 300);
        return () => {
            isCancelled = true;
            clearTimeout(timer);
        };
    }, [globalSearch]);

    const handleSelectGlobalResult = (res) => {
        setGlobalSearch("");
        if (activeTab === res.chapterKey) {
            scrollToArticle(res.articleId);
        } else {
            setActiveTab(res.chapterKey);
            // Attendre le rendu du module pour faire défiler
            setTimeout(() => {
                scrollToArticle(res.articleId);
            }, 150);
        }
    };

    const renderIcon = (iconName, className = "size-5") => {
        const IconComponent = ICON_MAP[iconName] || HelpCircle;
        return <IconComponent className={className} />;
    };

    const activeManifest = USER_GUIDE_MANIFEST[activeTab];

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-3" onClick={onClose}>
            <div
                className="bg-white w-[92vw] max-w-[1560px] h-[95vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border-t-8 border-[#1e4e58] animate-in zoom-in-95 duration-150"
                onClick={e => e.stopPropagation()}
            >
                {/* EN-TÊTE SUPÉRIEUR AVEC RECHERCHE GLOBALE */}
                <div className="p-3.5 border-b border-gray-200 bg-white flex justify-between items-center shrink-0 gap-4">
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center text-[#1e4e58] border border-teal-100">
                            <HelpCircle size={20} />
                        </div>
                        <div>
                            <h2 className="text-base font-black text-gray-800 tracking-tight uppercase">Manuel Utilisateur TipTac</h2>
                            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Documentation officielle & aide intégrée</p>
                        </div>
                    </div>

                    {/* BARRE DE RECHERCHE GLOBALE */}
                    <div className="flex-1 max-w-lg relative">
                        <div className="relative">
                            <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Recherche globale dans tous les chapitres..."
                                value={globalSearch}
                                onChange={(e) => setGlobalSearch(e.target.value)}
                                className="w-full pl-9 pr-8 py-1.5 bg-gray-100 border border-gray-200 rounded-xl text-xs outline-none focus:bg-white focus:border-[#1e4e58] focus:ring-2 focus:ring-teal-100 transition-all font-medium"
                            />
                            {globalSearch && (
                                <button
                                    onClick={() => setGlobalSearch("")}
                                    className="absolute right-2.5 top-2 text-gray-400 hover:text-gray-600"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>

                        {/* RÉSULTATS DU FLYOUT DE RECHERCHE GLOBALE */}
                        {globalSearch.trim().length >= 2 && (
                            <div className="absolute left-0 right-0 top-11 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto divide-y divide-gray-100">
                                {isSearchingGlobal ? (
                                    <div className="p-4 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
                                        <Loader2 size={16} className="animate-spin text-[#1e4e58]" /> Recherche en cours...
                                    </div>
                                ) : globalResults.length === 0 ? (
                                    <div className="p-4 text-center text-xs text-gray-400 italic">
                                        Aucun article trouvé pour « {globalSearch} »
                                    </div>
                                ) : (
                                    globalResults.map((res, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSelectGlobalResult(res)}
                                            className="w-full text-left p-3 hover:bg-teal-50/60 transition-colors flex flex-col gap-0.5 group"
                                        >
                                            <span className="text-[10px] font-black uppercase tracking-wider text-teal-700">
                                                {res.chapterTitle}
                                            </span>
                                            <span className="text-xs font-bold text-gray-800 group-hover:text-[#1e4e58]">
                                                {res.articleTitle}
                                            </span>
                                        </button>
                                    ))
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button onClick={onClose} className="w-8 h-8 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center transition-colors text-gray-500">
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* CORPS DE LA MODALE EN 3 COLONNES */}
                <div className="flex flex-1 overflow-hidden bg-gray-100">

                    {/* COLONNE 1 : LES 16 CHAPITRES */}
                    <div className="w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 overflow-y-auto">
                        <div className="p-3 border-b border-gray-100 text-[10px] font-black uppercase tracking-wider text-gray-400">
                            Chapitres (16)
                        </div>
                        <div className="flex flex-col py-1">
                            {Object.entries(USER_GUIDE_MANIFEST).map(([key, manifest]) => {
                                const isActive = activeTab === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => { setActiveTab(key); setActiveArticleId(null); }}
                                        className={`flex items-center gap-2.5 px-3 py-2 text-left text-xs font-bold transition-all border-l-4 ${isActive
                                            ? 'bg-teal-50/80 text-[#1e4e58] border-[#1e4e58]'
                                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <span className={`shrink-0 ${manifest.color}`}>
                                            {renderIcon(manifest.iconName, "size-4")}
                                        </span>
                                        <span className="truncate">{manifest.title}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* COLONNE 2 : SOUS-ARTICLES AVEC FILTRE LOCAL */}
                    <div className="w-72 bg-slate-50 border-r border-gray-200 flex flex-col shrink-0 overflow-hidden">
                        <div className="p-2.5 border-b border-gray-200 bg-white">
                            <div className="relative">
                                <Search size={13} className="absolute left-2.5 top-2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Filtrer dans ce chapitre..."
                                    value={localFilter}
                                    onChange={(e) => setLocalFilter(e.target.value)}
                                    className="w-full pl-8 pr-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs outline-none focus:bg-white focus:border-[#1e4e58] transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-2 space-y-1">
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center p-8 text-gray-400 gap-2">
                                    <Loader2 size={20} className="animate-spin text-[#1e4e58]" />
                                    <span className="text-xs">Chargement...</span>
                                </div>
                            ) : currentSectionData?.articles ? (
                                currentSectionData.articles
                                    .filter(art => !localFilter || art.title.toLowerCase().includes(localFilter.toLowerCase()))
                                    .map((art, idx) => {
                                        const articleKey = art.id || idx;
                                        const isSelected = activeArticleId === articleKey;
                                        return (
                                            <button
                                                key={articleKey}
                                                onClick={() => scrollToArticle(articleKey)}
                                                className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-start justify-between gap-2 ${isSelected
                                                    ? 'bg-white font-black text-[#1e4e58] shadow-sm border border-teal-300'
                                                    : 'text-gray-600 hover:bg-gray-200/60 font-medium'
                                                    }`}
                                            >
                                                <span className="leading-snug line-clamp-2">{art.title}</span>
                                                <ChevronRight size={13} className={`shrink-0 mt-0.5 ${isSelected ? 'text-[#1e4e58]' : 'opacity-40'}`} />
                                            </button>
                                        );
                                    })
                            ) : currentSectionData?.sections ? (
                                currentSectionData.sections.map((sec, idx) => {
                                    const secKey = sec.id || idx;
                                    const isSelected = activeArticleId === secKey;
                                    return (
                                        <button
                                            key={secKey}
                                            onClick={() => scrollToArticle(secKey)}
                                            className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-start justify-between gap-2 ${isSelected
                                                ? 'bg-white font-black text-[#1e4e58] shadow-sm border border-teal-300'
                                                : 'text-gray-600 hover:bg-gray-200/60 font-medium'
                                                }`}
                                        >
                                            <span className="leading-snug">{sec.title}</span>
                                            <ChevronRight size={13} className={`shrink-0 mt-0.5 ${isSelected ? 'text-[#1e4e58]' : 'opacity-40'}`} />
                                        </button>
                                    );
                                })
                            ) : null}
                        </div>
                    </div>

                    {/* COLONNE 3 : CONTENU DU CHAPITRE AVEC DÉFILEMENT PRÉCIS */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleContentScroll}
                        className="flex-1 overflow-y-auto p-8 bg-white scroll-smooth"
                    >
                        {isLoading ? (
                            <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-3">
                                <Loader2 size={36} className="animate-spin text-[#1e4e58]" />
                                <span className="text-sm font-bold uppercase tracking-wider">Chargement...</span>
                            </div>
                        ) : currentSectionData?.articles ? (
                            <div className="max-w-4xl mx-auto space-y-8">
                                {/* En-tête de section */}
                                <div className="border-b border-gray-200 pb-4 flex items-center gap-3">
                                    <div className={`p-2.5 rounded-xl bg-gray-50 border border-gray-200 ${activeManifest?.color}`}>
                                        {renderIcon(activeManifest?.iconName, "size-7")}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{activeManifest?.category}</span>
                                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">{currentSectionData.title}</h3>
                                    </div>
                                </div>

                                {/* Liste des articles */}
                                <div className="space-y-6">
                                    {currentSectionData.articles.map((art, idx) => {
                                        const articleKey = art.id || idx;
                                        return (
                                            <div
                                                key={articleKey}
                                                ref={el => articleRefs.current[articleKey] = el}
                                                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:border-gray-300 transition-colors"
                                            >
                                                <h4 className="text-base font-black text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                                                    <span>{art.title}</span>
                                                    <span className="text-[10px] font-mono text-gray-400">#{(idx + 1).toString().padStart(2, '0')}</span>
                                                </h4>

                                                <FormattedGuideContent content={art.content} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : currentSectionData?.sections ? (
                            <div className="max-w-4xl mx-auto">
                                <h3 className="text-2xl font-black text-gray-900 mb-6 pb-2 border-b">{currentSectionData.title}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {currentSectionData.sections.map((sec, idx) => {
                                        const secKey = sec.id || idx;
                                        return (
                                            <div
                                                key={secKey}
                                                ref={el => articleRefs.current[secKey] = el}
                                                className="bg-gray-50 border border-gray-200 rounded-xl p-4"
                                            >
                                                <h4 className="font-black text-sm uppercase text-[#1e4e58] mb-3">{sec.title}</h4>
                                                <div className="space-y-2">
                                                    {sec.items.map((it, i) => (
                                                        <div key={i} className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-gray-200 text-xs">
                                                            <span className="whitespace-nowrap font-mono min-w-14 flex items-center justify-center font-black bg-gray-100 px-2 py-0.5 rounded border border-gray-300 text-blue-700">
                                                                {it.key}
                                                            </span>
                                                            <span className="text-gray-600 font-medium text-left ml-3">{it.desc}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}
                    </div>

                </div>

                {/* PIED DE PAGE */}
                <div className="p-2.5 bg-white border-t border-gray-200 shrink-0 flex items-center justify-between px-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>TipTac • Logiciel d'encaissement • Normes NF525</span>
                    <span className="flex items-center gap-1.5 text-amber-500">
                        <Star size={12} fill="currentColor" /> Manuel Utilisateur
                    </span>
                </div>
            </div>
        </div>
    );
};