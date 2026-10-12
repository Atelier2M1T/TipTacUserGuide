export default {
    id: "CLIENTS_CRM",
    title: "Annuaire Clients, CRM & Fidélité",
    category: "TipTacCaisse",
    iconName: "Users",
    color: "text-purple-700",
    articles: [
        {
            id: "annuaire-consultation-colonnes",
            title: "1. Consultation de l'annuaire, recherche et colonnes sur mesure",
            // 📸 crm_annuaire_recherche_globale.jpg : Vue principale de l'annuaire avec la barre de recherche textuelle, les badges de statuts B2B/Client et le compteur de points.
            // 📸 crm_selecteur_colonnes_picker.jpg : Menu déroulant « Affichage » avec les cases à cocher des colonnes mémorisées (Type, Identité, Contact, Ville, Naissance, Points, Opt-in, Dernier Achat).
            // 📸 crm_bouton_synchro_cloud.jpg : Bouton « Synchro » en cours d'exécution mettant à jour les fiches et soldes de points avec le serveur réseau.
            content:
                `
                Le module Annuaire Clients centralise l'intégralité de vos profils acheteurs (Particuliers et Entreprises B2B), qu'ils aient été enregistrés sur vos caisses tactiles ou sur votre boutique en ligne.
                
                [📸 crm_annuaire_recherche_globale.jpg | lg]
                [T]Recherche dynamique multi-critères
                La barre de recherche supérieure permet d'isoler un client en une fraction de seconde :
                Tapez les premières lettres d'un nom de famille, d'un prénom ou d'une raison sociale d'entreprise, un numéro de téléphone portable ou une adresse e-mail. Les résultats s'ajustent instantanément à la frappe sans nécessiter de validation.
                
                [📸 crm_selecteur_colonnes_picker.jpg | right | md]
                [T]Personnalisation de l'affichage (Colonnes mémorisées)
                Chaque poste de travail peut adapter l'agencement de son tableau en cliquant sur le bouton [BTN: Affichage] en haut à droite :
                Cochez ou décochez les données selon vos priorités de gestion :
                — [KEY: Type] : Badge gris « Client » ou badge bleu indigo contrasté « B2B ».
                — [KEY: Identité] : Nom, prénom ou société avec civilité associée.
                — [KEY: Contact] : Téléphone au format national et adresse e-mail.
                — [KEY: Ville] : Nom officiel de la commune.
                — [KEY: Naissance] : Date de naissance pour le ciblage anniversaire.
                — [KEY: Fidélité] : Solde actuel de la cagnotte en points.
                — [KEY: Dernier Achat] : Date du dernier passage en caisse.
                — [KEY: Opt-in] : Témoin vert (accord marketing donné) ou croix rouge (refus de prospection commerciale).
                Vos préférences de colonnes sont sauvegardées localement en mémoire sur la machine et conservées d'une session à l'autre.
                [CLEAR]
                
                [📸 crm_bouton_synchro_cloud.jpg | left | sm]
                [T]Synchronisation Cloud réseau [PLAN: PLAN NETWORK]
                Si votre magasin est rattaché à une enseigne multi-sites ou synchronisé avec le Web, vous pouvez cliquer sur le bouton [ICON: RefreshCcw | 20] pour actualiser les données :
                Le système interroge le serveur central pour mettre à jour les coordonnées des nouveaux clients créés sur les autres postes et réconcilier les soldes de points de fidélité consommés sur le réseau.
                [CLEAR]
                `
        },
        {
            id: "creation-edition-fiches-rgpd",
            title: "2. Création de fiche, formatage automatique, doublons et RGPD",
            // 📸 crm_fiche_creation_particulier.jpg : Formulaire complet d'un client particulier montrant l'état civil, la sélection de civilité et la date de naissance obligatoire.
            // 📸 crm_fiche_compte_professionnel_b2b.jpg : Encart bleu du compte professionnel débloquant la Raison Sociale et le champ numéro SIRET.
            // 📸 crm_alerte_doublon_contact.jpg : Encadré orange d'avertissement en direct signalant un numéro de téléphone ou un email déjà associé à un autre client.
            // 📸 crm_formatage_automatique_champs.jpg : Gros plan sur les champs Nom en majuscules, Prénom avec majuscule initiale et Téléphone espacé par paires de chiffres.
            // 📸 crm_suggestion_communes_insee.jpg : Menu déroulant de sélection de commune affichant automatiquement les villes associées au code postal à 5 chiffres.
            content:
                `
                Pour créer un nouveau profil, cliquez sur [BTN: Nouveau Client] depuis l'annuaire ou scannez directement une carte de fidélité non reconnue sur la caisse.
                
                [📸 crm_fiche_creation_particulier.jpg | lg]
                [T]Distinction Particulier vs Compte Professionnel (B2B)
                Le formulaire s'adapte en temps réel selon la case cochée en haut d'écran :
                [ST][ICON: User | 14 | text-teal-600] Mode Particulier :
                Exige la [KEY: Civilité] (M., Mme, M. & Mme), le [KEY: Nom], le [KEY: Prénom] et la [KEY: Date de naissance] (obligatoire pour identifier les homonymes et animer les offres anniversaires).
                
                [ST][ICON: Briefcase | 14 | text-teal-700] Mode Compte Professionnel :
                Un encart indigo débloque les champs d'entreprise. La saisie de la [KEY: Raison Sociale] devient obligatoire. Renseignez également le [KEY: Numéro SIRET] (14 chiffres) : il sera automatiquement reporté sur les factures émises au comptoir pour garantir leur validité fiscale.
                
                [📸 crm_formatage_automatique_champs.jpg | right | md]
                [T]Formatage automatique et validation des données
                Pour conserver un fichier client homogène et exploitable sans fautes de casse :
                — [KEY: Nom de famille & Commune] : Le logiciel convertit automatiquement les saisies en [KEY: LETTRES MAJUSCULES] lors de l'enregistrement pour harmoniser l'annuaire et les étiquettes d'expédition.
                — [KEY: Prénom] : Mis en forme automatiquement avec une majuscule initiale sur chaque mot (ex : « jean-pierre » devient « Jean-Pierre »).
                — [KEY: Numéro de mobile] : TipTac filtre les caractères superflus pour ne conserver que les chiffres et formate la saisie par paires espacées (ex : [KEY: 06 12 34 56 78]). Un numéro incomplet ou supérieur à 10 chiffres bloque la validation avec une alerte explicite.
                — [KEY: Adresse e-mail] : L'adresse est passée en minuscules, nettoyée des espaces involontaires et contrôlée sur sa structure standard (présence de l'arobase et du nom de domaine).
                — [KEY: Règle de contact minimal] : Il est obligatoire de renseigner au moins une coordonnée exploitable ([KEY: Téléphone], [KEY: E-mail] ou [KEY: Adresse postale]) pour autoriser l'enregistrement d'une fiche.
                [CLEAR]

                [📸 crm_alerte_doublon_contact.jpg | left | md]
                [T]Détecteur de doublons en temps réel
                Pendant la frappe, le logiciel scrute la base locale et le réseau :
                Dès que vous saisissez un numéro de téléphone portable à 10 chiffres ou une adresse e-mail, un message d'alerte orange apparaît sous le champ si cette coordonnée est déjà rattachée à une fiche existante (ex : « Déjà utilisé par Martin Dupont »). Vous évitez ainsi de créer des fiches parasites par mégarde.
                [CLEAR]
                
                [📸 crm_suggestion_communes_insee.jpg | right | md]
                [T]Base Insee des communes et fonctionnement hors-ligne
                Pour fiabiliser les adresses postales et éliminer les erreurs d'orthographe :
                Dès que vous saisissez un [KEY: Code Postal] français à 5 chiffres, le champ [KEY: Ville / Commune] se transforme en un menu déroulant listant les communes officielles correspondantes.
                Grâce au dictionnaire national mis en cache localement lors de l'installation, ce système fonctionne de manière fluide et instantanée, **y compris si votre caisse est totalement coupée d'Internet**.
                [CLEAR]
                
                [T]Groupes de profils et Remise Fixe négociée
                Dans la section commerciale de la fiche, vous pouvez rattacher le client à une typologie spécifique : [KEY: Particulier Standard], [KEY: Client Privilège / VIP], [KEY: Comité d'Entreprise], [KEY: Revendeur professionnel] ou [KEY: Association].
                
                [ST][ICON: Percent | 14 | text-teal-600] Remise commerciale permanente :
                Le champ « Remise Fixe (%) » permet d'accorder un pourcentage de réduction automatique qui s'appliquera sur l'ensemble de ses futurs tickets de caisse.
                [WARNING]Protection par droits d'accès : La modification de ce taux est verrouillée et protégée par un cadenas. Seuls les collaborateurs disposant de la permission spécifique d'accorder des remises peuvent ajuster ce pourcentage.
                
                [T]Droit à l'oubli et Anonymisation légale (RGPD)
                Si un client réclame la suppression de ses données personnelles conformément aux dispositions du RGPD, cliquez sur le bouton [BTN: Anonymiser] en haut de sa fiche :
                Après confirmation, le système efface définitivement toutes ses données nominatives (nom, téléphone, e-mail, adresses) et les remplace par des identifiants anonymes. 
                L'historique des tickets et des règlements comptables reste quant à lui scellé et conservé en base de données, assurant une conformité fiscale irréprochable avec les normes NF525.
                `
        },
        {
            id: "dossier-achats-sav-kpis",
            title: "3. Dossier Client : Historique d'achats, duplicatas, SAV et statistiques",
            // 📸 crm_dossier_onglet_achats.jpg : Onglet « Achats » listant les tickets du client avec date, numéro, montant TTC et bouton d'accordéon.
            // 📸 crm_ticket_deplie_lignes.jpg : Ligne d'achat dépliée montrant les articles achetés, les remises accordées, le bouton « Reprendre » et les exports Facture/Duplicata.
            // 📸 crm_dossier_onglet_fidelite.jpg : Onglet « Fidélité » présentant les avoirs en cours à gauche et le tableau chronologique des mouvements de points à droite avec mention de l'origine (Ce Magasin, Site Web ou Autre Magasin).
            // 📸 crm_dossier_onglet_stats.jpg : Onglet « Synthèse » avec les 4 indicateurs graphiques : Chiffre d'Affaires cumulé, Panier Moyen, Nombre de visites et Dernière Visite.
            content:
                `
                Accessible d'un clic sur [BTN: Historique] depuis la fiche client, le Dossier Client consolide l'ensemble de ses interactions commerciales réparties en 3 onglets thématiques.
                
                [📸 crm_dossier_onglet_achats.jpg | lg]
                [T]Onglet 1 : Registre des Achats et Service Après-Vente (SAV)
                Ce panneau répertorie tous les tickets émis au nom du client avec un sélecteur de période ([BTN: 3 Mois], [BTN: 1 An] ou [BTN: Tout]) et une barre de recherche d'articles :
                — Cliquez sur une transaction pour dérouler l'intégralité de ses lignes : articles, quantités, remises appliquées et ventilation des modes de règlements utilisés.
                
                [📸 crm_ticket_deplie_lignes.jpg | right | md]
                [ST][ICON: Undo | 14 | text-teal-600] Reprise SAV au prix payé :
                En face de chaque article figure le bouton [BTN: Reprendre] si vous consulter l'historique d'achats depuis l'écran de caisse. 
                Si vous possédez l'autorisation de retour d'article, un simple clic réinjecte la ligne en négatif dans le panier de vente au prix exact payé à l'époque (en déduisant automatiquement la part de remise qui lui avait été accordée), évitant tout calcul manuel au comptoir.
                
                [ST][ICON: Printer | 14 | text-teal-600 ] Duplicatas et Factures :
                Le bas de chaque ticket déplié propose les boutons [BTN: Duplicata] (pour retirer le ticket de caisse thermique) et [BTN: Facture] (pour éditer un document A4 normé avec tableau de TVA complet).
                [CLEAR]
                
                [📸 crm_dossier_onglet_fidelite.jpg | lg]
                [T]Onglet 2 : Titres disponibles et Traçabilité des Mouvements
                L'onglet [BTN: Fidélité] détaille les droits financiers de l'acheteur en deux colonnes :
                — À gauche : La liste des [KEY: Bons d'achat] et [KEY: Avoirs Magasin] actuellement actifs avec leur solde restant en euros et leur date limite de validité.
                — À droite : Le journal chronologique de tous les mouvements de points de fidélité.
                
                [ST][ICON: Star | 14 | text-teal-600] Origine géographique des points :
                Chaque ligne d'acquisition ou de dépense de points porte un badge officiel indiquant son canal :
                — [KEY: Ce Magasin] (acquisition ou utilisation sur votre caisse physique locale).
                — [KEY: Site Web] (commande passée sur votre boutique e-commerce).
                — [KEY: Autre Magasin] (mouvement réalisé dans un autre point de vente de votre réseau).
                
                [📸 crm_dossier_onglet_stats.jpg | right | md]
                [T]Onglet 3 : Synthèse de Valeur Client
                Une vue synthétique mesure instantanément la rentabilité de ce profil :
                — [BTN: Chiffre d'Affaires] : Montant cumulé total dépensé en TTC depuis sa création.
                — [BTN: Panier Moyen] : Dépense moyenne constatée par passage en caisse.
                — [BTN: Passages Caisse] : Nombre total de transactions enregistrées.
                — [BTN: Dernière Visite] : Nombre de jours écoulés depuis son dernier achat (ex : « Il y a 12 j » ou « Aujourd'hui »).
                [CLEAR]
                `
        },
        {
            id: "fusion-fiches-doublons",
            title: "4. Nettoyage de la base : Fusion de fiches doublons en 3 étapes",
            // 📸 crm_fusion_etape1_cible.jpg : Étape 1 de sélection de la fiche principale à CONSERVER dans l'annuaire (carte cible).
            // 📸 crm_fusion_etape2_source.jpg : Étape 2 de sélection de la fiche doublon à ABSORBER et masquer.
            // 📸 crm_fusion_etape3_bilan.jpg : Écran de confirmation finale montrant le récapitulatif des deux profils, la flèche de transfert et le cumul des points.
            content:
                `
                Si un client a été créé en double par inadvertance au comptoir, vous pouvez réunir ses informations sans perdre son historique commercial via le bouton [BTN: Fusion] de l'annuaire.
                
                [📸 crm_fusion_etape3_bilan.jpg | lg]
                [T]Le protocole de fusion sécurisé en 3 étapes
                Le module guide l'opérateur pour éviter toute confusion entre les comptes :
                
                [ST][ICON: CheckCircle | 14 | text-teal-600 ] Étape 1 : Sélection de la Fiche Cible (Conservée) :
                Recherchez et sélectionnez le compte le plus complet et le mieux renseigné. Cette fiche restera visible et active dans votre annuaire.
                
                [ST][ICON: AlertTriangle | 14 | text-teal-600 ] Étape 2 : Sélection de la Fiche Source (Absorbée) :
                Recherchez la fiche doublon à faire disparaître. TipTac retire automatiquement la fiche cible des résultats pour empêcher toute sélection identique par erreur.
                
                [ST][ICON: Merge | 14 | text-teal-600 ] Étape 3 : Bilan de transfert et Confirmation :
                L'écran affiche les deux profils face à face :
                — En haut en vert : La fiche conservée avec son solde de points actuel.
                — En bas en rouge : La fiche absorbée avec le nombre de points qui vont être transférés.
                
                [T]Conséquences du traitement de fusion
                Dès que vous cliquez sur [BTN: Confirmer la fusion] :
                1. L'intégralité de l'historique d'achats, des factures et des avoirs de la fiche doublon est réattribuée au compte principal.
                2. Les soldes de points de fidélité sont mathématiquement additionnés.
                3. La fiche absorbée est définitivement masquée de l'annuaire pour ne plus polluer les recherches en caisse.
                `
        },
        {
            id: "moteur-regles-fidelite",
            title: "5. Moteur de Fidélité : Règles d'acquisition, récompenses et exclusions",
            // 📸 crm_fidelite_parametres_globaux.jpg : Écran de configuration de la fidélité avec les champs Acquisition (1€ = X pts), Seuil (X pts = X €) et Durée de validité.
            // 📸 crm_fidelite_modes_recompenses.jpg : Menu déroulant des 3 modes d'exploitation : Bon Imprimé, Bon Virtuel ou Cagnotte Euro Libre.
            // 📸 crm_fidelite_exclusion_remises.jpg : Interrupteur d'exclusion des articles en promotion pour protéger la rentabilité commerciale.
            content:
                `
                Le moteur de fidélité récompense automatiquement les achats de vos clients selon des règles définies dans la section Paramètres Magasin.
                
                L'activation du moteur de fidélité requiert une formule d'abonnement adaptée [PLAN: PLAN CONNECT] ou supérieur. En mode réseau multi-magasins, ces règles peuvent être pilotées de manière centralisée par le siège.
                
                [📸 crm_fidelite_parametres_globaux.jpg | lg]
                [T]Barème d'acquisition et conversion financière
                Trois paramètres fondamentaux régissent le calcul :
                [ST][ICON: Star | 14 | text-teal-600 ] Taux d'acquisition :
                Définissez la valeur attribuée aux achats (par défaut [KEY: 1 € = 1 Pt]).
                [ST][ICON: Gift | 14 | text-teal-600 ] Seuil de déclenchement du palier :
                Indiquez le volume de points requis pour débloquer l'avantage ainsi que sa contre-valeur monétaire (par exemple : [KEY: Dès 200 pts = 5,00 €]).
                [ST][ICON: Calendar | 14 | text-teal-600 ] Validité des avantages :
                Fixez la durée de vie des bons émis (par exemple [KEY: 6 mois]). Les titres non consommés après cette échéance seront automatiquement révoqués par le système.
                
                [📸 crm_fidelite_modes_recompenses.jpg | right | md]
                [T]Les 3 modes de distribution de la récompense
                Choisissez la méthode la plus adaptée à votre clientèle :
                [ST]1. Impression d'un Bon d'Achat :
                À la clôture de la vente où le palier est franchi, la caisse imprime automatiquement un bon thermique 80 mm scannable doté d'un code-barres unique et déduit les 200 points du compte du client.
                [ST]2. Bon Virtuel Immédiat :
                Dès que le seuil est atteint, un bouton tactile [BTN: Palier Fidélité] s'active sur l'écran de paiement et permet de déduire d'un clic la remise (ex : -5,00 €) directement sur le total du panier sans émettre de papier.
                [ST]3. Cagnotte Euro Libre :
                Chaque point acquis est converti en valeur financière stockée sur le profil du client, lui permettant de déduire la somme de son choix au centime près lors de ses passages en caisse.
                [CLEAR]
                
                [T]Prime de bienvenue et protection des marges
                [ST][ICON: Plus | 14 | text-teal-600] Prime de Bienvenue :
                Renseignez un nombre de points crédités d'office lors de la création d'un nouveau profil client (par exemple 20 points offerts) pour encourager son adhésion.
                
                [📸 crm_fidelite_exclusion_remises.jpg | left | sm]
                [ST][ICON: Minus | 14 | text-teal-600] Règle d'exclusion des articles remisés :
                Activez l'interrupteur « Exclure les articles déjà remisés » pour protéger vos marges commerciales. 
                Dès qu'un article bénéficie d'une promotion ou d'une remise manuelle, le montant correspondant est déduit de l'assiette de calcul et ne génère aucun point de fidélité.
                Vous pouvez également exclure un article du programme de fidélité depuis sa fiche en cochant la case [BTN: Exclure de la fidélité].
                [CLEAR]
                `
        },
        {
            id: "ajustement-points-conformite",
            title: "6. Ajustement manuel des points et traçabilité NF525",
            // 📸 crm_ajustement_points_modal.jpg : Modale de régularisation manuelle avec choix Créditer/Déduire, montant de points et motif obligatoire.
            // 📸 crm_bouton_ajustement_lock.jpg : Cadenas de verrouillage sur le bouton d'ajustement pour les utilisateurs non autorisés.
            content:
                `
                Pour des raisons de rigueur comptable et de conformité fiscale, la distribution et la correction manuelle de monnaie virtuelle sont strictement encadrées.
                
                Un profil [PERM: Manager] ou [PERM: Admin] disposant de la permission spécifique d'ajustement est obligatoire pour modifier le solde de points d'un client.
                
                [📸 crm_ajustement_points_modal.jpg | right | md]
                [T]Procédure de régularisation manuelle
                Depuis la fiche client, cliquez sur le bouton de crayon à côté de la case des points pour ouvrir la fenêtre de régularisation :
                1. Choisissez la nature de l'opération : [BTN: Créditer] (ajout de points) ou [BTN: Déduire] (retrait de points).
                2. Tapez le nombre précis de points à impacter.
                3. Sélectionnez obligatoirement un [KEY: Motif de la régularisation] dans la liste sécurisée :
                — « Oubli de carte / Ticket précédent ».
                — « Geste commercial client ».
                — « Régularisation / Erreur système ».
                — « Correction manuelle Superviseur ».
                [CLEAR]
                
                [WARNING]Journal d'audit inaltérable : Il est strictement impossible d'ajuster des points sans consigner de motif. Chaque opération est horodatée, signée avec l'identifiant du responsable et consignée dans le registre d'audit de sécurité NF525.
                `
        },
        {
            id: "import-smart-sync-excel",
            title: "7. Importation Smart Sync et Sauvegarde de la Base Clients",
            // 📸 crm_smartsync_upload_fichier.jpg : Écran de dépôt du fichier Excel (.xlsx, .csv) avec indicateur de compatibilité Smart Sync.
            // 📸 crm_smartsync_mapping_colonnes.jpg : Grille d'association automatique (auto-mapping) faisant correspondre les en-têtes du fichier avec les champs du logiciel.
            // 📸 crm_smartsync_preview_tableau.jpg : Tableau de prévisualisation des données avant injection réelle dans la base de données.
            content:
                `
                Le module d'importation permet de charger un fichier client issu d'un ancien système informatique ou d'une grille marketing sans corrompre les données existantes.
                
                [📸 crm_smartsync_upload_fichier.jpg | lg]
                [T]Importation intelligente par fichier plat (.xlsx, .csv)
                Cliquez sur le module d'import et déposez votre tableau tableur :
                Le moteur Smart Sync examine la première ligne du document et associe automatiquement vos colonnes aux champs TipTac (Nom, Prénom, Société, SIRET, Téléphone, E-mail, Rue, Code Postal, Commune, Points, Code-barres...). 
                Vous pouvez ajuster ou ignorer des colonnes individuellement dans les menus déroulants de correspondance.
                
                [📸 crm_smartsync_mapping_colonnes.jpg | right | md]
                [T]Algorithme de comparaison anti-doublon
                Contrairement à un import classique qui écrase les fiches à l'aveugle, le moteur compare chaque ligne avec votre base locale et Cloud :
                — Si la fiche existe déjà (reconnue par son identifiant unique ou par la concordance exacte de son numéro de mobile ou de son adresse e-mail), le système met à jour uniquement les informations modifiées sans créer de doublon et sans altérer l'historique d'achat.
                — Si le profil est inconnu, une nouvelle fiche propre est créée.
                — Les lignes rigoureusement identiques sont automatiquement ignorées pour accélérer le traitement.
                [CLEAR]
                
                [T]Sauvegarde et Exportation complète vers Excel
                Depuis le module de données, vous pouvez télécharger une extraction complète de votre annuaire au format tableur comprenant l'intégralité des attributs (coordonnées, soldes de fidélité, opt-in marketing et dates de naissance) pour réaliser des analyses ou des sauvegardes d'entreprise.
                `
        }
    ]
};