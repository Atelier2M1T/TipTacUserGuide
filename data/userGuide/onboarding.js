export default {
    id: "ONBOARDING",
    title: "Démarrage, Licence & Réseau",
    category: "TipTacCaisse",
    iconName: "Server",
    color: "text-teal-600",
    articles: [
        {
            id: "activation-licence-materielle",
            title: "1. Activation de la licence matérielle de la machine",
            // 📸 onboarding_ecran_licence_activation.jpg : Écran blanc d'activation requise affichant l'identifiant machine (HWID) et le champ de saisie de la clé à 16 caractères.
            // 📸 onboarding_erreur_cle_invalide.jpg : Message d'erreur rouge clignotant en cas de clé de licence incorrecte.
            content:
                `
                Lors de la toute première installation de TipTac sur un ordinateur, ou suite au formatage de la machine, le logiciel déclenche une vérification de sécurité matérielle avant d'autoriser l'accès aux données.
                
                [📸 onboarding_ecran_licence_activation.jpg | lg]
                [T]Identifiant matériel unique (HWID)
                L'écran d'« Activation requise » affiche un code alphanumérique complexe au centre de la page :
                Ce code est l'[KEY: Identifiant de l'ordinateur]. Il est généré de manière cryptographique à partir des composants physiques de votre machine (carte mère, disque dur). Cette empreinte garantit la stricte inaltérabilité des transactions en liant indissociablement vos tickets de caisse à cet ordinateur physique (conformité NF525).
                Transmettez cet identifiant à votre revendeur ou au support TipTac pour obtenir votre licence d'utilisation.
                
                [📸 onboarding_erreur_cle_invalide.jpg | right | sm]
                [T]Saisie de la clé d'activation
                — Saisissez votre clé de licence de 16 caractères (au format [KEY: XXXX-XXXX-XXXX-XXXX]) dans le champ de saisie. Le système accepte les lettres minuscules et majuscules, et place les tirets de séparation automatiquement.
                — Cliquez sur [BTN: Activer le logiciel] (ou appuyez sur la touche Entrée).
                
                [WARNING]Protection anti-clonage : La clé d'activation est cryptographiquement liée au matériel. Si vous tentez de saisir la clé d'une autre machine, ou en cas de faute de frappe, un message d'alerte rouge clignotant bloquera l'accès.
                [CLEAR]
                `
        },
        {
            id: "configuration-reseau-master-slave",
            title: "2. Configuration de l'architecture réseau (Poste Principal vs Secondaire)",
            // 📸 onboarding_choix_role_reseau.jpg : Écran de sélection du rôle avec les deux gros boutons : Poste Principal (icône serveur verte) et Caisse Secondaire (icône écran bleue).
            // 📸 onboarding_master_liaison_cloud.jpg : Formulaire du Poste Principal demandant l'e-mail et le mot de passe du compte TipTac Cloud.
            // 📸 onboarding_slave_saisie_ip.jpg : Formulaire de la Caisse Secondaire demandant la saisie de l'adresse IP locale du serveur.
            content:
                `
                Une fois la machine activée, vous devez définir son comportement sur votre réseau local.
                
                [📸 onboarding_choix_role_reseau.jpg | lg]
                [T]Définir le rôle de l'ordinateur
                L'écran d'initialisation vous propose deux boutons :
                
                [ST][ICON: Server | 14 | text-teal-600] Option 1 : Poste Principal (Serveur) :
                Choisissez ce rôle s'il s'agit de la caisse centrale de la boutique. 
                Cet ordinateur va créer et héberger la base de données locale du magasin et piloter les synchronisations avec les serveurs TipTac Cloud.
                — Renseignez l'[KEY: Email Administrateur] et le [KEY: Mot de passe] rattachés à votre abonnement TipTac Cloud.
                — Le système vérifiera vos droits et téléchargera la configuration complète du magasin.
                
                [ST][ICON: Monitor | 14 | text-blue-600] Option 2 : Caisse Secondaire (Client) :
                Choisissez ce rôle s'il s'agit d'une caisse d'appoint, d'une tablette vendeur en rayon ou d'un poste de préparation en réserve. 
                Cette machine ne stockera aucune donnée : elle va s'interconnecter en direct au Poste Principal de votre boutique via le réseau Wi-Fi ou Ethernet.
                — Renseignez l'[KEY: Adresse IP du Poste Principal] (par exemple [KEY: 192.168.1.50]).
                — Assurez-vous que le Poste Principal est bien allumé et que le port de communication est autorisé dans le pare-feu Windows.
                
                [TIP]Modification ultérieure : En cas d'erreur de saisie d'IP ou de changement de box Internet, vous pourrez corriger l'adresse réseau de la caisse secondaire directement depuis le sous-menu [LINK: ADMINISTRATION_LOGICIEL#parc-informatique-slots-materiel | Parc Informatique] sans tout réinstaller.
                `
        },
        {
            id: "assignation-parc-materiel-slots",
            title: "3. Association au parc informatique (Choix de l'emplacement)",
            // 📸 onboarding_choix_slot_libre.jpg : Liste des emplacements de caisse disponibles (Caisse Accueil, Tablette Rayon) avec le bouton d'assignation.
            // 📸 onboarding_erreur_quota_parc.jpg : Alerte de dépassement de parc informatique indiquant qu'aucun slot physique n'est libre.
            // 📸 onboarding_bouton_reinitialisation_danger.jpg : Bouton rouge « Changer de Serveur / Réinitialiser » au bas de l'écran.
            content:
                `
                Après la validation du réseau, la machine interroge la liste des terminaux déclarés sur votre compte pour prendre l'identité de son emplacement (Slot).
                
                [📸 onboarding_choix_slot_libre.jpg | lg]
                [T]Sélection du poste de travail
                L'écran affiche la liste des terminaux créés depuis l'administration du magasin.
                — Les postes déjà assignés à d'autres ordinateurs sont masqués.
                — Le système exclut également les automates virtuels réservés aux traitements e-commerce en arrière-plan.
                — Cliquez sur la ligne correspondant à ce nouveau matériel (ex : « Caisse Accueil » ou « Tablette Extérieure ») pour associer définitivement son identifiant matériel à cette fonction.
                
                [📸 onboarding_erreur_quota_parc.jpg | right | md]
                [T]Dépassement du nombre de caisses autorisées
                Le volume de terminaux physiques connectables en magasin est strictement encadré par votre formule d'abonnement.
                Si tous vos emplacements sont déjà occupés, un encadré rouge indique « Aucun emplacement libre ».
                — Pour résoudre ce blocage, connectez-vous au portail propriétaire TipTac depuis un autre poste pour ajuster votre abonnement et débloquer une caisse supplémentaire, ou révoquez l'accès d'un ancien ordinateur hors service.
                [CLEAR]
                
                [📸 onboarding_bouton_reinitialisation_danger.jpg | left | sm]
                [T]Procédure de réinitialisation d'urgence
                Si vous avez sélectionné le mauvais magasin lors de l'authentification ou si la connexion réseau locale échoue, cliquez sur le bouton rouge en pied de page [BTN: Changer de Serveur / Réinitialiser].
                Cette action purge l'ensemble des mémorisations réseau de l'appareil et vous ramène à la toute première étape de sélection du rôle.
                [CLEAR]
                `
        },
        {
            id: "modeles-metiers-catalogue-vierge",
            title: "4. Initialisation de la base (Modèles métiers et catalogue vierge)",
            // 📸 onboarding_grille_modeles_metiers.jpg : Grille colorée des 8 tuiles de modèles métiers (Jardinerie, Boulangerie, Épicerie, Mode, etc.) au premier lancement du serveur.
            content:
                `
                S'il s'agit de la toute première installation du Poste Principal et que votre base de données locale est entièrement vide, TipTac vous propose d'accélérer le paramétrage.
                
                [📸 onboarding_grille_modeles_metiers.jpg | lg]
                [T]Application d'un modèle d'assortiment préconfiguré
                Pour éviter d'avoir à créer chaque rayon et chaque catégorie manuellement, cliquez sur la tuile correspondant à votre secteur d'activité :
                — [KEY: Jardinerie & Fleurs] : Intègre 15 rayons botaniques, contenants et outillages.
                — [KEY: Boulangerie & Snacking] : 8 rayons (Pains, Viennoiseries, Pâtisseries, Formules midi).
                — [KEY: Épicerie & Caviste] : 8 rayons alimentaires et boissons.
                — [KEY: Mode & Accessoires] : 7 rayons pour le prêt-à-porter.
                — [KEY: Coiffure & Beauté] : 5 rayons (Prestations, Vente produits).
                — [KEY: Vapeshop & CBD] : 6 rayons techniques.
                — [KEY: Librairie & Presse] : 7 rayons (Littérature, Papeterie).
                
                Dès la sélection, le logiciel génère en coulisses l'arborescence complète, pré-paramètre les taux de TVA adaptés à chaque catégorie, organise la disposition du clavier tactile et redémarre instantanément.
                
                [T]Démarrage sur une base 100 % vierge
                Si votre métier est très spécifique ou si vous importez votre propre fichier Excel complet depuis le module d'importation, cliquez sur le bouton neutre [BTN: Base Vierge]. Le logiciel s'ouvrira avec un catalogue et un clavier tactile totalement vides que vous pourrez construire sur-mesure.
                `
        },
        {
            id: "expiration-abonnement-blocage-caisse",
            title: "5. Expiration de l'abonnement et sécurisation comptable",
            // 📸 onboarding_alerte_fin_abonnement.jpg : Bandeau orangé pulsant dans le pied de page du Hub indiquant les jours restants avant expiration de l'abonnement.
            // 📸 onboarding_ecran_verrouillage_expire.jpg : Écran rouge de verrouillage d'abonnement expiré avec les boutons Quitter et Ouvrir l'Admin.
            content:
                `
                Pour s'assurer que vos mises à jour logicielles de sécurité NF525 soient toujours appliquées et que les sauvegardes Cloud restent garanties, l'accès à la caisse tactile est soumis à la validité de votre abonnement.
                
                [📸 onboarding_alerte_fin_abonnement.jpg | left | sm]
                [T]Alerte préventive de fin de période
                À l'approche de la date limite de votre abonnement (ou de la date de renouvellement annuel de licence perpétuelle), un encadré orangé clignotant s'affiche dans le bandeau inférieur de l'écran d'accueil (ex : « Abo. expire dans 12 jours »). Ce rappel permet de régulariser la situation en ligne sans précipitation.
                [CLEAR]
                
                [📸 onboarding_ecran_verrouillage_expire.jpg | lg]
                [T]Verrouillage de l'encaissement et des commandes Web
                Si la date d'échéance est franchie sans régularisation, le logiciel restreint immédiatement ses fonctionnalités :
                L'accès à l'écran de caisse tactile et au traitement des expéditions web est formellement bloqué. Un écran de suspension remplace l'interface d'encaissement et indique la date de fin de droit contractuel.
                
                [WARNING]Garantie légale d'accès à la comptabilité :
                Conformément à la législation fiscale française, la suspension d'un abonnement ne prend JAMAIS vos données historiques en otage.
                Même si l'encaissement est bloqué, les boutons de l'écran d'expiration vous permettent de :
                1. Consulter librement tous vos historiques de vente et l'annuaire CRM de l'entreprise.
                2. Générer et télécharger les clôtures journalières Z et les liasses mensuelles NF525.
                3. Exporter l'intégralité du Grand Livre et des Fichiers d'Écritures Comptables (FEC) sans aucune contrainte de temps pour honorer vos obligations auprès de l'administration fiscale et de votre cabinet comptable.
                `
        }
    ]
};