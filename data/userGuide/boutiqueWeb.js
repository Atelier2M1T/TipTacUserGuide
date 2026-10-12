export default {
    id: "BOUTIQUE_WEB",
    title: "Le Site Web Côté Client (E-Commerce)",
    category: "TipTacWebsite",
    iconName: "Globe",
    color: "text-indigo-600",
    articles: [
        {
            id: "vitrine-catalogue-et-fiches-produits",
            title: "1. Navigation au catalogue et fiches articles",
            // 📸 web_client_header_menu.jpg : L'en-tête du site web public avec la barre de recherche, le méga-menu de navigation, le sélecteur de magasin et le panier.
            // 📸 web_client_fiche_produit_variantes.jpg : Une fiche produit vue par un client avec les pastilles de couleurs des déclinaisons, le prix calculé au kg/L et le bloc de cross-selling.
            content:
                `
                Ce chapitre documente la manière dont vos clients perçoivent et utilisent votre boutique en ligne. L'ensemble des règles et affichages sont pilotés par les paramètres définis sur votre console Cloud.
                
                [📸 web_client_header_menu.jpg | lg]
                [T]Le Menu de Navigation (Mega Menu)
                L'en-tête de votre site (Header) concentre les accès rapides :
                — [KEY: Sélecteur de magasin] : Si vous possédez plusieurs points de vente ou relais, le client choisit son établissement. Le site filtre alors automatiquement les produits et affiche les horaires locaux du magasin sélectionné.
                — [KEY: Barre de recherche rapide] : Équipée d'un moteur intelligent tolérant aux fautes de frappe.
                — [KEY: Onglets de navigation] : Les catégories générées depuis votre Cloud s'affichent soit en liste simple, soit sous forme de cartes visuelles avec photos (Mega Menu).
                
                [📸 web_client_fiche_produit_variantes.jpg | right | md]
                [T]La fiche article dynamique
                Chaque page produit s'adapte intelligemment à vos données de caisse :
                — [KEY: Pastilles de déclinaisons] : Les variantes (tailles, litrages, couleurs) s'affichent sous forme de pastilles cliquables. Les ruptures de stock sont immédiatement grisées ou bloquées.
                — [KEY: Unité Légale et Éco-part] : Le logiciel calcule et affiche obligatoirement le prix rapporté à l'unité de mesure (ex : 3.50 € / Kg) et l'éco-participation, conformément à la répression des fraudes (DGCCRF).
                — [KEY: Recommandé avec votre commande] : Au bas de chaque fiche et dans le tiroir du panier, un carrousel propose des produits additionnels (Cross-Selling), générés automatiquement par l'IA ou saisis manuellement.
                [CLEAR]
                `
        },
        {
            id: "tunnel-achat-livraison-retrait",
            title: "2. Tunnel de commande : Du panier au choix du mode de retrait",
            // 📸 web_client_tiroir_panier.jpg : Le tiroir latéral du panier avec l'alerte de jauge pour la livraison gratuite (Franco de port).
            // 📸 web_client_options_retrait.jpg : Écran de la caisse web avec sélection du mode de livraison : Retrait Magasin, Dépôt Partenaire, Relais ou Domicile.
            // 📸 web_client_carte_points_relais.jpg : La carte interactive affichant les consignes et commerçants partenaires suite à la saisie d'un code postal.
            content:
                `
                Le parcours d'achat a été pensé pour maximiser la conversion, tout en respectant vos contraintes logistiques paramétrées sur le Cloud.
                
                [📸 web_client_tiroir_panier.jpg | left | sm]
                [T]Le Panier et la jauge de gratuité
                Un tiroir latéral s'ouvre à chaque ajout d'article :
                — Le client peut y saisir son [KEY: Code Promo].
                — Si vous avez configuré un seuil de livraison gratuite (Franco de port), une jauge verte de progression s'affiche pour inciter le client à augmenter son panier (ex : « Ajoutez 12,50 € pour obtenir la livraison gratuite ! »).
                [CLEAR]
                
                [📸 web_client_options_retrait.jpg | lg]
                [T]Les modes de mise à disposition
                Lors de la validation, le client choisit parmi les modes activés sur votre Cloud :
                
                [ST][ICON: Store | 14 | text-emerald-600] 1. Retrait Magasin (Click & Collect) :
                Gratuit. Le client choisit son jour de retrait puis sélectionne un créneau horaire disponible. Le système occulte automatiquement les créneaux complets ou situés durant vos jours de fermeture (vacances ou jours fériés exceptionnels).
                
                [ST][ICON: Truck | 14 | text-blue-600] 2. Livraison à domicile :
                Le tarif d'expédition est calculé en temps réel en fonction du poids total du panier ou du montant de la commande, selon votre grille tarifaire.
                
                [ST][ICON: Package | 14 | text-indigo-600] 3. Points Relais (Mondial Relay, etc.) :
                Si vous avez activé ce module, le client renseigne son code postal. Une [KEY: carte géographique interactive] s'affiche, lui permettant de pointer la consigne ou l'épicerie la plus proche pour y faire déposer son colis.
                
                [ST][ICON: Building | 14 | text-purple-600] 4. Dépôts Partenaires (Réseau local) :
                Le client choisit de récupérer sa marchandise chez l'un de vos commerçants partenaires locaux selon les jours de navette que vous avez définis.
                `
        },
        {
            id: "reglement-fidelite-compte-client",
            title: "3. Paiement en ligne, utilisation de la fidélité et espace personnel",
            // 📸 web_client_paiement_choix.jpg : Bloc du tunnel de commande proposant le choix entre Paiement Sécurisé en Ligne et Paiement au Retrait.
            // 📸 web_client_dashboard_compte.jpg : Le tableau de bord du compte client montrant le solde de la cagnotte fidélité, le dernier achat et l'historique des tickets.
            content:
                `
                [📸 web_client_paiement_choix.jpg | lg]
                [T]Validation et paiement sécurisé
                Après validation de ses coordonnées, l'internaute finalise son règlement :
                — [KEY: Paiement en ligne sécurisé] : Connecté à votre passerelle (Stripe, Monetico), le paiement est chiffré. Le client peut utiliser son Apple Pay ou sa carte bancaire.
                — [KEY: Paiement au retrait] : Si autorisé dans vos réglages, le client validera sa commande sans carte et réglera au comptoir du magasin.
                — [KEY: Acceptation des CGV] : Une case à cocher obligatoire garantit votre conformité juridique.
                
                [T]Utilisation de la cagnotte fidélité
                Avant de payer, le client peut appliquer ses avantages :
                Si votre programme de fidélité est paramétré en mode [KEY: Cagnotte en Euros] ou [KEY: Bons d'achat virtuels], un encart orangé lui propose de déduire son solde disponible du montant à payer. Cette option n'est offerte qu'en cas de paiement intégral par carte bancaire en ligne.
                
                [📸 web_client_dashboard_compte.jpg | right | md]
                [T]L'espace client et l'historique des achats
                En se connectant à son compte personnel (soit par e-mail, soit d'un clic via son compte Google), le client retrouve un tableau de bord complet :
                — [KEY: Cagnotte & Avoirs] : Consultation de son solde de points et de la date d'expiration de ses avoirs.
                — [KEY: Historique des commandes Web] : Suivi de l'état d'expédition de ses colis et téléchargement des factures A4 officielles.
                — [KEY: Historique Magasin] : Centralise également tous ses tickets de caisse réalisés physiquement dans vos boutiques, pour un suivi de garantie optimal sans papier.
                [CLEAR]
                `
        }
    ]
};