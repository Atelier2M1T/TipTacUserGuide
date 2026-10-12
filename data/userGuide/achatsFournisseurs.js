export default {
    id: "ACHATS_FOURNISSEURS",
    title: "Achats, Fournisseurs & Réceptions",
    category: "TipTacCaisse",
    iconName: "Truck",
    color: "text-teal-600",
    articles: [
        {
            id: "annuaire-fournisseurs-conditions-achat",
            title: "1. Annuaire des Fournisseurs, contacts et conditions logistiques",
            // 📸 achats_fournisseurs_liste_vue.jpg : Annuaire des fournisseurs avec liste latérale, champ de recherche et badges de codes partenaires.
            // 📸 achats_fournisseurs_fiche_edition.jpg : Formulaire d'édition d'une fiche fournisseur montrant l'identité, le commercial et les conditions d'achat.
            // 📸 achats_fournisseurs_bloc_conditions.jpg : Gros plan sur les blocs de conditions logistiques : Franco de port, Minimum de commande, Frais d'approche et Délai de livraison.
            // 📸 achats_fournisseurs_catalogue_lie.jpg : Onglet « Base Articles » du fournisseur avec filtres d'état (Actifs, Réassort bloqué, En rupture) et raccourci d'entrée de stock.
            content:
                `
                Le module « Annuaire Fournisseurs » rassemble l'ensemble de vos partenaires commerciaux, leurs coordonnées professionnelles, leurs conditions tarifaires et le catalogue des articles qui leur sont rattachés.
                
                L'accès à la création et à la modification des fiches fournisseurs requiert un rôle [PERM: Manager | Admin] ou une permission spécifique. 
                
                [📸 achats_fournisseurs_liste_vue.jpg | lg]
                [T]Navigation et sélection des partenaires
                La colonne de gauche répertorie vos fournisseurs par ordre alphabétique :
                — Utilisez la barre de recherche supérieure pour filtrer un partenaire par son nom d'entreprise ou par son code interne.
                — Chaque bouton affiche l'enseigne du fournisseur ainsi que son identifiant trigramme.
                — Cliquez sur [BTN: Nouveau Profil] en bas de colonne pour ouvrir une fiche d'enregistrement vierge.
                
                [📸 achats_fournisseurs_fiche_edition.jpg | right | md]
                [T]Identité d'entreprise et interlocuteurs
                La fiche d'un fournisseur regroupe trois blocs administratifs :
                [ST][ICON: Store | 14 | text-teal-600] Identité de l'entreprise :
                — [KEY: Nom de l'entreprise *] : Raison sociale complète du tiers.
                — [KEY: Code Interne] : Trigramme ou code court identifiant ce fournisseur dans votre gestion (ex : « DUP », « VIL »).
                — [KEY: SIRET] : Identifiant administratif officiel à 14 chiffres.
                
                [ST][ICON: User | 14 | text-teal-600] Coordonnées de Contact :
                — [KEY: Nom du Commercial] : Identité de votre interlocuteur dédié ou représentant de secteur.
                — [KEY: Téléphone direct] et [KEY: Email / Support] : Coordonnées de liaison pour la transmission des commandes.
                — [KEY: Adresse Postale Complète] : Siège social ou dépôt logistique de l'expéditeur.
                [CLEAR]
                
                [📸 achats_fournisseurs_bloc_conditions.jpg | lg]
                [T]Conditions logistiques d'achat et seuils de commande
                Ces paramètres alimentent automatiquement les calculateurs de rentabilité et les jauges de commande :
                — [KEY: Franco de port (€)] : Montant d'achat hors taxes nécessaire pour débloquer la gratuité des frais de transport.
                — [KEY: Minimum de Commande (€)] : Seuil d'achat HT obligatoire en deçà duquel le fournisseur refuse d'enregistrer la commande.
                — [KEY: Délai moyen de livraison (Jours)] : Nombre de jours ouvrés généralement constatés entre l'envoi de votre commande et la livraison en réserve.
                — [KEY: Frais d'approche (%)] : Pourcentage moyen de transport ou de manutention facturé par le grossiste. Ce taux s'applique sur le coût d'achat pour calculer automatiquement votre marge commerciale réelle et le prix de vente conseillé lors de la création d'articles.
                
                [📸 achats_fournisseurs_catalogue_lie.jpg | lg]
                [T]Base articles liée et historique des achats
                En mode consultation, la fiche propose trois sous-onglets :
                [ST][ICON: Settings | 14 | text-teal-600] Logistique & Contact :
                Synthèse visuelle des coordonnées du commercial et affichage des indicateurs de franco et de délai.
                
                [ST][ICON: Package | 14 | text-teal-600] Base Articles rattachée :
                Tableau complet des références attribuées à ce fournisseur avec recherche dédiée et filtre par statut ([KEY: Actifs], [KEY: Réassort Bloqué], [KEY: Inactifs], [KEY: En Rupture], [KEY: En Stock], [KEY: Publiés Web]).
                Le bouton [BTN: +] permet d'ajuster rapidement le stock d'un produit en réserve sans ouvrir sa fiche catalogue. Cliquez sur une ligne pour ouvrir l'éditeur complet de l'article.
                
                [ST][ICON: List | 14 | text-teal-600] Historique Achats :
                Journal chronologique de toutes les commandes passées auprès de ce fournisseur avec numéro séquentiel, date d'émission, montant HT et statut de livraison.
                `
        },
        {
            id: "redaction-commande-achat-reassort",
            title: "2. Rédaction de Bon de Commande, colisage (PCB) et Auto-Réassort",
            // 📸 achats_commande_redaction_interface.jpg : Écran de rédaction d'un bon de commande montrant le sélecteur fournisseur, le panier et le tiroir catalogue déplié.
            // 📸 achats_commande_jauges_franco_minimum.jpg : Barres de progression du Minimum d'Achat (rouge/vert) et de l'Objectif Franco (orange/vert) calculant le reste à commander en direct.
            // 📸 achats_commande_tiroir_catalogue_variantes.jpg : Tiroir latéral droit du catalogue filtré sur le fournisseur avec dossiers maîtres et boutons d'ajout.
            content:
                `
                Le module « Commandes d'Achat » centralise la préparation de vos réapprovisionnements, le calcul des seuils de gratuité de transport et le respect des contraintes de conditionnement imposées par les grossistes.
                
                L'accès à la création et à l'envoi de commandes exige le rôle [PERM: Manager | Admin] ou une permission spécifique accordée à l'utilisateur.
                
                [📸 achats_commande_redaction_interface.jpg | lg]
                [T]Initialisation d'un bon de commande
                Depuis la liste des commandes, cliquez sur [BTN: Nouvelle Commande] :
                1. Sélectionnez obligatoirement le [KEY: Fournisseur] dans le menu déroulant.
                [WARNING]Verrouillage de sécurité : Dès que le premier article est ajouté dans le panier, le choix du fournisseur est verrouillé pour empêcher d'insérer des produits issus de grossistes différents au sein du même document.
                2. Renseignez le champ [KEY: Notes Internes / Instructions] pour consigner des précisions utiles (référence d'un devis préalable, créneau de livraison impératif ou instructions pour le chauffeur).
                
                [T]Saisie des articles et méthodes d'ajout
                Trois méthodes complémentaires permettent de remplir votre bon de commande :
                — [KEY: Saisie rapide par recherche] : Tapez les premières lettres du nom ou la référence interne dans la barre supérieure pour ajouter l'article d'un clic.
                — [KEY: Tiroir Catalogue dépliable] : Cliquez sur [BTN: Catalogue] pour faire glisser le panneau latéral droit. Ce volet répertorie l'ensemble de l'assortiment de ce fournisseur avec affichage du stock en rayon. Cliquez sur les dossiers parents pour déplier leurs déclinaisons physiques et intégrer les tailles ou contenances souhaitées.
                — [KEY: Moteur d'Auto-Réassort intelligent] : Cliquez sur le bouton [BTN: Auto-Réassort]. TipTac analyse instantanément le catalogue du fournisseur et intègre en un clic tous les articles gérés en stock dont le niveau actuel est inférieur ou égal au seuil d'alerte configuré en magasin !
                
                [T]Règles de conditionnement : Colisage (PCB) et Minimum (MOQ)
                Pour empêcher les litiges de commande, TipTac applique des règles strictes sur les quantités :
                [ST][ICON: Package | 14 | text-teal-600] Colisage par carton (PCB) :
                Si un article possède un PCB de 12 (conditionné par carton de 12 unités), toute modification par les boutons [BTN: +] ou [BTN: -] fait progresser la quantité par multiples de 12 (12, 24, 36...).
                
                [ST][ICON: Shield | 14 | text-teal-600] Minimum de commande produit (MOQ) :
                Si le fabricant impose un seuil de commande (ex : minimum 24 pièces), le logiciel empêche de commander une quantité inférieure.
                
                [ST]Saisie manuelle au clavier :
                Si vous tapez un chiffre à la main dans la case quantité (ex : 15 pièces), le logiciel arrondit automatiquement la valeur au multiple de colisage le plus proche dès que vous quittez la case, assurant une stricte conformité avec le fabricant.
                
                [📸 achats_commande_jauges_franco_minimum.jpg | lg]
                [T]Jauges dynamiques de Franco de Port et Minimum d'Achat
                Sous la grille d'articles, deux barres d'analyse évaluent le panier en temps réel :
                [ST]1. Jauge du Minimum d'Achat :
                Indique le montant restant à atteindre pour que la commande soit recevable par le grossiste (ex : « Reste 85.00 € » en rouge). Dès le seuil franchi, la jauge passe au vert avec la mention « ATTEINT ! ».
                
                [ST]2. Jauge de l'Objectif Franco :
                Calcule la part restante pour annuler les frais de port (ex : « Reste 210.50 € » en orange). Dès que le total atteint le seuil, l'étiquette s'illumine en vert : « FRANCO DÉBLOQUÉ ! ».
                
                [T]Total estimé et frais d'approche
                Le bandeau inférieur récapitule :
                — Le total brut des marchandises hors taxes.
                — L'estimation des frais d'approche calculée selon le pourcentage contractuel du fournisseur.
                — Le [KEY: Total Estimé HT] global qui sera engagé par l'entreprise.
                
                [T]Enregistrement et cycle de vie de la commande
                — Cliquez sur [BTN: Brouillon] pour sauvegarder votre composition en cours de travail : vous pourrez la reprendre à tout moment sans notifier le fournisseur.
                — Cliquez sur [BTN: Marquer Envoyée] : le document reçoit son numéro officiel séquentiel (ex : « CMD-10042 »), se fige pour le départ et bascule dans le registre d'attente de livraison.
                `
        },
        {
            id: "edition-documents-bon-commande-pointage-a4",
            title: "3. Édition A4 : Bon de Commande officiel et Fiche de Pointage logistique",
            // 📸 achats_print_choix_document.jpg : Barre supérieure de prévisualisation proposant la bascule entre « Bon de Commande » et « Fiche de Pointage ».
            // 📸 achats_print_bon_commande_a4.jpg : Aperçu du Bon de Commande A4 officiel avec en-tête magasin, coordonnées fournisseur, tableau tarifaire et zone de signature.
            // 📸 achats_print_fiche_pointage_a4.jpg : Aperçu de la Fiche de Pointage A4 montrant les codes-barres par ligne pour douchette et les cases blanches de comptage réel.
            content:
                `
                TipTac génère deux documents administratifs distincts au format A4 à partir d'un même bon de commande : l'un destiné au partenaire commercial, l'autre réservé à l'équipe de réserve.
                
                Cliquez sur l'icône d'imprimante depuis le registre des commandes pour ouvrir le studio d'édition grand format.
                
                [📸 achats_print_choix_document.jpg | lg]
                [T]Bascule entre les deux formats de travail
                Dans la barre d'outils supérieure, deux boutons permettent d'adapter le document à son destinataire :
                — [BTN: Bon de Commande] : Document commercial contractuel à destination du grossiste.
                — [BTN: Fiche de Pointage] : Document logistique d'atelier destiné aux préparateurs et magasiniers lors de la livraison.
                
                [📸 achats_print_bon_commande_a4.jpg | right | md]
                [T]Le Bon de Commande Fournisseur officiel
                Ce document intègre toutes les mentions d'affaires requises :
                — En-tête officiel de votre entreprise (logo, raison sociale, adresse complète, SIRET, N° TVA intracommunautaire, téléphone, e-mail).
                — Bloc destinataire avec raison sociale du fournisseur, nom du commercial et [KEY: Réf. Client] qui vous est attribuée chez ce tiers.
                — Identité du contact acheteur en magasin (prénom, nom, ligne directe).
                — Tableau des lignes : désignation commerciale, référence interne magasin et référence catalogue fournisseur.
                — Colonnes financières : quantités commandées, prix unitaire HT et total de ligne HT.
                — Code-barres de la commande en technologie CODE128 dans l'en-tête pour reprise immédiate à la douchette.
                — Cadre réservé au « Cachet et Signature pour accord » en pied de page.
                [CLEAR]
                
                [📸 achats_print_fiche_pointage_a4.jpg | left | md]
                [T]La Fiche de Pointage de Réception
                Spécifiquement épurée pour les équipes de quai et de réserve :
                — Masquage total des prix et montants : les colonnes de tarifs sont purgées pour préserver la confidentialité financière des conditions d'achat auprès du personnel logistique.
                — Code-barres scannable par ligne : chaque article affiche son code-barres (EAN-13 ou interne) au format graphique haute netteté, permettant au magasinier de pointer les colis à la douchette sans manipulation clavier.
                — Colonne [KEY: Qté Attendue] et case blanche [KEY: Pointage Réel] pour noter les unités comptées au feutre.
                — Cadre réservé aux [KEY: Anomalies de livraison] (casses, cartons mouillés, manquants) et zone d'émargement pour le « Visa Réceptionnaire ».
                [CLEAR]
                
                [T]Transmission : Impression native ou Envoi d'E-mail
                — Cliquez sur [BTN: Imprimer / PDF] pour compiler le document en haute définition via le moteur d'impression A4 natif.
                — [KEY: Envoi par E-mail direct] : Si votre passerelle de messagerie est configurée et que le fournisseur dispose d'une adresse e-mail sur sa fiche, cliquez sur l'icône d'enveloppe depuis l'historique pour lui expédier le bon de commande en pièce jointe sans imprimer de papier.
                `
        },
        {
            id: "reception-marchandises-gestion-reliquats",
            title: "4. Réception des marchandises, litiges et génération automatique de reliquats",
            // 📸 achats_reception_pointage_grille.jpg : Interface de réception de marchandise avec colonnes de comparaison Qté Attendue / Qté Reçue et codes couleur de conformité.
            // 📸 achats_reception_bouton_tout_recevoir.jpg : Bouton « Tout Recevoir » en en-tête pré-remplissant instantanément les quantités reçues.
            // 📸 achats_reception_modale_reliquat.jpg : Modale de détection des quantités manquantes proposant la génération automatique d'un bon de commande de reliquat en brouillon.
            content:
                `
                Dès que le transporteur décharge les colis sur votre quai de livraison, la commande passe en phase de contrôle physique. La validation de la réception est l'acte de gestion qui injecte officiellement les marchandises dans votre stock disponible.
                
                Dans le registre des commandes, cliquez sur une commande portant le statut [KEY: ENVOYÉE] pour ouvrir l'écran de réception.
                
                [📸 achats_reception_pointage_grille.jpg | lg]
                [T]Pointage des quantités livrées
                L'écran affiche les références attendues en face des quantités réellement déballées :
                — [KEY: Bouton Tout Recevoir] : Si la livraison est manifestement complète et intègre, cliquez sur [BTN: Tout Recevoir] pour reporter d'un clic toutes les quantités commandées dans les cases de pointage réel.
                — [KEY: Saisie manuelle par ligne] : Cliquez sur le chiffre pour saisir le nombre exact de pièces trouvées dans le carton.
                
                [ST]Codes couleur dynamiques d'intégrité :
                Le champ de quantité s'illumine selon le niveau de conformité constaté :
                — [KEY: Vert (Conforme)] : La quantité reçue est rigoureusement égale à la quantité commandée.
                — [KEY: Orange (Partiel / Manquant)] : La quantité livrée est inférieure au bon de commande.
                — [KEY: Rouge clignotant (Manquant total)] : La quantité reçue est égale à 0 alors que des articles étaient attendus.
                — [KEY: Violet avec badge + (Excédent)] : Le fournisseur a livré plus de pièces que prévu par le bon de commande initial.
                
                [📸 achats_reception_modale_reliquat.jpg | right | md]
                [T]Détection des manquants et arbitrage des Reliquats
                Si vous cliquez sur [BTN: Valider l'entrée Stock] alors qu'au moins un article est incomplet :
                TipTac bloque la clôture simple et ouvre la modale d'arbitrage de litige en vous soumettant deux options :
                
                [ST]Option 1 : Valider et Générer le Reliquat (Recommandé) :
                1. Les unités réellement livrées mettent immédiatement à jour le stock physique de votre magasin.
                2. La commande d'origine est clôturée au statut [KEY: REÇUE].
                3. Un nouveau bon de commande portant le statut [KEY: BROUILLON] est automatiquement créé pour les pièces manquantes avec la mention explicite « RELIQUAT de la commande CMD-XXXX » dans ses notes, prêt à être relancé auprès du fournisseur !
                
                [ST]Option 2 : Recevoir sans reliquat :
                À utiliser si le fournisseur vous a prévenu d'une rupture définitive sans réassort ultérieur. Le stock reçu est crédité et le litige est clos sans créer de nouveau bon de commande.
                [CLEAR]
                
                [T]Mise à jour immédiate des stocks et verrouillage en lecture seule
                Dès la confirmation de la réception :
                — Le stock physique de chaque référence est automatiquement incrémenté en base de données.
                — L'opération est scellée avec le nom de l'opérateur connecté et la date exacte d'émargement.
                — La commande bascule au statut [KEY: REÇUE] et se verrouille intégralement en [KEY: Lecture Seule] : elle ne peut plus être altérée ou supprimée, garantissant une rigueur comptable absolue face aux factures du grossiste.
                `
        },
        {
            id: "suivi-historique-commandes-indicateurs",
            title: "5. Suivi des commandes, indicateurs de réception et relance par e-mail",
            // 📸 achats_historique_recherche_filtres.jpg : Tableau de bord de l'historique des commandes avec filtres par statut (Brouillons, En Attente, Reçues) et recherche rapide.
            // 📸 achats_historique_badges_reception_detail.jpg : Colonne des articles montrant les badges de réception verte (parfaite), orange (incomplète) ou rouge (manquants majeurs).
            content:
                `
                Le tableau de bord des commandes d'achat centralise l'état d'avancement de vos approvisionnements et vous alerte sur les retards de livraison.
                
                [📸 achats_historique_recherche_filtres.jpg | lg]
                [T]Filtres multicritères et alertes de retard
                Retrouvez instantanément vos documents d'achat grâce aux outils de tri :
                — [KEY: Barre de recherche] : Filtrez par numéro de commande séquentiel ou par nom de grossiste.
                — [KEY: Filtre par statut] : Isolez vos commandes [KEY: Brouillons] (en préparation), [KEY: En Attente (Envoyée)] (en transit) ou [KEY: Reçues] (archivées).
                — [KEY: Filtre par fournisseur] : Isolez toutes les commandes rattachées à une enseigne spécifique.
                — [KEY: Tri par colonne] : Cliquez sur les en-têtes de colonnes (N° / Date, Fournisseur, Statut, Montant HT) pour inverser l'ordre chronologique ou tarifaire.
                
                [ST]Alerte automatique de retard de livraison :
                Si une commande marquée comme envoyée a été émise depuis plus de 7 jours ouvrés sans enregistrer de réception, sa ligne s'entoure d'un surlignage ambre avec la mention « (En retard) », vous invitant à contacter le transporteur.
                
                [📸 achats_historique_badges_reception_detail.jpg | right | md]
                [T]Badges de conformité de réception
                Dans la colonne « Articles », le système affiche pour chaque commande le volume attendu et synthétise la conformité de livraison sous forme de badges de couleur explicites :
                — [KEY: Badge Vert (Réception parfaite)] : Toutes les pièces ont été livrées sans aucune anomalie.
                — [KEY: Badge Orange (Écart de quantité)] : Toutes les références ont été livrées mais certaines quantités diffèrent du bon de commande initial.
                — [KEY: Badge Rouge (Manquants majeurs)] : Au moins une référence complète commandée est absente de la livraison.
                [CLEAR]
                
                [T]Relance et actions rapides sur la ligne
                En fin de ligne, deux boutons d'action rapide sont disponibles :
                — [ICON: Mail | 14 | text-teal-600] [BTN: Envoyer par Email] : Renvoie d'un clic le bon de commande en pièce jointe au fournisseur pour relancer un retard sans rouvrir le document.
                — [ICON: Printer | 14 | text-teal-600] [BTN: Imprimer] : Ouvre directement le sélecteur d'impression A4 pour rééditer un duplicata du bon de commande ou sortir la fiche de pointage de contrôle.
                `
        }
    ]
};