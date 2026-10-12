export default {
    id: "ORDER_HUB",
    title: "Commandes Web & Click and Collect",
    category: "TipTacCaisse",
    iconName: "Globe",
    color: "text-indigo-600",
    articles: [
        {
            id: "orderhub-reception-audit-nouvelles",
            title: "1. Réception des commandes web, audit et acceptation",
            // 📸 orderhub_vue_generale_onglets.jpg : Vue principale du Hub Logistique avec les onglets de statuts (Nouvelles, En Prépa, Prêtes, Départs).
            // 📸 orderhub_alerte_audit_conformite.jpg : Encart de conformité signalant les anomalies d'une nouvelle commande (prix à 0€, paiement en avoirs, promos).
            // 📸 orderhub_detail_paiement_livraison.jpg : Détails financiers de la commande avec statut de paiement (Payé en ligne vs Attente paiement) et mode de remise.
            content:
                `
                Le « Hub Logistique » centralise et orchestre la préparation de toutes les commandes passées sur votre boutique en ligne, qu'elles soient destinées à être expédiées ou retirées en magasin.
                
                L'accès à ce module requiert le forfait [PLAN: COMMERCE] ou supérieur.
                
                [📸 orderhub_vue_generale_onglets.jpg | lg]
                [T]Le Quai de préparation en 4 étapes
                Les commandes transitent de gauche à droite selon leur avancement logistique :
                — [KEY: Nouvelles] : Commandes fraîchement tombées, en attente de prise en charge. Le compteur s'affiche en rouge pour attirer l'attention.
                — [KEY: En Prépa] : Commandes actuellement en cours de ramassage dans les allées.
                — [KEY: Prêtes] : Commandes dont tous les articles ont été rassemblés et validés.
                — [KEY: Départs] : Gestion des bordereaux de remise aux transporteurs (Colissimo, Mondial Relay...).
                
                [ST]Badges visuels de livraison :
                Chaque carte de commande affiche explicitement le canal de remise choisi par le client : [KEY: Retrait Magasin], [KEY: Livraison Domicile], [KEY: Point Relais] ou [KEY: Dépôt Partenaire].
                
                [📸 orderhub_alerte_audit_conformite.jpg | right | md]
                [T]Audit de conformité des nouvelles commandes
                À l'ouverture d'une nouvelle commande, le système déclenche un audit financier strict :
                Si la commande présente des particularités (articles avec prix à 0 €, paiement intégralement effectué avec des avoirs ou points de fidélité, présence de codes promotionnels), un encart d'inspection orange s'affiche.
                Cet audit prévient le préparateur d'éventuelles erreurs de tarification sur le site web avant de commencer le ramassage.
                [CLEAR]
                
                [📸 orderhub_detail_paiement_livraison.jpg | left | sm]
                [T]Vérification des paiements et acceptation
                Le panneau latéral résume la situation financière :
                — [KEY: Statut du paiement] : Indique si la commande a été [KEY: PAYÉE] en ligne par carte bancaire ou si elle est en [KEY: ATTENTE PAIEMENT] (le client réglera sa commande au comptoir lors du retrait).
                — [KEY: Transports & Remises] : Détaille les frais de port facturés au client et les éventuels codes de réduction appliqués au panier.
                
                Face à une nouvelle commande, vous disposez de deux actions [PERM: can_validate_web_orders] :
                1. [BTN: Lancer la préparation] : La commande est acceptée, verrouillée à votre nom et bascule dans l'onglet « En Prépa ».
                2. [BTN: Refuser] : Ouvre une fenêtre demandant le motif de l'annulation (ex : « Article endommagé ou indisponible »). La commande est annulée et le client est automatiquement notifié par e-mail.
                [CLEAR]
                `
        },
        {
            id: "orderhub-pointage-ramassage-articles",
            title: "2. Ramassage des articles, pointage et gestion des reliquats",
            // 📸 orderhub_ecran_pointage_articles.jpg : Liste des articles à préparer avec la jauge de progression et les boutons de pointage manuel (+/-).
            // 📸 orderhub_douchette_scan_code_barres.jpg : Bandeau supérieur signalant l'activation de la douchette pour le pointage au code-barres.
            // 📸 orderhub_validation_incomplète_ruptures.jpg : Fenêtre de validation partielle avertissant que les articles non pointés seront déclarés en rupture.
            content:
                `
                Une fois la commande acceptée, l'écran de pointage s'affiche pour vous guider dans le ramassage des articles.
                
                [📸 orderhub_ecran_pointage_articles.jpg | lg]
                [T]Pointage manuel et jauge de progression
                Chaque ligne de la commande affiche la désignation de l'article, sa référence, son code-barres, sa photo (cliquable pour l'agrandir) et la quantité commandée par le client.
                — Utilisez les boutons [BTN: +] et [BTN: -] pour ajuster le nombre d'articles que vous placez physiquement dans le sac de préparation.
                — Si vous avez de grandes quantités à pointer, cliquez directement sur le chiffre au centre : un pavé numérique s'ouvre pour vous permettre de taper la valeur exacte au clavier.
                — Une jauge de progression se remplit en temps réel. Dès que la quantité constatée atteint la quantité commandée, la ligne se grise et affiche la mention verte [KEY: Vérifié].
                
                [📸 orderhub_douchette_scan_code_barres.jpg | right | md]
                [T]Pointage rapide à la douchette
                Pour éviter les erreurs de prélèvement, la douchette est active en permanence en tâche de fond (signalé par un bandeau bleu [KEY: Douchette Active]) :
                Bippez simplement le code-barres de l'article prélevé en rayon : le système l'identifie et incrémente automatiquement le compteur de la commande en émettant un signal sonore de validation.
                [CLEAR]
                
                [T]Gestion des manquants et validation partielle
                Si un article est introuvable ou endommagé en rayon, laissez simplement sa quantité pointée à zéro (ou inférieure à la quantité demandée).
                — Le système met en évidence la ligne en orange pour signaler l'écart.
                — Cliquez sur [BTN: Valider (Incomplet)].
                
                [📸 orderhub_validation_incomplète_ruptures.jpg | left | md]
                [ST]Scission et ajustement financier automatique :
                Une fenêtre de [KEY: Validation Partielle] apparaît pour confirmer l'action.
                En validant, le logiciel déclare officiellement les pièces non trouvées en rupture de stock. Le montant de la commande est automatiquement recalculé à la baisse pour correspondre à la marchandise réellement délivrée, et le client est averti par e-mail des articles manquants.
                [CLEAR]
                `
        },
        {
            id: "orderhub-cloture-stockage-documents",
            title: "3. Affectation d'emplacement, impression A4 et tickets de préparation",
            // 📸 orderhub_cloture_choix_emplacement.jpg : Modale de validation demandant de saisir l'emplacement de stockage du colis (ex: BAC A2).
            // 📸 orderhub_documents_boutons_impression.jpg : Boutons d'impression proposant le format « Imprimer A4 » ou « Imprimer Ticket ».
            // 📸 orderhub_apercu_bon_preparation.jpg : Aperçu du ticket thermique de préparation avec les cases à cocher et l'emplacement de stockage en évidence.
            content:
                `
                Dès que le ramassage est validé, le colis doit être identifié et stocké en attente de remise au client ou au transporteur.
                
                [📸 orderhub_cloture_choix_emplacement.jpg | lg]
                [T]Affectation de l'emplacement de stockage
                Lors du clic sur [BTN: Mettre en Stock (Prête)], une fenêtre vous demande de préciser où vous rangez le sac ou le colis :
                — Saisissez l'emplacement physique (ex : « BAC A2 », « ÉTAGÈRE DRIVE », « CHAMBRE FROIDE »).
                — Cette information est capitale : elle s'affichera en très gros sur le ticket de caisse et sur l'écran lors de la remise pour retrouver le sac en quelques secondes sans fouiller la réserve.
                — La commande passe au statut [KEY: PRÊTE] et le client reçoit immédiatement un e-mail lui confirmant que sa commande l'attend.
                
                [📸 orderhub_documents_boutons_impression.jpg | right | md]
                [T]Édition des documents logistiques
                Le Hub propose d'imprimer les justificatifs de la commande pour accompagner le colis :
                [ST][ICON: Printer | 14 | text-gray-600] Imprimer A4 (Bon de Livraison) :
                Génère un document classique pleine page avec les coordonnées complètes du client, le récapitulatif détaillé des articles, les notes d'instructions de livraison et le code-barres de la commande.
                
                [ST][ICON: Printer | 14 | text-gray-600] Imprimer Ticket (Thermique) :
                Édite un reçu optimisé pour les imprimantes de caisse 80 mm. Il imprime la liste des articles avec des cases à cocher pour le contrôle, un code-barres unique pour reprendre la commande à la douchette, et met fortement en évidence l'emplacement de stockage (ex : [KEY: STOCKÉ EN : BAC A2]) en texte blanc sur fond noir.
                [CLEAR]
                `
        },
        {
            id: "orderhub-remise-client-encaissement",
            title: "4. Remise au client (Click & Collect) et encaissement en caisse",
            // 📸 orderhub_bouton_encaisser_remettre.jpg : Bouton vert « Remettre » pour les commandes payées en ligne, et bouton orange « Encaisser » pour les paiements sur place.
            content:
                `
                Le retrait des commandes Click & Collect s'effectue dans l'onglet « Prêtes », lors de l'arrivée du client au magasin.
                
                L'étape de remise finale est liée au module d'encaissement et nécessite le droit [PERM: can_checkout].
                
                [📸 orderhub_bouton_encaisser_remettre.jpg | lg]
                [T]Traitement selon le statut de paiement
                Localisez la commande du client grâce à la barre de recherche (en tapant son nom ou en scannant son ticket). L'action de remise dépend du règlement initial :
                
                [ST][ICON: CheckCircle | 14 | text-white] Commande payée en ligne (Bouton Vert « Remettre ») :
                Si la commande affiche le badge vert [KEY: PAYÉ], l'acheteur n'a plus rien à régler.
                Cliquez sur [BTN: Remettre] :
                1. La commande est automatiquement basculée dans le terminal de caisse.
                2. Le ticket est instantanément soldé et validé par le système.
                3. La transaction fiscale est scellée dans le chiffre d'affaires du jour, et la commande web passe au statut définitif [KEY: LIVRÉE].
                
                [ST][ICON: Coins | 14 | text-white] Commande à régler sur place (Bouton Orange « Encaisser ») :
                Si la commande affiche le badge orange [KEY: ATTENTE PAIEMENT] :
                Cliquez sur [BTN: Encaisser] :
                1. TipTac importe l'intégralité du panier, le nom du client et les éventuels acomptes ou frais de port dans le terminal de caisse.
                2. L'écran de paiement s'ouvre pour vous permettre d'encaisser la somme exacte via le TPE, en espèces ou en chèques.
                3. Dès la validation du règlement, la commande web bascule au statut définitif [KEY: LIVRÉE].
                `
        },
        {
            id: "orderhub-expeditions-bordereaux-rafale",
            title: "5. Expéditions transporteurs : Mode Rafale et création de bordereaux",
            // 📸 orderhub_mode_rafale_selection_colis.jpg : Mode rafale activé avec cases à cocher devant chaque colis prêt, filtre transporteur et bouton de création de bordereau.
            // 📸 orderhub_onglet_departs_bordereaux.jpg : Onglet « Départs » montrant les bordereaux générés en attente d'expédition avec le bouton « Expédier & Facturer ».
            content:
                `
                Pour les commandes devant être expédiées par voie postale (Livraison à domicile ou Point Relais), le traitement de remise s'effectue en lot lors de l'arrivée du chauffeur du transporteur.
                
                [📸 orderhub_mode_rafale_selection_colis.jpg | lg]
                [T]Création d'un bordereau d'enlèvement (Mode Rafale)
                Dans l'onglet « Prêtes », cliquez sur le bouton [BTN: Départ Transporteur (Mode Rafale)] :
                1. [KEY: Filtrer par transporteur] : Sélectionnez le partenaire logistique présent sur le quai (ex : « Colissimo », « Mondial Relay ») dans le menu déroulant.
                2. Cochez les cases des colis que vous remettez au chauffeur. Le système interdit le mélange de colis appartenant à des transporteurs différents.
                3. Cliquez sur le bandeau inférieur [BTN: Générer Bordereau] : les commandes sélectionnées sont regroupées sous un identifiant de lot unique (ex : « BATCH-1234 ») et disparaissent de la liste des commandes prêtes.
                
                [📸 orderhub_onglet_departs_bordereaux.jpg | right | md]
                [T]Onglet Départs et expédition définitive
                Basculez sur le dernier onglet [KEY: Départs] :
                — Vous y retrouvez les lots préparés en attente de prise en charge.
                — Le bouton d'impression permet d'éditer le « Bordereau de Remise » officiel à faire signer par le chauffeur du camion en guise de preuve de dépôt.
                — Dès que le transporteur quitte le magasin, cliquez sur [BTN: Expédier & Facturer]. TipTac exécute alors l'encaissement automatique de toutes les commandes du lot, les passe au statut [KEY: EXPÉDIÉE] et envoie les e-mails de confirmation aux clients avec leurs éventuels numéros de suivi.
                [CLEAR]
                `
        }
    ]
};