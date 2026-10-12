export const USER_GUIDE_MANIFEST = {
    RACCOURCIS: {
        id: "RACCOURCIS",
        title: "Raccourcis Clavier",
        category: "TipTacCaisse",
        iconName: "Zap",
        color: "text-amber-500",
        load: () => import('./userGuide/raccourcis.js')
    },
    ONBOARDING: {
        id: "ONBOARDING",
        title: "Démarrage, Licence & Réseau",
        category: "TipTacCaisse",
        iconName: "Server",
        color: "text-teal-600",
        load: () => import('./userGuide/onboarding.js')
    },
    TERMINAL_VENTE: {
        id: "TERMINAL_VENTE",
        title: "Terminal de Vente & Encaissements",
        category: "TipTacCaisse",
        iconName: "ShoppingCart",
        color: "text-amber-600",
        load: () => import('./userGuide/terminalVente.js')
    },
    SESSIONS_CLOTURES: {
        id: "SESSIONS_CLOTURES",
        title: "Sessions, Tiroir & Clôtures Z",
        category: "TipTacCaisse",
        iconName: "Archive",
        color: "text-purple-600",
        load: () => import('./userGuide/sessionsClotures.js')
    },
    LEGAL_COMPTA: {
        id: "LEGAL_COMPTA",
        title: "Légal, Compta & Contrôle DGFIP",
        category: "TipTacCaisse",
        iconName: "Shield",
        color: "text-blue-800",
        load: () => import('./userGuide/legalCompta.js')
    },
    ADMINISTRATION_LOGICIEL: {
        id: "ADMINISTRATION_LOGICIEL",
        title: "Back-Office & Gestion d'Équipe",
        category: "TipTacCaisse",
        iconName: "Settings",
        color: "text-[#1e4e58]",
        load: () => import('./userGuide/administrationLogiciel.js')
    },
    PARAMETRES_MAGASIN: {
        id: "PARAMETRES_MAGASIN",
        title: "Configuration Magasin & Impressions",
        category: "TipTacCaisse",
        iconName: "Sliders",
        color: "text-teal-700",
        load: () => import('./userGuide/parametresMagasin.js')
    },
    MARKETING_PROMOTIONS: {
        id: "MARKETING_PROMOTIONS",
        title: "Marketing, Promos & Titres Cadeaux",
        category: "TipTacCaisse",
        iconName: "Target",
        color: "text-rose-600",
        load: () => import('./userGuide/marketingPromotions.js')
    },
    CLIENTS_CRM: {
        id: "CLIENTS_CRM",
        title: "Annuaire Clients, CRM & Fidélité",
        category: "TipTacCaisse",
        iconName: "Users",
        color: "text-purple-700",
        load: () => import('./userGuide/clientsCrm.js')
    },
    CATALOGUE_PIM: {
        id: "CATALOGUE_PIM",
        title: "Catalogue Articles & Variantes",
        category: "TipTacCaisse",
        iconName: "Box",
        color: "text-amber-700",
        load: () => import('./userGuide/cataloguePim.js')
    },
    ACHATS_FOURNISSEURS: {
        id: "ACHATS_FOURNISSEURS",
        title: "Achats, Fournisseurs & Réceptions",
        category: "TipTacCaisse",
        iconName: "Truck",
        color: "text-blue-700",
        load: () => import('./userGuide/achatsFournisseurs.js')
    },
    LOGISTIQUE_STOCKS: {
        id: "LOGISTIQUE_STOCKS",
        title: "Logistique, Inventaires & Démarque",
        category: "TipTacCaisse",
        iconName: "ClipboardList",
        color: "text-sky-600",
        load: () => import('./userGuide/logistiqueStocks.js')
    },
    ORDER_HUB: {
        id: "ORDER_HUB",
        title: "Commandes Web & Click and Collect",
        category: "TipTacCaisse",
        iconName: "Globe",
        color: "text-indigo-600",
        load: () => import('./userGuide/orderHub.js')
    },
    ANALYTICS_REPORTING: {
        id: "ANALYTICS_REPORTING",
        title: "Statistiques & Pilotage Commercial",
        category: "TipTacCaisse",
        iconName: "BarChart3",
        color: "text-emerald-700",
        load: () => import('./userGuide/analyticsReporting.js')
    },
    TIPTAC_COMPANION: {
        id: "TIPTAC_COMPANION",
        title: "TipTac Companion (Application)",
        category: "TipTacCompanion",
        iconName: "Smartphone",
        color: "text-sky-500",
        load: () => import('./userGuide/tiptacCompanion.js')
    },
    TIPTAC_CLOUD: {
        id: "TIPTAC_CLOUD",
        title: "TipTac Cloud (Portail Web)",
        category: "TipTacCloud",
        iconName: "Cloud",
        color: "text-indigo-600",
        load: () => import('./userGuide/tiptacCloud.js')
    },
    WEBSETTINGS_MANAGER: {
        id: "WEBSETTINGS_MANAGER",
        title: "Gestion du Site Web & E-Commerce",
        category: "TipTacCloud",
        iconName: "Globe",
        color: "text-[#1e4e58]",
        load: () => import('./userGuide/websettingsManager.js')
    },
    BOUTIQUE_WEB: {
        id: "BOUTIQUE_WEB",
        title: "Site Web (Côté Client)",
        category: "TipTacWebsite",
        iconName: "Globe",
        color: "text-indigo-600",
        load: () => import('./userGuide/boutiqueWeb.js')
    }
};