export default {
    id: "ANALYTICS_REPORTING",
    title: "Statistiques & Pilotage Commercial",
    category: "TipTacCaisse",
    iconName: "BarChart3",
    color: "text-emerald-700",
    articles: [
        {
            id: "moteur-reporting-exports-normes",
            title: "1. Moteur de Reporting, Impression PDF et Exports CSV Normés",
            // 📸 analytics_reporting_header.jpg : Barre supérieure d'un rapport avec titre, sous-titre, bouton « Export CSV » et bouton « Imprimer / PDF ».
            // 📸 analytics_document_header_print.jpg : Cartouche d'en-tête officiel visible à l'impression intégrant le logo, l'adresse, le SIRET, le RCS et la mention certifiée NF525.
            content:
                `
                L'ensemble des modules d'analyse et de pilotage repose sur un socle d'édition et d'exportation harmonisé garantissant la fiabilité des chiffres et la conformité administrative des documents imprimés.
                
                L'accès aux statistiques et aux rapports financiers requiert la permission de supervision ou un rôle [PERM: Manager] ou [PERM: Admin].
                
                [📸 analytics_reporting_header.jpg | lg]
                [T]Contrôles supérieurs et génération de fichiers normés
                En tête de chaque écran analytique, une barre de commandes unifiée met à disposition deux formats de sortie :
                [ST][ICON: Download | 14 | text-teal-600] Exportation CSV enrichie :
                Le bouton [BTN: Export CSV] compile les données du tableau affiché à l'écran sous forme de fichier tableur. 
                Le fichier intègre systématiquement un bloc d'en-tête institutionnel rappelant la raison sociale de votre entreprise, la ville du point de vente, le numéro SIRET, la date exacte d'extraction et l'intitulé officiel du document. 
                Son nommage est automatiquement formaté avec l'horodatage de l'instant T (par exemple : [KEY: recapitulatif_financier_2026-07-05_14h41.csv]).
                
                [ST][ICON: Printer | 14 | text-teal-600] Impression native et génération PDF (A4) :
                Le bouton [BTN: Imprimer / PDF] sollicite directement le moteur d'édition pour générer un document A4 propre. Les éléments interactifs de l'interface (menus de filtres, boutons d'action) sont automatiquement masqués pour ne restituer que les données chiffrées pures.
                
                [📸 analytics_document_header_print.jpg | right | md]
                [T]Cartouche d'en-tête conforme aux normes NF525
                À chaque impression ou export PDF, une entête institutionnelle complète vient chapeauter le document :
                — Le logo du magasin.
                — Les mentions légales obligatoires de l'établissement (Forme juridique, Raison sociale, SIRET, Code NAF/APE, TVA Intracommunautaire, Capital social, RCS et Greffe).
                — Les coordonnées complètes du site émetteur (adresse postale, téléphone, e-mail et site web).
                — Le rappel précis de la période couverte par l'analyse et la mention légale d'horodatage « Conforme aux normes NF525 ».
                [CLEAR]
                `
        },
        {
            id: "affluence-frequentation-horaire",
            title: "2. Analyse de Fréquentation, Affluence Horaire et Planning",
            // 📸 analytics_affluence_graphique_horaire.jpg : Histogramme comparatif de fréquentation de 7h à 21h superposant l'année N-1 (barres grises) et la période active (barres turquoise).
            // 📸 analytics_affluence_infobulle_survol.jpg : Infobulle contextuelle au survol d'une tranche horaire affichant le nombre précis de tickets en N face à N-1.
            // 📸 analytics_affluence_cartes_jours.jpg : Grille des 7 cartes journalières (Lundi à Dimanche) avec moyennes de tickets, évolution en pourcentage et jauge de CA moyen.
            content:
                `
                Le rapport « Affluence Magasin » étudie les flux de passages au comptoir pour vous aider à dimensionner la présence de votre personnel lors des pics d'activité.
                
                [📸 analytics_affluence_graphique_horaire.jpg | lg]
                [T]Histogramme d'affluence horaire (7h à 21h)
                Le graphique central présente la cadence moyenne de tickets émis heure par heure tout au long de la journée commerciale :
                — Les barres grises en arrière-plan représentent l'affluence constatée sur la même période de l'année précédente (N-1).
                — Les barres turquoise contrastées illustrent l'activité réelle de la période sélectionnée.
                
                [📸 analytics_affluence_infobulle_survol.jpg | right | sm]
                [ST][ICON: Clock | 14 | text-teal-600] Infobulles comparatives au survol :
                Survolez une tranche horaire (par exemple 11h-12h ou 17h-18h) pour faire apparaître le détail chiffré : volume moyen de tickets traités en N face à N-1 et tendance d'évolution.
                [CLEAR]
                
                [📸 analytics_affluence_cartes_jours.jpg | left | md]
                [T]Cartes journalières et filtrage ciblé
                En bas d'écran, 7 cartes représentent le comportement moyen de chaque jour de la semaine (du Lundi au Dimanche) :
                — Chaque jour indique le nombre moyen de passages en caisse avec un badge coloré d'évolution face à N-1 (vert en hausse, rouge en recul).
                — Une jauge visuelle mesure le panier financier moyen généré par jour d'ouverture.
                
                [TIP]Isolation d'un jour précis : Cliquez sur la carte d'un jour (par exemple le Samedi) pour isoler ses statistiques : l'histogramme horaire supérieur s'actualise immédiatement pour n'afficher que les pics de fréquentation propres au Samedi. Cliquez sur [BTN: ✕ Voir tout] pour réinitialiser la vue globale.
                [CLEAR]
                `
        },
        {
            id: "recapitulatif-financier-reglements",
            title: "3. Récapitulatif Financier, Ventilation des Règlements et Historique N-1",
            // 📸 analytics_recap_financier_arborescence.jpg : Tableau financier chronologique déployé en arborescence (Année > Mois > Jour) avec colonnes de CA HT, Marge, CA TTC et règlements.
            // 📸 analytics_recap_financier_depliage_boutons.jpg : Gros plan sur les boutons « Tout développer » et « Réduire tout » contrôlant l'arborescence temporelle.
            // 📸 analytics_modal_import_historique_n1.jpg : Fenêtre d'importation d'archives avec le simulateur de TVA à curseur interactif de 0 % à 20 %.
            content:
                `
                Le rapport « Récapitulatif Financier » offre la vision macro-économique absolue de votre commerce en croisant vos résultats de vente avec la totalité des modes d'encaissement perçus.
                
                [📸 analytics_recap_financier_arborescence.jpg | lg]
                [T]Arborescence chronologique dépliable (Année > Mois > Jour)
                Le tableau permet d'explorer vos données à différents niveaux de granularité :
                — Cliquez sur le bouton [BTN: +] d'une année pour dérouler les mois, puis sur un mois pour faire apparaître les statistiques détaillées jour par jour.
                — Utilisez les raccourcis supérieurs [BTN: ▼ Tout développer] ou [BTN: ▲ Réduire tout] pour basculer instantanément d'une vue synthétique à un relevé quotidien exhaustif.
                
                [T]Indicateurs de performance et ventilation des encaissements
                Chaque ligne chronologique détaille la totalité des flux :
                — Performances commerciales : [KEY: CA HT], tendance face à l'année précédente [KEY: Évol. (N-1)], [KEY: Marge €], [KEY: CA TTC], [KEY: Tickets] émis et montant du [KEY: Panier M.].
                — Ventilation stricte des paiements : montants perçus en [KEY: CB], [KEY: Espèces], [KEY: Chèques], [KEY: Avoirs], [KEY: Cartes Cadeaux] et déduction des cagnottes de [KEY: Fidélité].
                — Flux Web : si votre module e-commerce est actif, une colonne supplémentaire isole les encaissements dématérialisés perçus en ligne.
                
                [📸 analytics_modal_import_historique_n1.jpg | right | md]
                [T]Import de l'historique de votre ancien logiciel et simulateur de TVA
                Si vous avez changé de logiciel de caisse pour TipTac, vous pouvez importer vos résultats passés pour alimenter immédiatement les comparatifs d'évolution face à N-1 :
                1. Cliquez sur le module d'import d'historique et déposez votre tableau tableur.
                2. Le système analyse les colonnes et identifie automatiquement les dates et les montants.
                3. Simulateur de TVA à curseur : Si votre ancien export ne contenait que les totaux TTC sans distinguer le Hors Taxes, un curseur interactif vous permet d'ajuster le taux moyen de votre activité (0 %, 5,5 %, 10 %, 20 %) : TipTac recalcule et injecte dynamiquement l'estimation de votre CA HT dans l'historique sans corrompre les écritures réelles !
                [CLEAR]
                
                [TIP]Mise en page paysage automatique : Pour que l'ensemble des colonnes de ventilation de paiement reste parfaitement lisible sur papier, le moteur d'impression injecte automatiquement une directive formatant ce rapport en pleine page A4 Paysage.
                `
        },
        {
            id: "marges-rentabilite-pareto",
            title: "4. Analyse des Marges, Rentabilité par Rayon et Loi de Pareto (80/20)",
            // 📸 analytics_marges_kpis_top.jpg : Les 3 cartes supérieures de synthèse : CA HT Période, Bénéfice Net (Marge €) et Taux de Marge Moyen (%).
            // 📸 analytics_marges_top_familles.jpg : Tableau de rentabilité par famille d'articles avec quantités, CA HT, bénéfice en euros et pourcentage de marge.
            // 📸 analytics_rayons_pareto_diagramme.jpg : Panneau du principe de Pareto mettant en valeur la zone critique des 80 % de rentabilité cumulée sur les 15 articles moteurs.
            content:
                `
                Les rapports « Marges & Rentabilité » et « Performances Rayons » mesurent le bénéfice net réel généré par votre point de vente en retranchant vos prix d'achat fournisseurs de votre chiffre d'affaires.
                
                [📸 analytics_marges_kpis_top.jpg | lg]
                [T]Indicateurs clés de rentabilité nette
                Trois indicateurs de santé financière coiffent le rapport :
                — [KEY: CA HT Période] : Recettes brutes hors taxes enregistrées.
                — [KEY: Bénéfice Net (Marge)] : Gain financier net dégagé en euros (CA HT déduit du Coût d'Achat HT).
                — [KEY: Taux de Marge Moyen] : Rentabilité relative globale de votre catalogue exprimée en pourcentage.
                
                [📸 analytics_marges_top_familles.jpg | left | md]
                [T]Rentabilité par Famille et Top 50 Produits
                L'écran confronte deux tableaux d'arbitrage stratégique :
                — À gauche : Le palmarès de vos rayons (familles) détaillant les volumes écoulés, le CA HT généré, la marge brute et le taux de marge spécifique. Vous identifiez instantanément les rayons à fort volume et ceux à forte marge unitaire.
                — À droite : Le classement du [BTN: Top 50 Produits] classé par marge financière décroissante, mettant en valeur les références générant le plus de bénéfice réel dans votre tiroir-caisse.
                [CLEAR]
                
                [📸 analytics_rayons_pareto_diagramme.jpg | right | md]
                [T]Analyse hiérarchique et Principe de Pareto (Loi des 80/20)
                Dans le module « Performances Rayons », le tableau arborescent détaille le poids relatif de chaque famille dans le CA global du magasin avec suivi des tendances face à N-1.
                
                [ST][ICON: Star | 14 | text-teal-600] Diagramme de Pareto des 15 articles moteurs :
                Le panneau latéral isole les 15 produits essentiels de votre commerce et calcule leur rentabilité cumulée :
                Une barre de progression graphique met en surbrillance la zone critique des 80 % de marge. Elle vous permet de repérer en un coup d'œil les 20 % d'articles qui assurent l'essentiel de votre résultat d'exploitation, vous garantissant de ne jamais être en rupture sur ces références vitales.
                [CLEAR]
                `
        },
        {
            id: "comparateur-ab-evenements",
            title: "5. Comparateur A/B Avancé et Alignement Commercial (Retail vs Strict)",
            // 📸 analytics_comparateur_presets_evenements.jpg : Menu déroulant des événements commerciaux types (Saint-Valentin, Pâques, Fête des Mères, Black Friday, Soldes...).
            // 📸 analytics_comparateur_match_boutons.jpg : Boutons d'alignement rapide « -1 an (STRICT) » et « -364 j (RETAIL) » synchronisant la période B.
            // 📸 analytics_comparateur_histogramme_double.jpg : Histogramme indexé jour après jour comparant les barres de la période A (bleu foncé) face à la période B (orange).
            content:
                `
                Le « Comparateur A/B » permet de mesurer l'impact réel d'une décision commerciale, d'une vague promotionnelle ou des aléas climatiques en confrontant deux périodes calendaires.
                
                [📸 analytics_comparateur_presets_evenements.jpg | lg]
                [T]Presets d'événements commerciaux et boutons relatifs
                Le bandeau supérieur propose une bibliothèque d'événements types préconfigurés :
                — Fêtes et temps forts : [KEY: Saint-Valentin], [KEY: Fête des Grands-Mères], [KEY: Pâques], [KEY: Fête des Mères], [KEY: Fête des Pères], [KEY: Halloween], [KEY: Noël (Quinzaine)]...
                — Jours fériés : [KEY: 1er Mai], [KEY: 8 Mai], [KEY: Ascension], [KEY: 14 Juillet], [KEY: Toussaint]...
                — Périodes marchandes : [KEY: Black Friday], [KEY: Soldes d'Hiver], [KEY: Soldes d'Été].
                Un clic applique automatiquement les plages de dates exactes de l'année en cours sur la [KEY: Période A (Réf)] et celles de l'année précédente sur la [KEY: Période B (Comp)].
                
                [📸 analytics_comparateur_match_boutons.jpg | right | sm]
                [T]Alignement calendaire : Date pour Date vs Jour pour Jour
                Pour neutraliser le décalage naturel des jours de la semaine d'une année sur l'autre, deux boutons synchronisent la période B :
                — [BTN: -1 an (STRICT)] : Compare date calendaire pour date calendaire (ex : du 15 au 21 mars 2026 face au 15 au 21 mars 2025).
                — [BTN: -364 j (RETAIL)] : Aligne parfaitement les jours de la semaine (52 semaines x 7 jours = 364 jours). Cette fonction compare par exemple le premier samedi des soldes face au premier samedi des soldes de l'exercice précédent pour une analyse non faussée.
                [CLEAR]
                
                [📸 analytics_comparateur_histogramme_double.jpg | lg]
                [T]Visualisation graphique et tableau d'audit indexé
                Dès que vous cliquez sur [BTN: COMPARER], le module calcule les deltas :
                — 3 cartes de synthèse mesurent l'évolution en pourcentage sur le [KEY: CA HT], le [KEY: Nombre de Ventes] et le [KEY: Panier Moyen (TTC)].
                — Un histogramme double indexé (J1, J2, J3...) superpose jour après jour les deux périodes avec bascule métrique rapide ([BTN: CA HT], [BTN: Tickets] ou [BTN: Panier]).
                — En pied de page, un tableau analytique détaille chaque journée avec confrontation des dates, des chiffres d'affaires, des volumes de tickets et le calcul de la variation.
                `
        },
        {
            id: "audit-securite-exceptions-caisse",
            title: "6. Audit de Sécurité, Détection des Anomalies et Journal des Exceptions",
            // 📸 analytics_securite_kpis_vigilance.jpg : Les 3 cartes supérieures d'audit : Total Remises Forcées, Volume des Retours et Indice de vigilance.
            // 📸 analytics_securite_filtres_exceptions.jpg : Boutons de filtrage des alertes par nature d'opération : Remises, Retours, Points, Corrections, Affectations.
            // 📸 analytics_securite_ticket_modal_inspect.jpg : Consultation du ticket complet suite au clic sur le bouton bleu « N° Ticket » dans la liste des anomalies.
            content:
                `
                Le rapport « Audit & Sécurité » centralise l'ensemble des opérations manuelles dérogatoires enregistrées sur les caisses tactiles. Il s'agit d'un outil de supervision interne destiné à vous prémunir contre les erreurs de manipulation et les dérives.
                
                [📸 analytics_securite_kpis_vigilance.jpg | lg]
                [T]Indicateurs de vigilance financière
                Trois indicateurs évaluent l'exposition de votre commerce :
                — [KEY: Total Remises Forcées] : Cumul en euros des gestes commerciaux et pourcentages accordés manuellement au comptoir (manque à gagner).
                — [KEY: Volume des Retours] : Montant total des remboursements et reprises d'articles sortis de caisse.
                — [KEY: Indice de vigilance] : Nombre total d'opérations d'exception constatées sur la période.
                
                [📸 analytics_securite_filtres_exceptions.jpg | left | md]
                [T]Typologie des événements audités
                Des boutons de tri permettent d'isoler la nature des anomalies :
                — [BTN: Remises] : Isole les remises manuelles à la ligne, les articles passés en offert à 100 %, les prix unitaires forcés au pavé et les remises globales de ticket.
                — [BTN: Retours] : Relevé de tous les remboursements de produits au comptoir.
                — [BTN: Points] : Mouvements manuels de régularisation de fidélité avec mention du motif obligatoire consigné par le responsable.
                — [BTN: Corrections] : Changements de moyen de paiement opérés a posteriori dans le respect de la norme NF525.
                — [BTN: Affectations] : Tickets anonymes déjà scellés rattachés après coup à un profil client.
                [CLEAR]
                
                [📸 analytics_securite_ticket_modal_inspect.jpg | right | sm]
                [T]Inspection contextuelle du ticket source
                Chaque anomalie consigne la date et l'heure exactes à la seconde, le nom du collaborateur connecté, le client (s'il était rattaché) et le montant de l'impact financier en euros.
                Cliquez sur le bouton bleu [BTN: N° Ticket] en face d'une ligne pour ouvrir instantanément la copie certifiée du ticket d'origine et vérifier le contexte complet de la vente.
                [CLEAR]
                `
        },
        {
            id: "tresorerie-livre-caisse-mouvements",
            title: "7. Livre de Caisse, Flux de Trésorerie et Motifs de Dépense",
            // 📸 analytics_tresorerie_kpis_solde.jpg : Synthèse des flux financiers : Total Entrées (Apports), Total Sorties (Dépenses) et Solde Net des Mouvements.
            // 📸 analytics_tresorerie_ou_part_argent.jpg : Bloc d'analyse visuelle « Où part l'argent ? » classant le Top 5 des motifs de sortie avec barres de progression.
            // 📸 analytics_tresorerie_journal_solde_continu.jpg : Tableau chronologique des flux avec distinction Entrée/Sortie et colonne du solde progressif continu.
            content:
                `
                Le module « Flux de Trésorerie » retrace l'intégralité des entrées et sorties d'espèces physiques non issues d'un encaissement client direct, formant le livre de caisse officiel de votre commerce.
                
                [📸 analytics_tresorerie_kpis_solde.jpg | lg]
                [T]Bilan net de la trésorerie physique
                Trois indicateurs synthétisent les mouvements d'argent liquide :
                — [KEY: Total Entrées (Apports)] : Montant cumulé des apports de monnaie et régularisations.
                — [KEY: Total Sorties (Dépenses)] : Somme des retraits d'espèces pour achat de fournitures, prélèvements et dépôts en banque.
                — [KEY: Solde Net des Mouvements] : Différence nette (Entrées - Sorties) sur la période étudiée.
                
                [📸 analytics_tresorerie_ou_part_argent.jpg | right | md]
                [T]Analyse des postes de dépenses
                Le bloc supérieur analyse vos sorties d'espèces et classe automatiquement le Top 5 des motifs justifiés (Dépôt Banque / Coffre, Achat de timbres ou fournitures, Prélèvement Direction...) :
                Chaque motif indique la somme totale prélevée et une barre de progression représentant son poids relatif sur l'ensemble des dépenses de caisse.
                [CLEAR]
                
                [📸 analytics_tresorerie_journal_solde_continu.jpg | left | md]
                [T]Journal des flux et calcul du solde continu
                Le tableau chronologique consigne chaque opération :
                — La date et l'heure certifiées de la saisie.
                — Le badge de nature : vert pour une [KEY: ENTRÉE], rouge pour une [KEY: SORTIE].
                — Le nom de l'opérateur ayant signé le mouvement.
                — Le motif réglementaire obligatoire sélectionné.
                — La colonne [KEY: Solde Flux] : calcule mathématiquement la position financière du tiroir en temps réel au fil des mouvements.
                [CLEAR]
                `
        },
        {
            id: "valorisation-stocks-alertes-penuries",
            title: "8. Valorisation des Stocks, Répartition par Rayon et Pénuries",
            // 📸 analytics_stocks_dashboard_kpis.jpg : Cartes de valorisation instantanée : Valeur Stock (Achat HT), CA Potentiel (Vente TTC), Articles en Alerte et Ruptures de stock.
            // 📸 analytics_stocks_repartition_familles.jpg : Grille de valorisation rayon par rayon montrant le nombre d'unités, la valeur au prix d'achat et la marge potentielle.
            // 📸 analytics_stocks_journal_filtres.jpg : Tableau détaillé du stock avec interrupteur « Inclure non gérés » et filtres rapides Tout/Alertes/Ruptures.
            content:
                `
                Le rapport « Valorisation Stocks » mesure la trésorerie immobilisée dans votre magasin à l'instant T et identifie les urgences de réassort avant l'épuisement des linéaires.
                
                [📸 analytics_stocks_dashboard_kpis.jpg | lg]
                [T]Double valorisation financière instantanée
                Le tableau de bord supérieur quantifie la valeur de vos marchandises :
                — [KEY: Valeur Stock (Achat HT)] : Somme exacte de votre trésorerie immobilisée en réserve et en magasin (Quantité en stock x Prix d'Achat unitaire HT).
                — [KEY: CA Potentiel (Vente TTC)] : Estimation des recettes brutes théoriques générées si l'intégralité du stock actuel était vendue au prix catalogue.
                — [KEY: Articles en Alerte] et [KEY: Ruptures de stock] : Compteurs en temps réel des références ayant atteint leur stock minimum ou tombées à zéro.
                
                [📸 analytics_stocks_repartition_familles.jpg | right | md]
                [T]Valorisation et marge potentielle par Rayon
                La section intermédiaire ventile votre inventaire par famille de produits :
                Pour chaque rayon, elle affiche le volume total d'unités présentes, la valeur d'achat HT globale immobilisée et la [KEY: Marge Potentielle] qui sera dégagée lors de la vente de ces articles.
                [CLEAR]
                
                [📸 analytics_stocks_journal_filtres.jpg | left | md]
                [T]Journal d'inventaire détaillé et gestion des pénuries
                Le tableau inférieur permet d'isoler les urgences logistiques :
                — Filtres d'état : basculez entre [BTN: Tout], [BTN: Alertes] (stock inférieur ou égal au seuil de sécurité) et [BTN: Ruptures] (stock nul ou négatif).
                — Option [BTN: Inclure non gérés] : cochez cette case pour afficher exceptionnellement les prestations ou articles vendus sans suivi d'inventaire informatique.
                
                [WARNING]Exclusion stricte des articles virtuels (Maîtres) : Pour garantir une valeur comptable rigoureusement exacte, le calcul et l'export CSV excluent automatiquement les fiches dossiers parentes (Maîtres) pour ne comptabiliser que les variantes physiques réellement présentes en rayon.
                [CLEAR]
                `
        },
        {
            id: "suivi-avoirs-dette-client",
            title: "9. Suivi des Avoirs, Titres Cadeaux et Encours de Dette Client",
            // 📸 analytics_avoirs_scorecards.jpg : Cartes de synthèse financière : Total Émis (Période), Encours Actif (Dette Client) et Taux d'utilisation.
            // 📸 analytics_avoirs_tableau_parcours.jpg : Tableau des avoirs avec colonnes du parcours multi-sites (Créé au magasin / Consommé au magasin) et alertes d'échéance.
            content:
                `
                Le rapport « Suivi des Avoirs » offre une comptabilité rigoureuse des titres de paiement en circulation émis par votre point de vente (avoirs de retours, cartes cadeaux et bons de fidélité).
                
                [📸 analytics_avoirs_scorecards.jpg | lg]
                [T]Mesure du passif financier et taux d'utilisation
                Trois indicateurs clés mesurent votre engagement envers les clients :
                — [KEY: Total Émis (Période)] : Valeur faciale totale des titres distribués.
                — [KEY: Encours Actif (Dette Client)] : Somme exacte restant due aux acheteurs sur les bons encore valides et non consommés à ce jour.
                — [KEY: Taux d'utilisation] : Pourcentage des titres consommés en caisse face au total des émissions.
                
                [📸 analytics_avoirs_tableau_parcours.jpg | right | md]
                [T]Traçabilité du parcours multi-sites en réseau
                Dans les commerces disposant de plusieurs magasins connectés au Cloud, le tableau consigne le cycle de vie de chaque titre :
                — Colonne [KEY: Parcours] : Indique le site physique d'émission (icône [ICON: Store | 20 | text-blue-600 ]) et le point de vente où le bon a été consommé (icône [ICON: MapPin | 20 | text-red-600 ]). Vous pouvez ainsi compenser la trésorerie inter-magasins en fin de mois.
                — Colonne [KEY: Type / Motif] : Distingue formellement un avoir issu d'un retour d'article, un bon de fidélité, une carte cadeau ou un bon manuel.
                [CLEAR]
                
                [T]Contrôle des échéances et recherche du ticket source
                — Alertes de fin de validité : Les titres approchant de leur date limite d'utilisation sous 15 jours portent une mention d'alerte orange [KEY: Bientôt], et ceux dont la date est dépassée portent le badge rouge [KEY: Expiré].
                — Audit du ticket d'origine : Cliquez sur le bouton bleu [BTN: Ticket N°...] en face d'une ligne pour ouvrir instantanément la vente ou le retour qui a engendré l'émission de l'avoir.
                `
        },
        {
            id: "crm-analytique-palmares-fidelite",
            title: "10. CRM Analytique, Palmarès Clients, Taux d'attrition et Journal de Fidélité",
            // 📸 analytics_clients_kpis_identification.jpg : Synthèse fidélité avec Taux d'identification, Impact Panier Moyen (Identifié vs Anonyme) et Passif fidélité global.
            // 📸 analytics_clients_palmares_tableau.jpg : Tableau des 50 meilleurs clients avec coordonnées directes, panier moyen individuel et badge « Risque Perte ».
            // 📸 analytics_fidelite_journal_mouvements.jpg : Journal des mouvements de fidélité avec filtres par catégorie de motif et badges d'origine (Ce Magasin, Site Web, Réseau).
            content:
                `
                Les modules « Analyse Clients » et « Historique Fidélité » mesurent l'engagement de votre clientèle et la rentabilité de votre programme de fidélisation.
                
                [📸 analytics_clients_kpis_identification.jpg | lg]
                [T]Indicateurs de performance CRM
                Le bandeau supérieur analyse la qualification de vos passages en caisse :
                — [KEY: Taux d'identification] : Pourcentage de votre chiffre d'affaires total réalisé avec un client rattaché à son compte.
                — [KEY: Impact Panier Moyen] : Compare directement la dépense d'un client identifié face à un acheteur anonyme de passage (mesurant le gain financier du programme).
                — [KEY: Recrutement] : Nombre de nouveaux profils créés sur la période.
                — [KEY: Points en circulation] : Dette totale en monnaie virtuelle accumulée par vos clients (passif fidélité).
                
                [📸 analytics_clients_palmares_tableau.jpg | right | md]
                [T]Palmarès des 50 Meilleurs Clients et Risque d'Attrition
                Le classement liste vos acheteurs les plus fidèles par chiffre d'affaires cumulé décroissant :
                — Il affiche pour chacun son type (Particulier ou Pro), ses visites, son panier moyen individuel et son solde de points.
                
                [WARNING]Détection du Risque de Perte (90 jours) : Si le dernier passage en caisse d'un client du palmarès remonte à plus de 90 jours, le tableau affiche une alerte rouge « Risque Perte ». Vous pouvez cliquer directement sur ses coordonnées pour le relancer par SMS ou lui expédier une offre de reconquête !
                [CLEAR]
                
                [📸 analytics_fidelite_journal_mouvements.jpg | left | md]
                [T]Journal d'audit des mouvements de points de fidélité
                Dans le sous-module « Historique Fidélité », chaque crédit ou débit de points est tracé de manière granulaire :
                — Filtre par motif : isolez les gains issus des ventes, les utilisations de cagnottes, les reprises suite à un retour de produit ou les ajustements manuels d'un responsable.
                — Canal d'origine : badges certifiant si le mouvement a été réalisé sur votre caisse physique ([KEY: Ce Magasin]), sur votre boutique en ligne ([KEY: Site Web]) ou dans une autre succursale de votre enseigne.
                [CLEAR]
                `
        },
        {
            id: "performances-equipe-indice-vente",
            title: "11. Performances de l'Équipe, Contribution et Indice de Vente",
            // 📸 analytics_vendeurs_cartes_equipe.jpg : Cartes de performance individuelle des vendeurs avec Chiffre d'Affaires réalisé, part de CA globale (%) et volume de tickets.
            // 📸 analytics_vendeurs_indice_vente_jauge.jpg : Gros plan sur le bloc « Indice de vente » avec nombre d'articles par ticket et jauge visuelle de progression.
            content:
                `
                Le rapport « Performances Équipe » évalue l'efficacité commerciale de vos collaborateurs et met en lumière les points forts de vos vendeurs au comptoir.
                
                [📸 analytics_vendeurs_cartes_equipe.jpg | lg]
                [T]Contribution au chiffre d'affaires du magasin
                Chaque collaborateur dispose d'une carte synthétique personnalisée :
                — [KEY: Chiffre d'Affaires] : Montant TTC total conclu par le collaborateur sur la période.
                — [KEY: Part CA] : Contribution relative en pourcentage dans le chiffre d'affaires global de l'établissement.
                — [KEY: Tickets] : Nombre total de transactions finalisées sous son nom.
                — [KEY: Panier Moyen] : Dépense moyenne perçue par client servi.
                
                [📸 analytics_vendeurs_indice_vente_jauge.jpg | right | sm]
                [T]Indice de vente (Articles par ticket)
                Le bas de chaque carte calcule l'[KEY: Indice de vente] : la moyenne exacte d'articles vendus par ticket de caisse.
                Accompagné d'une jauge de progression visuelle, cet indicateur permet d'analyser la capacité du vendeur à réaliser des ventes complémentaires et des conseils croisés au comptoir.
                [CLEAR]
                
                [TIP]Conformité NF525 : L'ensemble des statistiques d'équipe s'appuie exclusivement sur les tickets de caisse validés et scellés pour prévenir toute contestation sur les commissions ou primes d'objectifs.
                `
        },
        {
            id: "ecommerce-demandes-demarque-reporting",
            title: "12. Audit E-Commerce, Demandes Clients et Démarque de Stock",
            // 📸 analytics_webreport_chrono_prep.jpg : Tableau de bord e-commerce avec CA Web, Chrono de Préparation en minutes et répartition Drive vs Livraison.
            // 📸 analytics_demandes_clients_tableau.jpg : Registre des produits réclamés par les clients avec boutons d'action rapide « Créer l'article » et « Commandée ».
            // 📸 analytics_demarque_report_perte_reelle.jpg : Rapport d'audit de la casse et des pertes de stock avec total valorisé au prix d'achat HT et mention estimée (≈).
            content:
                `
                Les modules opérationnels fournissent un suivi transversal des commandes web, des attentes de vos clients et des pertes de stock en magasin.
                
                [📸 analytics_webreport_chrono_prep.jpg | lg]
                [T]Performances E-Commerce et Logistique Click & Collect
                Si vous exploitez le module de gestion des commandes Web [PLAN: Plan Commerce], ce rapport évalue l'efficacité logistique de vos préparateurs :
                — [KEY: Chiffre d'Affaires Web] et [KEY: Panier Moyen En Ligne].
                — [KEY: Chrono Préparation] : Temps moyen (en minutes) écoulé entre la réception d'une commande et sa mise à disposition au quai (Statut « Prête »).
                — [KEY: Reste à Encaisser] : Montant des commandes en attente de paiement au comptoir lors du retrait par le client.
                — Répartition des expéditions : proportion entre les retraits magasin (Drive) et les livraisons à domicile.
                — Registre complet : tableau des commandes avec recherche et filtres de statuts logistiques.
                
                [📸 analytics_demandes_clients_tableau.jpg | right | md]
                [T]Rapport des Demandes Clients en caisse
                Centralise les articles recherchés par votre clientèle mais indisponibles en rayon :
                — Liste le produit souhaité, la quantité réclamée, le budget du client, le vendeur relayant la demande, la date d'échéance et les coordonnées du client (nom, téléphone, e-mail).
                — Boutons d'action rapide : permet de basculer la demande en [BTN: Commandée] auprès du grossiste, en [BTN: Traitée], ou d'ouvrir directement la création de la fiche dans le catalogue via l'icône de colis vert.
                [CLEAR]
                
                [📸 analytics_demarque_report_perte_reelle.jpg | left | md]
                [T]Audit de Démarque et Casse de stock
                Répertorie l'intégralité des sorties de stock manuelles hors-vente :
                — Qualifie le motif légal de la perte : [KEY: CASSE], [KEY: VOL], [KEY: PÉRIMÉ] ou [KEY: ERREUR DE SAISIE].
                — Valorisation comptable au Prix d'Achat HT réel : Calcule le préjudice financier net déductible du bilan comptable. Les lignes dont le prix d'achat était inconnu sont indiquées par le symbole « ≈ » (valeur estimée sur la marge théorique du rayon).
                — Les erreurs de saisie apparaissent barrées pour ne pas fausser le montant des pertes réelles.
                [CLEAR]
                `
        },
        {
            id: "anomalies-inventaire-stocks-negatifs",
            title: "13. Anomalies d'Inventaire et Stocks Négatifs",
            content:
                `
                Pour conserver une comptabilité exacte sans ralentir les ventes au comptoir, le module « Anomalies d'Inventaire » isole l'ensemble des articles dont le stock est passé en négatif.
                
                [T]Diagnostic des écarts et perte de valorisation
                Lorsqu'un article est vendu alors que le logiciel n'enregistrait aucune unité disponible (conflit de commande web, oubli de pointage d'un arrivage ou démarque invisible), cette interface d'audit chiffre le problème :
                — [KEY: Articles en défaut] : Nombre total de références présentant un solde négatif.
                — [KEY: Perte de valorisation (HT)] : Impact financier cumulé du déficit sur votre inventaire théorique.
                
                [T]Actions directes en un clic
                Depuis le tableau récapitulatif, régularisez chaque anomalie sans changer d'écran :
                [ST][ICON: RefreshCcw | 14 | text-orange-600] Remise à zéro immédiate :
                Un clic sur l'icône de rotation ajuste instantanément le stock physique à 0 et consigne un mouvement d'ajustement dans le journal d'audit logistique.
                
                [ST][ICON: Settings | 14 | text-teal-600] Consultation de la fiche article :
                Un clic sur l'icône d'engrenage ouvre la fiche complète du produit par-dessus le rapport pour vérifier les derniers mouvements, modifier le fournisseur ou inscrire un réassort.
                
                [T]Export et impression PDF
                Le bouton [BTN: Imprimer / PDF] édite un rapport officiel A4 conforme NF525 (les boutons d'action sont automatiquement masqués), tandis que [BTN: Export CSV] compile l'état du déficit pour votre cabinet comptable.
                `
        },
        {
            id: "stocks-dormants-faible-rotation",
            title: "14. Stocks Dormants, Faible Rotation et Gel du Réassort",
            content:
                `
                Le rapport « Faible Rotation & Stocks Dormants » combat l'immobilisation stérile de trésorerie en repérant les articles qui encombrent la réserve sans s'écouler.
                
                [T]Filtres combinés par boutons tactiles
                Trois niveaux de filtres permettent de cibler précisément les produits à traiter :
                — [KEY: Période observée] : Analysez l'activité sur [BTN: 3 mois], [BTN: 6 mois], [BTN: 12 mois] ou [BTN: 24 mois].
                — [KEY: Taux d'écoulement] : Isolez les produits totalement invendus ([BTN: 0 % - Jamais vendus]), les écoulements très lents ([BTN: ≤ 10 %]) ou modérés ([BTN: ≤ 25 %]).
                — [KEY: Statut de réassort] : Filtrez entre [BTN: Tous], [BTN: Réassort Actif] ou [BTN: Réassort Bloqué].
                
                [T]Indicateurs de trésorerie immobilisée
                Le tableau chiffre le capital dormant :
                — Le stock actuel en rayon, le volume exact d'unités vendues sur la période et le pourcentage d'écoulement réel.
                — [KEY: Valeur Immo. HT] : Valeur d'achat des pièces stockées qui n'ont pas trouvé preneur.
                
                [T]Actions d'arbitrage immédiates
                Face à un produit dormant, l'opérateur peut agir sans quitter la vue :
                [ST][ICON: Ban | 14 | text-red-600] Geler / Débloquer le réassort :
                Basculez d'un clic l'indicateur d'approvisionnement. Le bouton devient rouge pour signaler que les commandes automatiques fournisseurs sont désactivées pour cet article.
                
                [ST][ICON: Settings | 14 | text-sky-600] Accès fiche pour promotion :
                Ouvre la fiche produit pour créer immédiatement une remise promotionnelle, une tête de gondole ou préparer un déstockage.
                `
        }
    ]
};