export default {
    id: "CATALOGUE_PIM",
    title: "Catalogue Articles & Variantes",
    category: "TipTacCaisse",
    iconName: "Box",
    color: "text-amber-700",
    articles: [
        {
            id: "consultation-recherche-catalogue",
            title: "1. Consultation de la base articles, recherche globale et colonnes",
            // 📸 catalog_base_vue_generale.jpg : Vue principale de la Base Articles avec la barre de recherche supérieure, les filtres déroulants et le tableau.
            // 📸 catalog_selecteur_colonnes.jpg : Menu déroulant « Colonnes » montrant les cases à cocher pour personnaliser l'affichage de la table.
            // 📸 catalog_filtres_avances_badges.jpg : Gros plan sur les filtres d'état rapides (Phyto, Web, Photo, Archives) et les plages numériques (Stock et Prix).
            // 📸 catalog_accordeon_variantes_ligne.jpg : Ligne d'un article maître dépliée affichant l'arborescence des déclinaisons physiques avec le symbole ↳.
            content:
                `
                Le module « Base Articles » centralise l'indexation de l'ensemble des références de votre établissement, leurs tarifications, leurs stocks et leurs canaux de distribution.
                
                L'accès à la consultation du catalogue requiert un rôle [PERM: Préparateur], [PERM: Manager] ou [PERM: Admin] ou la permission explicite pour les vendeurs.
                
                [📸 catalog_base_vue_generale.jpg | lg]
                [T]Moteur de recherche permissif multi-mots
                La barre de recherche supérieure permet d'isoler n'importe quel article instantanément :
                — Saisissez un ou plusieurs termes : le moteur filtre simultanément sur la [KEY: Désignation commerciale], la [KEY: Référence interne], le [KEY: Code-barres EAN], la [KEY: Marque] ou les [KEY: Mots-clés Web].
                — La recherche explore également les déclinaisons : taper la taille ou la couleur d'une variante fait remonter le dossier parent correspondant.
                — Le moteur intègre un correcteur de frappe tolérant aux douchettes configurées en clavier AZERTY français (prise en charge automatique des chiffres avec majuscule et des tirets).
                
                [📸 catalog_filtres_avances_badges.jpg | right | md]
                [T]Filtres métier et sélecteurs d'état
                Affinez votre sélection grâce aux filtres combinables :
                — Menus déroulants : [KEY: Famille] (rayon), [KEY: Catégorie] (débloquée dès la sélection du rayon parent) et [KEY: Fournisseur principal].
                — Plages numériques : bornez votre recherche avec un [KEY: Stock Min / Max] ou un [KEY: Prix Min / Max].
                — Boutons d'état à 3 cycles (Neutre ➔ Actif vert ➔ Inactif rouge) :
                  • [ICON: Leaf | 20 | text-gray-600 ] : Isole les végétaux liés à une fiche de culture ou soumis au passeport phytosanitaire.
                  • [ICON: Globe | 20 | text-gray-600 ] : Filtre les articles publiés ou non sur votre boutique en ligne.
                  • [ICON: ImageIcon | 20 | text-gray-600 ] : Repère les fiches illustrées ou celles dépourvues de visuel.
                [CLEAR]

                — Bouton [BTN: ARCH.] permet d'afficher les articles archivés ou désactivés de la vente.
                
                [📸 catalog_selecteur_colonnes.jpg | left | sm]
                [T]Personnalisation de l'affichage (Colonnes mémorisées)
                Cliquez sur le bouton [BTN: Colonnes] en haut à droite pour adapter le tableau à votre écran :
                Cochez ou décochez les 16 colonnes disponibles (Réf., Code-barres, Désignation, Marque, Famille, Catégorie, Fournisseur, Poids, Achat HT, TVA, Éco-part, Vente TTC, Stock, Phyto, Date de création, Fidélité). Vos préférences sont mémorisées localement sur le poste.
                [CLEAR]
                
                [📸 catalog_accordeon_variantes_ligne.jpg | lg]
                [T]Hiérarchie visuelle et accordéon des déclinaisons
                Les produits comportant des variantes (articles Maîtres) se distinguent par une teinte bleutée contrastée :
                — Cliquez sur la flèche située à gauche de la désignation pour déplier ou replier ses déclinaisons physiques rattachées (marquées d'une flèche violette [KEY: ↳]).
                — Le bouton [BTN: Condenser / Déplier] en haut de tableau permet d'ouvrir ou de fermer l'intégralité des sous-variantes du catalogue en un seul clic.
                — Le stock affiché sur la ligne du dossier parent correspond au cumul exact des stocks de toutes ses déclinaisons actives.
                
                [T]Ajustement rapide de stock au comptoir (±)
                Pour les articles simples ou les variantes individuelles, un bouton vert [BTN: ±] permet d'enregistrer une entrée de stock manuelle express dans une modale dédiée sans ouvrir la fiche complète du produit.
                [WARNING]Règle de traçabilité comptable : Ce raccourci permet uniquement d'ajouter des unités positives. Tout retrait de stock doit obligatoirement être déclaré via le module Démarque avec sélection d'un motif légal (casse, vol, péremption, ...).
                `
        },
        {
            id: "actions-masse-fusion-declinaisons",
            title: "2. Traitements en masse et fusion d'articles en déclinaisons",
            // 📸 catalog_selection_masse_barre_flottante.jpg : Barre d'action sombre flottant au bas de l'écran affichant le nombre d'articles cochés et le menu déroulant des traitements en masse.
            // 📸 catalog_fusion_modale_etape1_modele.jpg : Première étape de la modale de fusion permettant d'élire l'article modèle servant de base au dossier parent.
            // 📸 catalog_fusion_modale_etape2_parent.jpg : Deuxième étape configurant la référence et le libellé générique du parent avec case de purge des données physiques.
            // 📸 catalog_fusion_modale_etape3_attributs.jpg : Troisième étape attribuant les valeurs de l'axe (ex: Litrage -> 10L, 20L, 50L) en face de chaque article fusionné.
            content:
                `
                Pour réorganiser un rayon sans ouvrir les fiches une à une, TipTac propose une barre de commande groupée capable de modifier des dizaines d'articles en une fraction de seconde.
                
                [📸 catalog_selection_masse_barre_flottante.jpg | lg]
                [T]Barre d'actions groupées flottante
                Cochez les cases situées dans la première colonne du tableau : dès qu'au moins un article est sélectionné, un bandeau sombre s'anime en bas d'écran.
                
                Le menu déroulant propose des traitements immédiats :
                — [KEY: E-commerce] : Publier ou retirer du web en bloc, autoriser ou interdire la livraison à domicile ou le retrait en magasin.
                — [KEY: Boutique & Logistique] : Inclure ou exclure du programme de fidélité, autoriser ou bloquer le réassort (fin de série).
                — [KEY: Visuel] : Purger les pastilles de couleur du nuancier.
                — [KEY: Comptabilité & Classification] : Modifier le taux de TVA en sélectionnant un code taxe, ou déplacer l'ensemble des articles sélectionnés vers un autre rayon et une autre catégorie.
                
                Cliquez sur [BTN: Appliquer] : le système traite les modifications une par une de manière sécurisée en arrière-plan sans geler l'ordinateur.
                
                [T]L'outil de fusion en déclinaisons (Merge)
                Si vous avez créé par le passé plusieurs fiches séparées pour un même produit existant en plusieurs tailles ou volumes (ex : « Terreau 10L », « Terreau 20L » et « Terreau 50L »), vous pouvez les regrouper sous un seul dossier parent grâce à l'option [KEY: Fusionner en déclinaisons] (nécessite au moins 2 articles cochés).
                
                [📸 catalog_fusion_modale_etape1_modele.jpg | right | md]
                [ST]Étape 1 : Élection de l'article modèle :
                Choisissez le produit le plus complet de la sélection. C'est lui qui transmettra ses photographies, sa description marketing et son référencement SEO au futur dossier parent.
                [CLEAR]
                
                [📸 catalog_fusion_modale_etape2_parent.jpg | left | md]
                [ST]Étape 2 : Identité commune du dossier Parent :
                — Définissez la [KEY: Réf. Parent] (générée automatiquement avec le suffixe « -PARENT ») et le nom générique (ex : « Terreau Universel »).
                — Renseignez le fournisseur commun et la marque.
                — Cochez [KEY: Purger les données physiques et tarifaires du dossier parent] : indispensable si les produits varient en volume ou en poids, afin que le parent agisse comme un dossier virtuel neutre sans fausser les moyennes.
                [CLEAR]
                
                [📸 catalog_fusion_modale_etape3_attributs.jpg | lg]
                [ST]Étape 3 : Définition de l'axe et des valeurs de variantes :
                — Renseignez le [KEY: Nom de l'axe] (ex : « Contenance », « Taille » ou « Couleur »).
                — En face de chaque produit de la liste, tapez la valeur distinctive correspondante (ex : « 10 L », « 20 L », « 50 L »).
                
                [WARNING]Conservation intégrale des historiques : Dès que vous cliquez sur [BTN: Valider la Fusion], les articles sélectionnés deviennent officiellement les déclinaisons du nouveau parent. Leurs identifiants, leurs stocks physiques en magasin et l'intégralité de leur historique de ventes passé sont scrupuleusement conservés.
                `
        },
        {
            id: "fiche-article-general-tarifs",
            title: "3. Fiche Article : Généralités, calculs de marges et fiscalité",
            // 📸 catalog_fiche_navigation_sidebar.jpg : Barre latérale gauche de la fiche produit montrant l'en-tête du parent, la liste des déclinaisons et les onglets de navigation.
            // 📸 catalog_fiche_identite_general.jpg : Onglet « Général & Tarifs » avec désignation caisse, marque, référence interne, code EAN et rattachement aux rayons.
            // 📸 catalog_fiche_tarification_marges.jpg : Bloc de tarification avec prix d'achat HT bleu, prix de vente TTC vert, calculatrice de marge cible et prix barré.
            content:
                `
                Accessible par double-clic sur une ligne du catalogue ou via le bouton [BTN: Créer un produit], la modale d'édition produit est l'atelier central de paramétrage de vos références.
                
                [📸 catalog_fiche_navigation_sidebar.jpg | left | sm]
                [T]Navigation contextuelle par barre latérale
                La colonne de gauche structure votre travail :
                — [KEY: En-tête supérieur] : Identifie la fiche en cours d'édition (Article Simple, Dossier Parent ou Déclinaison) avec sa photo miniature et son code de référence.
                — [KEY: Onglets thématiques] : Distribue les réglages en 6 univers : Général & Tarifs, Logistique, Générateur d'Axes, Specs & Docs, E-commerce et Historique.
                — [KEY: Liste des déclinaisons] : Si le produit comporte des variantes, elles apparaissent sous forme de liste cliquable avec leur photo, leur prix TTC, leur niveau de stock physique et leur code-barres. Cliquez sur une variante pour basculer instantanément dans son contexte sans fermer la fenêtre !
                [CLEAR]
                
                [📸 catalog_fiche_identite_general.jpg | lg]
                [T]Identité commerciale et codification
                Dans l'onglet [KEY: Général & Tarifs], renseignez les informations de base de l'article :
                — [KEY: Désignation Caisse] : Intitulé officiel imprimé sur le ticket et affiché sur l'écran tactile. La saisie applique automatiquement la règle de casse configurée dans votre magasin (tout en majuscules ou majuscule initiale).
                — [KEY: Marque] : Sélectionnez une marque dans la liste déroulante fermée ou tapez un nouveau nom selon le mode configuré.
                — [KEY: Référence Interne] : Code identifiant unique dans votre gestion (obligatoire).
                — [KEY: Code EAN] : Code-barres à 13 chiffres pour la douchette. Si le produit n'a pas d'étiquette fabricant, cliquez sur [BTN: Générer] pour créer un code EAN-13 officiel calculé sur le préfixe propre à votre magasin (si vous l'avez d'abord défini dans le module de configuration, onglet «Préférences de vente»).
                — [KEY: Famille & Catégorie] : Classement de l'article dans l'arborescence du magasin.
                — [KEY: Exclure du programme de fidélité] : Cochez cette case pour empêcher cet article d'octroyer des points lors des encaissements.
                
                [📸 catalog_fiche_tarification_marges.jpg | lg]
                [T]Tarification, calculatrice de marge et prix psychologique
                Le bloc de tarification orchestre votre rentabilité financière :
                [ST][ICON: CreditCard | 14 | text-teal-600] 1. Prix d'Achat HT (€) :
                Votre coût d'achat net remisé auprès du grossiste.
                
                [ST][ICON: Calculator | 14 | text-teal-600] 2. Calculateur automatique du Prix de Vente TTC :
                Dès que vous saisissez le prix d'achat, TipTac interroge le pourcentage de marge cible configuré sur la catégorie ou le rayon de l'article :
                — Une icône de calculatrice [BTN: Calculatrice] apparaît à côté du champ du prix de vente. Cliquez dessus pour appliquer d'un coup le tarif TTC exact calculé sur la marge cible.
                — Sous le champ, le logiciel détaille en direct la marge réelle constatée en pourcentage et le coefficient multiplicateur d'achat (ex : « Marge réelle : 42.50% - Coef : x1.74 »). Si votre prix de vente dégage une marge inférieure à l'objectif de la catégorie, l'indicateur s'affiche en orange pour vous alerter.
                
                [ST][ICON: Tag | 14 | text-teal-600] 3. Prix Public Conseillé (Barré) :
                Prix de référence fabricant. S'il est renseigné, la caisse et la boutique en ligne affichent le tarif barré avec l'étiquette de remise correspondante.
                
                [T]Nature comptable, TVA et Éco-participation
                — [KEY: Taux de TVA (%)] : Sélectionné parmi votre grille fiscale nationale (20 %, 10 %, 5.5 %, 2.1 %) par défaut. 
                [TIP]Si vous avez assigné un taux de TVA à une famille ou catégorie dans l'arborescence du catalogue, le taux de TVA est automatiquement mis à jour à la sélection ou au changement d'une famille ou catégorie. 
                — [KEY: Nature] : Définissez s'il s'agit d'un article de négoce (achat/revente - compte 707000), d'une production propre (compte 701000) ou d'une prestation de service (compte 706000).
                — [KEY: Éco-part (€)] : Montant de la taxe écologique inclus dans le prix TTC, ventilé distinctement sur les tickets et factures.
                
                [TIP]Propagation express aux déclinaisons : Sur un produit parent comportant des variantes, cliquez sur [BTN: Propager les prix aux déclinaisons] pour répercuter instantanément les 3 tarifs, la TVA et la comptabilité sur toutes ses variantes sans devoir les ouvrir une à une !
                `
        },
        {
            id: "fiche-article-logistique-stocks",
            title: "4. Fiche Article : Approvisionnement, stocks, colisage et douanes",
            // 📸 catalog_fiche_logistique_stocks.jpg : Onglet « Logistique » montrant le fournisseur, l'interrupteur de suivi de stock et les paramètres de PCB/MOQ.
            // 📸 catalog_fiche_contenance_unites.jpg : Sélecteur de type de contenant (pot, sac, bouteille) et unité de mesure avec validation métier.
            // 📸 catalog_fiche_douanes_dimensions.jpg : Grille des dimensions physiques (L x l x h), poids brut/net et codes douaniers HS.
            content:
                `
                L'onglet [KEY: Logistique] régit les conditions d'approvisionnement auprès de vos fournisseurs, le suivi des inventaires en rayon et les règles d'expédition pour les colis.
                
                [📸 catalog_fiche_logistique_stocks.jpg | lg]
                [T]Approvisionnement et conditions d'achat
                — [KEY: Fournisseur Principal] : Choisissez le grossiste rattaché à cet article.
                — [KEY: Réf. Catalogue Fournisseur] : La référence exacte figurant sur les bons de commande d'achat et factures du fournisseur.
                — [KEY: Colisage (PCB)] : Nombre d'unités conditionnées par carton ou barquette d'origine (ex : carton de 12 pièces). Lors des commandes d'achat, TipTac ajuste automatiquement les quantités commandées par multiples du PCB.
                — [KEY: Minimum de Commande (MOQ)] : Seuil d'achat minimum imposé par le grossiste pour cette référence.
                — [KEY: Bloquer le réassort (Fin de série)] : Cochez cette case pour signaler que le produit ne doit plus être réapprovisionné tout en continuant à vendre le stock restant en magasin.
                
                [T]Suivi des stocks et alerte de rupture
                Activez l'interrupteur [KEY: Activer le Suivi de Stock] :
                — Le champ [KEY: Stock Magasin] affiche la quantité physique théorique disponible.
                — [KEY: Alerte Rupture] : Définissez le seuil d'alerte en unités (par exemple 5). Dès que le stock descend à cette valeur ou en dessous, le badge de stock s'illumine en orange dans le catalogue et en caisse pour commander du réassort.
                — [KEY: Emplacement / Rayon en magasin] : Indiquez l'allée ou l'étagère de stockage (ex : « Serre Froide », « Allée C-4 ») pour faciliter le picking des commandes et les inventaires.
                
                [WARNING]Désactivation sécurisée du stock : Si vous décochez le suivi de stock alors que l'article possède des pièces en rayon, TipTac intercepte l'opération et vous propose de purger automatiquement les unités restantes via un mouvement de sortie tracé afin de préserver l'exactitude de votre bilan comptable.
                
                [📸 catalog_fiche_contenance_unites.jpg | right | md]
                [T]Conditionnement et matrice de compatibilité
                Ces informations garantissent le calcul légal des prix au kilo et au litre sur vos étiquettes :
                — [KEY: Type de Contenant] : Pot, Sac, Bouteille, Barquette, Big bag, Godet, Conteneur, Boîte...
                — [KEY: Unité de Mesure] : Litre (L), Kilogramme (kg), Pièce (u), Mètre carré (m²)...
                — [KEY: Contenance / Valeur] : Saisissez la contenance numérique (ex : « 50 » pour un sac de 50 L).
                
                [ST]Bouclier logique de cohérence :
                TipTac vérifie en temps réel la compatibilité entre le contenant et l'unité choisie. Si vous associez une unité illogique (par exemple attribuer des litres à une botte ou des kilogrammes à un film plastique), un encadré rouge vous avertit immédiatement pour éviter toute incohérence sur vos affichages de prix en linéaire.
                [CLEAR]
                
                [📸 catalog_fiche_douanes_dimensions.jpg | lg]
                [T]Poids, gabarit d'expédition et douanes
                — [KEY: Gabarit Expédition] : Classez l'article en gabarit [KEY: STANDARD] (colis classique), [KEY: ENCOMBRANT] (arbres, mobilier) ou [KEY: PALETTE] pour conditionner les modes de transport sur votre boutique en ligne TipTac [PLAN: PLAN COMMERCE].
                — [KEY: Poids Net et Poids Brut (kg)] : Poids du produit nu et poids avec son emballage d'expédition.
                — [KEY: Longueur, Largeur et Hauteur (cm)] : Dimensions physiques du produit.
                — [KEY: Pays d'Origine] : Pays de fabrication ou de récolte (sélectionné dans la liste normalisée des pays du monde).
                — [KEY: Code Douanier (HS Code)] : Nomenclature tarifaire internationale à 8 ou 10 chiffres (ex : 06012090), indispensable pour l'édition de factures d'exportation conformes.
                `
        },
        {
            id: "fiche-article-declinaisons-matrix",
            title: "5. Fiche Article : Générateur de déclinaisons matricielles (Matrix PIM)",
            // 📸 catalog_matrice_creation_axes.jpg : Onglet « Générateur d'Axes » montrant la création des axes (Taille, Litrage, Variété) avec leurs valeurs séparées par virgules.
            // 📸 catalog_matrice_tableau_declinaisons.jpg : Tableau des déclinaisons générées avec miniature photo, sélecteur de couleurs, prix TTC et jauge d'allocation de stock.
            // 📸 catalog_matrice_nuancier_couleurs_dropdown.jpg : Menu déroulant du nuancier de couleurs sur une variante permettant de sélectionner jusqu'à 4 teintes combinées.
            content:
                `
                Le module de déclinaisons transforme un article simple en un « Dossier Parent » regroupant plusieurs références physiques distinctes selon un ou plusieurs axes de variation (Tailles, Volumes, Couleurs, Parfums).
                
                [📸 catalog_matrice_creation_axes.jpg | lg]
                [T]Création des axes de variation
                Dans l'onglet [KEY: Générateur d'Axes], activez l'interrupteur « Activer les déclinaisons » :
                1. Renseignez le [KEY: Nom technique de l'axe] (ex : « Taille », « Litrage » ou « Variété »).
                2. Définissez le [KEY: Libellé d'affichage Web] destiné aux acheteurs en ligne (ex : « Choisissez votre litrage »).
                3. Saisissez l'ensemble des options dans le champ [KEY: Valeurs], en les séparant par des virgules (ex : « 10L, 20L, 50L » ou « Rouge, Bleu, Vert »).
                4. Cliquez sur [BTN: Ajouter un axe] pour croiser plusieurs dimensions si nécessaire (ex : Axe 1 « Taille : S, M, L » et Axe 2 « Couleur : Noir, Blanc »).
                
                Cliquez sur le bouton [BTN: Générer les références] : le moteur calcule le produit cartésien et engendre automatiquement toutes les variantes physiques.
                [TIP]Moteur de fusion intelligente (Smart Merge) : Si vous ajoutez un axe supplémentaire sur un produit comportant déjà des déclinaisons, TipTac préserve précieusement les variantes existantes sans écraser leurs prix, leurs codes-barres ou leurs stocks !
                
                [📸 catalog_matrice_tableau_declinaisons.jpg | lg]
                [T]Tableau des déclinaisons et jauge d'allocation de stock
                Chaque déclinaison physique dispose de ses propres paramètres dans la grille :
                — [KEY: Visuel] : Cliquez sur le cadre photo pour importer une image spécifique à cette variante.
                — [KEY: Désignation et Référence] : Libellé auto-généré combinant le nom du parent et les options de l'axe (ex : « Pot Terre Cuite - 20 cm »).
                — [KEY: Prix de Vente TTC] : Ajustable individuellement pour chaque déclinaison (ex : le 10L à 6,90 € et le 50L à 18,50 €).
                
                [ST]La Jauge de Répartition de Stock (Transformation d'un article existant) :
                Si vous transformez en dossier parent un article qui possédait déjà du stock physique en magasin (par exemple 20 unités) :
                — Le système bloque la sauvegarde et affiche un bandeau orange d'alerte « Répartition du stock ».
                — Vous devez ventiler ces 20 unités entre les différentes déclinaisons créées (ex : 5 en taille S, 10 en taille M, 5 en taille L).
                — Dès que le solde non alloué atteint zéro, la jauge s'illumine en vert [KEY: 20 / 20] et débloque l'enregistrement : TipTac crée les entrées de stock sur chaque variante et purge automatiquement l'ancien stock du parent.
                
                [📸 catalog_matrice_nuancier_couleurs_dropdown.jpg | right | md]
                [T]Nuancier multi-couleurs sur les variantes
                Cliquez sur la pastille circulaire d'une déclinaison pour ouvrir le nuancier :
                — Vous pouvez cocher jusqu'à 4 nuances simultanément : la pastille se transforme dynamiquement en un dégradé bicolore ou tricolore éclatant.
                — L'option [KEY: Mélange] applique un dégradé multicolore pour les assortiments.
                — Les couleurs sélectionnées s'injectent automatiquement dans le tableau des caractéristiques web pour activer les filtres de recherche sur votre boutique en ligne.
                [CLEAR]
                
                [T]Règles strictes d'héritage Parent / Déclinaison
                Pour maintenir la cohérence de votre gestion :
                — [KEY: Héritage Strict (Verrouillé)] : Le rayon, la catégorie, le taux de TVA, le mode de suivi des stocks et le compte comptable sont strictement dictés par le parent et verrouillés sur les variantes avec une icône de cadenas.
                — [KEY: Héritage Souple (Personnalisable)] : Les dimensions, le poids, les photos, le fournisseur, les tarifs d'achat et les documents PDF peuvent être personnalisés par variante. Si un champ est laissé vide sur la déclinaison, c'est automatiquement la valeur du parent qui s'applique par défaut.
                `
        },
        {
            id: "fiche-article-ecommerce-seo",
            title: "6. Fiche Article : E-commerce, rédaction SEO par IA et ventes croisées",
            // 📸 catalog_web_interrupteur_publication.jpg : Interrupteur principal de publication web avec choix du retrait magasin et de la livraison.
            // 📸 catalog_web_assistant_ia_bouton.jpg : Bouton « Rédiger via IA » générant le titre H1, la description marketing et les mots-clés optimisés.
            // 📸 catalog_web_galerie_drag_and_drop.jpg : Galerie photos avec glisser-déposer pour réorganiser l'ordre et bouton étoile pour élire la photo principale.
            // 📸 catalog_web_cross_selling_recommandations.jpg : Bloc des Ventes Croisées avec recherche de produits liés et bouton « Suggérer via IA ».
            content:
                `
                L'onglet [KEY: E-commerce] administre l'affichage de votre produit sur votre site de vente en ligne TipTac Cloud et configure son référencement naturel sur les moteurs de recherche.
                
                L'accès aux fonctionnalités e-commerce et à l'intelligence artificielle requiert un abonnement [PLAN: COMMERCE] ou supérieur.
                
                [📸 catalog_web_interrupteur_publication.jpg | lg]
                [T]Publication et canaux de remise
                — Cliquez sur le grand bandeau supérieur [KEY: Publier sur le site E-commerce] pour rendre l'article visible et achetable par vos clients.
                — [KEY: Retrait Magasin (Click & Collect)] : Cochez cette option pour autoriser le retrait gratuit au comptoir de votre boutique.
                — [KEY: Livraison Domicile] : Activez l'expédition par colis ou transporteur.
                — [KEY: Gestion Rupture Web] : Choisissez le comportement en cas de stock épuisé en magasin : [KEY: Cacher si épuisé] (masque le produit), [KEY: Afficher Épuisé] (visible mais bouton d'achat grisé) ou [KEY: Vente illimitée].
                — [KEY: Réserve Magasin] : Définissez un stock de sécurité (ex : 2 unités). Si votre stock magasin descend à 2 pièces, le site web bascule automatiquement en rupture pour éviter qu'un internaute n'achète un article simultanément pris en main par un client dans les rayons physiques.
                — [KEY: Dates de publication éphémères] : Programmez une date de début et de fin (ex : opération Fête des Mères) pour masquer automatiquement le produit sans intervention manuelle.
                
                [📸 catalog_web_galerie_drag_and_drop.jpg | right | md]
                [T]Galerie photos et réorganisation par glisser-déposer
                — Déposez vos fichiers images (format JPG, PNG ou WEBP) dans la zone d'ajout : elles sont automatiquement converties en WebP haute performance pour accélérer le chargement sur smartphone.
                — Glissez-déposez les cartes photos pour modifier leur ordre d'affichage.
                — La première photo porte le badge bleu [KEY: PRINCIPALE]. Cliquez sur l'icône [ICON: Star | 20] d'une autre image pour l'élire comme photo de couverture.
                — Cliquez sur n'importe quelle miniature pour l'afficher en plein écran avec zoom haute définition.
                [CLEAR]
                
                [📸 catalog_web_assistant_ia_bouton.jpg | left | sm]
                [T]Rédaction SEO assistée par IA (Assistant PIM)
                Dès qu'au moins une photo est attachée au produit, le bouton violet [BTN: Rédiger via IA] s'active :
                L'intelligence artificielle analyse visuellement votre image, le nom de l'article et ses caractéristiques techniques pour composer instantanément :
                1. Un [KEY: Titre Web (H1)] percutant et commercial.
                2. Une [KEY: Description détaillée] riche, structurée et vendeuse.
                3. Une [KEY: URL personnalisée (Slug)] propre pour le référencement.
                4. Une série de [KEY: Mots-clés / Tags Web] séparés par des virgules pour le moteur de recherche du site.
                5. Les balises [KEY: Meta Title] et [KEY: Meta Description] optimisées pour le positionnement sur Google.
                [CLEAR]
                
                [📸 catalog_web_cross_selling_recommandations.jpg | lg]
                [T]Ventes Croisées (Cross-Selling / Recommandations)
                Augmentez le panier moyen de votre boutique en associant jusqu'à 4 articles complémentaires (« Vous aimerez aussi... ») :
                — Utilisez la barre de recherche pour ajouter manuellement des produits (ex : associer un sac de terreau et un arrosoir à une plante d'intérieur).
                — Ou cliquez sur [BTN: Suggérer via IA] : l'assistant étudie la catégorie de votre produit et sélectionne automatiquement les articles les plus pertinents de votre stock local !
                `
        },
        {
            id: "fiche-article-specs-docs-historique",
            title: "7. Fiche Article : Fiches botaniques, caractéristiques, notices PDF et rentabilité",
            // 📸 catalog_tech_dictionnaire_botanique.jpg : Bloc « Végétal & Réglementaire » avec barre de recherche reliant la plante au dictionnaire horticole.
            // 📸 catalog_tech_caracteristiques_filtres.jpg : Tableau des caractéristiques techniques avec glisser-déposer, valeurs natives et visibilité œil.
            // 📸 catalog_tech_documents_pdf.jpg : Zone d'ajout de documents PDF (notices de montage, FDS, garanties) avec interrupteur public/privé.
            // 📸 catalog_historique_rentabilite_kpis.jpg : Onglet « Historique » avec bandeau des indicateurs (Rythme par semaine, Quantité vendue, CA TTC, Marge brute) et journal des tickets.
            content:
                `
                Les deux derniers onglets de la fiche produit gèrent la traçabilité documentaire, la conformité réglementaire et l'audit financier des ventes passées.
                
                [📸 catalog_tech_dictionnaire_botanique.jpg | lg]
                [T]Dictionnaire Botanique et Fiches Conseils [PLAN: Option VegApp requise]
                Pour les pépinières, fleuristes et jardineries :
                — Tapez les premières lettres du nom usuel ou du nom latin dans le champ de recherche horticole : le système interroge l'encyclopédie végétale et relie la plante d'un clic.
                — La liaison injecte automatiquement l'illustration botanique officielle, le nom latin certifié, les pictogrammes de culture (exposition, besoin en eau, rusticité en °C) et coche automatiquement le [KEY: Passeport Phyto].
                — Cochez [KEY: Traçabilité & DLC] pour les produits soumis à une date limite de consommation ou à un suivi de lot obligatoire.
                
                [📸 catalog_tech_caracteristiques_filtres.jpg | right | md]
                [T]Caractéristiques Web et Filtres à facettes
                Ce tableau modulaire alimente la fiche technique et les filtres de recherche de votre boutique e-commerce :
                — [KEY: Données Natives Automatiques] : TipTac extrait et met en forme automatiquement les données déjà renseignées sur l'article (Marque, Pays d'origine, Dimensions, Conditionnement, Prix au litre ou au kilo, Éco-participation).
                — [KEY: Lignes Personnalisées] : Cliquez sur [BTN: + Ligne] pour créer des attributs sur-mesure (ex : « Matière : Céramique émaillée », « Garantie : 5 ans »).
                — [KEY: Sections] : Cliquez sur [BTN: + Section] pour compartimenter l'affichage (ex : « Dimensions & Poids », « Entretien »).
                — Utilisez les poignées verticales pour réorganiser l'ordre d'affichage, et cliquez sur l'icône d'œil [ICON: Eye | 14] pour afficher ou masquer une caractéristique sur le web.
                [CLEAR]
                
                [📸 catalog_tech_documents_pdf.jpg | left | md]
                [T]Documents, Notices et Fiches de Sécurité (PDF)
                Téléversez des fichiers numériques attachés au produit :
                — Glissez vos documents (formats acceptés : PDF, Word).
                — Qualifiez la nature du fichier : [KEY: Fiche Technique], [KEY: Notice / Manuel], [KEY: Fiche de Sécurité (FDS)] ou [KEY: Garantie].
                — Cochez [KEY: Public] pour que le document soit téléchargeable librement par les internautes sur la fiche article de votre site web.
                [CLEAR]
                
                [📸 catalog_historique_rentabilite_kpis.jpg | lg]
                [T]Onglet Historique : Analyse en direct de la rentabilité
                Dès qu'un article a enregistré des ventes, cet onglet consolide ses performances commerciales sans quitter sa fiche :
                [ST]Le bandeau de rentabilité supérieur :
                — [KEY: Rythme] : Cadence moyenne de vente hebdomadaire (ex : « 4.2 /sem »).
                — [KEY: Qté vendue] : Cumul total des unités passées en caisse.
                — [KEY: CA TTC] : Chiffre d'affaires brut généré par le produit.
                — [KEY: Marge] : Bénéfice net en euros dégagé par les ventes (calculé sur la différence réelle entre prix de vente net et prix d'achat HT).
                
                [ST]Le journal chronologique des ventes :
                Détaille les 50 dernières transactions : date et heure précises, nom du client (avec distinction des comptes pros B2B), quantités vendues, remises promotionnelles appliquées, marge nette dégagée par la ligne et nom du vendeur ayant encaissé la vente.
                `
        },
        {
            id: "ecommerce-hub-scoring-ia",
            title: "8. Assistant E-commerce : Scoring analytique, mines d'or et publication en 1 clic",
            // 📸 catalog_hub_trois_colonnes.jpg : Vue générale de l'EcommerceHub avec les 3 colonnes de tri (Alertes Web rouge, Mines d'Or jaune, Prêts à publier vert).
            // 📸 catalog_hub_glisser_deposer_photo.jpg : Carte d'un produit en surbrillance bleue lors du glisser-déposer direct d'une photo depuis l'ordinateur.
            // 📸 catalog_hub_bouton_tout_publier.jpg : Gros plan sur le bouton « Tout publier » au sommet de la colonne verte avec jauge de progression en temps réel.
            // 📸 catalog_hub_modale_exclusions.jpg : Modale des « Filtres d'exclusion PIM » permettant de masquer définitivement certains rayons ou fournisseurs de l'assistant.
            content:
                `
                Accessible depuis la barre latérale sous le libellé « Assistant E-commerce », cet outil agit comme une tour de contrôle intelligente pour animer votre catalogue web et décupler vos ventes en ligne.
                
                Ce module analyse en permanence votre stock physique pour détecter les opportunités marchandes et réparer les anomalies.
                
                [📸 catalog_hub_trois_colonnes.jpg | lg]
                [T]Scoring analytique en 3 colonnes de flux
                L'écran ventile automatiquement votre catalogue selon son niveau de maturité web :
                
                [ST]1. Colonne Rouge : Alertes Web
                Liste les articles actuellement en ligne qui présentent un risque commercial ou une anomalie :
                — [KEY: Prix à 0 €] ou tarif non renseigné.
                — [KEY: Rupture de stock physique] : le produit est vendu en ligne alors que les rayons du magasin sont vides.
                — [KEY: Fin de série] : réassort bloqué chez le fournisseur.
                — [KEY: Publication expirée ou imminente] : date limite dépassée.
                Un bouton rapide permet de retirer immédiatement l'article du site d'un simple clic pour protéger votre image.
                
                [ST]2. Colonne Jaune : Mines d'Or (À optimiser)
                Identifie les produits en stock dans votre magasin qui possèdent un fort potentiel commercial mais qu'il est impossible de vendre en ligne car la fiche est incomplète :
                — Badge [KEY: Photo manquante] : il ne manque qu'un visuel pour lancer la vente.
                — Badge [KEY: SEO manquant] : l'article a une photo mais manque de texte descriptif.
                — Les cartes sont triées par valeur financière décroissante : les articles représentant le plus gros volume d'argent immobilisé apparaissent tout en haut !
                
                [ST]3. Colonne Verte : Prêts à publier
                Rassemble les fiches parfaites à 100 % (dotées d'une photo, d'un descriptif complet, d'un prix de vente valide et d'un stock physique disponible en rayon).
                
                [📸 catalog_hub_glisser_deposer_photo.jpg | right | md]
                [T]Enrichissement photo par Glisser-Déposer express
                Vous n'avez pas besoin d'ouvrir les fiches produits pour ajouter des images :
                Glissez simplement un fichier image (JPG, PNG) depuis le bureau de votre ordinateur et déposez-le directement sur la carte jaune d'un produit dans la colonne « Mines d'Or » :
                — Le système compresse l'image en WebP optimisé.
                — Il la téléverse en tâche de fond et l'associe instantanément au produit.
                — La carte quitte immédiatement la colonne jaune pour rejoindre la colonne verte des produits prêts à être vendus !
                [CLEAR]
                
                [📸 catalog_hub_bouton_tout_publier.jpg | left | sm]
                [T]Publication individuelle ou en masse
                — Sur chaque carte verte, cliquez sur [BTN: Publier en 1 clic] pour mettre l'article en ligne instantanément.
                — Ou cliquez sur le grand bouton [BTN: Tout publier] au sommet de la colonne verte : TipTac traite l'ensemble des articles éligibles en rafale avec une jauge de progression en direct (ex : « Publication (14/35)... »).
                [CLEAR]
                
                [📸 catalog_hub_modale_exclusions.jpg | lg]
                [T]Filtres d'exclusions globales persistants
                Certains articles de votre magasin n'ont pas vocation à être vendus sur internet (ex : sachets de graines à 0,50 €, fournitures d'atelier, produits pondéreux non transportables).
                Cliquez sur [BTN: Filtres globaux] en haut à droite :
                — Cochez des rayons ou des catégories entières pour les exclure définitivement de l'assistant.
                — Excluez des fournisseurs ou des classes logistiques précises.
                — Les articles exclus ne pollueront plus jamais votre colonne des « Mines d'Or », concentrant vos efforts sur les produits à forte rentabilité.
                `
        },
        {
            id: "integration-factures-bl-ia-oms",
            title: "9. Réconciliation de factures et bons de livraison par IA (Smart Invoice OMS)",
            // 📸 catalog_smart_invoice_upload.jpg : Écran de téléversement acceptant les factures et bons de livraison en PDF, images ou fichiers texte.
            // 📸 catalog_smart_invoice_etape1_tiers.jpg : Étape 1 de validation du fournisseur avec calcul automatique des frais d'approche et de transport.
            // 📸 catalog_smart_invoice_etape2_pim.jpg : Étape 2 de création des nouveaux articles avec traduction française, marges et auto-génération des EAN.
            // 📸 catalog_smart_invoice_etape3_revision_prix.jpg : Étape 3 de révision tarifaire montrant les hausses de prix d'achat (▲) et les propositions de nouveaux prix TTC.
            // 📸 catalog_smart_invoice_etape4_logistique_stock.jpg : Étape 4 de contrôle logistique des quantités reçues avec validation de l'entrée en stock physique.
            content:
                `
                Le composant « Smart Invoice » révolutionne le traitement des livraisons fournisseurs en automatisant le rapprochement entre vos documents administratifs (factures, bons de livraison papier ou numériques) et votre base de données locale grâce à la vision par IA.
                
                Accessible depuis le sous-menu « Mise à jour Catalogue », ce module requiert le forfait [PLAN: CONNECT] ou supérieur.
                
                [📸 catalog_smart_invoice_upload.jpg | lg]
                [T]Analyse intelligente des documents
                Déposez votre document dans la zone d'analyse :
                — Accepte les fichiers [KEY: PDF originaux], les [KEY: Photos ou scans] de bons de livraison papier, ou les fichiers texte/CSV.
                [WARNING] Les tableurs comme Excel [KEY: .xls], [KEY: .xlsx], OpenOffice [KEY: .odf] ne peuvent pas être traités par l'IA.
                — L'IA déchiffre la mise en page du grossiste, identifie le tiers émetteur, extrait chaque ligne d'article avec sa référence et compare le contenu avec votre catalogue local.
                
                [TIP] L'analyse d'un document par l'IA peut prendre de quelques secondes à plusieurs minutes en fonction du nombre de références. Il est conseillé d'analyser une page à la fois si le document comporte plus de 30 références.
                
                Le workflow de réconciliation se déroule en 4 étapes fluides :

                [📸 catalog_smart_invoice_etape1_tiers.jpg | right | md]
                [T]Étape 1 : Validation du Tiers et Frais d'approche
                — L'IA détecte si le fournisseur existe déjà dans votre annuaire ou prépare la création d'une nouvelle fiche (nom, SIRET, code trigramme).
                — [KEY: Frais d'Approche / Transport (%)] : Renseignez le pourcentage de frais de port facturé par le grossiste (ex : 5 %). Ce taux viendra automatiquement majorer le coût de revient de chaque article lors du calcul de votre prix de vente conseillé.
                [CLEAR]
                
                [📸 catalog_smart_invoice_etape2_pim.jpg | lg]
                [T]Étape 2 : Création des nouveaux articles (PIM)
                Pour chaque référence inconnue en magasin, l'IA pré-remplit une fiche catalogue complète :
                — Traduit les libellés abrégés ou en langue étrangère en désignations commerciales claires.
                — Suggère le rayon et la catégorie correspondants.
                — Calcule automatiquement un prix de vente TTC psychologique (terminaison en .95 € ou .90 €) basé sur la marge cible de la catégorie.
                — Extrait les contenances, unités, poids et le code douanier.
                — Cochez [KEY: Auto-générer les EAN manquants] pour doter instantanément chaque nouveau produit d'un code-barres scannable en caisse (requière d'avoir défini préalablement le préfixe EAN de l'établissement).
                
                [📸 catalog_smart_invoice_etape3_revision_prix.jpg | left | md]
                [T]Étape 3 : Révision tarifaire des articles existants
                Sur les produits déjà référencés dans votre magasin, le système repère les variations de tarif d'achat HT :
                — Met en évidence les hausses de tarif avec un badge rouge [KEY: ▲] et les baisses avec un badge vert [KEY: ▼].
                — Calcule automatiquement un nouveau prix de vente TTC pour maintenir votre coefficient de marge commerciale.
                — Cochez ou décochez les lignes à appliquer : les nouveaux tarifs écrasent l'ancien prix et sont consignés dans la file d'attente d'impression des étiquettes de linéaire.
                [CLEAR]
                
                [📸 catalog_smart_invoice_etape4_logistique_stock.jpg | right | md]
                [T]Étape 4 : Contrôle logistique et entrée en stock
                La dernière étape récapitule les volumes physiques reçus :
                — Ajustez les quantités réelles en cas de litige ou de colis manquant.
                — Cliquez sur [BTN: Valider l'Entrée en Stock] : TipTac incrémente instantanément le stock théorique de l'ensemble des articles en magasin.
                — Vous pouvez également choisir [BTN: Ignorer le stock] pour mettre à jour uniquement les fiches et les prix sans modifier les stocks informatiques.
                [CLEAR]
                `
        },
        {
            id: "import-export-sauvegardes-catalogue",
            title: "10. Importation tableur CSV/Excel et sauvegardes exhaustives",
            // 📸 catalog_datasync_trois_blocs.jpg : Écran principal de mise à jour catalogue présentant les blocs Import standard, Smart Invoice et Export complet.
            // 📸 catalog_import_mappage_colonnes.jpg : Grille d'association des colonnes du fichier Excel avec les champs de base de données de TipTac.
            // 📸 catalog_import_apercu_indicateurs.jpg : Tableau de prévisualisation avec icônes de création verte (+) ou de mise à jour bleue (↻) et alertes de rayons inconnus.
            content:
                `
                Le module « Import & Export » (accessible dans le menu Catalogue sous le libellé « Mise à jour Catalogue ») permet de charger des grilles tarifaires de grossistes ou de générer des sauvegardes de sécurité complètes de votre assortiment.
                
                [📸 catalog_datasync_trois_blocs.jpg | lg]
                [T]Importation par fichier plat (.xlsx, .xls, .csv)
                Déposez votre fichier tableur dans le module d'import standard :
                [ST]Auto-matching intelligent des en-têtes :
                Le moteur examine la première ligne du document et associe automatiquement vos colonnes aux champs du logiciel (Référence, EAN, Libellé, Marque, Famille, Catégorie, Achat HT, Vente TTC, TVA, Poids, PCB, Douanes, Web...).
                
                [📸 catalog_import_mappage_colonnes.jpg | right | md]
                [ST]Création automatique de dossiers parents (Masters) :
                Si votre fichier comporte une colonne [KEY: parent_ref], TipTac détecte les relations :
                Si le parent n'existe pas encore dans la base, le logiciel crée automatiquement le dossier maître correspondant et lui rattache la déclinaison lors de l'injection.
                [CLEAR]
                
                [📸 catalog_import_apercu_indicateurs.jpg | left | md]
                [ST]Détection des anomalies et nouvelles familles :
                L'écran d'aperçu prévient les erreurs de frappe :
                — Une icône [ICON: Plus | 20 | text-green-600] indique un article nouveau qui sera créé.
                — Une icône bleue [ICON: RefreshCcw | 20 | text-blue-600 ] signale un article existant reconnu par son identifiant unique ou sa référence qui sera mis à jour.
                — Si le fichier mentionne un rayon ou une catégorie qui n'existe pas dans votre magasin, un encadré rouge vous avertit qu'une nouvelle rubrique sera créée à la volée.
                [CLEAR]
                
                [WARNING]Bouclier anti-écrasement de stock : Pour protéger la rigueur de vos inventaires comptables, la colonne « stock_actuel » est formellement bannie du protocole d'importation standard. L'injection d'un fichier tableur met à jour vos prix et descriptifs mais n'écrase jamais le stock physique présent dans vos rayons.
                
                [T]Purger un champ avec le mot-clé #VIDE
                Si vous souhaitez effacer une valeur existante (par exemple vider une description, retirer une marque ou supprimer une pastille de couleur), inscrivez le texte [KEY: #VIDE] dans la cellule Excel correspondante : TipTac interprète ce code comme une consigne explicite d'effacement sans toucher aux autres attributs.
                
                [T]Sauvegarde et Exportation complète du catalogue
                Cliquez sur [BTN: Exporter le Catalogue] :
                Le logiciel génère un fichier tableur CSV exhaustif comportant les 60 colonnes techniques de votre base (identifiants immuables [KEY: cloud_id], prix, stocks, paramètres e-commerce, données phytosanitaires et logistiques). Les dossiers maîtres virtuels sont automatiquement filtrés pour vous fournir une extraction comptable nette de vos articles physiques réels.
                `
        },
        {
            id: "demandes-articles-clients-caisse",
            title: "11. Cahier de demandes clients au comptoir et suivi des besoins",
            // 📸 catalog_demande_client_modale.jpg : Modale de saisie d'une demande client au comptoir avec recherche produit ou saisie libre et coordonnées de l'acheteur.
            // 📸 catalog_demandes_rapport_suivi.jpg : Tableau de bord des demandes clients dans l'administration avec statuts (En attente, Commandée, Reçue, Avertie).
            content:
                `
                Lorsqu'un client recherche un produit en rupture temporaire ou réclame une référence non présente en magasin (plante rare, taille spécifique, pièce détachée), le personnel peut consigner son souhait en quelques secondes sans bloquer l'encaissement.
                
                [📸 catalog_demande_client_modale.jpg | lg]
                [T]Saisie express au comptoir
                Accessible depuis l'écran de caisse ou la barre d'outils via le bouton [BTN: Demande Client] :
                [ST]1. Produit recherché :
                — Tapez quelques lettres : le moteur recherche dans votre catalogue local (en incluant toutes les déclinaisons des dossiers maîtres). Si l'article existe, sélectionnez-le pour lier son identifiant et son prix indicatif.
                — S'il s'agit d'un produit totalement inconnu, saisissez librement sa désignation en texte clair.
                — Renseignez la [KEY: Quantité souhaitée] et la [KEY: Date souhaitée] (date limite avant laquelle le client a besoin du produit).
                
                [ST]2. Coordonnées de l'acheteur :
                — Si un client est déjà identifié sur le ticket en cours, ses coordonnées (Nom, Prénom, Téléphone, E-mail) sont pré-remplies automatiquement.
                — Sinon, utilisez la barre de recherche client pour rattacher sa fiche CRM, ou composez directement son numéro de portable pour l'avertir lors de la réception.
                
                Cliquez sur [BTN: Valider la demande] : le souhait est enregistré en base locale et horodaté avec l'identifiant du vendeur.
                
                [📸 catalog_demandes_rapport_suivi.jpg | right | md]
                [T]Pilotage et suivi des demandes dans le Back-Office
                Dans le sous-menu [KEY: Demandes Clients] de l'univers Catalogue :
                — Les responsables de rayon et acheteurs visualisent la liste chronologique des attentes de la clientèle pour guider leurs commandes d'approvisionnement fournisseurs.
                — Suivez l'avancement selon les statuts officiels : [KEY: En attente], [KEY: Commandée], [KEY: Reçue en magasin], [KEY: Client prévenu] ou [KEY: Clôturée].
                — Si vos disposez d'un forfait [PLAN: Connect] ou supérieur, les demandes sont synchronisées en tâche de fond avec le Cloud pour permettre à la direction d'arbitrer les besoins d'assortiment de l'enseigne.
                [CLEAR]
                `
        }
    ]
};