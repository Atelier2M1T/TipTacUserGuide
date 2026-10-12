export default {
    id: "TIPTAC_CLOUD",
    title: "Console Réseau & Multi-Sites (TipTac Cloud)",
    category: "TipTacCloud",
    iconName: "Cloud",
    color: "text-indigo-600",
    articles: [
        {
            id: "cloud-architecture-perimetre-reseau",
            title: "1. Navigation multi-magasins et sélecteur de périmètre (Global vs Magasin)",
            // 📸 cloud_header_selecteur_site.jpg : En-tête de la console Cloud montrant le menu déroulant du périmètre réseau (Réseau Tous vs Magasins individuels).
            // 📸 cloud_dashboard_kpis_consolides.jpg : Tableau de bord principal affichant le chiffre d'affaires et les marges consolidées sur l'ensemble de l'enseigne.
            content:
                `
                TipTac Cloud est la plateforme centrale d'administration accessible depuis n'importe quel navigateur web, permettant à la direction d'un groupe ou d'un commerce multi-sites de piloter l'ensemble de ses points de vente en temps réel.
                
                L'accès à la console réseau requiert un compte propriétaire ou responsable avec le rôle [PERM: Admin].
                
                [📸 cloud_header_selecteur_site.jpg | lg]
                [T]Le Sélecteur de périmètre réseau
                Au sommet de l'écran, le sélecteur de site permet de basculer la portée d'analyse et de configuration en un clic :
                [ST][ICON: Globe | 14 | text-indigo-600] 1. Vue « Réseau (Tous) » [KEY: GLOBAL] [PLAN: NETWORK] :
                Consolide instantanément les données de tous vos magasins physiques et de votre boutique en ligne. Tous les tableaux de bord, rapports de rentabilité, états des stocks et annuaires clients additionnent les flux de l'ensemble de votre enseigne.
                
                [ST][ICON: Store | 14 | text-indigo-600] 2. Vue par « Magasin individuel » :
                Isole un point de vente précis. Les statistiques, niveaux de stocks et journaux de transactions s'adaptent immédiatement au périmètre de cet établissement unique.
                
                [TIP]Consultation sur smartphone : Sur mobile, le bouton de filtres en haut à droite ouvre un panneau glissant permettant d'ajuster le magasin audité ainsi que la plage de dates d'analyse sans encombrer la lecture.
                
                [📸 cloud_dashboard_kpis_consolides.jpg | right | md]
                [T]Pilotage commercial et moteur analytique BigQuery
                Contrairement à la caisse locale qui lit une base de données autonome, la console Cloud est interconnectée à un entrepôt de données analytiques haute puissance :
                — Calcule en quelques secondes les tendances de ventes et marges brutes sur des millions de lignes de tickets cumulées.
                — Compare les performances entre magasins physiques et mesure la contribution exacte de chaque site au chiffre d'affaires global.
                — Pour le détail complet des calculs de rentabilité et des filtres de vente, consultez le chapitre [LINK: ANALYTICS_REPORTING | Statistiques & Pilotage Commercial].
                [CLEAR]
                `
        },
        {
            id: "cloud-catalogue-master-stocks-multi-sites",
            title: "2. Catalogue Master, stocks multi-sites et diffusion centrale",
            // 📸 cloud_catalog_vue_globale.jpg : Base articles du Cloud montrant les colonnes de stock global et le détail par magasin au survol.
            // 📸 cloud_catalog_fiche_propagation.jpg : Fiche produit sur le Cloud avec bouton de répercussion des prix et de publication web réseau.
            content:
                `
                Sur TipTac Cloud, le catalogue fait office de « Référentiel Maître ». C'est lui qui alimente le site e-commerce et diffuse les nouvelles créations d'articles vers les caisses de chaque magasin.
                
                [📸 cloud_catalog_vue_globale.jpg | lg]
                [T]Vision consolidée des inventaires physiques
                Dans la table des articles du Cloud, la colonne de stock s'adapte à votre réseau :
                — En vue [KEY: GLOBAL] : Affiche la somme des unités disponibles dans l'ensemble de vos dépôts et magasins.
                — Un clic ou un survol sur un produit déplie l'inventaire site par site (ex : 12 pièces à Paris, 5 à Lyon, 0 en Réserve centrale), permettant de localiser instantanément la marchandise.
                
                [📸 cloud_catalog_fiche_propagation.jpg | right | md]
                [T]Diffusion descendante vers les caisses locales
                Toute fiche article créée ou modifiée sur la console Cloud est scellée avec un horodatage précis :
                — [KEY: Assimilation automatique] : Dès que les caisses de vos magasins se connectent à Internet, les robots d'arrière-plan téléchargent les modifications (nouveaux articles, photos WebP, descriptions).
                — [KEY: Tarification nationale] : Si l'option est active dans vos règles, les prix modifiés sur le Cloud écrasent automatiquement les tarifs locaux lors de la synchronisation.
                — Pour le détail complet de la saisie des fiches et des déclinaisons, consultez le chapitre [LINK: CATALOGUE_PIM | Catalogue Articles & Variantes].
                [CLEAR]
                `
        },
        {
            id: "cloud-claviers-caisse-maquettes-reseau",
            title: "3. Claviers de caisse centraux : Maquettes maîtres et verrouillage siège",
            // 📸 cloud_keyboard_maquette_centrale.jpg : Éditeur de clavier tactile sur le Cloud avec onglets gérés par le siège et options de verrouillage.
            // 📸 cloud_keyboard_derogations_locales.jpg : Interface de gestion des exceptions permettant d'écraser la disposition sur un magasin spécifique.
            content:
                `
                Pour garantir une organisation homogène sur les comptoirs de tous vos points de vente, le sous-menu « Clavier de Caisse » du Cloud pilote l'agencement tactile des terminaux.
                
                [📸 cloud_keyboard_maquette_centrale.jpg | lg]
                [T]Création de maquettes maîtres partagées
                Depuis la console centrale, vous concevez la disposition des touches tactiles :
                — Créez des onglets thématiques, configurez la taille des grilles et associez vos produits vedettes ou familles de rayons.
                — [KEY: Verrouillage Siège] : Marquez un onglet comme verrouillé. Sur les caisses tactiles en magasin, cet onglet portera une icône de cadenas et ne pourra être ni déplacé, ni modifié, ni supprimé par les équipes locales.
                — [KEY: Autoriser les onglets locaux] : Activez cet interrupteur pour permettre aux responsables de chaque boutique de créer leurs propres onglets additionnels (ex : arrivages du marché local, fleurs de saison) à côté des onglets imposés par la direction.
                
                [📸 cloud_keyboard_derogations_locales.jpg | right | md]
                [T]Dérogations locales par magasin
                Si un établissement possède des contraintes physiques particulières (écran panoramique ou assortiment réduit) :
                — Sélectionnez le magasin dans le sélecteur pour lui attribuer une disposition tactile sur-mesure.
                — Le bouton [BTN: Importer de la caisse] permet également de rapatrier la disposition personnalisée d'un magasin pilote pour la dupliquer sur les autres caisses du réseau.
                — Pour le détail complet de la personnalisation des touches, consultez le chapitre [LINK: TERMINAL_VENTE#personnalisation-clavier-tactile | Terminal de Vente & Encaissements].
                [CLEAR]
                `
        },
        {
            id: "cloud-hub-comptable-liasses-fiscales",
            title: "4. Hub Comptable Cloud : Centralisation des liasses mensuelles et clôtures Z",
            // 📸 cloud_compta_liasses_telechargement.jpg : Cartes des magasins affichant l'état des liasses comptables mensuelles avec bouton de téléchargement ZIP.
            // 📸 cloud_compta_visionneuse_dashboard.jpg : Visionneuse intégrée permettant d'inspecter en direct le Journal des Ventes, la Démarque et le Stock valorisé sans décompresser le fichier.
            content:
                `
                Le « Hub Comptable Cloud » centralise et sécurise l'archivage légal de l'ensemble de votre réseau, simplifiant la transmission des pièces justificatives à votre cabinet d'expertise comptable.
                
                [📸 cloud_compta_liasses_telechargement.jpg | lg]
                [T]Collecte des liasses mensuelles certifiées NF525
                En fin de mois, dès que les magasins clôturent leur période :
                — Le Cloud rassemble automatiquement pour chaque site le package d'archive officiel contenant le Fichier des Écritures Comptables normé (FEC), la bande de contrôle inaltérable, le journal de caisse et le Grand Livre des Z.
                — Cliquez sur [BTN: Télécharger liasse] pour récupérer en un clic l'archive compressée prête pour l'expert-comptable.
                
                [📸 cloud_compta_visionneuse_dashboard.jpg | right | md]
                [T]Visionneuse comptable directe sans décompression
                En sélectionnant un magasin spécifique, la console ouvre une vue d'inspection directe :
                — [KEY: Synthèse financière] : CA HT/TTC, répartition des moyens de règlement et cumul perpétuel.
                — [KEY: Journal des Ventes (VT)] : Ventilation exacte des comptes de produits (707, 701, 706) et de TVA collectée.
                — [KEY: Démarque comptable] : Pertes et casses réelles valorisées au prix d'achat HT.
                — [KEY: État des stocks valorisé] : Valeur comptable brute immobilisée à la clôture du mois.
                — Pour les aspects juridiques et le détail des contrôles fiscaux, consultez le chapitre [LINK: LEGAL_COMPTA | Légal, Compta & Contrôle DGFIP].
                [CLEAR]
                `
        },
        {
            id: "cloud-modules-partages-caisse",
            title: "5. Modules partagés, écrans adaptés et consultation logistique",
            content:
                `
                La console TipTac Cloud embarque des interfaces de gestion rigoureusement identiques à celles de vos caisses physiques, avec des adaptations propres au pilotage à distance et à la sécurité des données.
                
                [T]Ergonomie adaptative (Mobile vs Ordinateur)
                L'interface du Cloud s'adapte automatiquement à l'appareil que vous utilisez pour vous offrir la meilleure expérience :
                — [KEY: Écrans larges (PC / Mac)] : Donnent accès à l'intégralité des modules, y compris les interfaces denses nécessitant un grand confort de travail (Éditeur de clavier, Studio d'e-mailing, Constructeur du site Web).
                — [KEY: Smartphones] : L'interface est optimisée pour une lecture fluide en mobilité. Les modules de conception complexes sont automatiquement masqués pour privilégier l'accès immédiat aux tableaux de bord, à la base clients et aux statistiques en temps réel.
                
                [WARNING]Logistique et Stocks : Consultation exclusive
                Pour garantir la stricte inaltérabilité des données d'inventaire et la traçabilité NF525, les opérations physiques de stock ne peuvent pas être effectuées depuis le Cloud. 
                Les modules logistiques (Démarque, Inventaires, Transferts, Réceptions) y fonctionnent exclusivement en mode [KEY: Lecture Seule]. Vous pouvez auditer vos flux, analyser les pertes et exporter vos rapports, mais toute modification de quantité doit être réalisée directement en magasin sur la caisse ou via l'application [LINK: TIPTAC_COMPANION | TipTac Companion].
                
                [T]Accès aux guides détaillés des modules partagés
                Retrouvez le fonctionnement détaillé de ces composants transverses dans leurs chapitres respectifs :
                — [ICON: Users | 14 | text-purple-700] [LINK: CLIENTS_CRM | Annuaire Clients, CRM & Fidélité] : Segmentation, fusions de doublons et règles d'acquisition.
                — [ICON: Target | 14 | text-rose-600] [LINK: MARKETING_PROMOTIONS | Marketing, Promos & Titres Cadeaux] : Éditeur e-mail, campagnes SMS et bons d'achat.
                — [ICON: Box | 14 | text-amber-700] [LINK: CATALOGUE_PIM | Catalogue Articles & Variantes] : Fiches produits, matrice de déclinaisons et importations.
                — [ICON: Truck | 14 | text-blue-700] [LINK: ACHATS_FOURNISSEURS | Achats, Fournisseurs & Réceptions] : Commandes d'approvisionnement et franco de port.
                — [ICON: ClipboardList | 14 | text-sky-600] [LINK: LOGISTIQUE_STOCKS | Logistique, Inventaires & Démarque] : Audit des pertes, transferts réseau et registre des mouvements.
                — [ICON: Globe | 14 | text-[#1e4e58]] [LINK: WEBSETTINGS_MANAGER | Boutique en Ligne & Site Web] : Personnalisation de votre vitrine E-commerce et pages CMS.
                `
        },
        {
            id: "cloud-installation-mobile-pwa",
            title: "6. Installer TipTac Cloud sur smartphone (Android & iOS)",
            content:
                `
                TipTac Cloud est conçu comme une application web progressive (PWA). Vous pouvez l'installer directement sur l'écran d'accueil de votre smartphone (Android ou iPhone) sans passer par le Play Store ou l'App Store.
                
                Une fois installée, l'application s'ouvre en plein écran, sans la barre d'adresse du navigateur, offrant une expérience fluide et un accès immédiat à vos indicateurs de vente et tableaux de bord.
                
                [T]Installation sur Android (Google Chrome)
                Pour installer TipTac Cloud sur un appareil Android :
                [ST][ICON: Smartphone | 14 | text-indigo-600] Étapes d'installation Chrome :
                1. Ouvrez [KEY: Google Chrome] et accédez à l'adresse de votre portail TipTac Cloud.
                2. Connectez-vous avec vos identifiants administrateur ou responsable.
                3. Appuyez sur le menu du navigateur (les [KEY: trois points verticaux] situés en haut à droite de l'écran).
                4. Sélectionnez [BTN: Installer l'application] (ou [BTN: Ajouter à l'écran d'accueil] selon la version de votre navigateur).
                5. Validez en cliquant sur [BTN: Installer]. L'icône TipTac Cloud apparaît immédiatement parmi vos applications et sur votre écran d'accueil.
                
                [T]Installation sur iPhone / iPad (Apple iOS Safari)
                Sur iOS, l'installation d'une application web doit obligatoirement être réalisée depuis Safari :
                [ST][ICON: Smartphone | 14 | text-indigo-600] Étapes d'installation Safari :
                1. Ouvrez [KEY: Safari] et rendez-vous sur votre espace TipTac Cloud.
                2. Appuyez sur l'icône de [BTN: Partage] située au centre de la barre du bas (le carré avec une flèche pointant vers le haut).
                3. Faites défiler les actions vers le bas et touchez [BTN: Sur l'écran d'accueil].
                4. Vérifiez le nom de l'application et confirmez en haut à droite en appuyant sur [BTN: Ajouter]. L'icône TipTac Cloud est désormais disponible sur votre écran d'accueil.
                
                [TIP]Accès rapide et biométrie : Lorsque vous lancez TipTac Cloud depuis votre écran d'accueil, vous pouvez mémoriser vos identifiants ou utiliser le gestionnaire de mots de passe de votre téléphone (Face ID, Touch ID ou empreinte digitale) pour déverrouiller instantanément votre console en mobilité.
                
                [WARNING]Rappel sur le navigateur iOS : Sur iPhone, les navigateurs alternatifs (comme Chrome iOS ou Firefox iOS) ne permettent pas toujours d'ajouter directement une Web App à l'écran d'accueil. Veillez à bien ouvrir l'adresse dans Safari pour finaliser l'installation.
                `
        }
    ]
};