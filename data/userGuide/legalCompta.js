export default {
    id: "LEGAL_COMPTA",
    title: "Légal, Compta & Contrôle DGFIP",
    category: "TipTacCaisse",
    iconName: "Shield",
    color: "text-blue-800",
    articles: [
        {
            id: "hub-expert-comptable",
            title: "1. Hub Expert-Comptable (Exports standards et écritures)",
            // 📸 compta_hub_dashboard.jpg : Vue générale du Hub Expert-Comptable présentant le sélecteur de période mensuelle et les 4 cartes d'export CSV.
            // 📸 compta_hub_cloud_sync.jpg : Encart bleu « Transmission Cloud Manuelle » disponible pour les commerces gérés en réseau.
            // 📸 compta_journal_ventes_apercu.jpg : Extrait du tableau d'écritures du journal des ventes VT avec dates, comptes 707/4457/512 et gestion d'arrondis.
            content:
                `
                Le Hub Expert-Comptable fournit au gérant et à son cabinet comptable les fichiers de gestion et les journaux financiers nécessaires à la saisie de fin de mois.
                
                Un rôle [PERM: Admin] ou [PERM: Manager] (avec permission) est exigé pour télécharger ou transmettre les pièces comptables.
                
                [📸 compta_hub_dashboard.jpg | lg]
                [T]Sélection de la période et 4 exports clés
                Sélectionnez le mois calendaire souhaité dans le sélecteur supérieur (ex : « 2026-04 »), puis cliquez sur le bouton [BTN: Télécharger] de la carte correspondante :
                
                [ST][ICON: TrendingUp | 14 | text-teal-600] 1. Journal des Ventes (Code Journal VT) :
                Génère le fichier détaillé de vos recettes jour par jour, ventilé par compte officiel du Plan Comptable Général :
                — Recettes HT : comptes [KEY: 707000] (Marchandises), [KEY: 701000] (Produits finis) et [KEY: 706000] (Prestations de services).
                — Acomptes & Titres cadeaux : compte [KEY: 419100] (Émission et encaissement de cartes cadeaux ou avoirs).
                — TVA Collectée : sous-comptes spécifiques selon le taux légal : [KEY: 445712] (TVA 20 %), [KEY: 445711] (TVA 10 %), [KEY: 445715] (TVA 5,5 %) et [KEY: 445718] (TVA 2,1 %).
                — Contreparties d'encaissements : comptes [KEY: 512000] (CB), [KEY: 531000] (Caisse Espèces), [KEY: 511200] (Remise Chèques) et [KEY: 512001] (Ventes Web).
                — Régularisation des centimes d'arrondis : le système équilibre au centime près chaque journée en imputant automatiquement les écarts d'arrondis monétaires sur les comptes de charges diverses [KEY: 658000] ou de produits divers [KEY: 758000].
                
                [ST][ICON: DollarSign | 14 | text-teal-600] 2. Journal de Caisse (Code Journal OD) :
                Historique chronologique de l'ensemble des flux du tiroir non issus des ventes directes : apports de monnaie, achats de fournitures immédiates, prélèvements gérance et surtout l'ensemble des dépôts d'espèces envoyés en banque lors des fins de service.
                
                [ST][ICON: TrendingDown | 14 | text-teal-600] 3. Démarque Comptable Réelle :
                Extraction de toutes les pertes, vols, casses et produits périmés déclarés dans le magasin. Le filtre comptable isole strictement les pertes valorisées au [KEY: Prix d'Achat HT réel] et exclut automatiquement les démarques théoriques ou erreurs de saisie pour donner au comptable le montant exact déductible du résultat.
                
                [ST][ICON: Box | 14 | text-teal-600] 4. État des Stocks Valorisé :
                Photographie exhaustive de la valeur comptable de votre stock magasin à l'instant T (calculée selon la formule [KEY: Quantité en rayon] x [KEY: Prix d'Achat unitaire HT]). L'export filtre automatiquement les articles non gérés en stock et exclut strictement les fiches dossiers parentes (Maîtres) pour garantir une valorisation d'inventaire sans aucun doublon.
                
                [T]Transmission automatique vers le siège (Réseau Cloud)
                Si votre magasin fait partie d'une enseigne connectée à TipTac Cloud [PLAN: Plan Connect], un bandeau bleu apparaît. Le bouton [BTN: Pousser vers le Cloud] compile le package mensuel complet et le téléverse directement dans l'espace de stockage sécurisé du siège sans aucune manipulation manuelle de clé USB ou de pièces jointes par e-mail.
                [📸 compta_hub_cloud_sync.jpg | md]
                `
        },
        {
            id: "historique-z-nf525",
            title: "2. Historique des Clôtures Z et réédition des duplicatas",
            // 📸 compta_historique_z_tableau.jpg : Tableau de bord de l'historique des Z avec les colonnes de CA, les badges d'écart vert/rouge et les boutons d'action.
            // 📸 compta_archive_ticket_z_modal.jpg : Modale de consultation du duplicata thermique certifié du Z avec bouton de retirage.
            // 📸 compta_export_z_a4.jpg : Aperçu du document récapitulatif A4 avec mentions de certification et colonnes financières.
            content:
                `
                Le module des Archives Z recense l'intégralité des clôtures de fin de journée réalisées depuis la mise en service initiale du terminal de vente.
                
                [📸 compta_historique_z_tableau.jpg | lg]
                [T]Consultation inaltérable et suivi des anomalies
                Chaque ligne du tableau d'archive fournit une lecture claire et certifiée :
                — Le numéro séquentiel unique (par exemple [KEY: Z-42]).
                — La date et l'heure précises de la clôture.
                — Le Chiffre d'Affaires Total TTC consolidé.
                — Le badge d'écart de caisse instantané : affiché en vert si la journée s'est clôturée avec un solde positif ou nul, ou en rouge vif s'il manque de l'argent dans le tiroir par rapport au théorique attendu.
                — L'empreinte cryptographique SHA-256 scellée.
                
                [📸 compta_archive_ticket_z_modal.jpg | right | sm]
                [T]Visualisation et retirage du ticket thermique
                En cliquant sur le bouton [BTN: Visualiser], vous ouvrez le duplicata officiel de la clôture journalière. 
                Ce duplicata réintègre les moindres détails financiers : la ventilation des taux de TVA, le détail des paiements, les éco-participations, les dépôts bancaires et les mouvements de tiroir de tous les postes. 
                Le ticket est immédiatement réimprimable sur votre imprimante thermique de caisse en portant obligatoirement la mention fiscale « *** DUPLICATA *** » en en-tête.[CLEAR]
                
                [📸 compta_export_z_a4.jpg | left | sm]
                [T]Génération du rapport d'archive au format A4
                Depuis la fenêtre du ticket Z, le bouton [BTN: EXPORT A4] met en page l'intégralité de la clôture sur une feuille A4 normée. 
                Ce rapport officiel structure l'audit en 4 colonnes distinctes :
                [CLEAR]
                1. Chiffre d'Affaires et synthèse fiscale TVA.
                2. Mouvements de caisse et flux financiers.
                3. Répartition globale des modes de règlements.
                4. Contrôle physique des tiroirs par poste de vente.
                Il comporte les mentions de conformité NF525, la signature numérique et l'en-tête de l'entreprise, prêt pour archivage physique ou exportation numérique en PDF.
                [CLEAR]
                `
        },
        {
            id: "archives-periodiques",
            title: "3. Archives Fiscales et scellement des clôtures périodiques",
            // 📸 compta_archives_fiscales_tuiles.jpg : Écran des archives fiscales avec les deux grandes tuiles de clôture Mensuelle (orange) et Annuelle (rouge) affichant les compteurs en attente.
            // 📸 compta_registre_archives_tableau.jpg : Tableau chronologique du registre des sceaux avec type d'archive, période, CA TTC, signature et cumul perpétuel.
            content:
                `
                Pour satisfaire aux obligations de l'article 88 de la loi de finances et du référentiel NF525, TipTac opère un scellement cryptographique périodique par blocs mensuels et annuels.
                
                [📸 compta_archives_fiscales_tuiles.jpg | lg]
                [T]Détection automatique des périodes échues
                Le logiciel surveille en permanence votre calendrier de vente :
                Dès qu'un mois ou une année calendaire se termine, il analyse l'historique et active des indicateurs d'alerte :
                — Tuile orange [BTN: Clôture Mensuelle] : Affiche un badge signalant le nombre de mois en attente de scellement (ex : « 2 en attente »).
                — Tuile rouge [BTN: Clôture Annuelle] : Signale les exercices fiscaux clos devant être archivés de manière définitive.
                
                [WARNING]Règle de verrouillage et chronologie stricte
                Pour garantir la solidité juridique de la chaîne de preuves, les clôtures périodiques s'effectuent obligatoirement dans l'ordre chronologique de votre activité commerciale (du mois le plus ancien vers le plus récent). 
                Il est strictement impossible de clôturer le mois en cours avant son dernier jour d'exploitation : le bouton passe alors au statut vert [BTN: TOUT EST À JOUR].
                
                [T]Procédure de scellement d'une période
                1. Cliquez sur le bouton d'action (par exemple [BTN: CLÔTURER AVRIL 2026]).
                2. Une modale d'avertissement de sécurité vous demande confirmation : cette action est irréversible et scellera la totalité des écritures de la période.
                3. Dès confirmation, le système compile les clôtures Z de la période, calcule le volume d'affaires global et génère le sceau cryptographique officiel dans le registre inaltérable.
                
                [📸 compta_registre_archives_tableau.jpg | right | md]
                [T]Le Registre des Archives Légales
                Toutes les clôtures périodiques validées sont consignées dans un registre permanent présentant :
                — Le type de sceau ([KEY: MENSUELLE] ou [KEY: ANNUELLE]).
                — L'intitulé de la période (ex : « Mai 2026 » ou « Exercice 2025 »).
                — Le CA TTC cumulé sur la période scellée.
                — L'empreinte cryptographique de signature NF525.
                — Le Cumul Perpétuel Inaltérable à la date de scellement.
                
                [TIP]Téléchargement du registre complet : Cliquez sur [BTN: Télécharger le Registre (.CSV)] en haut à droite pour obtenir un tableau récapitulatif officiel de vos sceaux fiscaux, à communiquer chaque année à vos commissaires aux comptes ou auditeurs.
                [CLEAR]
                `
        },
        {
            id: "controle-dgfip",
            title: "4. Contrôle Fiscal DGFIP et fichiers d'audit inaltérables",
            // 📸 compta_dgfip_dashboard.jpg : Panneau rouge d'alerte du Contrôle Fiscal DGFIP avec le sélecteur de mois et les 3 grands boutons d'extraction brute.
            // 📸 compta_dgfip_fec_modal.jpg : Bouton d'export du Fichier FEC avec explication de la norme LPF.
            // 📸 compta_dgfip_bande_controle.jpg : Bouton d'export de la Bande de Contrôle avec détail ticket par ticket.
            // 📸 compta_dgfip_grand_livre_z.jpg : Bouton d'export du Grand Livre des Z avec cumul perpétuel.
            content:
                `
                Le module « Contrôle Fiscal DGFIP » est un espace haute sécurité conçu exclusivement pour fournir les pièces justificatives brutes requises lors d'un contrôle fiscal sur place mené par les vérificateurs de l'administration ou par les auditeurs de certification.
                
                [WARNING]Zone réservée aux contrôleurs fiscaux
                Les fichiers générés dans cette section ne sont pas des documents de gestion destinés à votre comptable usuel (utilisez pour cela le Hub Expert-Comptable). Ils contiennent des données informatiques brutes, scellées et inaltérables, conformes aux exigences du Livre des Procédures Fiscales (LPF).
                
                [📸 compta_dgfip_dashboard.jpg | lg]
                [T]Les 3 fichiers obligatoires en cas de contrôle
                Indiquez le mois calendaire à inspecter dans le sélecteur supérieur, puis générez les 3 archives d'audit demandées par l'agent vérificateur :
                
                [ST][ICON: FileText | 14 | text-teal-600] 1. Le Fichier FEC Officiel (Format DGFIP) :
                Génère le fichier réglementaire au format texte tabulé (TSV) normé selon les spécifications strictes de l'administration fiscale (portant le nommage officiel [KEY: {SIREN}FEC{AAAAMMJJ}.txt]).
                — Il consigne ligne à ligne l'ensemble des écritures de vente du code journal « VT ».
                — Chaque écriture regroupe toutes les lignes comptables d'une journée sous un numéro séquentiel unique avec référence à la clôture correspondante (ex : « Z-42 »).
                — Il détaille les montants de débits et crédits pour les comptes de ventes, les acomptes/cartes cadeaux, la TVA par taux et les règlements financiers avec équilibrage parfait des arrondis.
                
                [ST][ICON: Lock | 14 | text-teal-600] 2. La Bande de Contrôle (Détail inaltérable des tickets) :
                Génère le fichier d'audit absolu retraçant l'intégralité des flux commerciaux ligne par ligne sur la période sélectionnée ([KEY: Bande_Controle_Tickets_{AAAA-MM}.csv]).
                Chaque enregistrement détaille :
                — L'identifiant du ticket et son numéro de séquence chronologique continu.
                — La nature de l'opération ([KEY: VENTE] ou [KEY: RETOUR]).
                — L'horodatage certifié à la seconde, l'identifiant du terminal de caisse et le nom du vendeur.
                — La désignation textuelle de chaque article vendu, la quantité et le taux de TVA réel appliqué.
                — Le prix unitaire initial, le type et le montant des remises accordées à la ligne (pourcentage, montant, article offert ou promotion par lot).
                — La répercussion transparente au prorata exact des remises globales de panier ou bons d'achat sur chaque ligne d'article.
                — Le montant net de la ligne, le total du ticket, le détail des modes de règlement et la signature cryptographique SHA-256 propre au ticket.
                
                [ST][ICON: Shield | 14 | text-teal-600] 3. Le Grand Livre des Z :
                Exporte l'historique complet et inaltérable des clôtures de caisse du mois ([KEY: Grand_Livre_Clotures_{AAAA-MM}.csv]).
                Ce document compile pour chaque Z journalier :
                — Le numéro de clôture chronologique et sa date de validation.
                — Le Chiffre d'Affaires consolidé HT et TTC ainsi que le volume de tickets émis.
                — La ventilation intégrale des règlements par moyen de paiement (CB, Espèces, Chèques, Avoirs, Fidélité, Ventes Web).
                — Le contrôle physique du tiroir : fond théorique attendu, fond réel compté et écart constaté au centime près.
                — La valeur du [KEY: CUMUL PERPÉTUEL TTC] à cet instant T et la signature d'empreinte cryptographique scellée.
                
                [TIP]Conformité NF525 : Les empreintes cryptographiques SHA-256 contenues dans ces fichiers permettent à l'inspecteur des finances publiques de vérifier instantanément sur son logiciel d'audit que la chaîne des données n'a subi aucune modification, suppression ou insertion frauduleuse.
                `
        }
    ]
};