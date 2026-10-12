export default {
    id: "TIPTAC_COMPANION",
    title: "Application Mobile TipTac Companion",
    category: "TipTacCompanion",
    iconName: "Smartphone",
    color: "text-sky-500",
    articles: [
        {
            id: "companion-appairage-connexion-pin",
            title: "1. Appairage du terminal, sélection d'équipe et sécurité par code PIN",
            // 📸 companion_connexion_admin_site.jpg : Écran de première configuration demandant les identifiants administrateur et la sélection du magasin rattaché.
            // 📸 companion_grille_collaborateurs.jpg : Écran d'accueil présentant la grille des collaborateurs du magasin avec rôle et initiale colorée.
            // 📸 companion_pave_numerique_pin.jpg : Modale du pavé numérique tactile avec les 8 cercles de saisie de code secret confidentiel.
            content:
                `
                TipTac Companion est l'application mobile (compatible smartphones et tablettes iOS et Android) conçue pour déporter les opérations logistiques, le réassort, les inventaires et la consultation du catalogue directement dans les rayons et réserves de votre magasin.
                L'application requière un plan [PLAN: CONNECT] ou supérieur. Certains modules sont réservés aux plans [PLAN: COMMERCE] ou au [PLAN: NETWORK].
                
                [📸 companion_connexion_admin_site.jpg | lg]
                [T]Procédure d'appairage initial du terminal
                Lors de l'installation de l'application sur un nouvel appareil nomade, le terminal doit être rattaché de manière sécurisée à votre établissement :
                1. Renseignez l'[KEY: E-mail Administrateur] et le [KEY: Mot de passe] de votre compte TipTac Cloud.
                2. Si votre compte gère plusieurs magasins, l'écran [KEY: Sélection du Magasin] liste l'ensemble de vos points de vente autorisés : touchez simplement le nom de votre établissement physique.
                3. L'appareil mémorise cette liaison de façon permanente. Vous n'aurez plus jamais besoin de ressaisir ces identifiants lors des utilisations quotidiennes.
                
                [TIP]Désappairage de secours : Pour transférer une tablette vers un autre point de vente ou réinitialiser un appareil, maintenez un appui long de 3 secondes sur le nom du magasin situé au sommet de l'écran d'accueil pour déclencher la déconnexion d'infrastructure.
                
                [📸 companion_grille_collaborateurs.jpg | right | md]
                [T]Sélection du collaborateur au changement d'équipe
                Dès que l'appareil est appairé, il affiche l'espace de travail des co-équipiers :
                — La grille présente l'ensemble des salariés déclarés actifs sur la caisse de ce magasin, avec leur prénom, leur nom de famille et leur rôle (Vendeur, Préparateur, Manager, Administrateur).
                — La liste est synchronisée en temps réel avec la base de données du magasin : tout collaborateur créé ou désactivé sur le poste principal est immédiatement mis à jour sur les smartphones en rayon.
                — Touchez votre carte personnelle pour ouvrir votre session de travail.
                [CLEAR]
                
                [📸 companion_pave_numerique_pin.jpg | left | sm]
                [T]Authentification par code PIN sécurisé (4 à 8 chiffres)
                Chaque collaborateur déverrouille sa session via son code personnel :
                — Composez votre code secret de 4 à 8 chiffres sur le pavé numérique tactile.
                — Dès la saisie du dernier chiffre, le système valide l'empreinte chiffrée sans nécessiter d'appui supplémentaire.
                — En fin d'opération en rayon, touchez l'icône de cadenas [ICON: Lock | 16 | text-red-500] en haut à droite pour reverrouiller immédiatement le terminal avant de le passer à un collègue.
                [CLEAR]
                
                [T]Navigation par le Hub d'applications
                Une fois identifié, l'utilisateur accède au menu centralisé des modules de travail. Un simple glissement du doigt de la gauche vers la droite de l'écran (swipe) permet de rouvrir ce menu à tout instant depuis n'importe quel écran pour basculer d'une mission à l'autre sans friction.
                `
        },
        {
            id: "companion-catalogue-stocks-direct-botanique",
            title: "2. Consultation du Catalogue, des stocks en direct et fiches botaniques",
            // 📸 companion_catalog_recherche_liste.jpg : Écran principal du catalogue mobile avec champ de recherche, bouton scanner et cartes d'articles.
            // 📸 companion_catalog_camera_scan.jpg : Viseur de la caméra scannant un code-barres en rayon avec retour haptique instantané.
            // 📸 companion_catalog_fiche_detail_complete.jpg : Fiche article détaillée montrant la photo, le prix TTC, le stock en direct et les données logistiques.
            // 📸 companion_catalog_fiche_botanique_badges.jpg : Onglet « Fiche Botanique » avec les 5 macarons visuels (rusticité, exposition, cycle, floraison, dimensions).
            content:
                `
                Le module « Catalogue PIM » transforme le smartphone en un terminal de consultation mobile ultra-rapide permettant de renseigner un client en rayon sur le prix, les caractéristiques d'un article ou son niveau de stock en temps réel.
                
                L'accès à la consultation du catalogue est ouvert aux collaborateurs disposant de la permission [PERM: CATALOGUE].
                
                [📸 companion_catalog_recherche_liste.jpg | lg]
                [T]Recherche textuelle et tolérance aux fautes
                — Saisissez les premières lettres d'un libellé, une référence interne ou les chiffres d'un code-barres : le moteur de recherche instantané interroge le catalogue mis en mémoire locale sur l'appareil pour afficher les résultats sans aucun temps de latence.
                — Cliquez sur l'icône de synchronisation [ICON: RefreshCcw | 16 | text-teal-600] en haut à droite pour forcer le téléchargement des dernières créations d'articles réalisées sur la caisse.
                
                [📸 companion_catalog_camera_scan.jpg | right | md]
                [T]Lecteur de code-barres caméra intégré
                Touchez le bouton scanner [ICON: Barcode | 18 | text-amber-500] :
                — L'appareil photo s'active en surimpression. Pointez le viseur vers l'étiquette d'un article : la détection est instantanée et émet une vibration haptique de confirmation.
                — Si vous scannez un code-barres rattaché à un dossier parent (article comportant des déclinaisons de tailles ou de couleurs), TipTac Companion ouvre automatiquement une fenêtre pour vous laisser choisir la variante précise.
                [CLEAR]
                
                [📸 companion_catalog_fiche_detail_complete.jpg | lg]
                [T]Fiche produit et niveau de stock physique en temps réel
                La fiche d'un article centralise l'ensemble de ses données de vente :
                — [KEY: Prix de Vente TTC Local] affiché en gros caractères.
                — [KEY: Indicateur de Stock en direct] : relié au serveur du magasin, il affiche le nombre d'unités physiques réelles disponibles. Le badge s'affiche en vert si le stock est positif, en rouge s'il est en rupture (égal ou inférieur à zéro), ou sous la forme d'un symbole d'infini [KEY: ∞] pour les prestations et articles non gérés en inventaire.
                — [KEY: Données logistiques complètes] : référence interne, code EAN, emplacement exact dans le magasin (allée/rayon), conditionnement (pot, sac, litrage), dimensions, poids net et pays d'origine.
                
                [📸 companion_catalog_fiche_botanique_badges.jpg | right | md]
                [T]Fiches conseils horticoles et végétales 
                
                [PLAN: Option VegApp requise]
                Pour les végétaux liés au dictionnaire botanique, un onglet dédié « Fiche Botanique » déploie l'encyclopédie de culture :
                — Nom vernaculaire français et nom latin officiel en italique.
                — 5 macarons visuels normalisés : [KEY: Rusticité] (température minimale supportée en °C), [KEY: Exposition] (soleil, mi-ombre, ombre), [KEY: Cycle] (vivace ou annuelle), [KEY: Période de floraison] et [KEY: Dimensions à maturité].
                — Conseils pratiques d'entretien, taille, fréquence d'arrosage, rempotage et alertes de toxicité en cas d'ingestion.
                [CLEAR]
                `
        },
        {
            id: "companion-studio-photo-missions",
            title: "3. Studio Photo nomade et missions d'illustration du catalogue",
            // 📸 companion_studio_tableau_bord_jauge.jpg : Tableau de bord du Studio Photo avec la jauge de progression du catalogue et les filtres de ciblage.
            // 📸 companion_studio_viseur_carre_1_1.jpg : Viseur de prise de vue cadré au format carré 1:1 strict avec bouton déclencheur.
            // 📸 companion_studio_galerie_photos_gestion.jpg : Galerie des photos en ligne pour un article avec bouton corbeille de suppression définitive.
            content:
                `
                Le module « Studio Photo » offre un atelier de prise de vue mobile pour illustrer votre catalogue directement dans les allées du magasin et publier les visuels sur vos caisses tactiles et votre boutique en ligne sans manipulation informatique complexe.
                
                L'accès au studio photo est réservé aux profils responsables ou disposant du rôle [PERM: Manager].
                
                [📸 companion_studio_tableau_bord_jauge.jpg | lg]
                [T]Missions de prise de vue et filtres de ciblage
                Le tableau de bord guide vos sessions d'illustration dans les rayons :
                — [KEY: Jauge de progression] : Calcule en temps réel le pourcentage d'articles illustrés par rapport au volume total de votre assortiment (ex : « 68 % - 412 / 605 illustrés »).
                — [KEY: Filtre d'état des photos] : Isolez d'un clic les articles [KEY: À Photographier] (photos manquantes) ou révisez les articles [KEY: Déjà illustrés].
                — [KEY: Filtre par Rayon (Famille)] : Ciblez une allée précise pour photographier méthodiquement l'assortiment de ce rayon.
                — [KEY: Filtre Disponibilité] : Concentrez vos efforts sur les articles physiquement [KEY: En Stock] dans le magasin.
                — [KEY: Recherche au scanner] : Bippez le code-barres d'un produit en rayon pour ouvrir immédiatement son studio de prise de vue sans recherche dans la liste.
                
                [📸 companion_studio_viseur_carre_1_1.jpg | right | md]
                [T]Prise de vue au cadrage carré 1:1
                Touchez un produit pour ouvrir l'appareil photo :
                — L'écran applique un cadrage carré strict au ratio 1:1 identique au format d'affichage sur votre boutque web TipTac et en caisse.
                — Déclenchez la prise de vue avec le bouton central ou touchez l'icône de galerie pour importer des visuels existants depuis la mémoire de votre téléphone.
                — Vous pouvez capturer plusieurs photos à la suite (les miniatures s'alignent en bas d'écran). Touchez la croix rouge d'une miniature pour retirer une photo ratée.
                [CLEAR]
                
                [T]Compression automatique WebP et publication en direct
                Dès que vous touchez [BTN: Valider] :
                1. L'image est automatiquement recadrée et compressée au format moderne [KEY: WebP 1024x1024 pixels] à 80 % de qualité.
                2. Elle est téléversée sur les serveurs sécurisés du Cloud.
                3. La fiche article est mise à jour immédiatement : le visuel devient svisible en quelques secondes sur la caisse et le lendemain sur votre boutique web TipTac (ou dès que vous forcez la publication du catalogue Web depuis TipTac Cloud).
                
                [📸 companion_studio_galerie_photos_gestion.jpg | left | sm]
                [T]Galerie et suppression de photos
                Si un produit possède déjà des illustrations, le studio s'ouvre d'office sur sa galerie en ligne. Vous pouvez inspecter les clichés existants et toucher l'icône de corbeille [ICON: Trash2 | 14 | text-red-500] pour supprimer définitivement un visuel obsolète avant de déclencher de nouvelles prises de vue.
                [CLEAR]
                `
        },
        {
            id: "companion-preparation-commandes-web-picking",
            title: "4. Préparation des commandes Web (Picking) et remise transporteur",
            // 📸 companion_orders_quai_preparation_onglets.jpg : Quai de préparation logistique avec les onglets Nouvelles, Pointage et Prêtes et badges de livraison.
            // 📸 companion_orders_audit_conformite_nouvelle.jpg : Écran d'une nouvelle commande dépliant l'audit des paiements, remises et articles à préparer.
            // 📸 companion_orders_pointage_camera_picking.jpg : Écran de ramassage d'articles avec jauge de progression, compteur d'articles et bouton scan caméra.
            // 📸 companion_orders_modal_emplacement_bac.jpg : Modale de clôture de préparation demandant la saisie de l'emplacement physique du bac de stockage.
            // 📸 companion_orders_depart_transporteur_rafale.jpg : Mode rafale permettant de sélectionner plusieurs colis prêts d'un même transporteur pour générer le bordereau.
            content:
                `
                Le module « Commandes » transforme le smartphone en un terminal de ramassage (picking) en rayon pour préparer les commandes Click & Collect et les expéditions de colis passées sur votre boutique en ligne.
                
                L'accès à la préparation de commandes web nécessite la permission [PERM: PICKING].
                
                [📸 companion_orders_quai_preparation_onglets.jpg | lg]
                [T]Le Quai de préparation en 3 étapes de traitement
                Les commandes traversent un cycle d'avancement rigoureux :
                — [KEY: Nouvelles] : Commandes enregistrées sur le web en attente de prise en charge.
                — [KEY: Pointage] : Commandes en cours de ramassage dans les allées du magasin.
                — [KEY: Prêtes] : Commandes assemblées, stockées dans un bac de retrait ou prêtes pour le transporteur.
                
                [ST]Badges visuels de mode de remise :
                Chaque carte identifie instantanément le canal de livraison :
                — [KEY: Retrait Magasin] (Ambre) : Commande Click & Collect retirée au comptoir du magasin.
                — [KEY: Dépôt Partenaire] (Violet) : Commande déposée chez un commerçant relais local.
                — [KEY: Point Relais] (Indigo) : Colis déposé dans un réseau national (Mondial Relay, Relais Colis, Chronopost).
                — [KEY: Livraison Domicile] (Bleu) : Expédition à l'adresse de l'acheteur.
                
                [📸 companion_orders_audit_conformite_nouvelle.jpg | right | md]
                [T]Audit de conformité préalable et acceptation
                À l'ouverture d'une commande portant le statut [KEY: NOUVELLE], l'équipier inspecte sa conformité financière avant acceptation :
                — Vérifie le statut du paiement : [KEY: PAYÉ] par carte en ligne ou [KEY: ATTENTE PAIEMENT] sur place au comptoir.
                — Détecte les éventuelles anomalies : articles avec prix à 0 €, paiement intégralement effectué en avoirs ou présence de codes promotionnels appliqués.
                — Touchez [BTN: Accepter] pour passer la commande en préparation, ou [BTN: Refuser] en saisissant un motif explicite qui sera notifié par e-mail au client.
                [CLEAR]
                
                [T]Verrouillage anti-collision entre préparateurs
                Dès qu'un collaborateur accepte une commande, celle-ci bascule au statut [KEY: PREPARATION] et est verrouillée à son nom sur le réseau. Un collègue ouvrant la même commande est averti par un message « Commande verrouillée - Déjà en cours de préparation ». Un responsable peut forcer la reprise de la commande si nécessaire.
                
                [📸 companion_orders_pointage_camera_picking.jpg | lg]
                [T]Ramassage des articles et Smart Scan caméra
                L'écran de pointage liste les produits à collecter dans les rayons :
                — Chaque ligne indique la désignation, la photo, la référence interne, l'emplacement en magasin et la quantité commandée.
                — [KEY: Pointage au lecteur caméra] : Touchez l'icône de caméra pour bipper le code-barres de chaque article prélevé. Le système émet une sonnerie et une vibration de succès, et incrémente automatiquement la quantité pointée.
                — [KEY: Gestion intelligente des variantes] : Si le client a commandé plusieurs déclinaisons d'un même article (ex : deux tailles différentes), le scan du code-barres ouvre une fenêtre pour vous laisser pointer la variante exacte prélevée.
                — [KEY: Boutons tactiles manuels] : Vous pouvez également pointer manuellement avec les touches [BTN: +] et [BTN: -], ou toucher la case de double coche pour valider la ligne d'un coup.
                — La barre de progression supérieure indique en direct le pourcentage d'avancement de la commande.
                
                [📸 companion_orders_modal_emplacement_bac.jpg | right | md]
                [T]Clôture et affectation de l'emplacement de stockage
                Dès que tous les articles sont pointés, touchez [BTN: Clôturer] :
                — Pour un retrait en magasin, saisissez l'[KEY: Emplacement de stockage] où vous déposez le sac (ex : « BAC A2 », « ÉTAGÈRE DRIVE », « CHAMBRE FROIDE »).
                — L'emplacement est scellé sur la commande et s'affiche instantanément sur la caisse tactile pour retrouver le sac en quelques secondes lors du passage du client.
                — La commande passe au statut [KEY: PRÊTE] et le client est automatiquement averti par e-mail ou SMS que sa commande l'attend.
                [CLEAR]
                
                [📸 companion_orders_depart_transporteur_rafale.jpg | lg]
                [T]Mode Rafale : Enlèvement et bordereaux transporteur
                Dans l'onglet [KEY: PRÊTES], activez le [KEY: Départ Transporteur (Mode Rafale)] pour remettre les colis au chauffeur :
                1. Filtrez éventuellement sur le transporteur qui se présente sur votre quai (Colissimo, DPD, Mondial Relay).
                2. Cochez en série les colis chargés dans le camion.
                [WARNING]Protection anti-mélange de transporteurs : TipTac interdit de cocher ensemble des colis assignés à des prestataires de livraison différents au sein d'un même départ.
                3. Touchez [BTN: Générer Bordereau] : les colis sont regroupés sous un identifiant unique (ex : « BATCH-4581 »). Le scan de ce code bordereau sur la caisse déclenchera l'auto-facturation comptable et le départ définitif des expéditions.
                `
        },
        {
            id: "companion-receptions-commandes-entrees-libres",
            title: "5. Réception des marchandises fournisseurs et entrées directes",
            // 📸 companion_reception_modes_selecteur.jpg : Écran des réceptions proposant la bascule entre « Entrée Libre » et « Pointage Commande ».
            // 📸 companion_reception_choix_commande_frs.jpg : Liste des commandes fournisseurs envoyées en attente de déchargement sur le quai.
            // 📸 companion_reception_pointage_lignes.jpg : Lignes de pointage avec comparaison Quantité Attendue et Quantité Reçue et boutons +/-.
            // 📸 companion_reception_modal_reliquat_auto.jpg : Modale de transmission demandant la génération automatique d'un bon de commande de reliquat en cas de manquants.
            content:
                `
                Le module « Réceptions » permet de contrôler le déchargement des cartons de réassort directement sur le quai de livraison avec votre smartphone, sans imprimer de fiche papier préalable.
                
                Accessible aux équipiers disposant des autorisations [PERM: INVENTAIRE] ou d'un profil [PERM: Manager].
                
                [📸 companion_reception_modes_selecteur.jpg | lg]
                [T]Deux modes de réception au déchargement
                — [KEY: Pointage Commande] : Rapprochement d'une livraison avec un bon de commande officiel préalablement émis dans votre gestion.
                — [KEY: Entrée Libre] : Enregistrement direct d'articles arrivés sans bon de commande préalable (dépannage local, arrivages directs du marché ou productions internes).
                
                [📸 companion_reception_choix_commande_frs.jpg | right | md]
                [T]Sélection de la commande fournisseur en attente
                En mode « Pointage Commande », touchez le sélecteur pour afficher les livraisons attendues :
                — La liste affiche le nom du grossiste, le numéro du bon (ex : « CMD-0042 ») et le volume total d'articles prévus.
                — Touchez la commande : l'ensemble des lignes attendues est chargé dans le panier de pointage du téléphone avec leur quantité commandée.
                [CLEAR]
                
                [📸 companion_reception_pointage_lignes.jpg | lg]
                [T]Contrôle des colis et comptage physique
                Bippez les articles au lecteur caméra ou ajustez les quantités au pavé tactile :
                — Chaque ligne confronte la [KEY: Quantité Attendue] face à la [KEY: Quantité Reçue].
                — Touchez le chiffre pour ouvrir le pavé numérique grand format et saisir d'un coup le nombre exact de pièces déballées.
                — Si vous recevez plus d'unités que prévu par le bon d'achat, la ligne s'entoure d'un liseré violet avec une alerte d'excédent pour vous prévenir.
                
                [📸 companion_reception_modal_reliquat_auto.jpg | right | md]
                [T]Transmission à la caisse et scission des reliquats
                Dès que le contrôle du déchargement est achevé, touchez [BTN: Transmettre à la Caisse] :
                — En cas de manquants : 
                Si la livraison est incomplète (ex : 8 reçus sur 10 commandés), le système active l'interrupteur «Générer automatiquement un nouveau bon de commande brouillon pour les articles manquants».
                — Touchez [BTN: Acquitter le lot] : le rapport de réception est téléversé en direct vers la caisse principale. Dès que la caisse synchronise le lot, le stock physique en rayon est automatiquement incrémenté et le bon de reliquat brouillon est créé sans ressaisie !
                [CLEAR]
                `
        },
        {
            id: "companion-inventaires-comptage-zones-etats",
            title: "6. Inventaires mobiles, qualification de l'état et inventaire de bascule",
            // 📸 companion_inv_hub_lots_envoyes.jpg : Tableau de bord des inventaires montrant l'historique des lots transmis avec badges « En attente Caisse » ou « Traité ».
            // 📸 companion_inv_session_zone_comptage.jpg : Écran de comptage en rayon avec sélecteur de zone géographique et barre de scan.
            // 📸 companion_inv_pave_quantite_etats.jpg : Modale du pavé numérique tactile permettant de renseigner la quantité et de qualifier l'état (Bon, Détérioré, Périmé).
            // 📸 companion_inv_bascule_orphelins.jpg : Modale d'inventaire de bascule ventilant le stock d'un dossier parent vers ses déclinaisons physiques.
            content:
                `
                Le module « Inventaires » décuple la cadence des comptages périodiques en permettant à plusieurs équipiers de compter simultanément différentes allées du magasin avec leur téléphone sans bloquer la caisse.
                
                L'accès aux inventaires nomades requiert la permission [PERM: INVENTAIRE].
                
                [📸 companion_inv_hub_lots_envoyes.jpg | lg]
                [T]Le centre des sessions d'inventaire
                L'écran d'accueil centralise le suivi de vos comptages nomades :
                — Affiche l'historique des lots scannés par le collaborateur connecté avec horodatage et nombre d'articles.
                — Suivez l'état d'intégration sur la caisse : badge orange [KEY: En attente Caisse] ou vert [KEY: Traité par la caisse] dès que le responsable a fusionné la session dans le logiciel principal.
                — Touchez le bouton bleu [BTN: Nouveau Lot de Comptage] pour commencer un comptage.
                
                [📸 companion_inv_session_zone_comptage.jpg | lg]
                [T]Sectorisation par zone et comptage continu
                Pour organiser méthodiquement votre magasin :
                1. Renseignez la [KEY: Zone de comptage] dans le champ supérieur (ex : « ALLÉE_B », « SERRE_CHAUDE », « RÉSERVE_1 »).
                2. Scannez les articles à la caméra ou utilisez la recherche manuelle : chaque coup de douchette ajoute l'article avec un stock physique de +1.
                3. La ligne affiche en face à face le stock [KEY: Théorique] informatique attendu et le stock [KEY: Compté] réel.
                
                [TIP]Sécurité de brouillon persistant : Chaque scan est instantanément mémorisé dans la mémoire physique du téléphone. Même en cas de fermeture inopinée de l'application, de coupure de batterie ou de perte totale du réseau Wi-Fi, vous ne perdez aucun comptage en cours.
                
                [📸 companion_inv_pave_quantite_etats.jpg | right | md]
                [T]Qualification de l'état des articles (Bon, Détérioré, Périmé)
                Touchez la case chiffrée d'un article pour ouvrir son pavé d'ajustement grand format :
                — Saisissez directement le nombre total de pièces comptées au clavier numérique.
                — Qualifiez l'état physique de la marchandise en sélectionnant une pastille :
                  • [KEY: BON] (Vert) : Marchandise saine prête pour la vente.
                  • [KEY: DÉTÉRIORÉ] (Orange) : Emballage abîmé ou plante défraîchie nécessitant un geste commercial.
                  • [KEY: PÉRIMÉ] (Rouge) : Date dépassée ou invendable devant être sortie en perte.
                — Cette qualification est transmise à la caisse pour orienter vos décisions de démarque ou de démarquage promotionnel.
                [CLEAR]
                
                [T]Clôture et téléversement du lot vers la caisse
                Dès que votre allée est achevée :
                1. Touchez [BTN: Envoyer ce Lot].
                2. Donnez un nom explicite à votre session (ex : « Allée Pépinière 2 »).
                3. Touchez [BTN: Envoyer (Wifi)] : le lot est expédié en toute sécurité sur le Cloud. Il ne reste plus au responsable qu'à cliquer sur « Réceptionner Tablettes » sur la caisse pour intégrer votre travail en un clic !
                
                [📸 companion_inv_bascule_orphelins.jpg | lg]
                [T]Régularisation des stocks orphelins (Bascule en rayon)
                Si un bandeau orange d'alerte « Action Requise » apparaît au sommet du hub d'inventaire :
                Il signale qu'un article maître a été converti sur la caisse et possède du stock orphelin en attente de ventilation. Touchez [BTN: Régulariser] :
                — L'écran affiche la quantité globale à ventiler.
                — Parcourez les rayons et saisissez le stock physique réel constaté pour chaque déclinaison (tailles, litrages, couleurs).
                — Touchez [BTN: Terminer] : la régularisation est télétransmise pour mise à jour automatique des stocks sur la caisse sans bloquer les ventes !
                `
        },
        {
            id: "companion-demarques-pertes-rafale",
            title: "7. Déclaration nomade des démarques, casse et saisie en rafale",
            // 📸 companion_demarque_modes_bascule.jpg : Écran des démarques avec choix entre « Saisie Individuelle » et « Mode Rafale (Lot) ».
            // 📸 companion_demarque_modal_perte_motif.jpg : Modale de validation d'une perte avec choix du motif (casse, vol, dépéri) et saisie de quantité.
            // 📸 companion_demarque_alerte_prix_achat.jpg : Avertissement orangé imposant la saisie du prix de vente TTC pour simuler la valeur financière de la perte.
            // 📸 companion_demarque_historique_local.jpg : Relevé des 50 dernières démarques enregistrées localement sur l'appareil.
            content:
                `
                Le module « Démarques » permet aux équipes de rayon d'enregistrer instantanément la casse, les vols ou les végétaux fanés au moment même où l'anomalie est constatée, évitant les oublis de saisie en fin de journée.
                
                L'accès à ce module est strictement conditionné à la permission [PERM: DÉMARQUE].
                
                [📸 companion_demarque_modes_bascule.jpg | lg]
                [T]Deux méthodes de déclaration selon l'ampleur de la perte
                — [KEY: Saisie Individuelle] : Pour enregistrer un incident ponctuel (un pot brisé en rayon, une bouteille tombée d'un chariot) avec qualification immédiate du motif.
                — [KEY: Mode Rafale (Lot)] : Pour vider un rayon d'articles détériorés ou traiter un carton complet écrasé en réserve. Choisissez un motif commun en tête d'écran (ex : « PÉRIMÉ » ou « CASSE MAGASIN »), puis bippez les produits les uns après les autres sans interruption.
                
                [📸 companion_demarque_modal_perte_motif.jpg | right | md]
                [T]Saisie de la quantité et motifs réglementaires
                À la sélection ou au scan d'un article, renseignez les modalités de la sortie :
                1. Tapez la quantité d'unités perdues.
                2. Sélectionnez le motif parmi la nomenclature réglementaire : [KEY: CASSE MAGASIN], [KEY: LITIGE LIVRAISON], [KEY: VOL], [KEY: PÉRIMÉ], [KEY: DÉPÉRI], [KEY: USAGE INTERNE] ou [KEY: ERREUR SAISIE].
                [CLEAR]
                
                [📸 companion_demarque_alerte_prix_achat.jpg | left | sm]
                [T]Garde-fou en cas de prix d'achat inconnu
                Si la fiche article ne contient aucun prix d'achat HT (coût d'achat à 0.00 €), le logiciel active une sécurité orange :
                — L'écran impose la saisie du [KEY: Prix de vente TTC habituel] de l'article pour autoriser la validation.
                — Cette information permet à la caisse de déduire la marge théorique du rayon pour valoriser la perte financière. Seuls les démarques d'articles ayant un prix d'achat et de vente renseignés sont pris en compte dans le registre comptable d'audit.
                [CLEAR]
                
                [📸 companion_demarque_historique_local.jpg | lg]
                [T]Mémorisation et suivi des déclarations locales
                — Touchez l'icône d'historique [ICON: History | 18 | text-red-500] en haut à droite pour consulter la liste chronologique des [KEY: 50 dernières démarques enregistrées] sur ce téléphone.
                — Chaque ligne détaille la date, l'heure, le libellé du produit, la quantité décomptée et le motif invoqué, permettant un pointage facile lors des rondes de supervision avec le responsable de magasin.
                `
        },
        {
            id: "companion-transferts-expeditions-b2b",
            title: "8. Préparation des expéditions réseau et sorties B2B",
            // 📸 companion_transfer_modes_selecteur.jpg : Écran des transferts avec sélection entre « Transfert Réseau » et « Sortie Externe ».
            // 📸 companion_transfer_panier_scan_colis.jpg : Panier d'expédition avec détection des stocks disponibles et contrôle anti-dépassement.
            // 📸 companion_transfer_modal_destination.jpg : Modale de scellement demandant la sélection du magasin destinataire ou la saisie du client B2B.
            content:
                `
                Le module « Transferts » permet de composer des cartons de marchandise destinés à dépanner un autre point de vente de votre réseau ou à expédier des commandes vers des clients professionnels hors circuit de caisse direct.
                
                Accessible aux équipiers disposant des droits logistiques ou d'un rôle [PERM: Manager].
                
                [📸 companion_transfer_modes_selecteur.jpg | lg]
                [T]Deux canaux d'expédition nomades
                — [KEY: Transfert Réseau] : Colis destiné à être acheminé vers un autre magasin de votre enseigne connecté au Cloud.
                — [KEY: Sortie Externe] : Marchandises cédées à une entreprise cliente, une collectivité ou un partenaire B2B sans encaissement immédiat au comptoir.
                
                [📸 companion_transfer_panier_scan_colis.jpg | right | md]
                [T]Remplissage du carton et bouclier anti-dépassement
                Scannez ou recherchez les produits à expédier :
                — Chaque coup de douchette ajoute une unité dans le colis.
                — Ajustez les quantités par carton avec les boutons [BTN: +] et [BTN: -].
                [WARNING]Contrôle du stock physique : Le système interroge les stocks en temps réel et refuse formellement d'ajouter une quantité supérieure à la disponibilité réelle en rayon, empêchant tout stock négatif accidentel.
                [CLEAR]
                
                [📸 companion_transfer_modal_destination.jpg | lg]
                [T]Finalisation et transmission à la caisse
                Dès que votre carton est plein, touchez le bandeau inférieur [BTN: Sceller l'expédition] :
                1. [KEY: En mode Réseau] : Choisissez le magasin destinataire parmi la liste des sites de votre entreprise.
                2. [KEY: En mode Sortie B2B] : Saisissez la raison sociale du client destinataire (ex : « Mairie », « Paysagiste Martin »).
                3. Ajoutez une note logistique d'accompagnement si nécessaire.
                
                Touchez [BTN: Envoyer (Wifi)] : le colis est scellé et transmis à la caisse principale. Il ne reste plus qu'à valider le lot sur la caisse pour décompter officiellement les stocks et imprimer le bon de transport A4 !
                `
        },
        {
            id: "companion-file-attente-etiquettes",
            title: "9. Demande d'impression nomade d'étiquettes de linéaire et d'affiches A4",
            // 📸 companion_print_format_selecteur.jpg : Écran de demande d'étiquettes avec sélecteur entre « Petit Format » et « Affiche A4 ».
            // 📸 companion_print_panier_file_attente.jpg : Liste des articles en attente d'impression avec ajustement des quantités et bouton d'envoi.
            content:
                `
                Lors des rondes en rayon ou du réassort des linéaires, il arrive fréquemment de constater une étiquette de prix manquante, déchirée ou comportant un tarif obsolète.
                
                Le module « Étiquettes » permet au vendeur de demander l'impression immédiate d'étiquettes sans quitter son rayon ni mémoriser de références papier.
                
                [📸 companion_print_format_selecteur.jpg | lg]
                [T]Choix du format d'édition en rayon
                Basculez entre les deux formats selon vos linéaires :
                — [KEY: Petit Format (Étiquette)] : Pour le balisage des gondoles et des broches.
                — [KEY: Affiche A4] : Pour la signalétique grand format des têtes de gondole, des promotions ou des plantes remarquables.
                
                [📸 companion_print_panier_file_attente.jpg | lg]
                [T]Constitution du panier d'impression
                — Scannez l'article à la caméra ou recherchez son nom. Le produit rejoint instantanément votre liste d'impression.
                — Ajustez le nombre d'exemplaires souhaités grâce aux boutons [BTN: +] et [BTN: -] (par exemple demander 3 étiquettes pour un produit présent sur 3 niveaux d'étagères).
                — Vous pouvez empiler des articles en petit format et des affiches A4 au sein de la même session.
                
                [T]Transmission à la caisse
                Touchez [BTN: Envoyer à la caisse] :
                — Les demandes sont téléversées directement dans la file d'attente d'impression de la caisse.
                — Sur le poste de travail du magasin, l'écran des étiquettes affiche un badge prévenant qu'une série d'étiquettes est en attente d'édition : il suffit au responsable d'un clic pour lancer l'impression groupée sur l'imprimante thermique ou la planche A4 sans aucune ressaisie !
                `
        }
    ]
};