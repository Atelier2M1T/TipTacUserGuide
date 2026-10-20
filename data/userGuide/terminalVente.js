export default {
    id: "TERMINAL_VENTE",
    title: "Terminal de Vente & Encaissements",
    category: "TipTacCaisse",
    iconName: "ShoppingCart",
    color: "text-amber-600",
    articles: [
        {
            id: "ergonomie-dispositions",
            title: "1. Ergonomie du terminal, dispositions et affichage sur mesure",
            // 📸 caisse_presets_disposition.jpg : Panneau des paramètres d'interface montrant les wireframes des 6 dispositions d'écran disponibles (Classique, Supérette, Supermarché, 3 Colonnes, Ergonomique, Modulaire).
            // 📸 caisse_mode_gaucher.jpg : Vue plein écran du terminal avec l'inversion Gaucher activée, plaçant le panier et le cockpit d'encaissement en miroir à gauche de l'écran.
            // 📸 caisse_densite_panier.jpg : Comparatif visuel entre le mode de panier « Confortable » (lignes aérées) et « Compact » (lignes fines de 36 px pour écrans 15 pouces).
            // 📸 caisse_ecran_client.jpg : Vue de l'écran secondaire orienté vers le client affichant le logo du magasin, le panier en temps réel, les points de fidélité et le détail des paiements saisis au fil de l'eau.
            content:
                `
                Le terminal de vente TipTac est pensé pour s'adapter à la configuration physique de votre comptoir, à la diagonale de votre écran tactile et aux particularités de votre activité commerciale.
                
                Un rôle [PERM: Manager] ou [PERM: Admin] est requis pour modifier l'interface de l'écran de caisse.

                [T] 6 dispositions d'écran adaptées à chaque métier.
                [ST]  1. «Classique» :
                L'agencement universel par excellence. Le panier de vente occupe la moitié supérieure gauche, le clavier tactile prend place en bas, et la colonne de droite rassemble les totaux, le pavé numérique et le cockpit de validation.
                [📸 caisse_mode_droitier.jpg]
                [ST]  2. «Supérette» :
                Conçu pour les commerces enregistrant un volume important d'articles par ticket. Le panier s'étend sur toute la hauteur de l'écran d'un côté, tandis que les commandes, la calculatrice et un clavier tactile compact se partagent la seconde colonne.
                [📸 caisse_disposition_superette.jpg]
                [ST]  3. «Supermarché» :
                Taillé pour la très haute cadence de passage en caisse. Il met en avant une colonne d'actions rapides dédiée, une calculatrice centrale spacieuse et un panier élastique qui s'étire selon le contenu de la vente.
                [📸 caisse_disposition_supermarche.jpg]
                [ST]  4. «3 Colonnes» :
                Spécialement optimisé pour les moniteurs larges panoramiques (format 16:9). L'espace utile est découpé en trois tiers égaux : Panier d'articles à gauche, Clavier tactile au centre et Cockpit d'encaissement complet à droite.
                [📸 caisse_disposition_colonne.jpg]
                [ST]  5. «Ergonomique» :
                Le panier s'étale horizontalement sur 100 % de la largeur en partie haute. Toutes les commandes opérationnelles, le pavé tactile et les raccourcis de paiement sont regroupés dans une barre basse à hauteur de main pour limiter la fatigue musculaire.
                [📸 caisse_disposition_ergonomie.jpg]
                [ST]  6. «Modulaire» :
                Une formule hybride associant un pavé numérique géant pour la saisie de prix, un panier aéré et une sélection de touches tactiles rapides.
                
                 [📸 caisse_disposition_modulaire.jpg]
                [TIP]La modification de la disposition s'effectue dans [LINK: PARAMETRES_MAGASIN#identite-horaires-visuels | Configuration Magasin & Matériel] (onglet « Interfaces et Écrans »).
                [📸 caisse_presets_disposition.jpg]
                
                [T]Inversion Gaucher / Droitier
                Depuis les paramètres d'interface, vous pouvez inverser d'un clic toute la structure de la caisse. Le panier, les totaux et le cockpit basculent instantanément à gauche ou à droite de l'écran sans nécessiter de redémarrage. Ci-dessous la disposition «Classique» en mode inversé.
                [📸 caisse_mode_gaucher.jpg]
                
                [T]Densité d'affichage du panier
                Deux densités sont proposées pour l'affichage des lignes du panier:
                [📸 caisse_densite_panier.jpg | h=150]
                [ST] Mode Confortable
                Présente des lignes hautes et généreusement espacées, parfaites pour la lecture des longs libellés botaniques ou des descriptions de prestations.
                [📸 caisse_densite_panier_faible.jpg]
                [ST]Mode Compact
                Compresse la hauteur des lignes à 36 pixels. Cette densité permet d'afficher plus d'articles simultanément sans avoir recours au défilement vertical, un atout majeur pour les écrans tactiles 15 pouces standards de point de vente.
                [📸 caisse_densite_panier_dense.jpg]
                
                [T]Écran Client Déporté
                Si votre caisse est équipée d'un second moniteur tourné vers l'acheteur, TipTac y projette en continu une interface épurée et valorisante : logo de votre établissement, détail des articles bippés, économies obtenues grâce aux promotions, nom du client et solde de points. Dès que la fenêtre de paiement s'ouvre, l'écran client détaille la ventilation des règlements déjà perçus et le solde restant dû.
                [📸 caisse_ecran_client.jpg]
                
                [T]Réglages de performances et de confort
                Vous pouvez activer ou désactiver les bips sonores de confirmation (bip de douchette, cliquetis du pavé numérique) ainsi que les animations visuelles pour garantir une réactivité immédiate sur les terminaux de caisse moins récents.
                [📸 caisse_options_son_animation.jpg | h=150]
            `
        },
        {
            id: "saisie-articles-prix-libre",
            title: "2. Saisie des articles, prix libres, retours et fiches conseils",
            // 📸 caisse_scan_douchette.jpg : Écran de caisse lors du scannage d'un article à la douchette, montrant l'ajout instantané dans le panier.
            // 📸 caisse_saisie_prix_libre.jpg : Gros plan sur le pavé numérique avec l'affichage de l'attente de prix libre et l'auto-validation à la 2ᵉ décimale.
            // 📸 caisse_panier_fiche_conseil.jpg : Ligne d'article dans le panier mettant en évidence l'icône de feuille verte et la fenêtre de conseils botaniques ouverte en surimpression.
            // 📸 caisse_alerte_stock_epuise.jpg : Fenêtre d'alerte orange s'affichant lors du scan d'un produit dont le stock physique théorique est épuisé ou négatif.
            content:
            `
                L'enregistrement des ventes en magasin a été pensé pour conjuguer rapidité d'exécution et flexibilité totale face aux différents modes de vente (codes-barres, vrac, articles sans étiquette).
                [T]Scan permanent à la douchette
                Le lecteur de code-barres fonctionne en continu en tâche de fond. Vous n'avez jamais besoin de cliquer préalablement sur un champ de texte : bippez simplement un produit pour qu'il rejoigne le panier. Le système intègre un filtre de correction qui convertit automatiquement les séquences des douchettes configurées en clavier AZERTY français (correction des chiffres avec majuscule et des tirets).
                [📸 caisse_pave_tactile.jpg | left | h=200]
                [T]Ventes multiples au multiplicateur
                Pour enregistrer plusieurs unités d'un même article sans avoir à bipper dix fois de suite, tapez la quantité souhaitée, puis scannez l'article ou touchez sa case tactile (ex : taper [BTN: 6] puis bipper une bouteille pour ajouter 6 unités).[CLEAR]
                [T]Gestion experte des articles à prix libre (0 €) :
                Pour les produits dont le tarif varie à chaque vente (créations florales, arrivages du marché, consignes, prestations de rempotage ou vrac), TipTac propose 2 méthodes de saisie adaptées au rythme du caissier :
                [ST]Méthode 1 (Prix saisis d'avance) :
                Tapez [BTN: Quantité] [KEY: *] [BTN: Prix unitaire] » puis touchez la case du produit. Ou juste [BTN: Prix unitaire] puis la touche s'il la quantité est 1.
                [CLEAR]Exemple : taper « [KEY: 3] [KEY: *] [KEY: 1][KEY: 2][KEY: ,][KEY: 5][KEY: 0] » puis toucher « Fleurs coupées » insère immédiatement 3 lignes à 12,50 €.
                [CLEAR]Exemple 2 : taper [KEY: 6] [KEY: ,] [KEY: 9] puis toucher « Divers Animalerie » insère immédiatement une ligne à 6,90 €.
                [ST]Méthode 2 (Prix saisi après) :
                Tapez simplement la touche correspondant au produit que vous souhaitez vendre (exemple : «Dessert») puis le montant au pavé numérique. Ensuite, validez le prix de vente avec la touche [ICON: CornerDownLeft | 20]. Si vous renseignez deux décimales, la validation du prix de vente se fera automatiquement. Pour une quantité supérieur à 1, appuyez sur la touche correspondant au produit, puis tapez [BTN: Quantité] [KEY: *] [BTN: Prix unitaire] au clavier numérique (validation manuelle ou automatique à la seconde décimale). Vous pouvez également utiliser la lettre [BTN: x] à la place de l'étoile [KEY: *]
                [CLEAR]Exemple : toucher « Dessert » taper [KEY: 4] [KEY: ,] [KEY: 5] puis valider avec la touche [ICON: CornerDownLeft | 20] insère 1 unité à 4,50 €.
                [CLEAR]Exemple 2 : toucher « Plat du jour » puis taper [KEY: 2] [KEY: *] [KEY: 1][KEY: 8][KEY: ,][KEY: 0][KEY: 0] insère 2 unités à 18,00 €.
                [📸 caisse_saisie_quantite_multiple.jpg | h=50]
                [TIP]Saisie manuelle de secours : Si l'étiquette d'un article est déchirée ou illisible, cliquez sur l'action [BTN: Saisie Code] pour composer directement les chiffres du code EAN au clavier.
                [T]Articles dossiers et déclinaisons (Produits Maîtres)
                Lorsque vous sélectionnez un produit comportant des variantes (tailles, litrages, couleurs) depuis la clavier de touches ou la recherche de produit, le clavier bascule immédiatement dans une sous-grille dédiée listant l'ensemble des déclinaisons en stock, avec les niveaux d'inventaire et une touche [BTN: Retour] réservée en première position.
                [📸 caisse_clavier_variantes.jpg | h=120]
                [📸 caisse_fiche_botanique_panier.jpg | LEFT ]
                [T]Fiches conseils botaniques et techniques\n [PERM: Option VegApp requise]
                Tous les végétaux et produits reliés au dictionnaire horticole affichent une icône de feuille verte dans le panier.
                Un clic permet d'ouvrir instantanément la fiche complète (exposition au soleil, fréquence d'arrosage, résistance au gel, calendrier de floraison et toxicité) pour renseigner l'acheteur ou lui imprimer un mémo de culture.
                [CLEAR][📸 caisse_alerte_stock_epuise.jpg | RIGHT | h=200]
                [T]Alertes intelligentes de rupture de stock
                Si un vendeur scanne un produit dont l'inventaire informatique est à zéro ou négatif, une modale d'alerte orange bloque temporairement la vente. Elle permet au caissier de vérifier la conformité du produit avant de forcer l'ajout, évitant ainsi les erreurs d'étiquetage en linéaire.
                [CLEAR][T]Édition directe sur les lignes du panier
                En cliquant directement sur les cellules d'une ligne du panier, vous pouvez modifier la désignation de l'article en y apportant des précisions pour le ticket
                [📸 caisse_modification_libelle_produit.jpg| h=200]
                Vous ajuster la quantité d'un produit au pavé en cliquant sur la cellule correspondant, modifier ou forcer son prix unitaire et appliquer de remise. Les remises manuelles et modifications de prix des articles dont le prix de vente n'est pas libre sont tracées et consultables dans l'administration. Les remises exigent une permission spécifique ou le code PIN d'un responsable.
                [📸 caisse_modification_prix_produit.jpg, caisse_modification_quantite_produit.jpg, caisse_modification_remise.jpg | h=220]
            `
        },
        {
            id: "crm-fidelite-qualite",
            title: "3. Fiche client, complétude CRM et règles de fidélité",
            content:
            `
                Associer un client à son panier permet d'alimenter votre historique commercial, d'octroyer des points et d'appliquer automatiquement des tarifs négociés. 
                [T]Identification rapide au comptoir 
                Retrouvez un profil en tapant quelques lettres de son nom, son numéro de téléphone ou en scannant directement sa carte de fidélité avec la douchette. Si le code scanné n'existe pas encore dans votre base, le logiciel vous propose automatiquement d'ouvrir la création de fiche en y pré-remplissant le numéro de carte. 
                [📸 caisse_recherche_client.jpg]
                [T]Détective de complétude CRM en direct 
                Pour fiabiliser votre fichier marketing, le bandeau supérieur de caisse analyse en temps réel les informations renseignées sur le client : 
                [WARNING]Bandeau rouge clignotant : Alerte critique signalant qu'aucun canal de contact n'est renseigné (« Demander : Téléphone ou Email »). Cela incite le caissier à collecter l'information avant le règlement. 
                [📸 caisse_client_incomplet.png | h=60]
                [TIP]Bandeau orange : Suggère poliment de compléter le second contact manquant (« Conseillé : Adresse e-mail » ou « Conseillé : Numéro de mobile »). 
                [📸 caisse_client_a_optimiser.jpg | h=60]
                [TIP]Alerte jaune INSEE : Contrôle la cohérence du code postal avec la base nationale des communes françaises et suggère le nom officiel de la ville en cas de faute de frappe. 
                [📸 caisse_client_ville_erronee.jpg | h=60]
                [TIP]Badge vert avec étoile : Confirme que le profil est 100 % qualifié (nom, prénom, contacts, adresse postale et date d'anniversaire). 
                [📸 caisse_client_complet.jpg | h=60]
                [T]Gestion différenciée des Professionnels (Comptes B2B) 
                Les fiches professionnelles sont distinguées par une icône de société. Le bandeau affiche la raison sociale de l'entreprise au lieu du nom de famille, et son numéro de SIRET sera automatiquement reporté sur les factures émises en caisse pour garantir la conformité fiscale. 
                [T]Suivi dynamique de la cagnotte fidélité 
                Dès qu'un client est rattaché, son solde de points s'affiche dans le bandeau. 
                [T]Verrouillage de sécurité NF525 
                Lorsqu'une commande Web (Click & Collect) ou une ligne de retour d'article est injectée dans le panier, le client rattaché est scellé par un cadenas bleu. Il est strictement impossible de dissocier ou de changer de client pour éviter toute falsification de flux comptable. Pour changer de titulaire, vous devez obligatoirement annuler ou vider l'opération en cours. 
                [📸 caisse_panier_commande_web_verrouillee.jpg]
            `
        },
        {
            id: "remises-promotions-attente",
            title: "4. Moteur de remises, promotions automatiques et mise en attente",
            content:
            `
                TipTac intègre un moteur de tarification promotionnelle capable d'appliquer des mécaniques complexes sans exiger de calculs de la part du personnel de caisse. 
                [T]Déclenchement automatique des promotions en magasin
                Le système évalue le panier à chaque ajout d'article et applique instantanément les [LINK: MARKETING_PROMOTIONS#gestion-offres-promotions | offres actives configurées dans le magasin]. Ci-dessous, quelques exemples : 
                -Remises immédiates :En pourcentage (ex : -15 %) ou montants fixes en euros (-3,00 €). 
                -Prix cassés et barèmes dégressifs :Selon le volume d'unités achetées. 
                -Lots à prix figé :(ex : « Les 3 sacs de terreau pour 20,00 € »). 
                -Mécaniques promotionnelles par lot de type BXGY :(ex : « 2 achetés = le 3ème offert » ou « -50 % sur le second »). 
                -Multiplicateurs de fidélité et cagnottage de cashback en direct. 
                Chaque réduction validée affiche son étiquette nominative sous l'article concerné ainsi que le montant économisé par le client. 
                [📸 caisse_badges_promo_panier.jpg]
                [T]Remises manuelles à la ligne 
                Cliquez sur la colonne « Remise » d'un produit pour appliquer un geste commercial en pourcentage (-10 %), un montant fixe (-2,00 €) ou déclarer la ligne en produit offert. [PERM: Manager] [PERM: ADMIN] Cette manipulation requiert une permission pour les vendeurs ou la saisie du code PIN d'un Manager ou Admin. 
                [📸 caisse_modification_remise.jpg]
                [T]Règle d'arbitrage automatique (« Le meilleur l'emporte ») 
                Si un client bénéficie d'une remise contractuelle permanente sur son profil (ex : tarif Comité d'Entreprise à -10 %), le moteur de calcul compare systématiquement le gain de cette remise globale avec le cumul des promotions en rayon. Le logiciel retient automatiquement la formule la plus avantageuse pour l'acheteur, sans jamais autoriser de sur-cumul non maîtrisé. 
                [T]Remises de panier par paliers et tranches 
                Si une opération promotionnelle globale est programmée (ex : « 10 € offerts par tranche de 50 € d'achat »), le montant de l'avantage est automatiquement calculé sur le total brut du ticket et redistribué au prorata de chaque ligne pour assurer une ventilation de TVA fiscale irréprochable. 
                [T]Suspension et reprise de tickets 
                Si un client a oublié son moyen de paiement ou souhaite retourner chercher un produit en rayon, appuyez sur la touche [KEY: /] ou sur le bouton [BTN: Attente]. Le panier en cours, le client associé et les remises calculées sont scellés et enregistrés dans la mémoire locale sécurisée de la caisse. Vous pouvez encaisser les clients suivants sans délai. La modale des tickets en attente permet de reprendre le panier d'un clic dès le retour du client ; si un nouveau panier était déjà engagé au moment de la reprise, ce dernier est automatiquement mis en attente à son tour pour ne rien perdre. 
                [📸 caisse_ticket_attente.jpg, caisse_boutons_attente.jpg | h=160]
            `
        },
        {
            id: "encaissement-tpe-especes",
            title: "5. Encaissement, liaison monétique TPE et gestion des espèces",
            content:
            `
                Une fois le panier vérifié, la validation (touche [KEY: F12] ou [KEY: +]) ouvre la fenêtre d'encaissement pour percevoir les règlements. 
                [T]Touches réflexes pour un encaissement sans souris 
                Dans l'écran de paiement, les touches du pavé numérique permettent de finaliser une vente sans jamais toucher à l'écran tactile : 
                - Carte Bancaire (CB) : Touche [KEY: /]. 
                - Espèces : Touche [KEY: *]. 
                - Chèque : Touche [KEY: -]. 
                - Validation : Touche [KEY: Entrée] : Valide la ligne de règlement ou scelle définitivement le ticket dès que le reste à payer atteint 0,00 €. 
                [📸 caisse_raccourcis_paiement.jpg | h=80]
                [T]Liaison Monétique TPE Automatisée (Protocole Concert) 
                Si votre terminal de paiement bancaire est connecté à la caisse via la [LINK: PARAMETRES_MAGASIN#liaison-monetique-tpe-banque | liaison monétique Concert], le montant exact à payer lui est télétransmis automatiquement dès la sélection de la touche CB. L'écran de caisse affiche une animation « ATTENTE TPE » et se verrouille intégralement pour empêcher tout double encaissement ou annulation frauduleuse pendant que le client compose son code secret sur le clavier du lecteur. Dès que le terminal bancaire confirme la transaction, la ligne de paiement par carte est estampillée d'un cadenas de sécurité : elle devient totalement inaltérable et ne peut plus être supprimée du ticket. 
                [📸 caisse_attente_tpe_verrouille.jpg]
                [T]Calculateur de monnaie en gros caractères 
                Lors d'un règlement en liquide, saisissez au pavé le montant des coupures remises par le client. TipTac calcule la différence et affiche immédiatement en grands caractères sur fond rouge le montant exact de la monnaie à lui rendre. 
                [📸 caisse_rendu_monnaie.jpg | h=80]
                [T]Règlements mixtes (Multi-Paiement) 
                Vous pouvez combiner plusieurs moyens de paiement sur une même transaction (ex : 15,00 € en espèces, un avoir de 10,00 € et le solde en carte bancaire). Le panneau affiche en temps réel le solde restant à percevoir. 
                [WARNING]Verrouillage anti-fraude sur les remboursements en caisse 
                Lorsqu'un ticket est négatif suite au retour d'un produit, le logiciel analyse l'origine des fonds : si le client avait initialement payé avec un bon d'achat ou des points de fidélité, le système bloque la sortie d'espèces ou le remboursement par carte bancaire sur cette part, exigeant une restitution en avoir. 
                [WARNING]Procédure stricte pour les retours Web 
                Si un client rapporte en magasin un article acheté sur votre boutique e-commerce TipTac, la caisse interdit le remboursement direct en caisse pour éviter les écarts de trésorerie bancaire. Elle clôture la reprise en stock et imprime un feuillet thermique officiel « ACTION REQUISE : REMBOURSEMENT WEB ». Le responsable du magasin doit simplement agrafer ce bon pour ordonner la rétrocession électronique du paiement en ligne (via Stripe ou Monetico) depuis le panneau d'administration. 
                [📸 caisse_ticket_remboursement_web.jpg]
            `
        },
        {
            id: "devis-cartes-cadeaux-documents",
            title: "6. Devis, cartes cadeaux, finalisation et envoi par e-mail",
            content:
            `
                Le terminal prend en charge l'ensemble des documents de l'activité commerciale, de l'offre préalable jusqu'à la facturation omnicanale. 
                [T]Conception et édition de Devis A4 
                Vous pouvez à tout instant basculer la caisse en mode « Devis ». Le système attribue un numéro séquentiel unique et édite un document A4 normé reprenant les coordonnées de l'établissement, les données du client, le détail tarifaire complet, le tableau de TVA, la date d'échéance de validité (ex : 30 jours) et un encadré officiel avec la mention « Bon pour accord » destiné à la signature du client. Ce devis est conservé dans votre historique et peut être rechargé dans le panier de caisse d'un simple clic dès que le client vient le valider au comptoir. 
                [📸 caisse_mode_devis.jpg]
                [T]Vente et activation de Cartes Cadeaux 
                L'encaissement d'une ligne d'article de type « Carte Cadeau » déclenche automatiquement l'impression d'un bon thermique sécurisé. Ce titre cadeau comporte son montant facial, la date limite d'utilisation et un code-barres scannable au format CODE128 reconnu par tous les postes de votre enseigne. 
                [📸 caisse_ticket_carte_cadeau.jpg]
                [T]Traitement des commandes Web Click & Collect 
                Les commandes passées en ligne et préparées en réserve peuvent être importées directement dans le panier de caisse lors du passage du client au magasin. TipTac intègre les produits, déduit les acomptes ou règlements perçus sur le web, et calcule automatiquement un avoir ou un remboursement partiel si certains articles ont été déclarés manquants par les préparateurs. 
                [T]Choix du format de justificatif en fin de vente 
                Dès l'encaissement scellé, un écran de finalisation offre 3 options : 
                [ST]1. Ticket thermique classique :
                Sortie immédiate sur l'imprimante thermique via le moteur natif ESC/POS haute vitesse. 
                [ST]2. Facture commerciale A4 :
                Édition d'un document complet prêt à être imprimé ou sauvegardé au format PDF, intégrant les mentions d'entreprise, les coordonnées bancaires (IBAN) et le tableau de TVA. 
                [ST]3. Envoi dématérialisé par e-mail :
                Si le client possède une adresse mail sur sa fiche, un clic sur [BTN: Par Email] transmet instantanément le ticket numérique sans gaspillage de papier (nécessite l'intégration de votre passerelle de messagerie). 
                [📸 caisse_modal_fin_ticket_email.jpg]
                [TIP]Code-barres de retour rapide à 10 chiffres (CODE128) 
                Chaque ticket de caisse physique édité comporte en pied de reçu un code-barres numérique exclusif à 10 chiffres. Lors d'un retour au magasin, le caissier a simplement besoin de bipper ce code à la douchette pour ouvrir instantanément la vente d'origine à l'écran, sans manipulation de recherche fastidieuse. 
            `
        },
        {
            id: "avoirs-bons-achat-fidelite",
            title: "7. Utilisation des avoirs, bons d'achat et fidélité",
            content:
            `
                TipTac encadre rigoureusement l'utilisation des avoirs financiers, des bons promotionnels et des cagnottes de fidélité pour prémunir le commerce contre toute utilisation frauduleuse. 
                [CLEAR]

                [T]Détection proactive des avoirs disponibles 
                [📸 caisse_bouton_avoirs_pulse.jpg | left | h=100 ]
                Dès qu'un client est identifié sur la caisse, le bouton [BTN: BONS / AVOIRS] s'illumine en violet et affiche un badge chiffré indiquant le nombre de titres en cours de validité enregistrés à son nom. Vous pouvez ainsi informer immédiatement l'acheteur de son avantage.
                
                [CLEAR]
                
                [📸 caisse_liste_avoirs_eligibles.jpg | md | right ]
                Cliquer sur ce bouton affiche la liste bons, avoirs et titres cadeau disponibles pour le client identifié.
                [CLEAR]

                [T]Moteur de contrôle d'éligibilité en temps réel 
                Lorsqu'un code est scanné ou saisi manuellement, le logiciel opère une série de contrôles instantanés : 
                [ST]Vérification de l'état du bon :
                Titre actif, non périmé, non annulé et solde résiduel supérieur à 0 €. 
                [ST]Contrôle nominatif anti-fraude :
                Si le bon a été émis au nom d'un client précis, le système interdit formellement son application sur le compte d'un autre acheteur. 
                [ST]Respect des conditions d'achat :
                Le logiciel vérifie si le ticket atteint le montant d'achat minimum requis (ex : bon de 10 € dès 60 € d'achat) et s'il cible des rayons, catégories ou marques spécifiques. 
                [ST]Exclusion des promotions :
                Si le bon d'achat interdit les articles déjà remisés, le système isole uniquement les produits à tarif plein pour calculer la valeur déductible. 
                [WARNING]En cas de non-respect, un message explicite en rouge informe immédiatement le vendeur du motif de refus. 
                [WARNING]Gestion des bons à usage unique strict 
                Si un bon promotionnel ne permet aucun rendu de monnaie ni reliquat (usage unique) et que le client l'applique sur un achat d'un montant inférieur à sa valeur faciale, une fenêtre d'avertissement apparaît à l'écran. Elle indique précisément la somme qui sera définitivement perdue pour le client et exige une confirmation avant de valider l'opération. 
                [📸 caisse_alerte_bon_usage_unique.jpg]
                [T]3 modes d'exploitation du programme de fidélité au comptoir 
                Ces options sont paramétrables dans le [LINK: CLIENTS_CRM#moteur-regles-fidelite | Moteur de Règles Fidélité] :
                [ST]1. Bon d'achat papier :
                Dès que le client atteint le seuil de points requis lors d'un passage en caisse, le système propose d'imprimer un bon thermique officiel avec code-barres unique, déduisant les points de son compte. 
                [ST]2. Palier virtuel direct :
                Le bouton [BTN: Palier Fidélité] s'active sur l'écran d'encaissement et permet de déduire d'un clic la remise (ex : -5,00 € contre 200 points) directement sur le total du ticket sans imprimer de papier. 
                [ST]3. Cagnotte en euros libres :
                La valeur financière des points cumulés est convertie en une réserve d'argent dans laquelle le client peut piocher librement pour régler tout ou partie de ses achats au centime près. 
            `
        },
        {
            id: "historique-retours-nf525",
            title: "8. Historique des ventes, retours et conformité NF525",
            content:
                `
                Le module d'Historique (accessible via la touche [KEY: Fin] ou depuis la barre d'outils ou le bouton [BTN: Ventes]) répertorie l'intégralité des transactions scellées dans le respect des règles d'inaltérabilité NF525. 
                [T]Outils de recherche multicritères 
                Retrouvez en quelques secondes n'importe quel ticket émis depuis la mise en service du logiciel en filtrant par plage de dates, nom de client, numéro séquentiel exact, montant au centime près ou mode de règlement utilisé (CB, Espèces, Chèque, Avoir, Vente Web) ou en scannant le code du ticket. 
                [📸 caisse_historique_recherche_filtres.jpg | h=150]
                [T]Gestion intelligente des retours et recalcul au prorata 
                Lors du retour d'un produit en magasin, sélectionnez le ticket d'origine puis sélectionnez les articles rapportés. Le moteur de caisse calcule automatiquement le solde d'articles encore retournables et répercute au prorata exact les remises commerciales globales et l'éco-participation qui avaient été appliquées lors de l'achat initial. Le client est ainsi remboursé au montant net réellement perçu, sans léser les finances du magasin. 
                [📸 caisse_retour_articles_historique.jpg]
                [T]Réimpressions certifiées et duplicatas 
                Vous pouvez réimprimer à tout moment un ticket thermique ou une facture officielle. Conformément aux dispositions de l'administration fiscale, chaque retirage comporte la mention indélébile « Duplicata », la signature cryptographique NF525 et l'horodatage certifié de la réimpression. 
                [WARNING]Correction sécurisée de moyen de paiement 
                Si un caissier encaisse par inadvertance un ticket en « Espèces » au lieu de « Carte Bancaire », un manager peut procéder à une rectification sur les ventes du jour (tant que la clôture journalière Z n'est pas encore passée). [PERM: Manager] La réglementation NF525 interdisant formellement la modification d'un ticket déjà émis, TipTac orchestre la correction en deux temps : il génère automatiquement un ticket d'annulation miroir portant la mention « [ANNUL. PAIEMENT] », puis édite une nouvelle transaction intégrant le moyen de règlement rectifié. La traçabilité de votre journal comptable reste ainsi juridiquement irréprochable. 
                [📸 caisse_annulation_correction_paiement.jpg]
                `
        },
        {
            id: "personnalisation-clavier-tactile",
            title: "9. Clavier tactile de vente, personnalisation et mode édition",
            content:
                `
                Le clavier tactile interactif constitue votre poste de pilotage quotidien au comptoir. Il allie une vitesse de frappe maximale à une personnalisation graphique complète pour refléter l'organisation de votre point de vente. 
                [T]Lecture visuelle immédiate en mode vente 
                Chaque case tactile affiche le nom du produit et son prix de vente TTC actualisé en temps réel depuis votre catalogue. Des repères visuels discrets vous informent en un coup d'œil : 
                [ST][KEY: 20]  Badge de stock en direct :
                En haut à droite. Affiche la quantité physique disponible avec code couleur (vert si stock suffisant, orange sous le seuil d'alerte, rouge si épuisé ou négatif). Les articles non gérés en stock ne comportent pas de badge. 
                [ST][ICON: Layers | 20 | text-gray-500]  Pictogrammes de structure :
                En haut à gauche. Une icône de dossier pour les catégories ou familles, une pile de calques pour les articles parents comportant des déclinaisons (articles Maîtres), ou une bibliothèque pour les dossiers sur mesure. 
                [ST][ICON: Percent | 20 | text-gray-500]  Badge de promotion :
                S'affiche automatiquement si une offre commerciale active concerne ce produit en magasin. 
                [ST][ICON: CircleQuestionMark | 20 | text-gray-500]  Badge interrogation :
                Signale un article à prix libre (tarif à 0 € à renseigner au comptoir). 

                [📸 caisse_clavier_vue_vente.jpg | h=240]
                [T]Navigation dynamique par sous-grilles (Subgrids) 
                Lorsque vous touchez une case liée à un rayon, une catégorie, une sélection multiple ou un produit comportant des variantes (tailles, litrages, couleurs), le clavier ne change pas d'onglet : il déploie instantanément une sous-grille dédiée présentant tous les articles correspondants. 
                [TIP]La première case (case zéro) est automatiquement réservée à un bouton noir contrasté [BTN: Retour] avec flèche, vous permettant de revenir au niveau principal d'un simple toucher. 
                [📸 caisse_clavier_sous_grille_retour.jpg | h=220]
                [T]Onglets masqués et retour automatique intelligent 
                Vous pouvez créer des onglets thématiques invisibles sur la barre de navigation principale (ex : « Consommables de caisse », « Prestations d'atelier », « Tarifs dérogatoires »). Ces onglets ne peuvent être ouverts que depuis une touche de raccourci ou de redirection dédiée. 
                Dès que le caissier touche un article issu d'un onglet masqué pour l'ajouter au panier, TipTac injecte le produit et bascule automatiquement sur l'onglet d'origine, évitant ainsi tout risque d'erreur de saisie sur la vente suivante ! 
                [T]Déverrouillage du Mode Édition et sécurité réseau 
                Pour réaménager le clavier, cliquez sur l'icône de crayon en haut à droite. [PERM: Édition] Action strictement réservée aux utilisateurs disposant de la permission de le faire. 
                Le clavier s'entoure d'un liseré orange vif de 4 pixels signalant que l'édition est active, et une barre d'outils d'administration apparaît : 
                [📸 clavier_caisse_mode_edition.jpg | h=50]
                [ICON: Plus | 20 | text-blue-700] Créer un nouvel onglet.[CLEAR]
                [ICON: SquarePen | 20 | text-orange-500] Modifier le format ou le nom de l'onglet actif.[CLEAR]
                [ICON: Trash2 | 20 | text-red-700] Supprimer l'onglet actif et toutes ses touches (avec demande de confirmation, impossible sur le dernier onglet restant).[CLEAR]
                [ICON: Download | 20 | text-indigo-700] Sauvegarder la disposition sur TipTac Cloud.[CLEAR]
                [ICON: Upload | 20 | text-green-700] Télécharger la sauvegarde depuis TipTac Cloud.[CLEAR]
                [ICON: X | 20 | text-orange-400] Fermer le mode édition.[CLEAR]
                [ICON: Lock | 20 | text-gray-400] Verrouillage Siège : Les onglets pilotés par la direction de votre réseau portent une icône de cadenas. Ils sont protégés et ne peuvent être ni modifiés, ni déplacés, ni supprimés localement en magasin. [CLEAR]
            
                [📸 caisse_clavier_mode_edition.jpg | xl ]
                [📸 caisse_tab_prompt_modal.jpg | h=400 | left ]
                [T]Paramétrage des onglets et géométrie de la grille 
                Chaque onglet dispose de sa propre configuration sur mesure via la modale de réglage : 
                — Nom et couleur du libellé d'onglet. 
                — Case « Dossier / Onglet Masqué » pour le rendre invisible de la barre supérieure.
                — Dimensions de la grille de 2x2 jusqu'à 15x15 cases : Adaptez le nombre de lignes et de colonnes à votre écran. Vous pouvez par exemple créer une grille serrée de 8x6 cases pour les petits articles de confiserie, et une grille aérée de 4x3 grosses touches pour les boissons à fort débit. 
                — Réorganisation des onglets : En mode édition, glissez-déposez simplement un onglet horizontalement vers la gauche ou la droite pour changer son ordre d'affichage.[CLEAR] 
                
                [T]Configuration d'une touche : Les 3 modes d'action 
                En mode édition, touchez n'importe quelle case vide (marquée d'un « + ») pour lui attribuer un comportement parmi 3 univers : 
                [ST]1. Un ou des articles (« PRODUIT ») :
                Recherchez un produit par son nom, sa référence interne ou son code-barres. Le sélecteur affiche le prix, le niveau de stock en temps réel et un globe si le produit est publié sur le Web. 
                [TIP]Liaison directe : Cliquez sur [BTN: Lier direct] pour affecter immédiatement l'article à la touche. 
                [TIP]Sélection multiple express : Cochez plusieurs articles dans les résultats (ex : 6 références de sécateurs) et saisissez un libellé en bas d'écran (ex : « Gamme Coupe »). Un clic sur [BTN: Créer le dossier] génère instantanément une touche de regroupement avec sous-grille sans devoir créer de catégorie dans le catalogue ! 
                [📸 caisse_key_action_picker_produits.jpg | lg ]
                [ST]2. Rayons & Catégories (« DOSSIER ») :
                Parcourez l'arborescence de votre magasin sous forme d'accordéon. Cliquez sur [BTN: Lier] en face d'une famille entière ou d'une sous-catégorie précise pour créer une touche qui ouvrira tous les articles rattachés. 
                [📸 caisse_key_action_picker_dossier.jpg | lg ]
                [ST]3. Navigation :
                Choisissez un autre onglet parmi la liste proposée. La touche servira de passerelle directe pour basculer sur l'onglet sélectionné d'une seule frappe. 
                
                [T]Studio de personnalisation visuelle d'une touche 
                Touchez une case déjà configurée pour ouvrir l'éditeur latéral complet à droite de l'écran : 
                [📸 caisse_key_editor_rapide.jpg | xl | left ]
                [T]Onglet « Rapide » : 
                [ST] Libellé affiché : 
                Modifiez le texte inscrit sur la touche sans altérer le libellé officiel d'impression sur le ticket. 
                [ST] Taille de police : 
                Choisissez entre Petit (12 px), Moyen (16 px) ou Gros (20 px). 
                [ST] Styles et alignement : 
                Appliquez Gras, Italique, Barré, et positionnez le texte en Haut, au Milieu ou en Bas de la case. 
                [ST] Calculateur de contraste automatique : 
                Par défaut (« Auto »), TipTac calcule la luminosité de la couleur de fond et bascule le texte en noir ou en blanc pur pour garantir une lisibilité infaillible sous n'importe quel éclairage de caisse. Vous pouvez forcer la couleur en Noir ou Blanc manuellement. 
                [ST] Nuancier de 45 teintes : 
                Palette de couleurs pastel et intenses, avec option « Appliquer en Teinte » pour appliquer une couleur translucide sur une photo.
                
                [CLEAR][📸 caisse_key_editor_avance.jpg | xl | right ]
                [T]Onglet « Avancé » : 
                [ST] Bouton [BTN: Photo Article] : 
                Si le produit lié possède déjà une photo dans votre base de données, un clic suffit pour l'importer directement sur la touche sans rien téléverser ! 
                [ST] Importer (PC) : 
                Importez une photo personnelle depuis votre ordinateur. Le système la recadre au format carré et la compresse automatiquement en JPEG 400x400 px à 80 % pour ne pas ralentir la caisse. 
                [ST] Étendre l'image en fond : 
                L'image occupe 100 % de la case en arrière-plan avec un bandeau flouté élégant sous le texte pour conserver la netteté du prix de vente. 
                [ST] Bibliothèque d'icônes : 
                Moteur de recherche intégré parmi des centaines de pictogrammes vectoriels classés avec réglage de taille (S : 24 px, M : 32 px, L : 48 px, XL : 72 px). 
                [CLEAR]

                [T]Manipulation rapide : Déplacement par appui long et duplication 
                [ST]Déplacement express (500 ms) :
                En mode édition, vous n'avez pas besoin d'ouvrir l'éditeur latéral pour changer l'emplacement d'une touche. Maintenez votre doigt ou le curseur appuyé pendant une demi-seconde sur une case : une vibration retentit, la touche grossit légèrement et s'entoure d'un liseré orange clignotant. Touchez simplement la case cible pour la déplacer immédiatement ! 
                [📸 caisse_clavier_appui_long.jpg | h=160]
                [ST]Résolution automatique des conflits :
                Si vous déplacez une touche sur un emplacement déjà occupé, une fenêtre de choix vous propose 3 actions : 
                [📸 caisse_key_conflict_modal.jpg | left | h=260]

                1. [BTN: Intervertir les touches] : Échange les positions des deux touches. 

                2. [BTN: Écraser la touche cible] : Remplace la touche existante par la nouvelle.

                3. [BTN: Annuler le déplacement] : Conserve la disposition d'origine sans modification. 
                
                [CLEAR][ST]Bouton Dupliquer :
                Permet de cloner une touche personnalisée sur une autre case vide du même onglet ou d'un autre rayon en conservant toute sa mise en page. 
                [ST]Suppression d'une touche :
                Le bouton rouge [BTN: Supprimer la touche] libère instantanément l'emplacement sans supprimer le produit du catalogue. 
                [T]Sauvegarde et diffusion Cloud multi-caisses 
                Pour les commerces équipés de plusieurs caisses ou gérés en réseau, le bouton [ICON: Upload | 20 | text-emerald-600 ] sauvegarde l'intégralité de vos claviers sur les serveurs sécurisés TipTac. Sur vos autres postes, le bouton [ICON: Download | 20 | text-indigo-700] permet de rapatrier cette maquette en quelques secondes pour harmoniser les habitudes de travail de l'équipe. 
            `
        },
        {
            id: "offres-promotions-actives",
            title: "10. Consultation des offres et promotions en cours",
            content:
                `
                En cas d'interrogation sur un prix ou une affiche commerciale aperçue en rayon par un client, le personnel de vente peut vérifier en quelques secondes les opérations actives directement depuis la caisse. 
                [📸 caisse_modal_offres_actives_recherche.jpg | left | xl ]
                [T]Recherche floue tolérante 
                Ouvrez la modale des opérations commerciales (touche ou cockpit) et saisissez un terme dans le champ de recherche. Le moteur tolère les fautes de frappe et filtre les offres par nom, rayon ciblé, code promo ou mécanique commerciale. 
                [T]Signalétique claire par badges thématiques 
                Chaque offre affiche de façon synthétique son canal d'application [KEY: Magasin physique] [KEY: Boutique en ligne] ou [KEY: Omnicanal], sa date limite de fin de validité, son niveau de priorité d'application face aux autres règles et son caractère cumulable ou non avec la remise habituelle du client.[CLEAR] 
                [T]Accordéon des articles éligibles 
                Pour les opérations ne concernant qu'une sélection précise de produits (ex : « Vente flash sur 5 références d'outillage »), cliquez sur la carte de l'offre pour dérouler la liste nominative des articles inclus. Les désignations complètes sont traduites à la volée, évitant aux équipes d'avoir à manipuler ou mémoriser des références techniques. 
                [📸 caisse_offre_accordeon_produits.jpg]
            `
        }
    ]
};