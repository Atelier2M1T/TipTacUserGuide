export default {
    id: "WEBSETTINGS_MANAGER",
    title: "Boutique en Ligne & Site Web",
    category: "TipTacCloud",
    iconName: "Globe",
    color: "text-[#1e4e58]",
    articles: [
        {
            id: "site-web-identite-coordonnees-seo",
            title: "1. Identité du site, coordonnées publiques, réseaux sociaux et SEO",
            // 📸 web_general_coordonnees.jpg : Formulaire d'identité du site montrant le nom d'enseigne, le slogan d'accueil, les contacts et l'adresse.
            // 📸 web_general_logos_favicon.jpg : Zone de téléversement du logo public et du favicon avec prévisualisation.
            // 📸 web_general_reseaux_contact.jpg : Paramétrage des 6 réseaux sociaux et des adresses d'acheminement du formulaire de contact.
            // 📸 web_general_seo_partage.jpg : Configuration du référencement Google (méta-titre, méta-description) et image de partage pour les réseaux.
            content:
                `
                Le sous-onglet « Général » administre la vitrine publique de votre entreprise sur Internet. Les données renseignées alimentent l'en-tête de votre site, son moteur de recherche et les coordonnées de contact présentées aux internautes.
                
                L'administration de la boutique en ligne s'effectue depuis la console d'administration centrale et requiert un rôle [PERM: Admin].
                
                [📸 web_general_coordonnees.jpg | lg]
                [T]Enseigne publique et coordonnées de contact
                Renseignez les données visibles par vos visiteurs :
                — [KEY: Nom d'enseigne] : Nom public mis en évidence sur votre site et dans les e-mails de confirmation.
                — [KEY: Slogan d'accueil] : Phrase d'accroche disposée sous votre logo.
                — [KEY: Téléphone & E-mail public] : Coordonnées directes cliquables pour les appels et demandes de renseignements.
                — [KEY: Adresse du site web] : URL officielle de votre boutique (ex : https://www.maboutique.fr), injectée dans les liens de vos courriels.
                — [KEY: Adresse postale] : N° et voie, code postal et commune du siège ou du magasin principal.
                
                [📸 web_general_logos_favicon.jpg | right | md]
                [T]Identité visuelle : Logo et Favicon
                — [KEY: Logo du Magasin] : Cliquez sur [BTN: Parcourir] pour téléverser votre visuel officiel. Le système optimise le fichier et génère son adresse publique sécurisée.
                — [KEY: Icône du site (Favicon)] : Image au format carré s'affichant dans l'onglet des navigateurs web de vos clients.
                [CLEAR]
                
                [📸 web_general_reseaux_contact.jpg | left | md]
                [T]Réseaux sociaux et formulaires de contact
                — [KEY: Réseaux Sociaux Globaux] : Renseignez les adresses de vos pages [KEY: Facebook], [KEY: Instagram], [KEY: WhatsApp], [KEY: TikTok], [KEY: Pinterest] et [KEY: Messenger]. Ces liens créent les accès directs en pied de page.
                — [KEY: Acheminement des e-mails de contact] : Définissez les boîtes de réception destinataires des messages envoyés par les clients selon l'objet de leur demande : [KEY: Question générale], [KEY: SAV / Réclamation], [KEY: Suivi de commande] ou [KEY: Partenariats B2B].
                [CLEAR]
                
                [📸 web_general_seo_partage.jpg | lg]
                [T]Référencement naturel (SEO) et partages sociaux
                Optimisez la visibilité de votre boutique sur les moteurs de recherche :
                — [KEY: Méta-titre de la page d'accueil] : Titre bleu affiché dans les résultats Google (entre 50 et 60 caractères recommandés).
                — [KEY: Méta-description] : Résumé engageant affiché sous le titre dans Google (150 à 160 caractères).
                — [KEY: Image de partage social] : Téléversez une photo grand format (1200x630 px conseillés) qui s'affichera automatiquement lors du partage de votre adresse web sur Facebook, WhatsApp ou LinkedIn.
                
                [T]Mesure d'audience et traceurs
                Dans le bloc des paramètres techniques, renseignez vos identifiants d'analyse :
                — [KEY: Google Analytics] : Identifiant de suivi pour mesurer les visites de votre boutique.
                — [KEY: Pixel Meta / Facebook] : Clé de suivi pour mesurer l'efficacité de vos campagnes publicitaires.
                — [KEY: Avis Google Maps] : Renseignez l'identifiant Google de votre établissement pour afficher vos étoiles et diriger vos clients vers vos avis vérifiés.
                
                [T]Bandeau d'alerte ou de promotion défilant
                Activez l'interrupteur [KEY: Bandeau d'Alerte Défilant] pour diffuser une information prioritaire au sommet de votre site (ex : « Portes ouvertes ce week-end ! », « Fermeture pour congés annuels »). Vous personnalisez librement le texte, la couleur d'arrière-plan et la teinte de la typographie.
                `
        },
        {
            id: "comportement-site-modes-vente",
            title: "2. Les 5 modes de site web et règles d'achat en ligne",
            // 📸 web_modes_comparatif_cartes.jpg : Grille de sélection des 5 modes de fonctionnement (Désactivé, Vitrine sans prix, Catalogue avec prix, Click & Collect, E-commerce complet).
            // 📸 web_mode_checklist_blocage.jpg : Modale d'avertissement affichant la liste des prérequis manquants pour activer un mode de vente.
            // 📸 web_mode_creneaux_retrait.jpg : Paramétrage des créneaux Click & Collect avec temps de préparation, durée de créneau et plafond de commandes.
            content:
                `
                TipTac s'adapte à votre stratégie commerciale grâce à 5 modes de fonctionnement distincts. Chaque magasin de votre réseau peut disposer de son propre mode sans impacter les autres points de vente.
                
                [📸 web_modes_comparatif_cartes.jpg | lg]
                [T]Les 5 modes de présence sur Internet
                [ST]1. Désactivé :
                Le site public est coupé ou le magasin est masqué des options de commande en ligne.
                
                [ST]2. Vitrine Sans Prix : [PLAN: CONNECT]
                Présente vos produits, vos rayons et vos prestations sans mentionner aucun tarif. Idéal pour les artisans ou activités sur devis.
                
                [ST]3. Catalogue + Prix : [PLAN: CONNECT]
                Affiche les articles, leurs descriptions, leurs photos et leurs tarifs publics, mais sans fonction de panier ni de commande.
                
                [ST]4. Click & Collect (Retrait en magasin exclusif) [PLAN: COMMERCE] :
                Permet aux clients de préparer et régler leur commande en ligne avant de venir la retirer en boutique physique.
                
                [ST]5. E-commerce Complet [PLAN: COMMERCE] :
                Boutique marchande intégrale combinant retrait magasin, points relais et expéditions à domicile avec paiement bancaire sécurisé.
                
                [📸 web_mode_checklist_blocage.jpg | right | md]
                [T]Contrôle automatique des prérequis légaux
                Pour vous prémunir contre tout litige administratif, le logiciel refuse d'activer un mode marchand si des éléments réglementaires font défaut.
                Un clic sur un mode non éligible ouvre une liste de contrôle détaillant les champs obligatoires à compléter avant mise en ligne :
                — Enseigne, e-mail et adresse postale.
                — SIRET ou RCS dans les mentions légales.
                — Conditions Générales de Vente (CGV) et Politique de Confidentialité (RGPD) enregistrées.
                — Au moins un horaire d'ouverture déclaré.
                — Passerelle de paiement ou encaissement sur place activé.
                [CLEAR]
                
                [📸 web_mode_creneaux_retrait.jpg | lg]
                [T]Organisation du Click & Collect et créneaux horaires
                Lorsque le retrait magasin est actif, configurez les règles de passage au comptoir :
                — [KEY: Délai de préparation] : Temps nécessaire à votre équipe pour assembler le colis avant la mise à disposition (1h, 2h, demi-journée ou 24h).
                — [KEY: Visibilité du calendrier] : Nombre de jours ouverts à la réservation à l'avance (ex : 14 jours).
                — [KEY: Durée d'un créneau] : Intervalle proposé au client lors du choix de l'horaire (15 min, 30 min ou 1h).
                — [KEY: Maximum de commandes par créneau] : Plafond de retraits autorisés par tranche horaire pour lisser les flux au comptoir et éviter l'attente.
                — [KEY: Jours de retrait autorisés] : Cochez les jours ouvrés durant lesquels le magasin remet des commandes en main propre.
                — [KEY: Instructions de retrait] : Consignes affichées au client sur le site et dans son e-mail (ex : « Présentez-vous à l'accueil du magasin avec votre numéro de commande »).
                `
        },
        {
            id: "moyens-paiement-en-ligne-caisse",
            title: "3. Passerelles de paiement en ligne et règlements au comptoir",
            // 📸 web_paiement_sur_place_caisse.jpg : Options des moyens de paiement acceptés au comptoir lors du retrait (CB, Espèces, Chèque, Titres restaurant).
            // 📸 web_paiement_passerelles_stripe_monetico.jpg : Menu déroulant du prestataire de paiement en ligne et encadré de configuration sécurisée Monetico.
            content:
                `
                TipTac gère la perception des règlements aussi bien au moment de la commande sur votre site qu'au comptoir lors de l'enlèvement des marchandises.
                
                [📸 web_paiement_sur_place_caisse.jpg | lg]
                [T]Règlement sur place au comptoir (À la remise du sac)
                Pour les commandes en Click & Collect, vous pouvez autoriser le client à ne payer qu'au moment où il vient chercher ses articles :
                — Cochez la case [KEY: Paiement sur place (Caisse)].
                — Sélectionnez les moyens de règlement autorisés en boutique : [KEY: Carte Bancaire], [KEY: Espèces], [KEY: Chèque] ou [KEY: Titres Restaurant].
                — En caisse, la commande sera importée dans le terminal de vente pour être encaissée au centime près selon le mode choisi par l'acheteur.
                
                [📸 web_paiement_passerelles_stripe_monetico.jpg | right | md]
                [T]Paiement en ligne sécurisé
                Pour percevoir les fonds immédiatement sur votre compte bancaire lors de la commande en ligne :
                Sélectionnez le prestataire de votre établissement :
                — [KEY: Stripe] : Intégration globale gérant les Cartes Bancaires, Apple Pay, Google Pay et PayPal.
                — [KEY: Monetico] : Solution bancaire directe pour les clients du Crédit Mutuel et du CIC.
                
                [ST]Raccordement sécurisé Monetico :
                1. Renseignez votre [KEY: Numéro TPE] à 7 chiffres et votre [KEY: Code Société] communiqués par votre banque.
                2. Saisissez votre [KEY: Clé MAC] (clé de sécurité hexadécimale à 40 caractères).
                3. Cliquez sur [BTN: Chiffrer & Enregistrer] : la clé est immédiatement transmise à votre serveur sécurisé et effacée de l'écran pour prévenir toute interception.
                [CLEAR]
                
                [WARNING]Condition obligatoire pour la livraison : L'expédition de colis à domicile exige obligatoirement une passerelle de paiement en ligne active afin d'encaisser les commandes avant leur départ.
                `
        },
        {
            id: "studio-theme-charte-graphique",
            title: "4. Studio de thème, charte graphique et typographies",
            // 📸 web_theme_predefinis_grille.jpg : Grille des 10 thèmes graphiques prêts à l'emploi avec pastilles de couleurs et styles sectoriels.
            // 📸 web_theme_sur_mesure_palette.jpg : Éditeur de thème personnalisé avec choix des couleurs primaire, secondaire, d'alerte et rayons des arrondis.
            content:
                `
                Le sous-onglet « Thème » personnalise l'apparence visuelle de votre site pour refléter l'univers de votre commerce sans toucher au code.
                
                [📸 web_theme_predefinis_grille.jpg | lg]
                [T]10 ambiances graphiques prêtes à l'emploi
                Appliquez d'un clic une charte visuelle équilibrée et adaptée à votre métier :
                — [KEY: Nature & Végétal] : Nuances vertes et végétales, typographie moderne et arrondis doux (Jardineries, pépinières, fleuristes).
                — [KEY: Océan & Pureté] : Bleus marins et ciel, lignes épurées (Poissonneries, cosmétiques, bien-être).
                — [KEY: Terracotta & Chaleur] : Tons ocre et terre cuite, police avec empattements (Décoration, poteries, artisanat).
                — [KEY: Noir & Blanc] : Contraste minimaliste noir pur et blanc (Prêt-à-porter, maroquinerie, design).
                — [KEY: Glamour & Beauté] : Roses poudrés et framboise, typographie de prestige (Instituts, coiffure, parfumerie).
                — [KEY: Atelier & Garage] : Jaune mécanique, gris anthracite et police condensée (Bricolage, outillage, pièces auto).
                — [KEY: Concept Store] : Tons neutres minéraux et angles vifs (Boutiques cadeaux, créateurs).
                — [KEY: Tech & Vape] : Cyan et violet électrique sur fond doux (Cigarettes électroniques, téléphonie, high-tech).
                — [KEY: Terroir & Artisanat] : Tons ambrés, ardoise et typographie traditionnelle (Épiceries fines, cavistes, boulangeries).
                — [KEY: Premium & Bijoux] : Or et noir avec typographie classique (Bijouteries, horlogerie, luxe).
                
                [📸 web_theme_sur_mesure_palette.jpg | lg]
                [T]Personnalisation sur-mesure
                Pour composer une charte aux couleurs de votre enseigne :
                — [KEY: Couleur Primaire] : Teinte des boutons d'action, des liens principaux et des validations.
                — [KEY: Couleur Secondaire] : Teinte des titres de rubriques, des bordures et des accents visuels.
                — [KEY: Couleur d'Alerte] : Couleur réservée aux pastilles de promotions, prix barrés et urgences.
                — [KEY: Rayon des Arrondis] : Ajustez la géométrie des éléments (boutons, cartes d'articles, bannières) : [KEY: Angles vifs] (0 px), [KEY: Léger] (4 px), [KEY: Doux] (12 px) ou [KEY: Pilule] (24 px).
                — [KEY: Typographie] : Choisissez la famille de caractères principale parmi la sélection Google Fonts (Inter, Roboto, Georgia, Montserrat, Oswald, Playfair Display, Merriweather, Cinzel, Nunito).
                `
        },
        {
            id: "ordonnancement-page-accueil",
            title: "5. Structuration de la page d'accueil et composants interactifs",
            // 📸 web_home_ordre_sections_menu.jpg : Menu latéral de gauche montrant les 6 sections déplaçables par poignée de glisser-déposer.
            // 📸 web_home_carousel_diaporama.jpg : Éditeur des diapositives du carousel avec téléversement d'image, vidéo MP4 et boutons de redirection.
            // 📸 web_home_macarons_rayons.jpg : Configuration des macarons ronds avec photo pour guider les clients vers les univers majeurs.
            // 📸 web_home_services_confiance.jpg : Grille des engagements de réassurance avec icônes (camion, cadeau, rempotage) et descriptifs.
            content:
                `
                Le sous-onglet « Accueil » orchestre les composants présentés aux internautes dès leur arrivée sur votre site.
                
                [📸 web_home_ordre_sections_menu.jpg | left | sm]
                [T]Organisation par glisser-déposer
                La colonne latérale gauche liste les 6 blocs modulaires de la page d'accueil :
                1. [KEY: Diaporama principal (Carousel)]
                2. [KEY: En ce moment (Promotions / Rayon phare)]
                3. [KEY: Bannières Univers (Grands pavés)]
                4. [KEY: Macarons "Nos Rayons"]
                5. [KEY: Services de Confiance (Engagements)]
                6. [KEY: Pavés Éditoriaux (Histoire / À Propos)]
                
                Maintenez le clic sur la poignée verticale d'un bloc pour monter ou descendre sa position sur la page d'accueil. Cliquez sur une section pour afficher ses réglages détaillés sur la droite. Chaque bloc peut être affiché ou masqué individuellement grâce à son interrupteur dédié.
                [CLEAR]
                
                [📸 web_home_carousel_diaporama.jpg | lg]
                [T]Le Diaporama principal (Carousel)
                Animez le haut de votre page d'accueil avec de grands visuels défilants :
                — Cliquez sur [BTN: Ajouter une diapositive] pour composer une nouvelle carte.
                — Téléversez une photo de fond ou collez le lien d'une vidéo MP4.
                — Définissez le [KEY: Titre principal], le [KEY: Slogan accrocheur] et le texte du [KEY: Bouton d'action].
                — Choisissez la cible du bouton dans le menu déroulant : un rayon précis, une page sur-mesure, vos promotions ou le bas de page.
                — [KEY: Vidéo à la une (Format Vertical / Reel)] : Intégrez une vidéo au format smartphone (Reel Facebook, Short YouTube ou vidéo directe) pour présenter vos arrivages de façon dynamique.
                
                [T]La section « En ce moment »
                Met en avant une sélection de produits sans nécessiter de recherche :
                — [KEY: Promotions actives] : Le site pioche automatiquement les articles de votre magasin faisant l'objet d'une offre commerciale.
                — [KEY: Rayon spécifique] : Fixez un univers vedette (ex : « Salons de jardin », « Confections florales »).
                — Réglez le nombre d'articles affichés par ligne (de 3 à 6 produits) et le nombre de rangées.
                
                [📸 web_home_macarons_rayons.jpg | right | md]
                [T]Macarons « Nos Rayons » et Bannières d'univers
                — [KEY: Macarons Rayons] : Bulles visuelles circulaires comprenant une photo et le nom du rayon. Elles permettent aux visiteurs sur smartphone de plonger d'un toucher dans vos catégories maîtresses.
                — [KEY: Bannières Univers] : Grands pavés rectangulaires illustrés pour segmenter votre offre commerciale (ex : « Pépinière & Arbres », « Décoration intérieure », « Animalerie »).
                [CLEAR]
                
                [📸 web_home_services_confiance.jpg | lg]
                [T]Services de Confiance et Pavés Éditoriaux
                — [KEY: Engagements de Confiance] : Rassurez vos acheteurs avec vos garanties de service. Choisissez une icône adaptée (camion de livraison, paquet cadeau, plante en pot pour le rempotage, sécateur pour la taille, carte de fidélité, horloge de retrait) et rédigez un texte explicatif court.
                — [KEY: Pavés À Propos] : Blocs alternant texte et photographie pour raconter l'histoire de votre entreprise, présenter vos serres ou détailler vos méthodes de production artisanales.
                `
        },
        {
            id: "constructeur-menu-navigation",
            title: "6. Constructeur de Menu : Arborescence, Mega Menu et liaisons",
            // 📸 web_menu_arborescence_onglets.jpg : Sommaire du menu de navigation avec onglets principaux, badges de types et poignées de déplacement.
            // 📸 web_menu_generation_auto_famille.jpg : Outil d'auto-génération créant en un clic tous les sous-menus à partir d'une famille de caisse.
            // 📸 web_menu_cartes_visuelles_images.jpg : Configuration des sous-menus avec choix d'affichage (Texte seul ou Carte visuelle avec vignette photo).
            content:
                `
                Le sous-onglet « Menu » conçoit la barre de navigation supérieure de votre site internet.
                
                [📸 web_menu_arborescence_onglets.jpg | lg]
                [T]Les 5 types d'onglets de navigation
                Cliquez sur [BTN: Ajouter un onglet] pour enrichir votre barre de menu :
                — [KEY: Mega Menu] : Menu déroulant riche regroupant des dizaines de sous-catégories avec titres, textes et photographies.
                — [KEY: Lien Simple] : Raccourci direct ouvrant une catégorie précise, un rayon, un fournisseur ou un tag sans déroulant.
                — [KEY: Promotions] : Onglet dynamique filtrant en direct toutes les réductions actives en magasin.
                — [KEY: Nouveautés] : Présente automatiquement les articles récemment créés dans votre catalogue.
                — [KEY: Page Personnalisée] : Lien ouvrant une page éditoriale sur-mesure (ex : « Nos ateliers », « Contact »).
                
                [📸 web_menu_generation_auto_famille.jpg | right | md]
                [T]Génération automatique des sous-menus
                Pour éviter de saisir manuellement vos dizaines de sous-catégories dans un Mega Menu :
                1. Sélectionnez votre famille de caisse dans le menu déroulant [KEY: Générer automatiquement depuis une famille].
                2. Cliquez sur [BTN: Générer].
                3. TipTac interroge votre catalogue de caisse et injecte instantanément l'intégralité des catégories associées sous forme de sous-menus prêts à l'emploi !
                [CLEAR]
                
                [📸 web_menu_cartes_visuelles_images.jpg | lg]
                [T]Affichage des sous-menus : Texte seul vs Carte visuelle
                Pour chaque sous-menu d'un Mega Menu, vous personnalisez son rendu :
                — [KEY: Texte] : Affichage sobre sous forme de liste de liens textuels.
                — [KEY: Carte] : Carte valorisée comprenant le nom, une description courte et une vignette photo.
                — [KEY: Image dédiée] : Téléversez une photo personnalisée pour illustrer la rubrique (automatiquement compressée au format WebP). Si aucune image n'est téléversée, le site affiche automatiquement la photo du produit vedette de cette catégorie.
                
                [T]Filtres cumulables par marque et tags
                Affinez le ciblage des produits présentés dans un sous-menu :
                Vous pouvez lier une catégorie tout en lui appliquant un filtre restrictif sur une [KEY: Marque] précise ou sur une sélection de [KEY: Tags Web] (ex : ne retenir que les articles marqués « Bio » ou « Fabrication Française »).
                
                [T]Règles de tri et plafonds d'affichage
                Sur chaque onglet, définissez le comportement de la grille de produits :
                — [KEY: Ordre de tri par défaut] : Meilleures ventes, nouveautés d'abord, ordre alphabétique (A-Z) ou prix croissant/décroissant.
                — [KEY: Prix Maximum (€)] : Masque automatiquement les articles dont le tarif dépasse ce plafond.
                — [KEY: Limite d'affichage] : Restreint le nombre d'articles chargés pour accélérer l'affichage.
                `
        },
        {
            id: "editeur-pages-cms-modulaires",
            title: "7. Éditeur de Pages : Création de pages riches et blocs modulaires",
            // 📸 web_pages_sommaire_accordeon.jpg : Sommaire latéral gauche des pages créées avec compteurs de blocs et actions de suppression.
            // 📸 web_pages_palette_blocs.jpg : Palette des 6 blocs de contenu disponibles (Texte, Img & Texte, Bannière, FAQ, Grille, Vidéo).
            // 📸 web_pages_edition_grille_faq.jpg : Éditeur détaillé d'un bloc de cartes en grille avec photos et accordéons de questions/réponses.
            content:
                `
                Le sous-onglet « Pages » conçoit des pages éditoriales illimitées pour informer vos clients (guides pratiques, conseils d'experts, présentation d'ateliers ou foire aux questions).
                
                [📸 web_pages_sommaire_accordeon.jpg | left | sm]
                [T]Gestion des pages et référencement
                Cliquez sur [BTN: Créer une nouvelle page] pour ouvrir l'atelier de rédaction :
                — [KEY: Titre principal (H1)] : Titre officiel de la page.
                — [KEY: Description Google (SEO)] : Résumé descriptif utilisé par les moteurs de recherche pour indexer votre article.
                — Chaque page génère un identifiant technique réutilisable dans vos boutons d'action et liens de menu.
                [CLEAR]
                
                [📸 web_pages_palette_blocs.jpg | lg]
                [T]Les 6 blocs modulaires combinables
                Empilez librement ces 6 composants pour structurer votre mise en page :
                
                [ST][ICON: FileText | 14 | text-blue-600] 1. Texte Seul :
                Bloc rédactionnel comprenant un titre, un corps de texte riche et le choix de l'alignement (gauche, centré, droite ou justifié).
                
                [ST][ICON: Layout | 14 | text-teal-600] 2. Image & Texte :
                Mise en page mixte associant un paragraphe et une illustration. Vous pouvez forcer la photo à gauche, à droite ou laisser le système alterner la position automatiquement d'un paragraphe à l'autre.
                
                [ST][ICON: ImageIcon | 14 | text-purple-600] 3. Bannière Large :
                Grande photographie visuelle pleine largeur pour marquer une coupure ou introduire un nouveau chapitre.
                
                [ST][ICON: HelpCircle | 14 | text-amber-600] 4. FAQ Accordéon :
                Liste de questions/réponses dépliables. Idéal pour clarifier vos modalités de livraison, vos règles de garantie ou les soins saisonniers.
                
                [ST][ICON: Grid | 14 | text-indigo-600] 5. Grille Cartes :
                Présentation en colonnes de cartes d'information comprenant chacune un titre, un résumé et une illustration dédiée.
                
                [ST][ICON: Video | 14 | text-rose-600] 6. Vidéo :
                Lecteur multimédia intégré. Collez le lien d'une vidéo YouTube ou Facebook, ou téléversez directement un fichier vidéo court au format MP4.
                
                [📸 web_pages_edition_grille_faq.jpg | right | md]
                [T]Réorganisation et édition intuitive
                — Dans la colonne de gauche, faites glisser les blocs par leur poignée verticale pour modifier instantanément l'ordre de lecture de la page.
                — Cliquez sur un bloc dans le sommaire pour afficher son formulaire d'édition sur la droite.
                — Cliquez sur l'icône de corbeille rouge pour supprimer un composant devenu inutile.
                [CLEAR]
                `
        },
        {
            id: "grille-transport-expeditions-relais",
            title: "8. Expéditions à domicile, points relais et partenaires locaux",
            // 📸 web_transport_frais_par_gabarit.jpg : Encart des seuils de gratuité (Franco de port) pour gabarits Standard, Encombrant et Palette.
            // 📸 web_transport_transporteur_regles.jpg : Fiche d'un transporteur montrant les tranches tarifaires par poids ou montant du panier.
            // 📸 web_transport_relais_partenaires.jpg : Gestion des points de retrait partenaires avec géocodage, horaires et jours de navette.
            content:
                `
                Le module « Réseau & Logistique » gère l'acheminement des commandes vers le domicile des acheteurs et le dépôt chez des commerçants partenaires de proximité.
                
                [📸 web_transport_frais_par_gabarit.jpg | lg]
                [T]Activation des expéditions et Franco de port
                Activez l'interrupteur [KEY: Activer les Expéditions] sur le magasin concerné :
                Définissez les montants d'achat déclenchant la gratuité de livraison selon le gabarit des produits :
                — [KEY: Franco Standard] : Seuil d'achat en euros pour les petits colis (ex : gratuit dès 60 € d'achat).
                — [KEY: Franco Encombrant] : Seuil pour les produits volumineux nécessitant un transporteur spécialisé (ex : gratuit dès 300 €).
                — [KEY: Franco Palette] : Seuil pour les pondéreux livrés sur palette (ex : gratuit dès 800 €).
                Si un seuil est laissé à 0, la livraison payante s'applique systématiquement sans gratuité.
                
                [📸 web_transport_transporteur_regles.jpg | right | md]
                [T]Configuration des transporteurs et tranches de prix
                Créez vos méthodes de livraison (ex : « Colissimo Domicile », « Transporteur Messagerie ») :
                — [KEY: Calculé sur] : Choisissez si le tarif s'applique selon le [KEY: Montant du panier (€)] ou le [KEY: Poids total (kg)] des articles.
                — [KEY: Zone géographique] : Couverture nationale ([KEY: France entière]), ciblée par [KEY: Départements] ou restreinte à des [KEY: Codes Postaux locaux].
                — [KEY: Gabarits acceptés] : Cochez si le transporteur prend en charge les colis Standard, Encombrants et/ou Palettes.
                — [KEY: Grille Tarifaire] : Définissez vos paliers (ex : de 0 à 50 € ➔ 6,90 €, de 50 à 100 € ➔ 4,90 €, au-delà de 100 € ➔ 0 €).
                
                [ST]Réseaux de Points Relais nationaux :
                Basculez la destination en [KEY: Point Relais] pour connecter les réseaux [KEY: Mondial Relay], [KEY: Relais Colis] ou [KEY: Chronopost Shop2Shop]. Renseignez vos identifiants d'API pour que les clients choisissent leur relais sur une carte interactive lors du paiement.
                [CLEAR]
                
                [📸 web_transport_relais_partenaires.jpg | lg]
                [T]Points de retrait personnalisés et commerçants partenaires
                Vous pouvez créer votre propre réseau de distribution locale (boulangeries partenaires, dépôts de village, casiers, autres magasins de votre groupe) :
                — Cliquez sur [BTN: Ajouter une succursale / partenaire].
                — Renseignez le nom, l'adresse postale complète (géocodée automatiquement par coordonnées GPS pour situer le point sur la carte du site) et les éventuels frais de dépôt.
                — [KEY: Jours de navette et retrait] : Indiquez les jours de livraison de votre camionnette et les jours durant lesquels le client peut retirer sa commande chez le partenaire.
                — Définissez les horaires d'ouverture propres au commerçant partenaire pour ne jamais envoyer un client devant un rideau baissé.
                `
        },
        {
            id: "centre-legal-cgv-rgpd-mediation",
            title: "9. Centre légal : Mentions obligatoires, CGV, RGPD et médiation",
            // 📸 web_legal_mentions_entreprise.jpg : Formulaire des mentions légales d'entreprise avec raison sociale, SIRET, RCS, Greffe et directeur de publication.
            // 📸 web_legal_mediation_consommation.jpg : Bloc obligatoire de la médiation de la consommation BtoC avec nom du médiateur, site web et adresse postale.
            // 📸 web_legal_modeles_prepares_bouton.jpg : Boutons « Préremplir le modèle » injectant en un clic les textes complets des CGV, de la livraison et du RGPD.
            content:
                `
                Le sous-onglet « Mentions Légales » garantit la parfaite conformité juridique de votre site avec le droit de la consommation français et le RGPD.
                
                [📸 web_legal_mentions_entreprise.jpg | left | md]
                [T]Informations obligatoires d'entreprise
                La colonne de gauche rassemble les mentions légales qui seront affichées sur votre page dédiée :
                — [KEY: Raison Sociale] et [KEY: Capital Social].
                — [KEY: Numéro SIRET] (14 chiffres) et [KEY: Numéro RCS] (9 chiffres).
                — [KEY: Ville du Greffe] du tribunal de commerce d'immatriculation.
                — [KEY: N° TVA Intracommunautaire] officiel.
                — [KEY: Directeur de la publication] : Nom et prénom du représentant légal de l'entreprise.
                [CLEAR]
                
                [📸 web_legal_mediation_consommation.jpg | right | md]
                [T]Médiation de la consommation (Obligatoire BtoC)
                Conformément aux articles L. 612-1 et suivants du Code de la consommation, tout professionnel vendant à des particuliers doit adhérer à un dispositif de médiation et afficher ses coordonnées :
                — [KEY: Nom du médiateur] (ex : CM2C, SAS Médiation Solution, AME Conso...).
                — [KEY: Site web du médiateur] (ex : https://www.cm2c.net).
                — [KEY: Adresse postale du médiateur]
                Ces coordonnées sont automatiquement intégrées dans les CGV de votre site pour prévenir les sanctions de la DGCCRF.
                [CLEAR]
                
                [📸 web_legal_modeles_prepares_bouton.jpg | lg]
                [T]Modèles juridiques préremplis en 1 clic
                La colonne de droite met à disposition des trames complètes et conformes pour vous guider dans la rédaction de vos CGV et politiques :
                [ST]1. Conditions Générales de Vente (CGV) :
                Cliquez sur [BTN: Préremplir le modèle] pour générer le contrat de vente complet (prix, commande, Click & Collect, droit de rétractation de 14 jours, exceptions pour les végétaux périssables et litiges).
                
                [ST]2. Politique de Livraison & Retours :
                Injecte le détail de vos modes de retrait, délais de traitement, vérification des colis à la réception et prise en charge des retours.
                
                [ST]3. Politique de Confidentialité (RGPD) & Cookies :
                Insère le texte réglementaire attestant que les données personnelles ne sont jamais revendues, précisant les droits d'accès et décrivant l'usage des traceurs techniques indispensables au paiement sécurisé.
                
                Vous devez adapter ces modèles pour qu'ils soient conformes aux spécificités de votre activité.
                `
        }
    ]
};