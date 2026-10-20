export default {
    id: "MARKETING_PROMOTIONS",
    title: "Marketing, Promos & Titres Cadeaux",
    category: "TipTacCaisse",
    iconName: "Target",
    color: "text-rose-600",
    articles: [
        {
            id: "gestion-offres-promotions",
            title: "1. Moteur d'Offres Commerciales, Codes Promo et Canaux de Vente",
            // 📸 marketing_promotions_annuaire.jpg : Tableau de bord des promotions avec filtres rapides (Toutes, Actives, Planifiées, Terminées), badges de canal et colonne de priorité P-X.
            // 📸 marketing_promotions_formulaire.jpg : Formulaire d'édition d'une promotion montrant les 3 étapes (Ciblage, Mécanique, Période) et les canaux Omnicanal/Magasin/Web.
            // 📸 marketing_promotions_ia_bar.jpg : Gros plan sur la barre MagicAiBar en haut de page configurant une offre commerciale complète en langage naturel.
            content:
                `
                Le module « Promotions » centralise la programmation des réductions de prix et des avantages fidélité appliqués automatiquement lors du passage en caisse ou saisis sur votre boutique en ligne.
                
                L'accès à la création d'offres promotionnelles exige une formule d'abonnement adaptée [PLAN:PLAN CONNECT] ou supérieur et la permission administrateur ou manager.
                
                [📸 marketing_promotions_annuaire.jpg | lg]
                [T]Annuaire des promotions et filtres d'état
                Le tableau de bord répertorie l'intégralité de vos opérations commerciales :
                — Une barre de recherche rapide permet d'isoler une offre par son intitulé interne ou par son code promotionnel.
                — Quatre onglets de filtrage permettent d'afficher les offres [BTN: Toutes], [BTN: Actives] (en cours de validité), [BTN: Planifiées] (programmées pour une date ultérieure) ou [BTN: Terminées / Expirées].
                — Chaque ligne détaille son statut visuel (vert actif, bleu planifié, gris désactivé, rouge expiré), sa désignation, son canal de diffusion, son périmètre ciblé, sa mécanique et son niveau de priorité.
                
                [📸 marketing_promotions_ia_bar.jpg | left | sm]
                [T]Configuration assistée par IA
                Pour vous affranchir de la saisie manuelle de formulaires complexes, la barre d'intelligence artificielle supérieure analyse vos instructions en langage naturel :
                Tapez par exemple : « Fais 20% de remise sur le rayon Outillage ce week-end » ou « Passe la remise à 15% et rends-la cumulable ».
                L'assistant configure instantanément le formulaire : il nomme l'opération, cible la bonne famille de produits, paramètre le taux, renseigne les dates de début et de fin et coche les jours actifs correspondants. Il ne vous reste plus qu'à vérifier et enregistrer !
                [CLEAR]
                
                [📸 marketing_promotions_formulaire.jpg | right | md]
                [T]Canaux de diffusion et codes promotionnels
                Lors de la création manuelle (bouton [BTN: Nouvelle Opération]), vous choisissez l'environnement d'application :
                — [KEY: Omnicanal] : Valable simultanément sur vos caisses tactiles de magasin et sur votre site e-commerce.
                — [KEY: Magasin Seul] : L'offre s'applique automatiquement dès qu'un article éligible est scanné en caisse. Le champ de code promo est alors automatiquement désactivé car la caisse tactile n'exige aucune saisie de code pour appliquer une promotion.
                — [KEY: Web Seul] : L'offre est restreinte à votre boutique en ligne. Vous pouvez y renseigner un [KEY: Code Restrictif] (ex : « HIVER2026 ») que l'acheteur devra obligatoirement taper dans son panier d'achat pour débloquer l'avantage.
                [CLEAR]
                
                [T]Périmètre d'application du ciblage
                Le sélecteur de cible permet de délimiter avec précision les articles concernés :
                — [KEY: Tous les produits (Global)] : S'applique à l'intégralité du magasin (priorité standard P-5).
                — [KEY: Panier Global (Montant d'achat)] : Déclenche une remise ou un avantage sur le total du ticket dès qu'un seuil financier est franchi (priorité haute P-60).
                — [KEY: Famille] : Cible un ou plusieurs rayons complets avec moteur de recherche et cases à cocher (priorité P-20).
                — [KEY: Catégorie] : Isole une ou plusieurs sous-catégories précises (priorité P-30).
                — [KEY: Fournisseur] : Cible tous les articles rattachés au catalogue d'un fournisseur précis (priorité P-40).
                — [KEY: Sélection de Produits] : Permet de cocher un par un une sélection d'articles grâce au moteur de recherche tolérant, affichant la référence interne et le prix de vente TTC (priorité P-50).
                
                [T]Plages horaires, jours actifs et option cumulable
                — [KEY: Période calendaire] : Définissez une date de début et de fin. Si les champs sont laissés vides, la promotion est considérée comme permanente.
                — [KEY: Plage horaire (Happy Hour)] : Fixez une heure de début et de fin (ex : 17:00 à 19:00) pour activer la remise uniquement sur un créneau précis de la journée.
                — [KEY: Jours de la semaine] : Cliquez sur les pastilles de jours (Lun à Dim) pour activer ou désactiver certains jours (ex : opération réservée aux samedis et dimanches).
                — [KEY: Promo Cumulable] : Par défaut, une promotion de magasin prend le pas sur la remise de base du client sans se cumuler. En cochant cette case, vous autorisez expressément la réduction à s'ajouter au tarif privilégié de son compte (ex : remise Comité d'Entreprise ou compte Pro).
                `
        },
        {
            id: "mecaniques-commerciales-calcul",
            title: "2. Les 12 Mécaniques Promotionnelles et Calculs en Caisse",
            // 📸 marketing_badges_panier_caisse.jpg : Vue du panier tactile en caisse avec les étiquettes descriptives sous chaque ligne d'article bénéficiant d'une remise promotionnelle.
            // 📸 marketing_mecaniques_selection_types.jpg : Menu déroulant du bloc « Mécanique Commerciale » affichant les 4 univers : Remises immédiates, Lots & Volume, Fidélité, Panier.
            content:
                `
                Le moteur de tarification évalue le panier en direct à chaque ajout d'article et recalcule instantanément le tarif le plus avantageux.
                
                [📸 marketing_mecaniques_selection_types.jpg | lg]
                [T]1. Remises Immédiates
                [ST][ICON: Percent | 14 | text-teal-600] Remise en pourcentage (%) :
                Déduit un pourcentage sur les articles éligibles (ex : -15 %) dès 1 unité ou à partir d'un seuil de quantité requis (ex : -20 % dès 3 achetés).
                
                [ST][ICON: Tag | 14 | text-teal-600] Remise en montant fixe (€) :
                Applique une réduction brute en euros sur chaque produit (ex : -3,00 € par article).
                
                [ST][ICON: Shield | 14 | text-teal-600] Prix Fixe Imposé :
                Écrase le tarif catalogue pour vendre l'article à un prix public cassé prédéfini (ex : le produit passe automatiquement à 9,99 €).
                
                [T]2. Offres de Volume et Lots
                [ST][ICON: Plus | 14 | text-teal-600] N achetés = X offerts (BXGY) :
                Paramétrez le nombre d'unités à acheter et le nombre d'unités offertes (ex : 2 achetés = 1 offert).
                En caisse, le moteur trie les articles éligibles du moins cher au plus cher et déduit la valeur des pièces offertes au prorata exact des lignes du panier, tout en affichant l'étiquette explicite « 1 offert(s) » pour le client et le contrôleur de gestion.
                
                [ST][ICON: Layers | 14 | text-teal-600] Prix par Lot :
                Fixe un montant global pour un regroupement d'articles (ex : « 15,00 € le lot de 3 »). La réduction globale obtenue est ventilée au prorata de la valeur de chaque composant du lot.
                
                [ST][ICON: Tag | 14 | text-teal-600] Le Nème à -X% :
                Accorde une remise ciblée sur un article supplémentaire (ex : -50 % sur le 2ème article de la gamme).
                
                [ST][ICON: TrendingDown | 14 | text-teal-600] Prix Dégressif :
                Abaisse le prix unitaire d'un article dès que la quantité franchit un palier d'achat en volume (ex : tarif unitaire passant à 4,50 € dès 5 unités achetées).
                
                [T]3. Avantages Fidélité et Cashback
                [ST][ICON: Star | 14 | text-teal-600] Multiplicateur de Points :
                Multiplie les points acquis par le client sur les produits ciblés (ex : Points x2 sur tout le rayon Animalerie).
                
                [ST][ICON: Gift | 14 | text-teal-600] Cashback en Bon d'Achat différé :
                Calcule un pourcentage sur le montant dépensé pour éditer un bon d'achat lors de la clôture du ticket, incitant l'acheteur à revenir pour sa prochaine visite.
                
                [ST][ICON: Star | 14 | text-teal-600] Cashback converti en Points de Fidélité :
                Transforme une fraction de la somme dépensée en points supplémentaires crédités directement sur le compte de l'acheteur.
                
                [T]4. Mécaniques de Panier et Logistique
                [ST][ICON: ShoppingBag | 14 | text-teal-600] Remise Panier par Palier ou par Tranches :
                Accorde une remise forfaitaire en euros ou en pourcentage selon le montant brut du ticket de caisse :
                — En mode [KEY: STRICT] : S'applique dès le seuil franchi (ex : -10 € dès 100 € d'achat).
                — En mode [KEY: TRANCHE] : La remise se multiplie pour chaque multiple du palier atteint (ex : -10 € tous les 50 € d'achat, soit -20 € pour 100 € et -30 € pour 150 €).
                
                [ST][ICON: Truck | 14 | text-teal-700] Frais de Port Offerts (Web) :
                Annule automatiquement les frais de livraison sur la boutique en ligne dès que le total des articles atteint le panier minimum programmé.
                `
        },
        {
            id: "generateur-bons-titres-cadeaux",
            title: "3. Générateur de Bons d'Achat, Titres Cadeaux et Avoirs",
            // 📸 marketing_generateur_bons_formulaire.jpg : Interface de création d'un bon d'achat avec montant facial, date d'échéance, minimum d'achat et options d'exclusion.
            // 📸 marketing_generateur_selection_nominatif.jpg : Panneau latéral droit en mode « Nominatif » avec la barre de recherche client et les profils rattachés.
            // 📸 marketing_vouchers_impression_choix.jpg : Modale d'édition proposant la bascule entre le format thermique 80 mm et la lettre officielle A4 avec message de courtoisie.
            content:
                `
                Le module « Bons d'Achat » (accessible depuis les univers Marketing et Clients) permet d'émettre des titres de paiement à code-barres unique utilisables au comptoir ou sur le web.
                
                [📸 marketing_generateur_bons_formulaire.jpg | lg]
                [T]Paramétrage de la valeur et des restrictions
                Dans l'onglet [BTN: Générateur], configurez les modalités du titre :
                [ST][ICON: Ticket | 14 | text-teal-600] Montant et Échéance :
                Saisissez la valeur faciale en euros et fixez la [KEY: Date d'expiration]. Par défaut, TipTac calcule une date limite conforme à la durée de validité commerciale configurée dans votre magasin (par exemple 6 mois).
                
                [ST][ICON: Layers | 14 | text-teal-600] Périmètre de rayon :
                Vous pouvez restreindre l'utilisation du bon à une [KEY: Famille] (rayon) ou une [KEY: Catégorie] précise de votre catalogue.
                
                [ST][ICON: Shield | 14 | text-teal-600] Conditions d'achat et exclusions :
                — [KEY: Minimum d'achat requis] : Impose un seuil de panier pour débloquer l'utilisation du bon (ex : bon de 10 € dès 60 € d'achat).
                — [KEY: Exclure les articles en promotion] : Empêche l'utilisation du bon sur des produits bénéficiant déjà d'un tarif remisé.
                — [KEY: Usage unique strict] : Bloque tout reliquat. Si le montant des achats est inférieur à la valeur du bon, le solde restant est définitivement perdu pour le client.
                
                [📸 marketing_generateur_selection_nominatif.jpg | right | md]
                [T]Modes de distribution : Anonyme vs Nominatif
                La colonne de droite détermine les bénéficiaires des titres émis :
                [ST]1. Mode Anonyme (Comptoir / Événements) :
                Indiquez la quantité de titres souhaitée. TipTac édite des bons au porteur dotés chacun d'un code unique, idéaux pour les jeux-concours, la distribution en salon ou les opérations de rue.
                
                [ST]2. Mode Nominatif (Clients ciblés) :
                Recherchez et cochez un ou plusieurs clients de votre annuaire CRM. Le bon sera lié à leur profil personnel : la caisse refusera formellement son application si un autre compte client est ouvert au comptoir.
                [CLEAR]
                
                [📸 marketing_vouchers_impression_choix.jpg | left | md]
                [T]Double format d'impression : Thermique 80 mm vs A4
                Dès que vous validez la création, la modale d'édition s'affiche pour vous permettre de choisir le support physique :
                [ST][ICON: Printer | 14 | text-teal-600] Format Thermique (80 mm) :
                Édite un coupon de caisse comportant le logo du magasin, le nom du bénéficiaire, la valeur en très gros caractères, la synthèse des restrictions d'achat, le code-barres scannable en technologie CODE128 et l'horodatage.
                
                [ST][ICON: FileText | 14 | text-teal-600] Format Classique (A4 pleine page) :
                Génère un bon cadeau élégant sur une page A4 comprenant un filigrane de sécurité, les coordonnées du magasin, le montant valorisé et un encadré personnalisable pour saisir un [KEY: Message de courtoisie] imprimé (ex : « Toute l'équipe vous souhaite d'excellentes fêtes ! »).
                [CLEAR]
                `
        },
        {
            id: "suivi-rachat-titres-email",
            title: "4. Suivi des Encours, Taux de Rachat et Envoi Groupé par E-mail",
            // 📸 marketing_historique_vouchers_kpis.jpg : Bandeau statistique supérieur de l'historique des bons avec Volume Émis, Taux de Rachat (%) et CA Absorbé (€).
            // 📸 marketing_vouchers_tableau_actions.jpg : Tableau de suivi des titres avec sélection multiple par case à cocher, boutons « Envoyer par e-mail » et « Révoquer ».
            content:
                `
                L'onglet [BTN: Historique] du générateur de bons assure le suivi financier de vos titres en circulation et permet de mesurer leur rentabilité commerciale.
                
                [📸 marketing_historique_vouchers_kpis.jpg | lg]
                [T]Tableau de bord de rentabilité des titres émis
                Sélectionnez une période d'analyse calendaire ou choisissez un filtre rapide ([BTN: Aujourd'hui], [BTN: Mois en cours], [BTN: Année en cours]) :
                — [KEY: Volume Émis] : Nombre total de titres créés sur la période.
                — [KEY: Taux de Rachat (%)] : Pourcentage des bons ayant été consommés en caisse face au total des émissions.
                — [KEY: CA Absorbé] : Montant exact en euros des réductions consommées lors des encaissements en magasin.
                
                [📸 marketing_vouchers_tableau_actions.jpg | right | md]
                [T]Filtrage par origine et état du titre
                Trois filtres permettent d'isoler la nature des bons :
                — [BTN: Tous] : Vue d'ensemble du passif commercial.
                — [BTN: Manuels] : Titres émis manuellement depuis le générateur.
                — [BTN: Cashback] : Bons d'achat générés automatiquement par la caisse suite à une offre de fidélité ou à un palier de points.
                
                Chaque titre affiche son statut juridique :
                — [KEY: ACTIF] (en vert) : Titre valide et disponible.
                — [KEY: J-X AVANT EXPIRATION] (en alerte ambre clignotante) : Alerte de fin de validité sous 7 jours pour inciter le client à l'utiliser.
                — [KEY: UTILISÉ] (en gris) : Titre dont le montant a été totalement consommé en caisse.
                — [KEY: EXPIRÉ] ou [KEY: ANNULÉ] (en rouge) : Titre dont l'échéance est dépassée ou révoqué par la direction.
                [CLEAR]
                
                [T]Envoi groupé par e-mail et révocation de titres
                Cochez les cases en début de ligne pour déclencher des actions par lot :
                [ST][ICON: Mail | 14 | text-teal-600] Expédition par e-mail en rafale :
                Si votre serveur d'envoi Brevo est configuré, cliquez sur [BTN: Envoyer par email]. Le logiciel génère et transmet instantanément à chaque bénéficiaire son titre cadeau dématérialisé avec code-barres et consignes d'utilisation sans imprimer de papier.
                
                [ST][ICON: AlertTriangle | 14 | text-teal-600] Révocation autoritaire :
                Le bouton [BTN: Révoquer] permet d'annuler définitivement une série de bons sélectionnés. Leur solde résiduel est immédiatement ramené à 0,00 €, empêchant tout encaissement au comptoir en cas de litige ou de perte.
                `
        },
        {
            id: "studio-emailing-drag-and-drop",
            title: "5. Éditeur de Campagnes E-mail par Glisser-Déposer",
            // 📸 marketing_editeur_email_vue_globale.jpg : Vue générale du studio de création e-mail avec la colonne de ciblage à gauche, la zone de conception centrale, l'aperçu mobile et la boîte à outils à droite.
            // 📸 marketing_bloc_produit_fuzzy_search.jpg : Bloc catalogue produit déplié montrant la recherche instantanée d'articles et l'affichage des badges de promotions actives.
            // 📸 marketing_tags_variables_cliquables.jpg : Panneau latéral droit des jetons dynamiques avec boutons cliquables copiant {{prenom}}, {{horaires}}, etc. dans le presse-papier.
            content:
                `
                Le studio d'édition de newsletters et d'e-mails promotionnels repose sur une conception modulaire en temps réel permettant de concevoir des communications professionnelles sans compétences graphiques.
                
                L'utilisation de l'éditeur de campagnes e-mail requiert une formule [PLAN: Commerce] ou supérieure.
                
                [📸 marketing_editeur_email_vue_globale.jpg | lg]
                [T]Les 8 composants modulaires d'e-mail
                Dans la boîte à outils latérale droite, cliquez sur un composant pour l'insérer sur votre maquette :
                — [KEY: Logo du Magasin] : Insère automatiquement le logo officiel de votre enseigne avec curseur d'ajustement de la taille de 10 % à 100 %.
                — [KEY: Titre Principal] : Bloc de titrage textuel avec choix de couleur, alignement (gauche, centré, droite), taille de police (de 6 px à 24 px), gras, italique et barré.
                — [KEY: Bloc Paragraphe] : Corps de texte riche acceptant les retours à la ligne, la justification et les variables de personnalisation.
                — [KEY: Image / Bannière] : Visuel pleine largeur ou ajustable avec fonction d'import direct depuis votre ordinateur. Comprend une option de [KEY: Bouton superposé] directement au centre, en haut ou en bas de la photo.
                — [KEY: Combo Image / Texte] : Bloc double-colonne associant une illustration et un argumentaire rédactionnel, avec inversion de disposition (Image à gauche ou à droite).
                — [KEY: Bouton d'action] : Bouton de redirection web avec couleur de fond personnalisée, bordures arrondies et saisie de l'URL cible.
                — [KEY: Réseaux Sociaux] : Macarons de vos canaux configurés (Facebook, Instagram, WhatsApp, TikTok, Pinterest, Messenger).
                — [KEY: Catalogue Produit] : Intégration en direct d'articles de votre magasin.
                
                [📸 marketing_bloc_produit_fuzzy_search.jpg | right | md]
                [T]Bloc Catalogue et détection automatique des promotions
                Le bloc [BTN: Catalogue Produit] transforme votre e-mail en véritable vitrine marchande :
                — Saisissez quelques lettres pour rechercher un produit dans votre stock local : le sélecteur intelligent filtre les articles ayant une photo et un tarif de vente valide.
                — Vous pouvez ajouter jusqu'à 12 articles par bloc et basculer entre le [KEY: Mode Détaillé] (grandes cartes avec visuel, tarif et bouton d'action) et le [KEY: Mode Compact] (grille serrée optimisée pour les catalogues denses).
                — **Liaison temps réel avec vos promotions de caisse** : Si une offre commerciale est en cours dans votre magasin sur l'article inséré, le bloc détecte automatiquement la réduction, barre le prix d'origine et affiche l'étiquette rouge de la promotion (ex : « -20% IMMÉDIAT » ou « 2 ACHETÉS = 1 OFFERT ») sans aucune saisie manuelle de votre part !
                [CLEAR]
                
                [T]Organisation par glisser-déposer (Drag & Drop)
                Chaque bloc comporte à gauche une poignée de préhension verticale :
                Maintenez le clic enfoncé sur cette poignée pour déplacer le composant vers le haut ou le bas. Une barre verte indique l'emplacement de destination avant de relâcher.
                Le menu latéral à trois points présent sur chaque bloc permet de [BTN: Dupliquer] ou [BTN: Supprimer] le bloc en un clic.
                
                [📸 marketing_tags_variables_cliquables.jpg | left | sm]
                [T]Variables dynamiques et tags cliquables
                Pour personnaliser vos courriers avec le prénom du destinataire ou les informations de votre commerce, cliquez sur les étiquettes de la boîte à outils pour copier automatiquement le jeton dans votre presse-papier :
                [CLEAR]
                — [KEY: {{prenom}}] : Prénom de l'acheteur (remplacé automatiquement lors de la distribution).
                — [KEY: {{enseigne}}] : Nom commercial du magasin.
                — [KEY: {{adresse}}] : Adresse postale complète.
                — [KEY: {{telephone}}] et [KEY: {{website}}] : Coordonnées de contact.
                — [KEY: {{horaires}}] : Planning hebdomadaire complet d'ouverture.
                — [KEY: {{horaires_speciaux}}] : Prochaines ouvertures ou fermetures exceptionnelles (jours fériés, inventaires).
                [CLEAR]
                
                [T]Pied de page légal et conformité de désinscription
                Chaque e-mail diffusé intègre automatiquement en bas de page les mentions d'entreprise de votre établissement (Forme juridique, Capital, SIRET, RCS et Greffe) ainsi que le lien technique légal de désinscription en un clic obligatoire pour respecter la réglementation sur la protection des données et le droit de la consommation.
                `
        },
        {
            id: "campagnes-sms-segmentation-routage",
            title: "6. Campagnes SMS, Segmentation CRM et Suivi de Distribution",
            // 📸 marketing_diffuseur_sms_compteur.jpg : Vue de l'éditeur SMS avec la zone de frappe, le simulateur d'écran smartphone à droite et le compteur de caractères/segments.
            // 📸 marketing_routage_historique_stats.jpg : Tableau d'historique de distribution avec dates d'envoi, volumes distribués, taux d'ouverture (%), clics et rejets (bounces).
            content:
                `
                Pour des actions promotionnelles d'impact immédiat (ventes privées, arrivages exceptionnels ou relance d'inactifs), le diffuseur SMS permet d'envoyer des messages directs sur les téléphones mobiles de vos clients.
                
                [📸 marketing_diffuseur_sms_compteur.jpg | lg]
                [T]Rédaction SMS et calcul des segments
                Basculez sur l'onglet [BTN: Diffuseur SMS] :
                — Rédigez votre annonce dans la zone de texte. Le message accepte également les jetons dynamiques comme [KEY: {{prenom}}] pour interpeller directement votre client.
                — Le simulateur smartphone à droite projette en continu le rendu final avec le nom de votre magasin en en-tête et l'ajout automatique de la mention légale obligatoire [KEY: STOP au 36000].
                
                [ST][ICON: Clock | 14 | text-teal-600] Compteur de segments et estimation des coûts :
                Sous la zone de rédaction, un bandeau technique calcule en direct :
                1. Le nombre total de [KEY: Caractères] tapés.
                2. Le volume de [KEY: Segments SMS] (1 segment jusqu'à 160 caractères, puis tranches de 153 caractères pour les messages longs).
                3. Le [KEY: Coût estimé] en crédits Brevo selon le volume de clients ciblés dans votre filtre CRM.
                Si votre solde de crédits SMS est insuffisant, le système affiche une alerte rouge et bloque l'envoi pour prévenir tout échec de distribution.
                
                [T]Filtres de segmentation de l'audience
                Le panneau latéral gauche permet de croiser de multiples critères pour isoler la cible idéale de votre campagne :
                — [KEY: Abonnés Marketing] : Cochez obligatoirement l'accord marketing (Opt-in) pour respecter la législation sur le consentement.
                — [KEY: Profil & Civilité] : Isolez les particuliers ou les professionnels (B2B), ou ciblez par civilité (Mme ou M.).
                — [KEY: Coordonnées] : Exige un e-mail ou un numéro de mobile valide normalisé.
                — [KEY: Département] : Filtrez sur les 2 chiffres du code postal pour une communication de proximité locale.
                — [KEY: Mois Anniversaire & Tranche d'Âge] : Ciblez les clients dont l'anniversaire tombe sur le mois en cours.
                — [KEY: Solde de Points] : Isolez vos meilleurs clients fidèles (ex : plus de 200 points en réserve).
                — [KEY: Activité du profil] : Ciblez les acheteurs récents (< 30 jours) ou relancez les clients « endormis » inactifs depuis plus de 90 jours ou 1 an.
                
                [T]Gestion des brouillons et Planification
                — [BTN: Enregistrer] : Enregistre à tout instant votre composition dans la galerie locale. Vous pouvez rouvrir n'importe quel travail en cours via le bouton [BTN: Mes Brouillons].
                — [KEY: Date d'envoi prévue] : Programmez l'heure exacte d'expédition de votre email (ne fonctionne pas pour les SMS). Tant que l'échéance n'est pas atteinte, la campagne porte le statut [KEY: PLANIFIÉE] et peut être stoppée ou annulée d'un clic.
                
                [📸 marketing_routage_historique_stats.jpg | right | md]
                [T]Historique et rapports de performance d'audience
                Le sous-module « Historique & Performances » centralise le suivi de tous vos envois passés :
                — [KEY: Volume distribué] : Nombre exact de SMS ou d'e-mails pris en charge.
                — [KEY: Taux d'Ouverture (%)] : Pourcentage d'e-mails ouverts par les destinataires.
                — [KEY: Clics] : Nombre de clics enregistrés sur vos boutons d'action et liens vers votre boutique.
                — [KEY: Rejets] : Nombre d'adresses invalides ou de numéros non attribués identifiés lors du routage pour vous aider à assainir votre fichier.
                [CLEAR]
                `
        },
        {
            id: "configuration-brevo-modeles-transactionnels",
            title: "7. Serveur d'Expédition (Brevo) et Modèles d'E-mails Transactionnels",
            // 📸 marketing_configuration_brevo_api.jpg : Écran des paramètres montrant la saisie de la clé API Brevo v3, l'e-mail d'expédition vérifié et le nom d'expéditeur SMS.
            // 📸 marketing_templates_transactionnels_liste.jpg : Barre des 11 modèles d'e-mails transactionnels (Ticket, Facture, Devis, Carte Cadeau, Confirmation Web, Préparation, Prête, Expédiée...).
            // 📸 marketing_bloc_systeme_obligatoire_recap.jpg : Aperçu d'un modèle d'e-mail avec le bloc système dynamique obligatoire [Détail du panier préparé] encadré en violet.
            content:
                `
                Pour éviter que vos e-mails de caisse (tickets numériques, factures) et vos communications promotionnelles ne soient rejetés par les filtres anti-spam de messageries comme Orange, Gmail ou Outlook, TipTac s'interface avec l'infrastructure professionnelle Brevo.
                
                [📸 marketing_configuration_brevo_api.jpg | lg]
                [T]Liaison Technique du Serveur d'Expédition
                La configuration s'effectue dans le menu [KEY: Configuration Magasin & Matériel] > [KEY: E-mails & Envois] :
                [ST][ICON: Target | 14 | text-teal-600] Clé API Brevo (v3) :
                Créez votre compte sur brevo.com et copiez votre clé API v3 (commençant par « xkeysib-... »).
                
                [ST][ICON: Mail | 14 | text-teal-600] E-mail d'expédition vérifié :
                Renseignez une adresse électronique utilisant le nom de domaine que vous avez authentifié sur votre console de routage.
                
                [ST][ICON: Phone | 14 | text-teal-600] Nom d'expéditeur SMS :
                Définissez l'intitulé qui s'affiche en tête des SMS reçus par vos clients (11 caractères alphanumériques au maximum, sans espaces ni caractères spéciaux).
                
                [ST][ICON: Globe | 14 | text-teal-600] Hébergement Cloud du Logo :
                Pour que votre logo soit visible dans tous les logiciels de messagerie sans blocage de sécurité, cliquez sur le bouton [BTN: Héberger mon logo] : TipTac le publie automatiquement sur son stockage sécurisé et génère son URL publique.
                
                [📸 marketing_templates_transactionnels_liste.jpg | right | md]
                [T]Personnalisation des 11 Modèles Transactionnels
                Dans l'onglet [KEY: Modèles d'e-mails], vous pouvez personnaliser l'apparence des messages automatiques expédiés au fil de l'activité du magasin et du web :
                — Documents de vente : [KEY: Ticket], [KEY: Facture], [KEY: Devis], [KEY: Bon / Carte].
                — Commandes Web Click & Collect et Expéditions : [KEY: Confirmation], [KEY: Reçu Paiement], [KEY: Validée], [KEY: Prête], [KEY: Expédiée], [KEY: Annulée] et [KEY: Demande d'avis].
                
                [📸 marketing_bloc_systeme_obligatoire_recap.jpg | left | sm]
                [WARNING]Protection des Blocs Systèmes Obligatoires :
                Les e-mails transactionnels intègrent des blocs indispensables à la validité juridique de la transaction (comme le récapitulatif détaillé du panier, la ventilation des montants de TVA ou le code-barres de la carte cadeau). 
                Ces blocs portent la mention « [ Bloc Système Dynamique ] - Obligatoire » : ils peuvent être déplacés pour aménager la mise en page mais ne peuvent en aucun cas être supprimés du document.
                [CLEAR]
                
                [T]Pied de page universel configurable (Footer)
                Tous les modèles partagent un pied de page unique configurable :
                — Choix de l'alignement (gauche, centré, droite) et de l'opacité générale.
                — Intégration du logo et réglage de sa taille.
                — Affichage des réseaux sociaux du magasin (texte seul, icônes vectorielles seules ou icônes avec texte).
                — Injection automatique des coordonnées juridiques d'entreprise déclarées dans les [LINK: PARAMETRES_MAGASIN#mentions-legales-conformite-nf525 | Mentions légales obligatoires] (Raison sociale, SIRET, RCS, Greffe, N° de TVA et capital) avec interrupteur pour les masquer sur les courriers strictement publicitaires.
                `
        }
    ]
};