export default {
    id: "ADMINISTRATION_LOGICIEL",
    title: "Back-Office & Gestion d'Équipe",
    category: "TipTacCaisse",
    iconName: "Settings",
    color: "text-[#1e4e58]",
    articles: [
        {
            id: "navigation-backoffice-scopes",
            title: "1. Navigation dans le Back-Office et scopes de gestion",
            content:
                `
                Le Back-Office d'administration regroupe tous les outils de pilotage stratégique, d'inventaire, de tarification et de gestion de votre établissement.
                
                Un rôle [PERM: Manager] ou [PERM: Admin] est requis pour naviguer librement dans la majorité des sections de configuration.
                
                [📸 admin_hub_scopes.jpg | right | md]
                [T]Architecture par univers étanches
                Pour éviter la dispersion et adapter l'écran aux missions de chaque collaborateur, l'administration est scindée en 7 univers spécialisés accessibles directement depuis les tuiles de l'écran d'accueil :
                — [KEY: PILOTAGE & STATS] : Pilotage commercial, comparaisons A/B et analyses de marges.
                — [KEY: CATALOGUE & ARTICLES] : Gestion de la base articles, commandes d'achat fournisseurs et étiquettes linéaires.
                — [KEY: STOCKS & INVENTAIRES] : Sessions d'inventaires, transferts entre magasins et registres de démarque.
                — [KEY: CLIENTS & FIDÉLITÉ] : Annuaire CRM, historique des ventes et gestion du programme de fidélité.
                — [KEY: MARKETING & PROMOS] : Création d'offres promotionnelles, campagnes SMS/email et générateur de bons.
                — [KEY: LÉGAL & COMPTA] : Clôtures journalières Z scellées, hub comptable et exports de contrôle fiscal.
                — [KEY: CONFIGURATION] : Configuration du magasin, imprimantes, TVA, matériel et équipe.
                [CLEAR]
                
                [📸 admin_bandeau_actions_rapides.jpg | left | sm]
                [T]Boutons d'actions rapides prioritaires
                En tête de menu latéral, chaque univers met en exergue des boutons d'action d'urgence contrastés :
                — En Catalogue : [BTN: Créer un produit] (vert émeraude) et [BTN: Scan & Go] (bleu ciel).
                — En Stocks : [BTN: Saisie Démarque] (orange) pour sortir immédiatement un article cassé sans chercher dans tout l'annuaire.
                — En Marketing : [BTN: Nouvelle Promo] (rose) et [BTN: Nouvelle Campagne] (violet).
                [CLEAR]
                
                [T]Protection par rôle et alertes d'accès restreint
                Lorsqu'un collaborateur connecté tente d'accéder à une section non couverte par son profil, TipTac bloque l'ouverture et affiche un bandeau rouge contrasté : « Accès Restreint : Vos permissions d'utilisateur ne vous permettent pas d'ouvrir ce sous-menu ».
                Les fonctionnalités non incluses dans votre formule d'abonnement portent quant à elles une icône [ICON: Lock | 16 | text-orange-500] signalant le palier d'option requis.
                
                [TIP]Confort d'affichage : Vous pouvez réduire la barre latérale grâce au bouton [BTN: Réduire] en bas à gauche pour maximiser l'espace de consultation des tableaux de données. Utilisez les raccourcis [KEY: Ctrl + +] et [KEY: Ctrl + -] ou [KEY: Ctrl] et la molette de la souris pour ajuster le niveau de zoom global de l'interface.
                `
        },
        {
            id: "gestion-equipe-collaborateurs",
            title: "2. Annuaire de l'équipe, création et modification de fiches",
            content:
                `
                Le module « Équipe & Droits » (accessible dans la section Paramètres) centralise la création, le paramétrage et la désactivation de tous les profils ayant accès aux caisses ou au Back-Office.
                
                [📸 admin_users_liste_filtres.jpg | lg]
                [T]Consultation et tri de l'équipe
                La colonne de gauche liste l'ensemble des membres déclarés :
                [ST][ICON: Shield | 20] Filtrage rapide par rôle :
                Quatre boutons permettent d'isoler en un clic les [BTN: Administrateurs], [BTN: Managers], [BTN: Préparateurs] ou [BTN: Vendeurs].
                [ST][ICON: ArrowUpDown | 20] Tri et visibilité :
                Le bouton alphabétique inverse l'ordre de présentation (A-Z ou Z-A). L'icône en forme d'œil permet d'afficher ou masquer les anciens salariés dont les accès ont été suspendus.
                
                [📸 admin_user_fiche_edition.jpg | right | lg]
                [T]Création et paramétrage d'un compte
                Cliquez sur le bouton [BTN: Nouveau Collaborateur] en haut à droite :
                — Saisissez obligatoirement le [KEY: Prénom] et le [KEY: Nom de famille] du collaborateur.
                — Renseignez le [KEY: Téléphone mobile] (numéro français normalisé à 10 chiffres pour le suivi et les alertes) et son [KEY: Email professionnel].
                — Choisissez le [KEY: Rôle Principal] : ce choix applique instantanément la grille de permissions standard recommandée pour sa fonction.
                [CLEAR]
                
                [T]Règles strictes sur le Code PIN ou Badge
                Le mot de passe de caisse doit comporter entre [KEY: 4 et 8 chiffres] :
                — Pour un nouveau profil, la saisie du code est obligatoire.
                — Lors de la modification d'un compte existant, laissez le champ vide pour conserver le code actuel sans le réécrire (mention « •••• (Inchangé) »).
                
                [WARNING]Unicité obligatoire des codes PIN : Deux collaborateurs ne peuvent pas partager le même code PIN. Si vous tapez une combinaison déjà attribuée, le logiciel bloque la validation avec le message d'alerte : « Ce code pin n'est pas autorisé. Veuillez en choisir un autre ».
                
                [T]Désactivation sans rupture de traçabilité
                Conformément aux exigences légales NF525, TipTac ne détruit jamais définitivement un compte utilisateur ayant déjà conclu des ventes ou signé des mouvements de tiroir.
                Cliquez sur l'icône de corbeille rouge pour [BTN: Désactiver le compte] : ses accès à la caisse sont instantanément révoqués, mais son nom reste gravé dans l'historique comptable et sur les duplicatas de tickets fiscaux.
                `
        },
        {
            id: "matrice-roles-droits",
            title: "3. Les 4 rôles fondamentaux et attributions par défaut",
            content:
                `
                TipTac articule sa sécurité autour de 4 rôles aux responsabilités bien délimitées :
                
                [T]1. ADMINISTRATEUR (Super-Utilisateur)
                Réservé à la direction ou au propriétaire du commerce :
                — Dispose des pleins pouvoirs sans aucune restriction sur tous les modules.
                — Seul profil autorisé à modifier la fiscalité (TVA), la configuration de l'entreprise, les comptes bancaires et les paramètres sensibles.
                — Accès exclusif aux archives légales NF525 et aux fichiers d'audit DGFIP.
                [TIP]Protection du Compte Principal : Le tout premier compte administrateur créé lors de l'installation (identifiant n°1) est blindé : il ne peut être ni supprimé, ni désactivé, ni rétrogradé.
                
                [T]2. MANAGER (Boutique & Équipe)
                Destiné aux responsables de magasin, chefs de rayon et adjoints :
                — Encaissement complet, retours d'articles, saisie de démarque et remises manuelles au comptoir.
                — Autorisé à exécuter la clôture journalière Z, à forcer la fermeture des postes oubliés et à consulter les duplicatas.
                — Pilotage des stocks, commandes d'achat fournisseurs et ajustement manuel des points de fidélité clients.
                — Accès restreint : par défaut, il ne peut pas modifier la fiscalité globale ni extraire les contrôles fiscaux d'audit brut, sauf si une permission est accordée.
                
                [T]3. PRÉPARATEUR (Web, Stocks & Logistique)
                Profil taillé pour le personnel de réserve, de quai ou d'inventaire :
                — Spécifiquement orienté sur le traitement des commandes Click & Collect sur caisse et sur l'application mobile (picking).
                — Accès aux modules de comptage d'inventaire, transferts entre magasins et déclaration de casse/démarque.
                — Verrouillage strict : interdiction formelle d'encaisser, d'ouvrir le tiroir, de faire des remises ou de consulter les fiches clients et les statistiques financières.
                
                [T]4. VENDEUR (Comptoir & Caisse tactile)
                Profil standard des équipiers de vente :
                — Centré sur la saisie des articles, l'identification des clients et l'encaissement des paiements.
                — Peut ouvrir le tiroir-caisse pour rendre la monnaie lors d'une vente.
                — Verrouillage strict : les remises manuelles, retours d'articles, démarques, modifications de disposition de clavier et l'impression du Z lui sont interdits par défaut sans intervention d'un responsable.
                `
        },
        {
            id: "personnalisation-permissions-fines",
            title: "4. Personnalisation des permissions fines",
            content:
                `
                Bien que chaque rôle applique une configuration automatique, TipTac permet d'ajuster individuellement chaque droit d'accès pour chaque membre de l'équipe.
                
                La fiche d'édition détaille les autorisations en 4 blocs ergonomiques :
                
                [📸 admin_permissions_acces_modules.jpg | lg]
                [T]1. Accès aux Modules du Back-Office
                Définissez les univers d'administration que le collaborateur peut ouvrir depuis le Hub :
                — [KEY: Catalogue & Achats] : Consultation de la base produits et création de commandes d'approvisionnement.
                — [KEY: Clients] : Recherche et consultation de l'annuaire CRM.
                — [KEY: Marketing] : Création d'offres promotionnelles et de campagnes.
                — [KEY: Rapports & Stats] : Consultation des indicateurs de vente et de fréquentation.
                
                [📸 admin_permissions_interrupteurs_caisse.jpg | right | lg]
                [T]2. Opérations de Caisse Tactile
                Chaque interrupteur débloque ou verrouille une action précise au comptoir :
                — [BTN: Encaisser les clients] : Accès direct au terminal de vente.
                — [BTN: Retours & Annulations] : Droit d'enregistrer la reprise d'un article en négatif ou de rembourser un achat.
                — [BTN: Ouvrir le tiroir-caisse] : Autorise l'ouverture manuelle hors-vente et la saisie de sorties/entrées de caisse.
                — [BTN: Remises manuelles] : Permet de forcer un tarif ou d'accorder un pourcentage de geste commercial.
                — [BTN: Saisir une démarque / casse] : Autorise la sortie de stock d'articles abîmés ou périmés.
                — [BTN: Modifier le clavier] : Donne accès au mode édition (liseré orange) pour réagencer les touches.
                — [BTN: Clôture journalière (Z)] : Autorise la génération et l'impression du Z fiscal de fin de journée.
                — [BTN: Associer un client a posteriori] : Permet de rattacher un ticket déjà scellé à une fiche client oubliée.
                [CLEAR]
                
                [📸 admin_permissions_logistique_web.jpg | right | md]
                [T]3. Logistique, E-commerce et Mobile
                Pilotez les missions de réserve et de Click & Collect :
                — [KEY: Commandes Web (préparer)] : Réceptionner et badger les articles commandés en ligne.
                — [KEY: Commandes Web (valider)] : Statuer sur les litiges ou valider l'expédition.
                — [KEY: Picking & Inventaires] : Utiliser les fonctions de scan et de comptage sur terminal mobile.
                — [KEY: Commandes & Gestion Fournisseurs] : Passer les commandes de réassort.
                [CLEAR]
                
                [T]4. Conformité Légale NF525 (Zone Rouge)
                Ce pavé protège les données fiscales les plus sensibles de l'entreprise :
                Il regroupe les droits de téléchargement des [BTN: Archives Fiscales], l'accès aux [BTN: Exports Comptables FEC] et les outils de [BTN: Contrôle DGFIP]. 
                Pour des raisons de conformité, ces cases sont verrouillées en gris pour les vendeurs et préparateurs.
                
                [T]Validation des modifications
                Dès que vous modifiez un champ ou un interrupteur, le bouton flottant en haut à droite s'illumine en vert foncé avec la mention [BTN: Enregistrer le profil]. 
                Cliquez dessus pour sauvegarder : les nouveaux droits prennent effet immédiatement sur tous les écrans sans redémarrer le logiciel.
                [CLEAR]
                `
        },
        {
            id: "securite-iam-passerelles-caisse",
            title: "5. Sécurité, cryptographie des PIN et passerelles de supervision",
            // 📸 admin_modal_pin_superviseur.jpg : Modale « Code Manager Requis » s'affichant en surimpression d'une action réservée sur la caisse tactile.
            // 📸 admin_hachage_sha256_schema.jpg : Schéma explicatif du salage et hachage cryptographique SHA-256 scellant les codes en mémoire locale.
            content:
                `
                Pour conjuguer fluidité au comptoir et protection financière absolue, TipTac intègre une passerelle de supervision dynamique.
                
                [📸 admin_bouton_grise_cadenas.jpg | right | sm]
                [T]Verrouillage visuel et protection en caisse
                Lorsqu'un collaborateur ne dispose pas d'une permission opérationnelle (comme accorder une remise manuelle, ouvrir le tiroir hors-vente, saisir une démarque ou éditer le clavier) :
                — Le bouton correspondant sur l'écran tactile apparaît grisé avec une icône [ICON: Lock | 16 ].
                — Tout clic sur une commande verrouillée bloque l'action et déclenche un message d'avertissement rouge (ex : « Permission requise : Appliquer des remises manuelles »).
                [CLEAR]
                
                [📸 admin_relais_manager_f6.jpg | left | sm]
                [T]Procédure de déblocage par relais manager (Touche F6)
                Pour autoriser une opération exceptionnelle sans perdre la vente en cours :
                1. Cliquez sur le bouton [BTN: Vendeur] ou appuyez sur la touche [KEY: F6].
                2. Le manager ou responsable tape son code PIN ou scanne son badge sur le pavé.
                3. L'action (remise, retour, etc.) devient immédiatement active.
                4. Une fois l'opération validée, le caissier réutilise [KEY: F6] pour réassigner le ticket à son nom avant le règlement final.
                [CLEAR]
                
                [T]Chiffrement inaltérable des codes (Salage SHA-256)
                Pour respecter les exigences strictes de la norme NF525 et du RGPD, aucun mot de passe ni code secret n'est conservé en clair dans la machine :
                — Dès qu'un code PIN est enregistré dans le formulaire, il est combiné avec une clé de salage de sécurité propre au système.
                — L'ensemble est immédiatement chiffré selon l'algorithme cryptographique irréversible SHA-256.
                — Même en cas de consultation directe de la base de données ou du disque dur, il est mathématiquement impossible de retrouver les codes secrets de votre personnel.
                
                [WARNING]Oubli de code PIN : En raison du chiffrement à sens unique, il est impossible de « révéler » un code oublié. Si un collaborateur égare sa combinaison, un administrateur doit simplement ouvrir sa fiche dans le Back-Office pour lui attribuer un nouveau code.
                `
        }
    ]
};