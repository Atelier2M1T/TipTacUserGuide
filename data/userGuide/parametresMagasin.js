export default {
    id: "PARAMETRES_MAGASIN",
    title: "Configuration Magasin & Impressions",
    category: "TipTacCaisse",
    iconName: "Sliders",
    color: "text-teal-700",
    articles: [
        {
            id: "identite-horaires-visuels",
            title: "1. Identité commerciale, horaires d'ouverture et logos",
            // 📸 config_identite_coordonnees.jpg : Formulaire d'identité du point de vente montrant l'enseigne, la dénomination, l'adresse postale et les contacts.
            // 📸 config_reseaux_sociaux.jpg : Grille des raccourcis réseaux sociaux (Facebook, Instagram, WhatsApp, TikTok, Pinterest, Messenger).
            // 📸 config_logos_ticket_ecran_client.jpg : Zone de dépôt des deux logos distincts (Logo Ticket thermique/Facture et Logo Écran Client TV).
            // 📸 config_planning_semaine_fermetures.jpg : Éditeur des plages horaires de la semaine type avec bascule continu/coupure et module des jours fériés/exceptions.
            content:
                `
                Le module « Identité & Horaires » définit la vitrine institutionnelle de votre commerce. Les données saisies alimentent automatiquement vos en-têtes de tickets thermiques, devis, factures A4, e-mails transactionnels et l'écran secondaire orienté vers le client.
                
                Un profil [PERM: Manager] ou [PERM: Admin] est requis pour modifier les coordonnées et les horaires du point de vente.
                
                [📸 config_identite_coordonnees.jpg | lg]
                [T]Enseigne, dénomination et adresse postale
                La colonne de gauche rassemble les informations publiques de votre établissement :
                — [KEY: Nom commercial / Enseigne] : Le nom public de votre magasin (ex : « Ma Super Boutique »). C'est lui qui apparaît en très gros caractères au sommet des reçus de caisse.
                — [KEY: Forme juridique & Dénomination] : Votre statut légal (ex : SAS, SARL) et le nom officiel de votre société.
                — [KEY: Adresse (N° et Voie), Code Postal et Ville] : Adresse physique de votre magasin. Le logiciel assure automatiquement l'assemblage et la disposition sur plusieurs lignes pour respecter les contraintes de largeur des reçus thermiques et l'en-tête normé des factures.
                
                [📸 config_reseaux_sociaux.jpg | right | md]
                [T]Contacts et réseaux sociaux
                Renseignez vos coordonnées directes pour faciliter la communication client :
                — [KEY: Téléphone] et [KEY: E-mail de contact] : Imprimés sur vos justificatifs de vente et intégrés dans les e-mails de notification.
                — [KEY: Liens réseaux sociaux] : Renseignez les adresses de vos pages [KEY: Facebook], [KEY: Instagram], [KEY: WhatsApp], [KEY: TikTok], [KEY: Pinterest] et [KEY: Messenger]. Ces liens s'injectent automatiquement dans le pied de page de vos e-mails de commande et devis dématérialisés.
                [CLEAR]
                
                [📸 config_logos_ticket_ecran_client.jpg | left | md]
                [T]Gestion différenciée des logos
                TipTac sépare judicieusement votre identité graphique selon le support de diffusion :
                [ST][ICON: ImageIcon | 14 | text-teal-600] 1. Logo Ticket & Facture (Impression) :
                Destiné aux imprimantes thermiques de caisse et aux documents A4. Importez une image (format JPEG ou PNG) : le système la redimensionne automatiquement à 350 pixels de large pour garantir une netteté optimale sans ralentir l'impression.
                
                [ST][ICON: Monitor | 14 | text-teal-600] 2. Logo Écran Client (TV / Second Écran) :
                Réservé au moniteur orienté vers l'acheteur. Déposez une image au format PNG avec fond transparent (optimisée en 800 pixels de large) pour un rendu éclatant et contrasté sur le thème sombre de l'écran client.
                [CLEAR]
                
                [📸 config_planning_semaine_fermetures.jpg | lg]
                [T]Planning d'ouverture hebdomadaire et jours exceptionnels
                La colonne de droite orchestre vos disponibilités commerciales pour informer vos clients et cadencer les commandes Web :
                [ST][ICON: Clock | 14 | text-teal-600] Semaine type (Lundi au Dimanche) :
                Cochez les jours d'ouverture de votre commerce. Pour chaque jour actif, choisissez votre formule de travail :
                — [KEY: Journée continue] : Renseignez l'heure d'ouverture et de fermeture continue (ex : 09:30 à 19:00).
                — [KEY: Coupure (Midi)] : Configurez deux plages distinctes (ex : 09:00 à 12:30 et 14:00 à 19:00). Les jours décochés portent automatiquement la mention « Fermé ».
                
                [ST][ICON: Calendar | 14 | text-teal-600] Jours fériés et fermetures exceptionnelles :
                Cliquez sur [BTN: + Ajouter un jour spécifique] pour anticiper les aléas de l'année :
                — Sélectionnez une date dans le calendrier et saisissez un intitulé explicite (ex : « 1er Mai », « Fêtes de Noël »).
                — Cochez [KEY: Magasin Fermé] pour suspendre les retraits, ou personnalisez les horaires de ce jour s'il s'agit d'une ouverture dérogatoire (en continu ou avec coupure).
                
                [TIP]Bouton de sauvegarde réactif : Dès qu'une modification est apportée, le bouton flottant en haut à droite s'illumine en vert foncé avec la mention [BTN: Enregistrer les modifications]. Cliquez dessus pour appliquer vos changements instantanément sur l'ensemble du système.
                `
        },
        {
            id: "mentions-legales-conformite-nf525",
            title: "2. Mentions légales obligatoires et conformité fiscale NF525",
            // 📸 config_mentions_legales_champs.jpg : Formulaire des mentions légales obligatoires avec encadrés de validation verte et astérisques rouges.
            // 📸 config_alerte_bloquante_siret.jpg : Bandeau rouge d'alerte en haut d'écran bloquant l'accès au Terminal Caisse si le SIRET ou l'adresse est absent.
            content:
                `
                Conformément aux exigences fiscales françaises et à la réglementation NF525 relative aux systèmes d'encaissement inaltérables, tout commerce doit obligatoirement déclarer ses mentions d'entreprise avant de débuter ses encaissements.
                
                L'accès à ce module est strictement réservé au profil [PERM: Admin].
                
                [📸 config_mentions_legales_champs.jpg | lg]
                [T]Les 8 mentions légales d'entreprise
                Tous les champs marqués d'un astérisque rouge sont obligatoires pour garantir la validité de vos tickets et factures :
                — [KEY: Forme juridique] : Statut de votre structure (SAS, SARL, EURL, Auto-entreprise...).
                — [KEY: Dénomination] : Nom officiel de la société tel qu'enregistré au registre du commerce.
                — [KEY: N° SIRET] : Identifiant d'établissement comportant obligatoirement [KEY: 14 chiffres].
                — [KEY: N° TVA Intracommunautaire] : Format européen officiel débutant par « FR » suivi de 11 caractères alphanumériques. Les lettres sont automatiquement converties en majuscules lors de la saisie.
                — [KEY: Code NAF / APE] : Code d'activité principale à 5 caractères (ex : 4776Z).
                — [KEY: Capital Social] : Montant du capital social en euros (ex : « 10 000 € »).
                — [KEY: Numéro RCS (SIREN)] : Numéro d'immatriculation composé obligatoirement de [KEY: 9 chiffres].
                — [KEY: Ville du Greffe] : Ville du tribunal de commerce où l'entreprise est immatriculée (ex : « PARIS » ou « LYON »).
                
                [T]Contrôle automatique et auto-formatage à la frappe
                Pour éviter toute coquille administrative, TipTac applique des filtres stricts en temps réel :
                — Les caractères indésirables ou les espaces sont automatiquement purgés dans les numéros SIRET et RCS.
                — Si un format est incomplet ou invalide, le champ s'entoure d'un liseré rouge avec un message explicite (ex : « Le SIRET doit contenir exactement 14 chiffres »), et le bouton de sauvegarde reste désactivé jusqu'à correction.
                
                [📸 config_alerte_bloquante_siret.jpg | right | sm]
                [WARNING]Barrière de sécurité légale : Si le SIRET, le nom commercial ou l'adresse du magasin ne sont pas renseignés, TipTac bloque totalement l'ouverture du Terminal Caisse et du module des Commandes Web. Un bandeau d'alerte rouge s'affiche sur le Hub pour imposer la régularisation de vos coordonnées d'entreprise.
                [CLEAR]
                `
        },
        {
            id: "parc-informatique-slots-materiel",
            title: "3. Parc informatique, licences multi-caisses et slots matériels",
            // 📸 config_parc_liste_postes_slots.jpg : Liste des slots matériels disponibles avec indicateurs de slot Serveur doré, Postes secondaires verts et Emplacements libres.
            // 📸 config_parc_slot_edition.jpg : Formulaire de paramétrage d'un poste avec son nom d'affichage, son HWID inaltérable et la configuration réseau IP.
            // 📸 config_parc_upsell_extra_caisses.jpg : Encart invitant à ajuster l'abonnement en ligne pour débloquer des slots de caisses supplémentaires.
            content:
                `
                Le module « Parc Informatique » répertorie et supervise l'ensemble des ordinateurs, tablettes et terminaux autorisés à fonctionner dans votre point de vente.
                
                L'accès à la gestion du parc informatique requiert le rôle [PERM: Admin].
                
                [📸 config_parc_liste_postes_slots.jpg | lg]
                [T]Contrôle des emplacements (Slots) et quotas d'abonnement
                Le nombre de terminaux physiques connectables en magasin est strictement encadré par votre formule TipTac :
                — Chaque poste physique occupe un [KEY: Slot] (emplacement) numéroté.
                — Le badge supérieur indique en permanence le ratio de votre équipement (ex : « 2 / 3 Terminaux Actifs »).
                — [KEY: Slot n°1 (Serveur / Principal)] : Identifie la machine centrale qui héberge la base de données locale du magasin. Ce poste porte un badge couleur ambre « Serveur ».
                — [KEY: Emplacements Libres] : Si votre forfait comprend des postes supplémentaires non encore appareillés, ils apparaissent en pointillé avec la mention « Emplacement Libre - En attente de connexion matérielle ».
                — [KEY: Automate Web (Slot 99)] : Slot technique virtuel non facturé, exclusivement dédié à l'enregistrement automatique des commandes e-commerce payées en ligne.
                
                [📸 config_parc_slot_edition.jpg | right | md]
                [T]Identifiant matériel inaltérable (HWID)
                Lors du premier démarrage d'une machine, TipTac lie de façon cryptographique son identifiant matériel unique (HWID) à l'emplacement sélectionné :
                Ce code est strictement figé en mémoire et apparaît verrouillé en gris. Cette liaison garantit la conformité fiscale NF525 en certifiant qu'aucun poste pirate ne peut émettre de tickets sous l'identité d'une autre machine.
                [CLEAR]
                
                [T]Changement d'adresse IP du Serveur (Poste Secondaire)
                Si vous configurez une caisse secondaire et que l'adresse réseau de votre poste serveur principal a changé (ex : passage de 192.168.1.50 à 192.168.1.60) :
                — Le formulaire du poste local affiche un bloc [KEY: Connexion au Serveur].
                — Tapez la nouvelle adresse IP locale du serveur principal et cliquez sur [BTN: Appliquer].
                — TipTac reconfigure immédiatement la passerelle réseau locale et redémarre pour reconnecter la caisse à la base principale sans réinstallation.
                
                [T]Remplacement d'ordinateur et révocation de poste
                En cas de panne d'un ordinateur, de changement de moniteur tactile ou de mise au rebut d'une tablette secondaire :
                Cliquez sur le bouton rouge [BTN: Révoquer ce terminal] en bas du formulaire. Après confirmation, le slot matériel est immédiatement libéré : vous pouvez alors installer votre nouveau terminal et l'associer à cet emplacement disponible lors du premier démarrage.
                [WARNING]Protection du Poste Serveur : Le poste n°1 (Serveur principal) ne peut pas être révoqué depuis cette interface afin d'éviter toute rupture de service sur la base de données.
                
                [📸 config_parc_upsell_extra_caisses.jpg | left | sm]
                [T]Ajout de caisses supplémentaires
                Si vous avez besoin d'une tablette de vente supplémentaire pour les périodes de forte affluence, cliquez sur [BTN: Gérer mon Abonnement (Stripe)] : vous pouvez ajuster votre parc en quelques secondes pour débloquer immédiatement de nouveaux emplacements.
                [CLEAR]
                `
        },
        {
            id: "imprimantes-tickets-escpos-pilotes",
            title: "4. Imprimantes thermiques de caisse, formats et moteur ESC/POS",
            // 📸 config_tickets_modes_rendu.jpg : Sélection des 3 modes de rendu du ticket (HTML Standard, HTML Expert et ESC/POS Brut).
            // 📸 config_tickets_simulateur_direct.jpg : Simulateur de ticket thermique en direct avec découpe zig-zag, mentions obligatoires, QR code et code-barres.
            // 📸 config_tickets_reglages_expert.jpg : Panneau des réglages géométriques avancés (polices, marges latérales, interligne compact/aéré, largeur rouleau).
            // 📸 config_parc_assignation_imprimante.jpg : Section du parc informatique configurant le pilote, le type de connexion (USB / Réseau IP) et la largeur de papier (80 mm / 58 mm).
            content:
                `
                TipTac intègre un moteur d'impression thermique tout-terrain capable de piloter n'importe quelle imprimante de reçus du marché (Epson, Star, Citizen, Munbyn ou imprimantes génériques compatibles).
                
                La configuration se partage entre le design global du ticket (menu « Tickets & Impression ») et l'assignation du matériel physique propre à chaque machine (menu « Parc Informatique »).
                
                [📸 config_tickets_modes_rendu.jpg | lg]
                [T]Les 3 modes de rendu d'impression thermique
                Selon les caractéristiques techniques de votre matériel de caisse, trois moteurs de sortie sont proposés :
                [ST]1. HTML Standard (Epson / Universel) :
                Le mode par défaut le plus polyvalent. Le système s'appuie sur le gestionnaire d'impression standard de votre ordinateur pour imprimer les textes et visuels avec une parfaite régularité.
                
                [ST]2. HTML Expert (Personnalisation avancée) :
                Débloque un panneau de réglages fins pour ajuster la géométrie exacte du reçu :
                — [KEY: Police d'écriture] : Monospace (standard), Sans-Serif, Courier New, Tahoma ou Arial.
                — [KEY: Taille globale] : De 9 px (économique) jusqu'à 13 px (très grand).
                — [KEY: Largeur d'impression] : Adaptée à votre rouleau (64 mm, 72 mm standard 80 mm, 76 mm ou pleine largeur 80 mm).
                — [KEY: Marges CSS et Interligne] : Ajustez le retrait latéral et choisissez un interligne [KEY: Compact] (économise le papier) ou [KEY: Aéré] (confort de lecture).
                
                [ST]3. ESC/POS Brut (Mode Professionnel Haute Vitesse) :
                Le moteur natif le plus performant. Les commandes binaires sont télétransmises directement au micro-logiciel de l'imprimante sans passer par les fenêtres de dialogue Windows : la sortie papier est instantanée, le noir est profond et la coupe automatique intervient dès le dernier caractère imprimé.
                
                [📸 config_tickets_simulateur_direct.jpg | right | md]
                [T]Simulateur en direct et contenu du ticket
                La partie droite de l'écran projette en temps réel le rendu physique exact de votre futur ticket :
                — [KEY: Imprimer le logo en en-tête] : Cochez cette option pour remplacer le nom de votre enseigne par votre visuel graphique (disponible en mode HTML standard et expert).
                — [KEY: Message de bas de ticket] : Saisissez un mot de remerciement, l'annonce d'une opération à venir ou vos consignes de retour (ex : « Merci de votre visite ! Les échanges sont acceptés sous 15 jours sur présentation de ce reçu »). Utilisez simplement la touche Entrée pour composer vos sauts de ligne.
                — Cliquez sur [BTN: Tester l'impression] pour lancer un ticket d'essai immédiat sur votre imprimante et valider l'alignement de vos textes.
                [CLEAR]
                
                [📸 config_parc_assignation_imprimante.jpg | left | md]
                [T]Assignation matérielle par poste de travail
                Dans l'onglet [KEY: Parc Informatique], sélectionnez votre terminal pour configurer son imprimante dédiée :
                — [KEY: Type de port] : Choisissez entre [KEY: USB (Nom Windows)] pour une imprimante branchée en local par câble, ou [KEY: Réseau (IP)] pour une imprimante partagée branchée sur votre box ou routeur Ethernet (saisir son adresse IP, ex : 192.168.1.50).
                — [KEY: Marque du matériel] : Sélectionnez [KEY: Epson / Générique] ou [KEY: Star Micronics].
                — [KEY: Largeur du rouleau] : Sélectionnez [KEY: 80 mm] (standard comptoir) ou [KEY: 58 mm] (petits terminaux compacts).
                — [KEY: Page de code européenne] : Préréglée sur la page 16 (0x10) pour garantir l'impression irréprochable de tous les caractères accentués français (é, è, à, ç, €) sans altération.
                [CLEAR]
                
                [T]Anatomie légale et technique des reçus imprimés
                Chaque ticket de caisse imprimé intègre automatiquement l'ensemble des obligations NF525 :
                — Horodatage à la seoncde près, numéro séquentiel unique et identifiant du poste et du vendeur.
                — Ventilation détaillée de chaque taux de TVA collecté avec son montant net et sa base HT.
                — Mention des éco-participations incluses.
                — Code-barres de retour rapide à 10 chiffres (CODE128) permettant la réouverture instantanée du ticket d'un simple coup de douchette.
                — Empreinte numérique cryptographique SHA-256 scellant inaltérablement la transaction.
                `
        },
        {
            id: "liaison-monetique-tpe-banque",
            title: "5. Liaison monétique bancaire (Protocole Concert) et coordonnées IBAN",
            // 📸 config_banque_iban_saisie.jpg : Panneau des coordonnées bancaires avec champ de saisie de l'IBAN et du BIC pour impression sur devis et factures.
            // 📸 config_tpe_connexion_options.jpg : Section de liaison TPE avec interrupteur Protocole Concert, choix Réseau IP (adresse et port) ou Filaire Série COM.
            // 📸 caisse_attente_tpe_verrouillage.jpg : Écran de caisse figé avec modale « ATTENTE TPE » pendant que le client compose son code secret sur le terminal de carte bancaire.
            content:
                `
                Le module « Banque & TPE » pilote la télétransmission automatique du montant de vos paniers vers votre Terminal de Paiement Électronique (TPE) et gère le RIB de votre établissement.
                
                Un profil [PERM: Admin] est obligatoire pour modifier ces configurations bancaires.
                
                [📸 config_tpe_connexion_options.jpg | lg]
                [T]Liaison Caisse-TPE par Protocole Concert
                La liaison automatisée supprime toute ressaisie manuelle au comptoir, éliminant définitivement les erreurs de frappe (inversions de chiffres, fautes de centimes) et les écarts de télécollecte le soir :
                [ST][ICON: CreditCard | 14 | text-teal-600] Activation du Protocole Concert :
                Cochez l'interrupteur « Activer la liaison Caisse-TPE (Protocole Concert) ».
                
                [ST][ICON: Wifi | 14 | text-teal-600] Connexion par Réseau IP (Ethernet ou Wi-Fi) :
                Recommandé pour les TPE modernes connectés au réseau local du magasin :
                — Renseignez l'[KEY: Adresse IP du TPE] (ex : 192.168.1.50).
                — Indiquez le [KEY: Port] de communication (préréglé par défaut sur [KEY: 8888]).
                
                [ST][ICON: Usb | 14 | text-teal-600] Connexion Filaire Série (Câble USB / Port COM) :
                Pour les terminaux branchés directement par câble sur l'ordinateur :
                — Renseignez le [KEY: Port de communication Windows] attribué par votre pilote matériel (ex : [KEY: COM1], [KEY: COM3]...).
                
                [TIP]Configuration de votre lecteur bancaire : Assurez-vous auprès de votre mainteneur monétique ou de votre conseiller bancaire que votre TPE est bien programmé en mode « Concert Caisse Actif » (protocole de dialogue caisse standard français).
                
                [📸 caisse_attente_tpe_verrouillage.jpg | right | md]
                [T]Sécurisation des encaissements et gestion des incidents
                Lors d'un règlement par carte bancaire au comptoir :
                1. La caisse envoie instantanément la somme exacte au TPE.
                2. L'écran de caisse affiche l'animation « ATTENTE TPE » et verrouille tout le logiciel : le caissier ne peut ni modifier le panier, ni valider un autre paiement tant que la transaction est en cours.
                3. Dès l'accord du centre bancaire, le ticket se valide automatiquement et la ligne de carte est scellée d'un cadenas.
                
                [ST]Procédure de secours en cas de perte de liaison :
                Si un incident survient (câble accidentellement débranché, coupure réseau local ou timeout bancaire), le système détecte l'échec et propose deux boutons au caissier : [BTN: Réessayer l'envoi TPE] ou [BTN: Saisie CB Manuelle]. Cette dernière option débloque la caisse pour vous permettre de taper le montant à la main sur le TPE tout en traçant l'incident dans le journal de session.
                [CLEAR]
                
                [📸 config_banque_iban_saisie.jpg | left | sm]
                [T]Coordonnées bancaires (IBAN / BIC)
                Saisissez votre relevé d'identité bancaire complet dans le champ réservé. Ces coordonnées sont automatiquement mises en forme et imprimées en pied de page de l'ensemble de vos factures commerciales A4 et devis officiels pour permettre à vos clients professionnels de régler directement par virement bancaire.
                [CLEAR]
                `
        },
        {
            id: "preferences-vente-devis-cadeaux",
            title: "6. Préférences de vente, durée des devis, cartes cadeaux et heure de bascule Z",
            // 📸 config_preferences_documents_validite.jpg : Bloc « Documents Commerciaux » avec les champs de validité des devis (jours), avoirs (mois) et bons cadeaux (mois).
            // 📸 config_preferences_cartes_cadeaux.jpg : Configuration des cartes cadeaux montrant l'option de montant libre et les boutons de montants rapides (20€, 50€, 100€).
            // 📸 config_preferences_heure_bascule_z.jpg : Sélecteur d'heure de bascule de fin de journée logique préréglé sur 05:00.
            content:
                `
                Le module « Préférences de Vente » centralise les règles commerciales par défaut appliquées lors de l'émission de documents contractuels et l'automatisation comptable de la caisse.
                
                Un rôle [PERM: Manager] ou [PERM: Admin] est requis pour modifier ces paramètres.
                
                [📸 config_preferences_documents_validite.jpg | lg]
                [T]Durée de validité des titres et documents commerciaux
                Définissez les échéances légales appliquées par votre établissement :
                — [KEY: Validité des devis] : Fixez le nombre de jours d'engagement tarifaire (préréglé à [KEY: 30 jours]). Lors de l'émission d'un devis au comptoir ou au format A4, le document calcule automatiquement la date limite exacte d'acceptation et intègre l'encadré pour la signature avec mention manuscrite « Bon pour accord ».
                — [KEY: Validité des avoirs générés] : Définissez la durée de vie des avoirs émis suite à un retour d'article (par défaut [KEY: 12 mois]).
                — [KEY: Validité des bons d'achat & fidélité] : Fixez l'échéance des bons promotionnels et des récompenses du programme de fidélité (par défaut [KEY: 6 mois]).
                — [KEY: Validité des cartes cadeaux] : Durée de consommation des titres cadeaux vendus au comptoir (par défaut [KEY: 12 mois]).
                
                [📸 config_preferences_cartes_cadeaux.jpg | right | md]
                [T]Vente et paramétrage des Cartes Cadeaux
                Facilitez la vente de titres cadeaux au comptoir grâce à une personnalisation tactile :
                [ST]Montant libre :
                Cochez « Montant libre autorisé » pour permettre au vendeur de taper la somme exacte souhaitée par le client. Si vous décochez cette option, seules les valeurs faciales prédéfinies pourront être sélectionnées.
                
                [ST]Boutons de montants rapides :
                Configurez des raccourcis monétaires fixes (ex : [KEY: 20 €], [KEY: 50 €], [KEY: 100 €]). Ces boutons s'affichent instantanément lors de la vente d'une carte cadeau en caisse pour un encaissement en une frappe.
                [CLEAR]
                
                [T]Émission physique de la Carte Cadeau
                Dès qu'une carte cadeau est encaissée, l'imprimante thermique édite un titre sécurisé comprenant le nom du magasin, ses horaires d'ouverture hebdomadaires, le montant crédité en gros caractères, sa date d'expiration imprimée en blanc sur fond noir très contrasté et un code-barres unique au format CODE128 scannable lors des prochains passages en caisse.
                
                [📸 config_preferences_heure_bascule_z.jpg | left | sm]
                [T]Heure de bascule de fin de journée (Clôture Z)
                TipTac utilise une heure logique de changement de journée fiscale (par défaut [KEY: 05:00 du matin]) :
                Cette disposition est capitale pour les commerces ayant des horaires tardifs ou nocturnes (bars, événements, boulangeries tôt le matin). Toutes les ventes réalisées entre minuit et 05h00 restent comptablement rattachées au service de la veille, empêchant tout blocage inopiné avant la clôture Z définitive.
                [CLEAR]
                `
        },
        {
            id: "regles-saisie-listes-codes-barres",
            title: "7. Règles de saisie, listes normalisées, nuancier et préfixe EAN13",
            // 📸 config_saisie_ean13_prefixe.jpg : Champ géant de saisie du préfixe magasin EAN13 pour la création de codes-barres internes.
            // 📸 config_saisie_formatage_casse.jpg : Menu déroulant de forçage de casse proposant Libre, Tout en majuscules ou Première lettre majuscule.
            // 📸 config_saisie_contenants_unites.jpg : Grilles des contenants et unités de mesure avec poignées de glisser-déposer pour réorganiser l'ordre d'affichage.
            // 📸 config_saisie_nuancier_couleurs.jpg : Nuancier des 32 couleurs strictes pour les déclinaisons d'articles avec sélecteur de pipette et code hexadécimal.
            content:
                `
                Le module « Règles de Saisie » garantit l'homogénéité de votre catalogue, la rapidité de création d'articles au comptoir et la précision de vos étiquettes de linéaire.
                
                [📸 config_saisie_ean13_prefixe.jpg | lg]
                [T]Génération certifiée de codes-barres (Préfixe EAN-13)
                Pour créer vos propres codes-barres sur les articles locaux ne disposant pas d'étiquette d'origine (créations artisanales, vrac, plantes en pot, arrivages directs) :
                — Saisissez le [KEY: Préfixe de votre établissement] (jusqu'à 11 chiffres, ex : 348808).
                — Dès qu'un collaborateur clique sur le générateur de code-barres lors de la création d'une fiche article, TipTac combine votre préfixe avec un numéro de référence séquentiel et calcule automatiquement la clé de contrôle officielle à 13 chiffres. L'étiquette peut être scannée à la douchette sans risque de conflit avec des références du commerce mondial.
                
                [📸 config_saisie_formatage_casse.jpg | right | sm]
                [T]Formatage automatique de la casse des textes
                Pour harmoniser la présentation de votre base de données sans fautes de frappe :
                Choisissez le comportement appliqué lors de la saisie des libellés de produits et des fiches clients :
                — [KEY: Laisser libre] : Conserve la frappe originale de l'opérateur.
                — [KEY: TOUT EN MAJUSCULES] : Convertit l'ensemble des textes en majuscules.
                — [KEY: Première lettre en majuscule] : Applique automatiquement une majuscule initiale sur chaque mot.
                [CLEAR]
                
                [📸 config_saisie_contenants_unites.jpg | lg]
                [T]Contenants logistiques et Unités de mesure normalisées
                Deux listes fondamentales encadrent le calcul légal des prix au litre et au kilo sur vos étiquettes :
                [ST]Contenants (29 types) :
                Barquette, Bouteille, Carton, Godet, Panier, Pot, Sac, Suspension, Vasque... Chaque contenant dispose de son libellé singulier, pluriel et de son genre grammatical (Masc. / Fém.) pour formater des étiquettes impeccables (ex : « Pot de 3 L »).
                
                [ST]Unités de mesure (14 unités) :
                Pièce (u), Lot, Kilogramme (kg), Gramme (g), Litre (L), Millilitre (mL), Mètre carré (m²), Diamètre (Ø)...
                
                [TIP]Organisation par glisser-déposer : Maintenez le clic sur la poignée verticale d'un élément pour le monter ou le descendre dans la liste. Vous pouvez ainsi placer vos unités les plus fréquentes (ex : Pot et Litre) tout en haut des menus déroulants pour accélérer la saisie de vos équipes en magasin. Cliquez sur la croix pour masquer un contenant jamais utilisé dans votre métier.
                
                [📸 config_saisie_nuancier_couleurs.jpg | right | md]
                [T]Nuancier des couleurs pour déclinaisons (Matrix PIM)
                Le module comprend un nuancier de base de 32 teintes étalonnées pour la gestion des variantes de vos articles (Taille / Couleur) :
                — Propose une option « Mélange » multicolore (pour les assortiments de plantes ou confiseries) ainsi que toutes les teintes majeures (Anthracite, Terre cuite, Saumon, Lavande, Anis...).
                — Cliquez sur la palette pour créer une teinte personnalisée avec son code hexadécimal et son nom commercial (ex : « Vert Forêt »).
                [CLEAR]
                
                [T]Emplacements en magasin et Marques (Mode Strict vs Libre)
                Configurez la liste de vos emplacements physiques de réserve/rayons (ex : « Serre Chaude », « Allée A », « Quai 2 ») et vos marques d'articles :
                — [KEY: Mode Stricte (Liste fermée)] : L'opérateur doit obligatoirement choisir parmi les valeurs enregistrées, prévenant les doublons d'orthographe.
                — [KEY: Mode Libre (Suggestions)] : L'opérateur peut saisir un nouvel emplacement au clavier directement depuis la fiche produit sans repasser par les réglages.
                `
        },
        {
            id: "hierarchie-rayons-fiscalite-tva",
            title: "8. Arborescence du catalogue (Rayons, Catégories) et fiscalité TVA",
            // 📸 config_hierarchie_rayons_categories.jpg : Interface double colonne avec la liste des Rayons à gauche et les Catégories rattachées à droite avec leurs badges TVA et marges.
            // 📸 config_hierarchie_edition_overlay.jpg : Fenêtre d'édition d'un rayon/catégorie avec le nom, le taux de TVA et le pourcentage de marge cible.
            // 📸 config_tva_liste_taux_gestion.jpg : Tableau des taux de fiscalité globale avec code taxe, valeur en pourcentage et indicateur de taux par défaut.
            content:
                `
                La structuration de vos familles de produits et de vos taux de taxes constitue la colonne vertébrale de votre rentabilité, de vos marges et de la conformité comptable du point de vente.
                
                [📸 config_hierarchie_rayons_categories.jpg | lg]
                [T]Arborescence : Rayons (Familles) et Catégories
                Accessible dans le sous-menu « Rayons & Catégories », cette interface à double colonne permet de segmenter l'ensemble de votre offre commerciale :
                [ST]Colonne de gauche : Les Rayons principaux
                Représente les grandes familles de votre métier (ex : Végétaux, Terres & Paillages, Outillage, Alimentation...).
                Pour chaque rayon, vous définissez :
                — Le [KEY: Taux de TVA par défaut] qui s'appliquera sur tous les nouveaux articles créés dans ce rayon.
                — Le [KEY: Pourcentage de marge cible (%)] : dès que vous renseignez le prix d'achat d'un article, TipTac calcule automatiquement le prix de vente TTC conseillé sur la base de cet objectif de rentabilité.
                
                [ST]Colonne de droite : Les Catégories détaillées
                Sélectionnez un rayon pour faire apparaître ses sous-catégories associées (ex : dans le rayon Végétaux : Arbustes, Vivaces, Plantes d'intérieur...).
                Les catégories peuvent disposer de leur propre taux de marge ou hériter automatiquement du taux de TVA de leur rayon parent.
                
                [📸 config_hierarchie_edition_overlay.jpg | right | md]
                [T]Recherche et tri alphabétique
                — Une barre de recherche supérieure permet de retrouver instantanément n'importe quel rayon ou sous-catégorie parmi des centaines de rubriques.
                — Les boutons [BTN: A-Z] et [BTN: Z-A] permettent d'ordonner l'affichage selon vos habitudes visuelles.
                [CLEAR]
                
                [📸 config_tva_liste_taux_gestion.jpg | left | md]
                [T]Fiscalité Globale et Gestion des Taux de TVA
                Dans le sous-menu « Fiscalité Globale », vous administrez les taxes appliquées en caisse conformément à la loi fiscale française :
                — [KEY: Nom commercial] : Intitulé explicite (ex : « TVA Normale », « TVA Réduite », « TVA Super-Réduite »).
                — [KEY: Valeur (%)] : Pourcentage officiel (ex : 20.0 %, 10.0 %, 5.5 %, 2.1 %).
                — [KEY: Code Ligne] : Identifiant court à 1 caractère (ex : « (1) », « (2) », « A », « B ») qui apparaît en regard de chaque article sur le ticket thermique pour expliciter la taxe perçue.
                — [KEY: Taux par défaut] : Définit le taux présélectionné d'office lors de la saisie d'un nouveau produit dans votre base.
                [CLEAR]
                
                [WARNING]Verrouillage Réseau par le Siège : Si votre établissement fait partie d'une chaîne ou d'une enseigne multi-magasins reliée à TipTac Cloud, la modification locale des rayons, des catégories et des taux de TVA est automatiquement verrouillée avec un badge bleu « Géré par le siège ». Cette protection garantit la conformité comptable et l'homogénéité fiscale de l'ensemble du réseau.
                `
        },
        {
            id: "studio-etiquettes-affiches-plv",
            title: "9. Studio d'édition : Étiquettes linéaires, affiches PLV et fiches conseils",
            // 📸 config_etiquettes_vue_generale.jpg : Vue générale du module avec les 3 modes (Petits Formats, Affiches A4, Fiches Conseils), la file d'attente et l'aperçu dynamique.
            // 📸 config_etiquettes_formats_planches_a4.jpg : Onglet « Format & Marges » montrant le choix des planches Avery (3x7, 3x8, 2x4) ou rouleaux thermiques et le réglage des traits de coupe.
            // 📸 config_etiquettes_filtres_avances_panneau.jpg : Panneau latéral d'injection en masse avec filtres par fournisseur, date de changement de prix, famille et option « Quantité = Stock actuel ».
            // 📸 config_etiquettes_file_prix_modifies.jpg : Bouton orange « Prix Modifiés » avec compteur indiquant les étiquettes de produits dont le tarif a été changé en caisse.
            // 📸 config_etiquettes_affiches_plv_a4.jpg : Aperçu d'une affiche A4 grand format avec prix géant, pictogrammes botaniques d'exposition/arrosage et cadre coloré.
            content:
                `
                Accessible depuis l'univers Catalogue et la configuration, le module « Étiquettes & Affiches » est un studio complet de mise en page pour imprimer vos étiquettes de linéaires, vos affiches promotionnelles PLV et vos fiches de culture.
                
                [📸 config_etiquettes_vue_generale.jpg | lg]
                [T]Les 3 modes d'édition spécialisés
                Basculez entre les trois univers d'impression selon vos besoins en magasin :
                [ST]1. Petits Formats (Étiquettes Linéaires) :
                Conçu pour le balisage des gondoles et des rayons, gérant l'impression sur planches d'étiquettes A4 prédécoupées ou sur imprimante à rouleau thermique continu.
                
                [ST]2. Affiches A4 (Signalétique PLV) :
                Édition d'affiches grand format 100 % A4 (en mode [KEY: Portrait] ou [KEY: Paysage]) avec prix géant, logo de la boutique, bandeau promotionnel contrasté et grille de pictogrammes de caractéristiques.
                
                [ST]3. Fiches Conseils Botaniques [PLAN: Option VegApp requise] :
                Impression de guides de culture grand public ou professionnels reliés au dictionnaire horticole, déclinés en 4 gabarits : [KEY: SIMPLE] (grande illustration), [KEY: NORMAL] (profil équilibré), [KEY: DETAIL] (conseils d'entretien complets) et [KEY: TECH] (tableau agronomique, pH et rusticité).
                
                [📸 config_etiquettes_formats_planches_a4.jpg | right | md]
                [T]Supports d'impression et gabarits prédéfinis
                Pour les étiquettes linéaires, configurez votre support dans l'onglet « Format & Marges » :
                — [KEY: Planches A4 Standards] : Modèles Avery préenregistrés : 3x7 étiquettes (63.5x38.1 mm - L7160), 3x8 étiquettes (63.5x33.9 mm - L7159) ou 2x4 grandes étiquettes (99.1x67.7 mm - L7165).
                — [KEY: Rouleaux Thermiques] : Formats continus 60x40 mm, 50x30 mm ou 40x20 mm.
                — [KEY: Modèles personnalisés sur-mesure] : Définissez au dixième de millimètre près la largeur, la hauteur, les marges extérieures et les espacements horizontaux/verticaux. Cochez [KEY: Traits de coupe] pour imprimer des repères de massicot sur papier standard.
                — Cliquez sur [BTN: Enregistrer ce modèle] pour mémoriser votre gabarit personnalisé et le réutiliser en un clic.
                [CLEAR]
                
                [T]Dispositions des textes et calcul légal des prix
                Dans l'onglet « Style Visuel », choisissez la présentation des mentions de vos étiquettes :
                — [KEY: Classique (STD)] : Libellé standard, code-barres scannable et prix TTC.
                — [KEY: Légal (DETAIL)] : Intègre le calcul obligatoire du prix au litre ou au kilo selon le conditionnement (ex : « 4,50 €/L ») et la référence interne.
                — [KEY: Promotion (PROMO)] : Met en avant le prix de vente en très gros caractères avec étiquette explicite de la réduction en vigueur.
                — [KEY: Stock (MINI)] : Étiquette compacte sans tarif de vente, idéale pour les réserves et l'identification logistique des bacs.
                
                [📸 config_etiquettes_filtres_avances_panneau.jpg | left | md]
                [T]Injection de masse par filtres avancés
                Pour préparer le balisage de tout un rayon sans scanner chaque article un par un, ouvrez le panneau [BTN: Filtres] :
                — Filtrez par [KEY: Fournisseur], [KEY: Rayon (Famille)], [KEY: Catégorie] ou [KEY: Emplacement Rayon].
                — Isolez les articles créés ou modifiés depuis une date précise, ou ciblez uniquement les [KEY: Produits en promotion].
                — [KEY: Qté étiquettes = Stock Actuel] : Cochez cette option pour que TipTac injecte automatiquement autant d'étiquettes qu'il y a d'unités physiques réelles en magasin (idéal après une réception de marchandise).
                [CLEAR]
                
                [📸 config_etiquettes_file_prix_modifies.jpg | right | sm]
                [T]File d'attente automatique des « Prix Modifiés »
                Dès qu'un responsable ajuste le tarif d'un produit en caisse ou dans le catalogue, TipTac consigne la modification en tâche de fond :
                Un bouton orange [BTN: Prix Modifiés] apparaît en tête du studio avec le compteur d'articles en attente. Un clic injecte automatiquement tous les produits dont l'étiquette en rayon n'est plus à jour. Une fois imprimée, la file d'attente est purgée, garantissant une parfaite conformité entre le prix affiché en linéaire et le prix scanné au comptoir.
                [CLEAR]
                
                [📸 config_etiquettes_affiches_plv_a4.jpg | lg]
                [T]Signalétique et Affiches PLV A4
                En mode [KEY: Affiches A4], transformez votre catalogue en support de vente percutant :
                — Choisissez une couleur de thème pour encadrer l'affiche (vert végétal, rouge vif, orange, bleu, noir...).
                — Ajustez la taille de la désignation et de la description au moyen de curseurs ergonomiques.
                — Affichez le logo de votre magasin et le bandeau promotionnel.
                — En mode végétal, activez [KEY: Mode Botanique (Conseils)] pour faire apparaître une rangée de 5 indicateurs clairs : Exposition au soleil, Fréquence d'arrosage, Résistance au gel (Rusticité en °C), Calendrier de floraison et Dimensions à maturité.
                `
        },
        {
            id: "synchronisation-cloud-maintenance-flux",
            title: "10. Synchronisation Cloud, politique de réseau et maintenance des flux",
            // 📸 config_reseau_statut_diffusion_web.jpg : Bandeau supérieur indiquant le mode de diffusion Web imposé par le siège (E-commerce complet, Click & Collect, Vitrine ou Désactivé).
            // 📸 config_reseau_politique_catalogue.jpg : Interrupteurs de politique catalogue (Mise à jour automatique et Écrasement par les prix nationaux).
            // 📸 config_reseau_maintenance_ciblee_dates.jpg : Sélecteur de période calendaire et grille des boutons de renvoi forcé (Tickets, Clôtures Z, Catalogue, Structure, Stocks).
            // 📸 config_reseau_assimilation_urgence.jpg : Bloc d'action critique rouge « Assimilation d'Urgence » et bouton bleu « Premier passage au Cloud (Big Bang) ».
            content:
                `
                Pour les commerces connectés à TipTac Cloud ou gérés au sein d'une enseigne multi-magasins, le module « Synchronisation Cloud » administre les échanges de données et met à disposition des outils de maintenance de secours en cas de panne réseau.
                
                Cet univers nécessite une formule adaptée [PLAN: PLAN CONNECT] ou supérieure et le profil [PERM: Admin].
                
                [📸 config_reseau_statut_diffusion_web.jpg | lg]
                [T]Canal de diffusion Web dicté par le siège
                Le premier encart informe l'équipe locale de la stratégie omnicanale active sur votre point de vente :
                — [KEY: E-commerce Complet] : Gestion simultanée des expéditions transporteur et du retrait magasin.
                — [KEY: Click & Collect] : Retrait physique au comptoir avec préparation en réserve.
                — [KEY: Catalogue Vitrine] : Consultation en ligne des tarifs et des stocks sans vente directe.
                — [KEY: Site Web Désactivé] : Mode réservé au commerce physique classique.
                
                [📸 config_reseau_politique_catalogue.jpg | right | md]
                [T]Politique Catalogue et tarification nationale
                Définissez la manière dont votre caisse locale absorbe les directives centrales :
                [ST]Mise à jour automatique des articles :
                Télécharge et applique en temps réel et en arrière-plan les fiches articles créées ou enrichies sur le Cloud sans interrompre la vente au comptoir.
                
                [ST]Appliquer les Prix du réseau :
                Si cette option est activée, vos tarifs de vente locaux sont systématiquement écrasés par la grille tarifaire nationale master dictée par le siège, garantissant une stricte homogénéité des prix sur tous les sites.
                [CLEAR]
                
                [📸 config_reseau_maintenance_ciblee_dates.jpg | lg]
                [T]Maintenance manuelle ciblée des flux de données
                Si votre magasin a subi une panne de box Internet prolongée de plusieurs jours, la caisse continue d'enregistrer vos ventes en toute sécurité grâce à son architecture hors-ligne. Une fois la connexion rétablie, vous pouvez auditer ou forcer le renvoi manuel d'une période précise :
                1. Sélectionnez la plage de dates visée ([KEY: Du ... au ...]).
                2. Cliquez sur le flux à resynchroniser :
                — [BTN: Tickets & CA] : Téléverse les ventes et encaissements manquants vers le serveur central.
                — [BTN: Clôtures (Z)] : Renvoie les tickets Z fiscaux scellés vers les archives du siège.
                — [BTN: Catalogue (Articles)] et [BTN: Structure (Familles)] : Réaligne la base produits.
                — [BTN: Écraser les stocks du Cloud] : Pousse l'inventaire physique exact compté localement pour écraser les stocks théoriques affichés sur votre boutique en ligne.
                — [BTN: Pousser au Cloud] / [BTN: Rapatrier du Cloud] : Assure l'échange bidirectionnel des fiches clients et des points de fidélité acquis sur d'autres postes du réseau.
                
                [📸 config_reseau_assimilation_urgence.jpg | right | md]
                [T]Actions critiques de sauvetage
                Deux procédures d'exception sont prévues pour les opérations de restructuration majeure :
                [ST][ICON: AlertTriangle | 14 | text-red-600] Assimilation d'Urgence (Zone Rouge) :
                À utiliser en cas de divergence grave suite à une déconnexion prolongée. Cette action aligne autoritairement votre catalogue local sur le serveur central et applique les prix nationaux.
                
                [ST][ICON: Database | 14 | text-blue-600] Premier passage au Cloud (Migration Big Bang) :
                Destiné aux commerces passant d'une caisse autonome (Starter) à un abonnement Cloud supérieur. Cette action marque l'intégralité de votre historique depuis le tout premier jour d'activité pour l'injecter d'un bloc sur les serveurs sécurisés TipTac.
                [CLEAR]
                `
        }
    ]
};