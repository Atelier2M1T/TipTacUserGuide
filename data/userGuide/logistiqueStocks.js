export default {
    id: "LOGISTIQUE_STOCKS",
    title: "Logistique, Inventaires & Démarque",
    category: "TipTacCaisse",
    iconName: "ClipboardList",
    color: "text-sky-600",
    articles: [
        {
            id: "demarque-casse-pertes",
            title: "1. Saisie de démarque, motifs réglementaires et valorisation des pertes",
            content:
                `
                Toute marchandise abîmée, cassée, dérobée ou périmée doit faire l'objet d'une sortie de stock immédiate pour garantir la sincérité de vos bilans comptables et éviter les faux espoirs de stock lors des ventes au comptoir.
                
                L'accès à la saisie de démarque requiert un rôle [PERM: Manager | Admin] ou une permission expressément accordée aux collaborateurs choisis.
                
                [📸 stocks_demarque_modale_selection.jpg | lg]
                [T]Procédure de saisie au comptoir
                Accessible via le bouton d'action rapide [BTN: Saisie Démarque] ou depuis l'écran de caisse :
                1. Sélectionnez l'article à sortir en tapant son nom, sa référence ou son code-barres dans le champ de recherche, ou bippez directement l'article à la douchette.
                [TIP]Articles avec déclinaisons : Si vous scannez le code-barres d'un dossier parent comportant des variantes, TipTac ouvre instantanément une sous-fenêtre pour vous permettre de pointer la déclinaison exacte (taille, couleur ou litrage) concernée par la perte.
                2. Définissez obligatoirement le [KEY: Motif de la perte] parmi les 8 motifs légaux tracés :
                — [KEY: CASSE MAGASIN] : Article brisé ou détérioré lors de la manipulation en rayon.
                — [KEY: LITIGE LIVRAISON] : Marchandise reçue abîmée du transporteur.
                — [KEY: VOL] : Démarque inconnue constatée lors d'un contrôle de linéaire.
                — [KEY: PÉRIMÉ] / [KEY: DÉPÉRI] : Végétaux flétris, invendus ou denrées ayant dépassé leur date limite de consommation (DLC).
                — [KEY: USAGE INTERNE] : Fournitures ou consommables consommés pour les besoins du magasin (ex : terreau pour les ateliers, outillage de nettoyage).
                — [KEY: ERREUR SAISIE] : Correction purement administrative (cette ligne est neutralisée du calcul des pertes financières du magasin).
                — [KEY: AUTRE] : Motif dérogatoire exceptionnel.
                3. Renseignez la [KEY: Quantité à retirer] au clavier ou sur le pavé numérique de l'écran tactile.
                
                [WARNING]Garde-fou anti-stock négatif : Pour les articles gérés en stock physique, le système interdit formellement de saisir une quantité de démarque supérieure au stock théorique disponible afin de prévenir les erreurs de frappe involontaires. Si un article n'est pas géré en stock, la perte financière est tout de même tracée sans altérer de quantité physique.
                
                [📸 stocks_demarque_alerte_prix_achat.jpg | right | md]
                [T]Valorisation financière : Réelle vs Estimée (≈)
                Conformément aux règles fiscales françaises, la démarque comptable doit être valorisée au [KEY: Prix d'Achat Hors Taxes (HT)] :
                — [ST]Prix d'achat renseigné :
                La perte financière est calculée au centime près sur la base du coût d'achat réel enregistré dans votre catalogue.
                — [ST]Prix d'achat à 0 € (Inconnu) :
                 Le logiciel active un garde-fou. Il vous invite à saisir le prix de vente TTC de l'article : TipTac déduit la TVA et applique automatiquement le taux de marge théorique de la catégorie pour estimer la perte au plus juste. Dans les rapports comptables, ces montants portent le symbole [KEY: ≈] signalant une estimation théorique.
                [CLEAR]
                
                [📸 stocks_demarque_rapport_audit.jpg | lg]
                [T]Rapport d'audit des pertes et démarques
                Dans le sous-menu « Audit Démarque », visualisez l'historique complet de vos sorties :
                — Filtrez par période calendaire pour mesurer le montant total des pertes subies par l'établissement.
                — Visualisez pour chaque ligne la date, la désignation, le motif, la quantité retirée, la valeur HT de la perte et l'identité de l'opérateur ayant validé la sortie.
                — Cliquez sur [BTN: Exporter CSV] pour transmettre le relevé complet à votre expert-comptable pour déduction fiscale.
                `
        },
        {
            id: "scan-and-go-logistique-douchette",
            title: "2. Scan & Go Logistique : Saisies de masse et entrées/sorties rapides",
            // 📸 stocks_scango_interface_active.jpg : Modale Scan & Go avec indicateur visuel de douchette active en arrière-plan et sélecteur de mode.
            // 📸 stocks_scango_mode_reception_vert.jpg : Liste d'articles scannés en mode « Entrée en stock Rapide » avec compteurs d'incrémentation.
            // 📸 stocks_scango_mode_demarque_rouge.jpg : Liste d'articles scannés en mode « Déclarer Démarque » avec sélection du motif commun en en-tête.
            content:
                `
                Pour traiter d'importants volumes de marchandises sans manipuler de souris ou ouvrir les fiches une à une, l'outil « Scan & Go Logistique » transforme votre poste en un terminal de saisie en rafale.
                
                Accessible d'un clic sur le bouton bleu [BTN: Scan & Go] depuis les univers Catalogue et Stocks.
                
                [📸 stocks_scango_interface_active.jpg | lg]
                [T]Écouteur permanent et saisie sans souris
                Dès l'ouverture de la modale, le lecteur de code-barres est actif en continu en tâche de fond. Vous n'avez pas besoin de cliquer dans un champ de texte : bippez directement les étiquettes les unes après les autres. Le système bippe et insère chaque produit en tête de liste.
                
                Deux modes opératoires sont proposés :
                [ST][ICON: Plus | 14 | text-teal-600] Mode 1 : Entrée en stock Rapide :
                Conçu pour enregistrer un arrivage direct ou une fabrication d'atelier. Chaque coup de douchette incrémente de +1 la quantité à ajouter au stock physique de l'article.
                
                [ST][ICON: TrendingDown | 14 | text-teal-600] Mode 2 : Déclarer Démarque [PERM: PERMISSION REQUISE] :
                Dédié au nettoyage d'un linéaire ou au débarras d'une palette détériorée en réserve :
                — Choisissez le motif commun à l'ensemble du lot en haut d'écran (ex : « CASSE MAGASIN » ou « PÉRIMÉ »).
                — Bippez l'ensemble des articles abîmés : chaque scan prépare une décrémentation de stock en négatif avec valorisation financière automatique.
                
                [📸 stocks_scango_mode_reception_vert.jpg | right | md]
                [T]Ajustement des quantités par ligne
                Si vous avez plusieurs cartons identiques, vous n'avez pas besoin de bipper 50 fois :
                — Cliquez directement sur le chiffre de la colonne [KEY: Quantité Mouvement] pour taper le nombre souhaité au clavier.
                — Ou utilisez les touches réflexes [BTN: +] et [BTN: -] pour ajuster le volume unité par unité.
                — Cliquez sur la croix rouge pour retirer un article scanné par mégarde.
                [CLEAR]
                
                [T]Validation transactionnelle en bloc
                Dès que votre carton ou chariot est entièrement scanné :
                Cliquez sur le grand bouton [BTN: Valider le lot] en bas d'écran. TipTac applique l'ensemble des mouvements de stock en une seule transaction sécurisée et consigne chaque article dans le registre d'audit avec la date et l'identifiant de l'opérateur.
                `
        },
        {
            id: "inventaires-physiques-comptages-tournants",
            title: "3. Inventaires physiques, bilans annuels et détection des manquants",
            // 📸 stocks_inventaire_liste_sessions.jpg : Tableau des sessions d'inventaire avec filtres par année, statut (En cours / Figé) et type (Partiel / Annuel).
            // 📸 stocks_inventaire_saisie_scanner.jpg : Écran de saisie d'inventaire avec barre de scan active, champ de recherche manuelle et colonnes Théorique/Compté.
            // 📸 stocks_inventaire_modale_manquants.jpg : Modale « Analyse Manquants » ciblant un rayon pour injecter un stock physique de 0 sur les articles oubliés.
            // 📸 stocks_inventaire_bilan_financier_synthese.jpg : Bandeau des 4 compteurs financiers (Lignes comptées, Théorique HT, Physique HT, Démarque/Surplus HT).
            content:
                `
                Le gestionnaire d'inventaires permet d'effectuer des comptages physiques, de mesurer les écarts financiers entre le stock réel et le stock informatique, et de rectifier vos niveaux d'inventaire en toute conformité.
                
                [📸 stocks_inventaire_liste_sessions.jpg | lg]
                [T]Deux modes de comptage adaptés à vos contraintes
                Cliquez sur [BTN: Nouvelle Session] et donnez un libellé à votre inventaire :
                — [KEY: Inventaire Partiel (Tournant)] : Idéal pour inventorier une zone précise (une allée, une serre, un rayon outillage) en cours d'année sans interrompre le reste du magasin.
                — [KEY: Bilan Annuel] : Destiné à la clôture de fin d'exercice comptable pour sceller l'ensemble des stocks de l'établissement.
                
                [📸 stocks_inventaire_saisie_scanner.jpg | lg]
                [T]Méthodes de comptage en rayon
                Pendant la session, plusieurs méthodes de saisie coexistent pour aller vite :
                [ST]1. Scan continu à la douchette sans souris :
                Bippez les articles au fil de votre progression dans les allées. Chaque scan incrémente la quantité physique de +1.
                
                [ST]2. Multiplicateur rapide au scan :
                Si vous comptez une pile de cartons identiques, préfixez votre scan d'un multiplicateur au clavier :
                Exemple : tapez « [KEY: 10*] » ou « [KEY: 10X] » puis bippez le produit : TipTac ajoute immédiatement 10 unités à la ligne sans nécessiter de manipuler la souris !
                
                [ST]3. Recherche textuelle de secours :
                Si l'étiquette est arrachée, utilisez le champ [KEY: Rechercher manuellement] pour isoler le produit par son nom ou sa référence et cliquer sur [BTN: +1].
                
                [📸 stocks_inventaire_bilan_financier_synthese.jpg | right | md]
                [T]Valorisation des écarts en direct
                L'en-tête supérieur calcule instantanément l'impact de votre comptage :
                — [KEY: Théorique HT] : Valeur comptable attendue selon la base de données.
                — [KEY: Physique HT] : Valeur des marchandises réellement dénombrées sur le terrain.
                — [KEY: Démarque / Surplus HT] : Bilan financier net de l'inventaire. S'affiche en rouge en cas de perte (démarque) ou en vert en cas d'excédent (surplus).
                [CLEAR]
                
                [📸 stocks_inventaire_modale_manquants.jpg | left | md]
                [T]Détective de Manquants (Articles non scannés)
                Si un article a disparu des rayons (vol ou casse non déclarée), personne ne le bippera lors de l'inventaire : il risque donc de conserver son ancien stock théorique erroné.
                Pour résoudre cette faille, cliquez sur le bouton orange [BTN: Détecter Manquants] :
                — En mode Partiel : sélectionnez obligatoirement le rayon audité pour protéger le reste du magasin.
                — TipTac compare votre comptage avec la base informatique et injecte automatiquement tous les produits non trouvés avec une quantité physique de [KEY: 0].
                [CLEAR]
                
                [T]Clôture, verrouillage et enregistrement comptable
                Une fois le comptage vérifié, cliquez sur [BTN: Clôturer et Figer] :
                — Le stock physique de chaque référence écrase instantanément l'ancien stock théorique.
                — Tous les écarts constatés sont automatiquement inscrits dans le registre des mouvements de stock avec la mention « Validation Inventaire #ID ».
                — La session est scellée et archivée pour les commissaires aux comptes. Cliquez sur [BTN: Exporter CSV] pour extraire le fichier complet avec références, TVA et valorisation financière.
                `
        },
        {
            id: "consolidation-inventaires-tablettes",
            title: "4. Consolidation multi-zones et importation des tablettes mobiles",
            // 📸 stocks_inventaire_import_tablettes_btn.jpg : Bouton « Réceptionner Tablettes » en tête de liste rapatriant les lots scannés par les équipes sur terminal mobile.
            // 📸 stocks_inventaire_selection_consolidation.jpg : Cases à cocher sur les inventaires validés permettant de sélectionner plusieurs zones pour générer la synthèse.
            // 📸 stocks_inventaire_vue_consolidee_globale.jpg : Écran de la synthèse consolidée regroupant les comptages des différentes allées avec export CSV comptable.
            content:
                `
                Pour les grands magasins disposant de plusieurs préparateurs en rayon ou réalisant leurs comptages par zones distinctes (ex : Réserve A, Allée B, Extérieur), TipTac permet d'unifier l'ensemble des données.
                
                [📸 stocks_inventaire_import_tablettes_btn.jpg | lg]
                [T]Rapatriement des comptages mobiles (TipTac Companion)
                Si vos équipiers effectuent leurs inventaires sur smartphone ou tablette ([PLAN: Plan Commerce] ou supérieur requis):
                Dès qu'un préparateur valide son lot sur le terminal mobile, cliquez sur le bouton [BTN: Réceptionner Tablettes] depuis l'écran principal :
                — TipTac télécharge les lots clôturés en attente sur le Cloud.
                — Il crée automatiquement les sessions d'inventaire correspondantes (portant le préfixe [KEY: Mobile] avec le détail des zones scannées, les noms des équipiers et la qualification de l'état des articles (Bon, Détérioré, Périmé).
                
                [📸 stocks_inventaire_selection_consolidation.jpg | right | md]
                [T]Regroupement de plusieurs sessions (Synthèse annuelle)
                Si vous avez découpé votre inventaire annuel en plusieurs sessions locales distinctes (par allée ou par jour) :
                1. Cochez les cases des inventaires clôturés dans la première colonne du tableau.
                2. Un bandeau supérieur s'affiche : « X sessions sélectionnées pour regroupement ».
                3. Cliquez sur [BTN: Générer la synthèse locale].
                [CLEAR]
                
                [📸 stocks_inventaire_vue_consolidee_globale.jpg | lg]
                [T]Bilan annuel consolidé et fusion des données
                L'écran de synthèse compile l'ensemble de vos zones :
                — Si un même produit a été compté dans deux zones différentes (ex : 5 pièces en allée centrale et 20 pièces en réserve), le rapport additionne intelligemment les quantités réelles face au stock théorique global.
                — Présente le total théorique HT, le total physique HT et la valeur de l'écart consolidé.
                — Cliquez sur [BTN: Exporter CSV Comptable] pour éditer le rapport officiel exhaustif destiné à votre cabinet d'expertise comptable.
                `
        },
        {
            id: "inventaire-bascule-stocks-orphelins",
            title: "5. Inventaire de bascule et régularisation des stocks orphelins",
            // 📸 stocks_bascule_banniere_alerte.jpg : Bannière d'alerte orange clignotante en haut du catalogue signalant des restructurations de stock réseau.
            // 📸 stocks_bascule_modale_ventilation.jpg : Modale « Inventaire de Bascule » montrant le stock orphelin du dossier parent et les cases de comptage par variante.
            content:
                `
                Lorsqu'un article simple possédant du stock physique est transformé en « Dossier Parent » (article Maître avec déclinaisons de tailles ou de couleurs), son stock informatique d'origine devient « orphelin » car un dossier virtuel ne peut pas détenir de marchandises réelles.
                
                TipTac intègre un assistant de régularisation automatique pour ventiler ces stocks sur les bonnes variantes physiques.
                
                [📸 stocks_bascule_banniere_alerte.jpg | lg]
                [T]Détection automatique des stocks orphelins
                Dès qu'une restructuration de catalogue est opérée (localement ou poussée depuis le siège Cloud) :
                Un bandeau orange d'alerte s'affiche au sommet de votre catalogue : « Action requise : X restructuration(s) réseau détectée(s) ».
                Cliquez sur le bouton [BTN: Régulariser] pour ouvrir la modale d'inventaire de bascule.
                
                [📸 stocks_bascule_modale_ventilation.jpg | lg]
                [T]Comptage et affectation par variante
                L'interface guide l'opérateur produit par produit :
                — Le cadre supérieur indique la désignation du dossier parent et son [KEY: Stock Orphelin] historique (par exemple 25 unités).
                — En dessous, la liste des déclinaisons créées (ex : S, M, L ou 10L, 20L) s'affiche avec leur stock actuel à zéro.
                — Saisissez le nombre de pièces physiques réelles présentes en rayon pour chaque déclinaison.
                
                Dès que vous cliquez sur [BTN: Terminer] :
                1. Le système déduit et purge définitivement l'ancien stock orphelin du parent.
                2. Il injecte les quantités réelles dénombrées sur chacune des déclinaisons.
                3. L'opération est scellée et tracée dans le registre sous le motif officiel [KEY: RESTRUCTURATION].
                `
        },
        {
            id: "sorties-b2b-externes-bl-a4",
            title: "6. Sorties B2B & Externes, cessions de stock et Bon de Livraison A4",
            // 📸 stocks_sortieb2b_historique_liste.jpg : Liste des sorties externes et cessions B2B avec date, référence du document et destinataire.
            // 📸 stocks_sortieb2b_creation_colis.jpg : Écran de composition d'une sortie externe avec sélection du destinataire, recherche produit et ajustement des quantités.
            // 📸 stocks_sortieb2b_document_a4.jpg : Aperçu du document A4 « Bon de Sortie / BL » valorisé au prix d'achat HT avec mentions d'entreprise et total.
            content:
                `
                Lorsque des marchandises quittent votre magasin en dehors du circuit de caisse direct (cession de stock à une entreprise partenaire, prêt de matériel à une collectivité, vente B2B en compte ou mise à disposition pour un chantier), elles doivent être sorties via le module « Sorties B2B & Externes ».
                
                Accessible depuis l'univers Stocks & Logistique sur l'écran d'accueil.
                
                [📸 stocks_sortieb2b_historique_liste.jpg | lg]
                [T]Historique et suivi des expéditions
                Le premier onglet répertorie l'ensemble des cessions passées :
                — Affiche la référence unique du bon (format [KEY: B2B-YYYYMMDD-XXXX]), le nom du destinataire, la date et l'heure d'expédition.
                — Cliquez sur l'icône d'imprimante pour rééditer à tout moment le document officiel A4.
                — [KEY: Colis Tablettes] : Cliquez sur ce bouton pour rapatrier les sorties externes préparées sur le terrain par vos équipes sur terminal mobile.
                
                [📸 stocks_sortieb2b_creation_colis.jpg | lg]
                [T]Composition d'un nouveau bon de sortie
                Basculez sur l'onglet [BTN: Nouvelle Sortie] :
                1. [KEY: Destinataire (Obligatoire)] : Saisissez la raison sociale de l'entreprise cliente, du prestataire ou du partenaire récepteur.
                2. [KEY: Ajouter des articles] : Recherchez vos produits au clavier ou scannez-les à la douchette.
                [WARNING]Bouclier anti-dépassement : Le système contrôle votre inventaire en temps réel et bloque toute saisie supérieure au stock physique disponible en rayon pour empêcher les stocks négatifs.
                3. [KEY: Note ou Motif] : Précisez les modalités de l'opération (ex : « Mise à disposition événementiel », « Bon de commande client pro n°458 »).
                
                Cliquez sur [BTN: Valider la sortie] : les stocks physiques sont immédiatement décomptés et un mouvement de type [KEY: SORTIE_B2B] est inscrit dans le journal.
                
                [📸 stocks_sortieb2b_document_a4.jpg | right | md]
                [T]Édition du Bon de Sortie / Bon de Livraison A4
                Dès la validation, le logiciel génère un document officiel imprimable :
                — En-tête complet du magasin émetteur avec logo, adresse, SIRET et N° TVA.
                — Encadré destinataire et instructions de transport.
                — Tableau des articles : références internes, désignations et quantités précises.
                — Valorisation comptable au coût de revient : affiche la valeur de cession au prix d'achat HT d'origine des marchandises ainsi que la valeur indicative au TTC public.
                — Cliquez sur [BTN: Imprimer A4] pour éditer le document destiné à accompagner la marchandise et servir de preuve de décharge.
                [CLEAR]
                `
        },
        {
            id: "transferts-reseau-multi-magasins",
            title: "7. Transferts réseau inter-magasins, pointage et gestion des litiges",
            // 📸 stocks_transferts_liste_flux.jpg : Tableau des transferts réseau avec filtres par sens (Expéditions en orange, Réceptions en violet) et statut.
            // 📸 stocks_transferts_nouveau_colis.jpg : Écran de composition d'un colis d'expédition vers un autre site avec sélection du magasin destinataire.
            // 📸 stocks_transferts_inspection_pointage.jpg : Écran de contrôle « Pointage physique » lors de la réception d'un colis avec détection des manquants.
            content:
                `
                Pour les enseignes disposant de plusieurs points de vente connectés à TipTac Cloud, le module « Transferts Réseau » orchestre la circulation des stocks d'un magasin à l'autre sans déséquilibre comptable.
                
                Ce module s'active automatiquement dès que votre réseau compte au moins deux établissements déclarés sur votre compte Cloud.
                
                [📸 stocks_transferts_liste_flux.jpg | lg]
                [T]Suivi des flux : Envois vs Réceptions
                L'historique centralise les mouvements inter-sites avec filtres dédiés :
                — [KEY: ENVOI (Expéditions)] : Colis préparés par votre magasin à destination d'un site confrère.
                — [KEY: RÉCEPTION] : Marchandises expédiées par un autre magasin et arrivées dans votre réserve.
                — Suivez l'état du transport : badge jaune [KEY: EN TRANSIT] (colis sur la route) ou vert [KEY: LIVRÉ] (marchandise réceptionnée).
                
                [📸 stocks_transferts_nouveau_colis.jpg | right | md]
                [T]Préparation et scellement d'un colis d'expédition
                Pour dépanner un autre magasin de votre réseau :
                1. Cliquez sur [BTN: Nouveau Colis].
                2. Sélectionnez le [KEY: Magasin de Destination] dans la liste des établissements du réseau.
                3. Scannez ou ajoutez les produits à transférer (le système bloque tout dépassement du stock physique local).
                4. Ajoutez une note d'accompagnement si nécessaire.
                
                Cliquez sur [BTN: Sceller et Expédier] :
                — Le stock local de votre magasin est immédiatement décrémenté.
                — Le transfert reçoit une référence unique (format [KEY: TR-YYYYMMDD-XXXX]) et est téléversé en direct sur le Cloud.
                — L'autre magasin reçoit immédiatement une notification l'informant qu'un colis lui a été expédié.
                [CLEAR]
                
                [📸 stocks_transferts_inspection_pointage.jpg | lg]
                [T]Réception, pointage physique et arbitrage des litiges
                Dès qu'un colis arrive sur votre quai :
                1. Ouvrez l'onglet [BTN: À Réceptionner] et cliquez sur [BTN: Inspecter & Pointer].
                2. Déballez le carton et pointez les articles : pour chaque référence, indiquez la [KEY: Quantité constatée] face à la [KEY: Quantité attendue].
                
                [ST]Gestion automatique des manquants (Litige de transfert) :
                Si un article est manquant ou cassé pendant le transport (ex : 8 reçus pour 10 expédiés) :
                — La ligne s'affiche en rouge avec le badge [KEY: Manquant].
                — Cliquez sur [BTN: Confirmer & injecter en stock] : TipTac crédite uniquement les 8 pièces réellement entrées dans votre rayon.
                — Les 2 pièces manquantes sont automatiquement inscrites dans votre registre d'audit sous le motif [KEY: LITIGE_TRANSFERT] avec delta à zéro, préservant la justesse absolue de votre stock sans léser votre inventaire !
                `
        },
        {
            id: "audit-mouvements-event-sourcing",
            title: "8. Registre des mouvements de stock, traçabilité et Event Sourcing",
            // 📸 stocks_audit_tableau_complet.jpg : Registre chronologique inaltérable des mouvements de stock avec filtres par type de flux et recherche article.
            // 📸 stocks_audit_badges_flux_couleurs.jpg : Gros plan sur les différents badges de flux : VENTE bleu, RETOUR vert, RÉCEPTION violet, DÉMARQUE rouge, INVENTAIRE gris.
            content:
                `
                TipTac repose sur une architecture de traçabilité intégrale par flux d'événements (Event Sourcing). Chaque variation de stock physique constatée dans votre magasin est obligatoirement consignée dans un grand livre inaltérable, horodatée et signée.
                
                Accessible dans l'univers Stocks & Logistique sous le sous-menu « Registre Mouvements ».
                
                [📸 stocks_audit_tableau_complet.jpg | lg]
                [T]Consultation et recherche multicritères
                Ce registre journalise chaque entrée et sortie d'article :
                — Utilisez la barre de recherche pour isoler une référence précise, un libellé de produit ou un numéro de document justificatif (n° de ticket, n° de commande, n° de BL).
                — Filtrez sur une période calendaire personnalisée ([KEY: Du ... au ...]).
                
                [📸 stocks_audit_badges_flux_couleurs.jpg | right | md]
                [T]Typologie des 8 flux de mouvement
                Le menu déroulant permet de filtrer le registre par nature d'opération :
                — [KEY: VENTE] (Bleu) : Décrémentation suite à un encaissement au comptoir ou sur le web.
                — [KEY: RETOUR] (Vert émeraude) : Reprise d'article client avec restitution en stock.
                — [KEY: RECEPTION] (Violet) : Entrée suite à une livraison de commande grossiste.
                — [KEY: DEMARQUE] (Rouge) : Sortie pour casse, vol ou péremption.
                — [KEY: INVENTAIRE] (Gris) : Rectification suite à un comptage physique en rayon.
                — [KEY: EXPEDITION] (Orange) : Départ vers un autre magasin du réseau.
                — [KEY: SORTIE_B2B] (Cyan) : Cession externe vers un tiers professionnel.
                — [KEY: MANUEL] (Jaune) : Ajustement rapide express depuis la fiche produit.
                [CLEAR]
                
                [T]Détail des lignes et valorisation financière
                Chaque enregistrement détaille :
                — La date et l'heure exactes à la seconde près.
                — Le nom et la référence interne de l'article impacté.
                — L'[KEY: Impact Qté] : affiché en vert avec le signe [KEY: +] pour les entrées, ou en rouge avec le signe [KEY: -] pour les sorties.
                — Le [KEY: Justificatif (Doc)] : numéro du ticket de caisse, référence du bon de commande ou motif explicite de la sortie.
                — La [KEY: Valeur Mouvement (HT)] : valeur financière exacte engagée (au coût d'achat réel ou estimé ≈).
                — L'[KEY: Opérateur] : prénom et nom du collaborateur connecté lors de l'opération.
                
                Cliquez sur [BTN: Exporter CSV] pour sauvegarder ou transmettre l'audit complet de vos mouvements logistiques à votre direction ou à vos commissaires aux comptes.
                `
        },
        {
            id: "fluidite-vente-anomalies-stock",
            title: "9. Fluidité d'encaissement et traçabilité des ventes sans stock",
            content:
                `
                Pour préserver la cadence de passage au comptoir et ne jamais faire attendre un client qui tient un article en main, TipTac applique le principe de fluidité absolue en caisse.
                
                [T]Priorité à la vente physique
                Lorsqu'un article est scanné à la douchette ou sélectionné sur le clavier tactile alors que son stock informatique est à zéro ou déjà négatif :
                — Le logiciel n'interrompt pas la transaction par une fenêtre d'alerte bloquante.
                — Un signal sonore d'attention prévient discrètement l'équipier sans bloquer la saisie.
                — Le produit est immédiatement ajouté au panier et la vente est conclue normalement.
                
                [T]Traçabilité et arbitrage administratif
                Si le stock d'un produit passe en négatif (ex : -1 ou -2), l'écart est instantanément journalisé en base de données.
                Cette situation traduit généralement une vente croisée avec le Click & Collect ou un oubli de réception fournisseur.
                Le responsable n'a pas à gérer ces écarts sous la pression de la file d'attente : il retrouve l'ensemble des références concernées dans le module [LINK: ANALYTICS_REPORTING#anomalies-inventaire-stocks-negatifs | Anomalies d'Inventaire] du Back-Office pour opérer un comptage ou une régularisation à froid.
                `
        }
    ]
};