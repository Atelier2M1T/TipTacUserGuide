import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
    HelpCircle, Zap, Server, ShoppingCart, Archive, Shield, Settings, Minus, Tag, Eye,
    Sliders, Target, Users, Box, Truck, ClipboardList, BarChart3, Crown, MapPin, Package,
    Smartphone, Cloud, Globe, X, Leaf, Star, Search, Loader2, ChevronRight, ChevronDown, Image as ImageIcon,
    SquarePen, Plus, Trash2, Download, Upload, Lock, Percent, CircleQuestionMark, Layers,
    CornerDownLeft, Calculator, ArrowDownUp, Printer, Coins, Building, CreditCard, Store,
    ShieldCheck, List, FileText, Unlock, TrendingUp, DollarSign, TrendingDown, Calendar,
    Barcode, User, ArrowUpDown, RefreshCcw, Briefcase, Undo, CheckCircle, AlertTriangle, Merge,
    Gift, Mail, Grid, Video, Layout, History, Link as IconLink, Monitor, Clock, Banknote, ShoppingBag, Ban,
    Wallet, PackageCheck, RotateCcw, PlusCircle, CalendarClock, Ticket, Phone, Wifi, WifiOff, Usb, Database, ShieldAlert,
    Sparkles, ArrowLeft, PanelLeftClose, PanelLeftOpen, ZoomIn
} from 'lucide-react';
import { USER_GUIDE_MANIFEST } from './data/userGuide';
import { searchGuide, getTopChunksForAi } from './searchEngine';

const ICON_MAP = {
    Zap, Server, ShoppingCart, Archive, Shield, Settings, Sliders, Lock, Crown, Tag, ImageIcon,
    Target, Users, Box, Truck, ClipboardList, BarChart3, Smartphone, X, Minus, MapPin, Eye,
    Cloud, Globe, HelpCircle, Leaf, SquarePen, Plus, Trash2, Download, Upload, Store, Package,
    Percent, CircleQuestionMark, Layers, CornerDownLeft, Calculator, ArrowDownUp, Printer,
    Coins, Building, CreditCard, ShieldCheck, List, FileText, Unlock, TrendingUp, DollarSign,
    TrendingDown, Barcode, User, ArrowUpDown, RefreshCcw, Briefcase, Undo, CheckCircle, AlertTriangle,
    Merge, Gift, Star, Calendar, Mail, Grid, Video, Layout, History, IconLink, Monitor, Clock, Banknote,
    ShoppingBag, Ban, Wallet, PackageCheck, RotateCcw, PlusCircle, CalendarClock, Search, Ticket, Phone, Wifi, Usb, Database, ShieldAlert
};

const CONNECT_PLANS = ['CONNECT', 'COMMERCE', 'NETWORK', 'ENTERPRISE'];

const CATEGORY_ORDER = ['TipTacCaisse', 'TipTacCompanion', 'TipTacCloud', 'TipTacWebsite'];
const CATEGORY_LABELS = {
    TipTacCaisse: 'TipTac Caisse (POS)',
    TipTacCompanion: 'TipTac Companion',
    TipTacCloud: 'TipTac Cloud',
    TipTacWebsite: 'Site Web & E-Commerce'
};

// Rendu dynamique du texte avec support multi-images, lightbox, alertes, boutons, permissions et ancres [T]
const FormattedGuideContent = ({ content, articleKey = null, highlightedAnchor = null, onImageClick = null }) => {
    if (!content) return null;

    // 1. Parseur des éléments intégrés au texte (Inline)
    const parseInlineElements = (text) => {
        if (typeof text !== 'string') return text;

        const inlineRegex = /(\[BTN:[^\]]+\]|\[KEY:[^\]]+\]|\[PERM:[^\]]+\]|\[ICON:[^\]]+\]|\[PLAN:[^\]]+\]|\[LINK:[^\]]+\])/g;
        const pieces = text.split(inlineRegex);

        return pieces.map((piece, i) => {
            if (piece.startsWith('[BTN:')) {
                const val = piece.replace('[BTN:', '').replace(']', '').trim();
                return <span key={i} className="px-2 py-0.5 mx-1 bg-gradient-to-b from-white whitespace-nowrap to-gray-100 border border-gray-300 rounded shadow-sm text-xs font-bold text-gray-700">{val}</span>;
            }
            if (piece.startsWith('[KEY:')) {
                const val = piece.replace('[KEY:', '').replace(']', '').trim();
                return <span key={i} className="font-mono px-1.5 py-0.5 mx-1 bg-gray-100 whitespace-nowrap border border-gray-300 rounded text-gray-700 font-black text-xs shadow-sm">{val}</span>;
            }
            if (piece.startsWith('[PERM:')) {
                const val = piece.replace('[PERM:', '').replace(']', '').trim();
                return <span key={i} className="px-1.5 py-0.5 mx-1 bg-red-50 border whitespace-nowrap border-red-200 rounded text-red-700 font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 translate-y-[-1px]"><Shield size={10} strokeWidth={3} /> {val}</span>;
            }
            if (piece.startsWith('[PLAN:')) {
                const val = piece.replace('[PLAN:', '').replace(']', '').trim();
                return <span key={i} className="px-1.5 py-0.5 mx-1 bg-amber-50 border whitespace-nowrap border-amber-200 rounded text-amber-700 font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 translate-y-[-1px]"><Crown size={10} strokeWidth={3} /> {val}</span>;
            }
            if (piece.startsWith('[ICON:')) {
                const rawParams = piece.replace('[ICON:', '').replace(']', '').trim();
                const [iconName, sizeParam, colorParam] = rawParams.split('|').map(s => s ? s.trim() : '');

                const IconComponent = ICON_MAP[iconName] || HelpCircle;
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
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (window.dispatchEvent) {
                                window.dispatchEvent(new CustomEvent('navigate-guide', { detail: { targetId } }));
                            }
                        }}
                        className="inline-flex items-center gap-1 px-2 py-0.5 mx-1 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded text-teal-800 font-bold text-xs transition-all cursor-pointer"
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
        else if (params.includes('2xl')) maxH = "650px";

        let align = 'center';
        if (params.includes('left')) align = 'left';
        else if (params.includes('right')) align = 'right';

        return { images, maxH, align };
    };

    let tCounter = 0;

    return (
        <div className="text-sm text-gray-700 leading-relaxed flow-root">
            {parts.map((part, index) => {
                if (!part) return null;

                if (part === '[CLEAR]') {
                    return <div key={index} className="clear-both w-full h-px" />;
                }

                // Bloc Image cliquable (Lightbox)
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
                            {images.map((imageName, imgIdx) => {
                                const imgSrc = new URL(`./assets/guide/${imageName}`, import.meta.url).href;
                                return (
                                    <div key={imgIdx} className="rounded-xl overflow-hidden flex flex-col">
                                        <div className="flex-1 flex justify-center items-center min-h-[50px] relative group">
                                            <img
                                                src={imgSrc}
                                                alt={imageName}
                                                loading="lazy"
                                                style={{ maxHeight: maxH }}
                                                onClick={() => onImageClick && onImageClick({ src: imgSrc, alt: imageName })}
                                                className={`w-auto max-w-full rounded-md object-contain border border-gray-200 shadow-sm ${onImageClick ? 'cursor-zoom-in group-hover:brightness-95 transition' : ''}`}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="hidden flex-col items-center justify-center p-4 text-gray-400 italic text-xs gap-1 text-center">
                                                <ImageIcon size={22} className="opacity-40" />
                                                <span>Image en attente :</span>
                                                <span className="font-bold text-gray-600 font-mono text-[10px] break-all">{imageName}</span>
                                            </div>
                                            {onImageClick && (
                                                <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
                                                    <ZoomIn size={12} /> Agrandir
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }

                // 3. Blocs Textuels Structurés
                if (part.startsWith('[T]')) {
                    const textContent = part.replace('[T]', '').trim();
                    const currentTIdx = tCounter;
                    tCounter += 1;
                    const anchor = articleKey !== null && articleKey !== undefined ? `${articleKey}__t_${currentTIdx}` : undefined;
                    const isHighlighted = anchor && highlightedAnchor === anchor;

                    return (
                        <h4
                            key={index}
                            data-guide-anchor={anchor}
                            className={`text-sm font-bold text-teal-700 underline uppercase mb-3 mt-6 transition-all duration-500 ${isHighlighted ? 'bg-teal-100/80 ring-2 ring-teal-500 rounded-lg px-2.5 py-1.5 -mx-2.5 no-underline' : ''}`}
                        >
                            {parseInlineElements(textContent)}
                        </h4>
                    );
                }

                if (part.startsWith('[ST]')) {
                    const textContent = part.replace('[ST]', '').trim();
                    return (
                        <h5 key={index} className="text-xs px-3 py-1.5 bg-gray-50 rounded-lg font-bold text-teal-600 uppercase mb-1.5 mt-3 leading-snug">
                            {parseInlineElements(textContent)}
                        </h5>
                    );
                }

                if (part.startsWith('[WARNING]')) {
                    const textContent = part.replace('[WARNING]', '').trim();
                    return (
                        <div key={index} className="my-5 p-4 bg-orange-50 rounded-lg flex items-start gap-3 shadow-sm border border-orange-100">
                            <Zap className="text-orange-500 shrink-0 mt-0.5" size={18} />
                            <div className="text-orange-900 font-medium leading-relaxed w-full text-left">
                                {parseInlineElements(textContent)}
                            </div>
                        </div>
                    );
                }

                if (part.startsWith('[TIP]')) {
                    const textContent = part.replace('[TIP]', '').trim();
                    return (
                        <div key={index} className="my-5 p-4 bg-teal-50 rounded-lg flex items-start gap-3 shadow-sm border border-teal-100">
                            <HelpCircle className="text-teal-600 shrink-0 mt-0.5" size={18} />
                            <div className="text-teal-900 font-medium leading-relaxed w-full text-left">
                                {parseInlineElements(textContent)}
                            </div>
                        </div>
                    );
                }

                // 4. Rendu standard (aligné à gauche pour éviter les grands espaces à côté des images flottantes)
                const cleanPart = part.trim();
                if (!cleanPart) return null;

                return (
                    <div key={index} className="whitespace-pre-line text-left mb-2">
                        {parseInlineElements(cleanPart)}
                    </div>
                );
            })}
        </div>
    );
};

export const UserGuide = ({
    onClose,
    defaultTab = 'TERMINAL_VENTE',
    defaultArticleId = null,
    onAskAi = null,
    userContext = null
}) => {
    const initialTab = USER_GUIDE_MANIFEST[defaultTab] ? defaultTab : 'TERMINAL_VENTE';

    const [activeTab, setActiveTab] = useState(initialTab);
    const [activeArticleId, setActiveArticleId] = useState(defaultArticleId);
    const [pendingTarget, setPendingTarget] = useState(
        defaultArticleId ? { articleId: defaultArticleId, sectionAnchor: null } : null
    );
    const [highlightedAnchor, setHighlightedAnchor] = useState(null);
    const [navHistory, setNavHistory] = useState([]);

    const [currentSectionData, setCurrentSectionData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Mise en page responsive & tactile
    const [showToc, setShowToc] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth >= 1180 : true
    );
    const [showChaptersMobile, setShowChaptersMobile] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);

    // Recherche locale + globale MiniSearch
    const [localFilter, setLocalFilter] = useState("");
    const [globalSearch, setGlobalSearch] = useState("");
    const [globalResults, setGlobalResults] = useState([]);
    const [isSearchingGlobal, setIsSearchingGlobal] = useState(false);
    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
    const [activeResultIdx, setActiveResultIdx] = useState(-1);

    // État Assistant IA (CONNECT+)
    const [isOnline, setIsOnline] = useState(() =>
        typeof navigator !== 'undefined' ? navigator.onLine !== false : true
    );
    const [aiState, setAiState] = useState({
        loading: false,
        answer: null,
        error: null,
        askedQuery: ''
    });

    // Références DOM & caches
    const loadedModulesCache = useRef({});
    const articleRefs = useRef({});
    const scrollContainerRef = useRef(null);
    const searchInputRef = useRef(null);
    const flyoutContainerRef = useRef(null);
    const isManualScrolling = useRef(false);
    const highlightTimerRef = useRef(null);

    const hasConnectPlan = CONNECT_PLANS.includes(String(userContext?.plan || '').toUpperCase());

    // Regroupement des chapitres par catégorie (avec la catégorie active en premier)
    const groupedChapters = useMemo(() => {
        const activeCategory = USER_GUIDE_MANIFEST[initialTab]?.category || 'TipTacCaisse';
        const orderedCats = [
            activeCategory,
            ...CATEGORY_ORDER.filter((c) => c !== activeCategory)
        ];
        const map = new Map();
        for (const cat of orderedCats) map.set(cat, []);

        Object.entries(USER_GUIDE_MANIFEST).forEach(([key, manifest]) => {
            const cat = manifest.category || 'TipTacCaisse';
            if (!map.has(cat)) map.set(cat, []);
            map.get(cat).push([key, manifest]);
        });

        return Array.from(map.entries()).filter(([, items]) => items.length > 0);
    }, [initialTab]);

    // Suivi connectivité réseau (offline-first)
    useEffect(() => {
        const onOnline = () => setIsOnline(true);
        const onOffline = () => setIsOnline(false);
        window.addEventListener('online', onOnline);
        window.addEventListener('offline', onOffline);
        return () => {
            window.removeEventListener('online', onOnline);
            window.removeEventListener('offline', onOffline);
        };
    }, []);

    // Fermeture du flyout si clic à l'extérieur
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (flyoutContainerRef.current && !flyoutContainerRef.current.contains(e.target)) {
                setIsFlyoutOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 1. Chargement dynamique du chapitre sélectionné
    useEffect(() => {
        let isMounted = true;
        articleRefs.current = {};

        const loadSection = async () => {
            if (loadedModulesCache.current[activeTab]) {
                setCurrentSectionData(loadedModulesCache.current[activeTab]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            try {
                const manifestEntry = USER_GUIDE_MANIFEST[activeTab];
                if (manifestEntry && manifestEntry.load) {
                    const mod = await manifestEntry.load();
                    const data = mod.default || mod;
                    loadedModulesCache.current[activeTab] = data;
                    if (isMounted) setCurrentSectionData(data);
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

    // Réinitialisation du filtre local & scroll au changement de chapitre sans cible précise
    useEffect(() => {
        setLocalFilter("");
        if (!pendingTarget && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'auto' });
        }
    }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

    // Défilement précis vers l'article ou l'ancre [T] une fois le chapitre rendu
    const triggerScrollToTarget = useCallback((articleId, sectionAnchor = null) => {
        const container = scrollContainerRef.current;
        if (!container) return false;

        let targetEl = null;
        if (sectionAnchor) {
            targetEl = container.querySelector(`[data-guide-anchor="${sectionAnchor}"]`);
        }
        if (!targetEl && articleId !== null && articleId !== undefined) {
            targetEl = articleRefs.current[articleId];
        }
        if (!targetEl) return false;

        isManualScrolling.current = true;
        if (articleId !== null && articleId !== undefined) {
            setActiveArticleId(articleId);
        }

        const containerTop = container.getBoundingClientRect().top;
        const targetTop = targetEl.getBoundingClientRect().top;
        const targetScrollPosition = container.scrollTop + (targetTop - containerTop) - 18;

        container.scrollTo({
            top: Math.max(0, targetScrollPosition),
            behavior: 'smooth'
        });

        const anchorKey = sectionAnchor || (articleId !== null && articleId !== undefined ? String(articleId) : null);
        if (anchorKey) {
            setHighlightedAnchor(anchorKey);
            if (highlightTimerRef.current) clearTimeout(highlightTimerRef.current);
            highlightTimerRef.current = setTimeout(() => {
                setHighlightedAnchor(null);
            }, 2000);
        }

        setTimeout(() => {
            isManualScrolling.current = false;
        }, 350);

        return true;
    }, []);

    useEffect(() => {
        if (!pendingTarget || isLoading || !currentSectionData) return;

        const rafId = requestAnimationFrame(() => {
            const scrolled = triggerScrollToTarget(pendingTarget.articleId, pendingTarget.sectionAnchor);
            if (scrolled) {
                setPendingTarget(null);
            } else {
                // Cible introuvable dans le chapitre chargé : on nettoie pour ne pas bloquer
                setPendingTarget(null);
            }
        });

        return () => cancelAnimationFrame(rafId);
    }, [currentSectionData, isLoading, pendingTarget, triggerScrollToTarget]);

    // Navigation unifiée (gère l'historique ← Retour et le changement de chapitre)
    const navigateTo = useCallback(({ tab, articleId = null, sectionAnchor = null, recordHistory = true }) => {
        if (!tab || !USER_GUIDE_MANIFEST[tab]) return;

        if (recordHistory && (tab !== activeTab || articleId !== activeArticleId || sectionAnchor)) {
            setNavHistory((prev) => {
                const last = prev[prev.length - 1];
                if (last && last.tab === activeTab && last.articleId === activeArticleId) {
                    return prev;
                }
                return [...prev.slice(-19), { tab: activeTab, articleId: activeArticleId }];
            });
        }

        setShowChaptersMobile(false);

        if (tab === activeTab) {
            if (articleId !== null && articleId !== undefined || sectionAnchor) {
                setPendingTarget({ articleId, sectionAnchor });
            } else {
                setActiveArticleId(null);
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        } else {
            setActiveTab(tab);
            setActiveArticleId(articleId ?? null);
            setPendingTarget(
                articleId !== null && articleId !== undefined || sectionAnchor
                    ? { articleId, sectionAnchor }
                    : null
            );
        }
    }, [activeTab, activeArticleId]);

    const handleBack = useCallback(() => {
        setNavHistory((prev) => {
            if (prev.length === 0) return prev;
            const target = prev[prev.length - 1];
            navigateTo({ tab: target.tab, articleId: target.articleId, recordHistory: false });
            return prev.slice(0, -1);
        });
    }, [navigateTo]);

    // Écouteur pour la navigation interne via les balises [LINK:...]
    useEffect(() => {
        const handleNavigate = (e) => {
            const { targetId } = e.detail || {};
            if (!targetId) return;
            const [chapter, article] = String(targetId).split('#');
            if (chapter && USER_GUIDE_MANIFEST[chapter]) {
                navigateTo({ tab: chapter, articleId: article || null, recordHistory: true });
            }
        };

        window.addEventListener('navigate-guide', handleNavigate);
        return () => window.removeEventListener('navigate-guide', handleNavigate);
    }, [navigateTo]);

    // Scroll Spy : détection de l'article visible lors du défilement
    const handleContentScroll = () => {
        if (isManualScrolling.current || !scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const containerTop = container.getBoundingClientRect().top;
        const list = currentSectionData?.articles || currentSectionData?.sections || [];

        let currentActive = null;
        for (let i = 0; i < list.length; i++) {
            const id = list[i].id || i;
            const el = articleRefs.current[id];
            if (el) {
                const elTop = el.getBoundingClientRect().top - containerTop;
                if (elTop <= 120) {
                    currentActive = id;
                }
            }
        }

        if (currentActive !== null && currentActive !== activeArticleId) {
            setActiveArticleId(currentActive);
        }
    };

    // Moteur de recherche globale hors-ligne avec MiniSearch
    useEffect(() => {
        const trimmed = globalSearch.trim();
        if (!trimmed || trimmed.length < 2) {
            setGlobalResults([]);
            setIsSearchingGlobal(false);
            setActiveResultIdx(-1);
            return;
        }

        let isCancelled = false;
        setIsSearchingGlobal(true);

        const timer = setTimeout(async () => {
            try {
                const results = await searchGuide(trimmed, USER_GUIDE_MANIFEST, loadedModulesCache, { limit: 15 });
                if (!isCancelled) {
                    setGlobalResults(results);
                    setActiveResultIdx(results.length > 0 ? 0 : -1);
                    setIsSearchingGlobal(false);
                }
            } catch (err) {
                console.error("Erreur recherche MiniSearch:", err);
                if (!isCancelled) {
                    setGlobalResults([]);
                    setIsSearchingGlobal(false);
                }
            }
        }, 150);

        return () => {
            isCancelled = true;
            clearTimeout(timer);
        };
    }, [globalSearch]);

    const handleSelectGlobalResult = useCallback((res) => {
        setIsFlyoutOpen(false);
        setActiveResultIdx(-1);
        navigateTo({
            tab: res.chapterKey,
            articleId: res.articleId,
            sectionAnchor: res.sectionAnchor || null,
            recordHistory: true
        });
    }, [navigateTo]);

    // Déclenchement de l'assistant IA (CONNECT+ uniquement, repli gracieux hors-ligne)
    const handleAskAi = useCallback(async () => {
        const question = globalSearch.trim();
        if (!question || question.length < 3 || typeof onAskAi !== 'function' || !hasConnectPlan || !isOnline) {
            return;
        }

        setAiState({ loading: true, answer: null, error: null, askedQuery: question });

        try {
            const chunks = await getTopChunksForAi(question, USER_GUIDE_MANIFEST, loadedModulesCache, 7);
            if (!chunks || chunks.length === 0) {
                setAiState({
                    loading: false,
                    answer: {
                        found: false,
                        summary: "Aucun passage pertinent trouvé dans le manuel pour cette question.",
                        steps: [],
                        warning: "",
                        links: []
                    },
                    error: null,
                    askedQuery: question
                });
                return;
            }

            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('TIMEOUT')), 12000)
            );

            const response = await Promise.race([
                onAskAi({ question, chunks, userContext }),
                timeoutPromise
            ]);

            const answer = response?.answer || response;
            if (!answer || typeof answer !== 'object') {
                throw new Error('INVALID_RESPONSE');
            }

            setAiState({ loading: false, answer, error: null, askedQuery: question });
        } catch (err) {
            console.warn("Repli gracieux Assistant IA :", err?.message || err);
            const isOfflineErr = !navigator.onLine || err?.message === 'TIMEOUT';
            setAiState({
                loading: false,
                answer: null,
                error: isOfflineErr
                    ? "Hors-ligne ou délai dépassé : affichage des résultats locaux uniquement."
                    : (err?.message || "Assistant IA temporairement indisponible — résultats locaux ci-dessous."),
                askedQuery: question
            });
        }
    }, [globalSearch, onAskAi, hasConnectPlan, isOnline, userContext]);

    // Raccourcis clavier (Ctrl+K, /, Flèches, Entrée, Échap)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                searchInputRef.current?.focus();
                if (globalSearch.trim().length >= 2) setIsFlyoutOpen(true);
                return;
            }

            const tag = document.activeElement?.tagName;
            const isTyping = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

            if (e.key === '/' && !isTyping) {
                e.preventDefault();
                searchInputRef.current?.focus();
                return;
            }

            if (e.key === 'Escape') {
                e.preventDefault();
                if (lightboxImage) {
                    setLightboxImage(null);
                } else if (isFlyoutOpen) {
                    setIsFlyoutOpen(false);
                    searchInputRef.current?.blur();
                } else {
                    onClose?.();
                }
                return;
            }

            if (isFlyoutOpen && globalResults.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActiveResultIdx((prev) => (prev + 1) % globalResults.length);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActiveResultIdx((prev) => (prev <= 0 ? globalResults.length - 1 : prev - 1));
                } else if (e.key === 'Enter' && activeResultIdx >= 0 && globalResults[activeResultIdx]) {
                    e.preventDefault();
                    handleSelectGlobalResult(globalResults[activeResultIdx]);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxImage, isFlyoutOpen, globalResults, activeResultIdx, globalSearch, handleSelectGlobalResult, onClose]);

    const renderIcon = (iconName, className = "w-5 h-5") => {
        const IconComponent = ICON_MAP[iconName] || HelpCircle;
        return <IconComponent className={className} />;
    };

    const activeManifest = USER_GUIDE_MANIFEST[activeTab];
    const articlesList = currentSectionData?.articles || [];
    const showLocalFilter = articlesList.length > 8;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center" onClick={onClose}>
            <div
                className="bg-white w-full h-full flex flex-col overflow-hidden border-t-8 border-[#1e4e58]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* EN-TÊTE SUPÉRIEUR AVEC RETOUR, RECHERCHE GLOBALE & CONTRÔLES */}
                <div className="p-3 border-b border-gray-200 bg-white flex flex-wrap md:flex-nowrap justify-between items-center shrink-0 gap-3">
                    <div className="flex items-center gap-2.5 shrink-0">
                        <div className="w-9 h-9 bg-teal-50 rounded-xl flex items-center justify-center text-[#1e4e58] border border-teal-100">
                            <HelpCircle size={20} />
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-base font-black text-gray-800 tracking-tight uppercase">Manuel Utilisateur TipTac</h2>
                            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Documentation officielle & aide intégrée</p>
                        </div>

                        {/* Bouton Retour après clic sur [LINK:...] ou résultat */}
                        {navHistory.length > 0 && (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="ml-1 inline-flex items-center gap-1.5 px-2.5 py-2 bg-gray-100 hover:bg-teal-50 hover:text-[#1e4e58] border border-gray-200 rounded-lg text-xs font-bold text-gray-700 transition-colors"
                                title="Revenir à la lecture précédente"
                            >
                                <ArrowLeft size={14} />
                                <span>Retour</span>
                            </button>
                        )}
                    </div>

                    {/* BARRE DE RECHERCHE GLOBALE + FLYOUT MINISEARCH & IA */}
                    <div ref={flyoutContainerRef} className="flex-1 min-w-[220px] max-w-2xl relative">
                        <div className="relative">
                            <Search size={15} className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Rechercher (Ctrl+K) : ex. clôturer Z, avoir, douchette..."
                                value={globalSearch}
                                onFocus={() => {
                                    if (globalSearch.trim().length >= 2) setIsFlyoutOpen(true);
                                }}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setGlobalSearch(val);
                                    setIsFlyoutOpen(val.trim().length >= 2);
                                    if (aiState.askedQuery && aiState.askedQuery !== val.trim()) {
                                        setAiState({ loading: false, answer: null, error: null, askedQuery: '' });
                                    }
                                }}
                                className="w-full pl-9 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-xl text-xs outline-none focus:bg-white focus:border-[#1e4e58] focus:ring-2 focus:ring-teal-100 transition-all font-medium"
                            />
                            {globalSearch && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setGlobalSearch("");
                                        setIsFlyoutOpen(false);
                                        setAiState({ loading: false, answer: null, error: null, askedQuery: '' });
                                        searchInputRef.current?.focus();
                                    }}
                                    className="absolute right-2.5 top-2 p-0.5 text-gray-400 hover:text-gray-600"
                                >
                                    <X size={15} />
                                </button>
                            )}
                        </div>

                        {/* FLYOUT RÉSULTATS MINISEARCH + ASSISTANT IA */}
                        {isFlyoutOpen && globalSearch.trim().length >= 2 && (
                            <div className="absolute left-0 right-0 top-11 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-[75vh] overflow-y-auto divide-y divide-gray-100">
                                {/* BANDEAU ASSISTANT IA (si app connectée) */}
                                {typeof onAskAi === 'function' && globalSearch.trim().length >= 3 && (
                                    <div className="p-2.5 bg-gradient-to-r from-teal-50/80 to-slate-50">
                                        {!hasConnectPlan ? (
                                            <div className="flex items-center justify-between gap-2 px-2 py-1 text-[11px] text-gray-500">
                                                <span className="flex items-center gap-1.5 font-semibold">
                                                    <Lock size={13} className="text-amber-600 shrink-0" />
                                                    Assistant IA du manuel
                                                </span>
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-[10px] uppercase tracking-wider">
                                                    <Crown size={10} /> Forfait CONNECT requis
                                                </span>
                                            </div>
                                        ) : !isOnline ? (
                                            <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-amber-800 font-medium">
                                                <WifiOff size={14} className="text-amber-600 shrink-0" />
                                                <span>Hors-ligne : affichage des résultats locaux instantanés uniquement.</span>
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="text-[11px] text-gray-600 font-medium">
                                                        Besoin d&apos;une réponse synthétique étape par étape ?
                                                    </span>
                                                    <button
                                                        type="button"
                                                        disabled={aiState.loading}
                                                        onClick={handleAskAi}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e4e58] hover:bg-teal-800 disabled:opacity-60 text-white text-xs font-bold shadow-sm transition-colors shrink-0"
                                                    >
                                                        {aiState.loading ? (
                                                            <Loader2 size={13} className="animate-spin" />
                                                        ) : (
                                                            <Sparkles size={13} />
                                                        )}
                                                        <span>{aiState.loading ? 'Analyse en cours...' : "Demander à l'assistant IA"}</span>
                                                    </button>
                                                </div>

                                                {/* Réponse structurée IA */}
                                                {aiState.error && (
                                                    <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                                                        <WifiOff size={14} className="shrink-0 text-amber-600" />
                                                        <span>{aiState.error}</span>
                                                    </div>
                                                )}

                                                {aiState.answer && (
                                                    <div className="p-3 rounded-xl bg-white border border-teal-200 shadow-sm space-y-2.5">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-teal-700">
                                                                <Sparkles size={12} /> Réponse Assistant TipTac
                                                            </span>
                                                            {!aiState.answer.found && (
                                                                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                                                                    Couverture partielle
                                                                </span>
                                                            )}
                                                        </div>

                                                        {aiState.answer.summary && (
                                                            <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                                                                {aiState.answer.summary}
                                                            </p>
                                                        )}

                                                        {Array.isArray(aiState.answer.steps) && aiState.answer.steps.length > 0 && (
                                                            <ol className="space-y-1.5 pl-4 list-decimal text-xs text-gray-700">
                                                                {aiState.answer.steps.map((step, sIdx) => (
                                                                    <li key={sIdx} className="leading-relaxed">
                                                                        <FormattedGuideContent content={step} onImageClick={setLightboxImage} />
                                                                    </li>
                                                                ))}
                                                            </ol>
                                                        )}

                                                        {aiState.answer.warning && (
                                                            <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-900 text-[11px] flex items-start gap-1.5">
                                                                <AlertTriangle size={13} className="shrink-0 mt-0.5 text-orange-500" />
                                                                <span>{aiState.answer.warning}</span>
                                                            </div>
                                                        )}

                                                        {Array.isArray(aiState.answer.links) && aiState.answer.links.length > 0 && (
                                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                                {aiState.answer.links.map((lnk, lIdx) => (
                                                                    <button
                                                                        key={lIdx}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            const [chap, art] = String(lnk.targetId || '').split('#');
                                                                            if (chap && USER_GUIDE_MANIFEST[chap]) {
                                                                                setIsFlyoutOpen(false);
                                                                                navigateTo({ tab: chap, articleId: art || null, recordHistory: true });
                                                                            }
                                                                        }}
                                                                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-[11px] font-bold transition-colors"
                                                                    >
                                                                        <IconLink size={11} />
                                                                        <span>{lnk.label || 'Voir la fiche'}</span>
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* RÉSULTATS MINISEARCH LOCAUX */}
                                {isSearchingGlobal ? (
                                    <div className="p-4 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
                                        <Loader2 size={16} className="animate-spin text-[#1e4e58]" /> Recherche locale en cours...
                                    </div>
                                ) : globalResults.length === 0 ? (
                                    <div className="p-4 text-center text-xs text-gray-400 italic">
                                        Aucune sous-section trouvée pour « {globalSearch} »
                                    </div>
                                ) : (
                                    globalResults.map((res, i) => {
                                        const isCursor = i === activeResultIdx;
                                        return (
                                            <button
                                                key={res.id || i}
                                                type="button"
                                                onMouseEnter={() => setActiveResultIdx(i)}
                                                onClick={() => handleSelectGlobalResult(res)}
                                                className={`w-full text-left p-3 transition-colors flex flex-col gap-1 group ${isCursor ? 'bg-teal-50/90' : 'hover:bg-teal-50/50'}`}
                                            >
                                                <div className="flex items-center flex-wrap gap-1.5 text-[10px] font-black uppercase tracking-wider text-teal-700">
                                                    <span>{res.chapterTitle}</span>
                                                    <ChevronRight size={11} className="text-gray-400" />
                                                    <span className="text-gray-600">{res.articleTitle}</span>
                                                </div>
                                                {res.sectionTitle && (
                                                    <div className="text-xs font-extrabold text-[#1e4e58]">
                                                        {res.sectionTitle}
                                                    </div>
                                                )}
                                                {res.snippet?.parts?.length > 0 && (
                                                    <p className="text-[11px] text-gray-600 leading-snug line-clamp-2">
                                                        {res.snippet.parts.map((p, pIdx) =>
                                                            p.match ? (
                                                                <mark key={pIdx} className="bg-teal-100 text-teal-950 font-bold rounded px-0.5">
                                                                    {p.text}
                                                                </mark>
                                                            ) : (
                                                                <span key={pIdx}>{p.text}</span>
                                                            )
                                                        )}
                                                    </p>
                                                )}
                                            </button>
                                        );
                                    })
                                )}
                            </div>
                        )}
                    </div>

                    {/* BOUTONS D'ACTION DROITE */}
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={() => setShowChaptersMobile((v) => !v)}
                            className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-bold text-gray-700"
                        >
                            <List size={15} />
                            <span>Chapitres</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setShowToc((v) => !v)}
                            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-2 bg-gray-100 hover:bg-teal-50 hover:text-[#1e4e58] border border-gray-200 rounded-lg text-xs font-bold text-gray-700 transition-colors"
                            title={showToc ? "Masquer le sommaire de l'article" : "Afficher le sommaire de l'article"}
                        >
                            {showToc ? <PanelLeftClose size={15} /> : <PanelLeftOpen size={15} />}
                            <span className="hidden lg:inline">{showToc ? 'Masquer sommaire' : 'Sommaire'}</span>
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-9 h-9 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center transition-colors text-gray-500"
                            title="Fermer (Échap)"
                        >
                            <X size={17} />
                        </button>
                    </div>
                </div>

                {/* CORPS DE LA MODALE */}
                <div className="flex flex-1 overflow-hidden bg-gray-100 relative">

                    {/* COLONNE 1 : CHAPITRES GROUPÉS PAR UNIVERS */}
                    <div className={`${showChaptersMobile ? 'flex absolute inset-y-0 left-0 z-30 shadow-2xl' : 'hidden'} md:flex w-64 bg-white border-r border-gray-200 flex-col shrink-0 overflow-y-auto`}>
                        <div className="px-3 py-2.5 border-b border-gray-100 text-[10px] font-black uppercase tracking-wider text-gray-400 flex items-center justify-between">
                            <span>Chapitres ({Object.keys(USER_GUIDE_MANIFEST).length})</span>
                            {showChaptersMobile && (
                                <button type="button" onClick={() => setShowChaptersMobile(false)} className="md:hidden text-gray-500 p-1">
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                        <div className="flex flex-col pb-4">
                            {groupedChapters.map(([category, items]) => (
                                <div key={category}>
                                    <div className="sticky top-0 z-10 px-3 pt-3 pb-1 text-[10px] font-black uppercase tracking-widest text-gray-400 bg-white/95 border-b border-gray-50">
                                        {CATEGORY_LABELS[category] || category}
                                    </div>
                                    <div className="flex flex-col py-0.5">
                                        {items.map(([key, manifest]) => {
                                            const isActive = activeTab === key;
                                            return (
                                                <button
                                                    key={key}
                                                    type="button"
                                                    onClick={() => navigateTo({ tab: key, articleId: null, recordHistory: false })}
                                                    className={`flex items-start gap-2.5 px-3 py-2.5 text-left text-xs font-bold transition-all border-l-4 ${isActive
                                                        ? 'bg-teal-50/80 text-[#1e4e58] border-[#1e4e58]'
                                                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                        }`}
                                                >
                                                    <span className={`shrink-0 mt-0.5 ${manifest.color}`}>
                                                        {renderIcon(manifest.iconName, "w-4 h-4")}
                                                    </span>
                                                    <span className="leading-snug line-clamp-2">{manifest.title}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLONNE 2 : SOMMAIRE DES ARTICLES (REPLIABLE) */}
                    {showToc && (
                        <div className="hidden md:flex w-64 lg:w-72 bg-slate-50 border-r border-gray-200 flex-col shrink-0 overflow-hidden">
                            {showLocalFilter ? (
                                <div className="p-2.5 border-b border-gray-200 bg-white">
                                    <div className="relative">
                                        <Search size={13} className="absolute left-2.5 top-2.5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Filtrer ce chapitre..."
                                            value={localFilter}
                                            onChange={(e) => setLocalFilter(e.target.value)}
                                            className="w-full pl-8 pr-3 py-1.5 bg-gray-100 border border-gray-200 rounded-lg text-xs outline-none focus:bg-white focus:border-[#1e4e58] transition-colors"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="px-3 py-2.5 border-b border-gray-200 bg-white text-[10px] font-black uppercase tracking-wider text-gray-400">
                                    Sommaire du chapitre
                                </div>
                            )}

                            <div className="flex-1 overflow-y-auto p-2 space-y-1">
                                {isLoading ? (
                                    <div className="flex flex-col items-center justify-center p-8 text-gray-400 gap-2">
                                        <Loader2 size={20} className="animate-spin text-[#1e4e58]" />
                                        <span className="text-xs">Chargement...</span>
                                    </div>
                                ) : currentSectionData?.articles ? (
                                    currentSectionData.articles
                                        .filter((art) => !localFilter || art.title.toLowerCase().includes(localFilter.toLowerCase()))
                                        .map((art, idx) => {
                                            const articleKey = art.id || idx;
                                            const isSelected = activeArticleId === articleKey;
                                            return (
                                                <button
                                                    key={articleKey}
                                                    type="button"
                                                    onClick={() => triggerScrollToTarget(articleKey)}
                                                    className={`w-full text-left px-2.5 py-2.5 rounded-lg text-xs transition-all flex items-start justify-between gap-2 ${isSelected
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
                                                type="button"
                                                onClick={() => triggerScrollToTarget(secKey)}
                                                className={`w-full text-left px-2.5 py-2.5 rounded-lg text-xs transition-all flex items-start justify-between gap-2 ${isSelected
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
                    )}

                    {/* COLONNE 3 : CONTENU DU CHAPITRE */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleContentScroll}
                        className="flex-1 overflow-y-auto p-4 sm:p-8 bg-white scroll-smooth"
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
                                        {renderIcon(activeManifest?.iconName, "w-7 h-7")}
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            {CATEGORY_LABELS[activeManifest?.category] || activeManifest?.category}
                                        </span>
                                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">{currentSectionData.title}</h3>
                                    </div>
                                </div>

                                {/* Liste des articles */}
                                <div className="space-y-6">
                                    {currentSectionData.articles.map((art, idx) => {
                                        const articleKey = art.id || idx;
                                        const isCardHighlighted = highlightedAnchor === String(articleKey);
                                        return (
                                            <div
                                                key={articleKey}
                                                ref={(el) => { articleRefs.current[articleKey] = el; }}
                                                className={`bg-white rounded-xl border p-5 sm:p-6 shadow-sm transition-all ${isCardHighlighted ? 'border-teal-400 ring-2 ring-teal-200' : 'border-gray-200 hover:border-gray-300'}`}
                                            >
                                                <h4 className="text-base font-black text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between gap-2">
                                                    <span>{art.title}</span>
                                                    <span className="text-[10px] font-mono text-gray-400 shrink-0">#{(idx + 1).toString().padStart(2, '0')}</span>
                                                </h4>

                                                <FormattedGuideContent
                                                    content={art.content}
                                                    articleKey={articleKey}
                                                    highlightedAnchor={highlightedAnchor}
                                                    onImageClick={setLightboxImage}
                                                />
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
                                        const isCardHighlighted = highlightedAnchor === String(secKey);
                                        return (
                                            <div
                                                key={secKey}
                                                ref={(el) => { articleRefs.current[secKey] = el; }}
                                                className={`bg-gray-50 border rounded-xl p-4 transition-all ${isCardHighlighted ? 'border-teal-500 ring-2 ring-teal-200' : 'border-gray-200'}`}
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
                    <span>TipTac • Logiciel d&apos;encaissement • Normes NF525</span>
                    <span className="flex items-center gap-1.5 text-amber-500">
                        <Star size={12} fill="currentColor" /> Manuel Utilisateur
                    </span>
                </div>
            </div>

            {/* LIGHTBOX PLEIN ÉCRAN POUR CAPTURES */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[1100] bg-black/90 flex flex-col items-center justify-center p-4"
                    onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(null);
                    }}
                >
                    <button
                        type="button"
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                        title="Fermer l'aperçu (Échap)"
                    >
                        <X size={20} />
                    </button>
                    <img
                        src={lightboxImage.src}
                        alt={lightboxImage.alt}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[86vh] max-w-[92vw] object-contain rounded-lg shadow-2xl border border-white/10 bg-white"
                    />
                    <span className="mt-3 text-xs font-mono text-gray-300">
                        {lightboxImage.alt}
                    </span>
                </div>
            )}
        </div>
    );
};
