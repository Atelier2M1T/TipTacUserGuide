export default {
    id: "SESSIONS_CLOTURES",
    title: "Sessions, Tiroir & Clôtures Z",
    category: "TipTacCaisse",
    iconName: "Archive",
    color: "text-purple-600",
    articles: [
        {
            id: "identification-code-pin",
            title: "1. Identification, Code PIN et changement de vendeur",
            content:
                `
                L'accès à TipTac et aux terminaux de vente est strictement individuel et horodaté afin de garantir la traçabilité intégrale de chaque ligne de vente et de chaque mouvement financier.
                
                [📸 session_hub_identifier.jpg | right | sm]
                [T]Identification au Hub et contrôle d'accès
                À l'allumage ou au retour sur le Hub (écran d'accueil de TipTac), cliquez sur le bouton [BTN: S'identifier] situé en bas à droite de l'écran (ou touchez directement la grande tuile [BTN: Terminal Caisse]).
                
                [ST][ICON: Shield | 14 | text-teal-600 ] Le pavé tactile PinPad :
                Une fenêtre sécurisée présente un pavé numérique. Composez votre code secret personnel comprenant entre 4 et 8 chiffres, puis validez obligatoirement avec le bouton vert [BTN: OK].
                
                [ST][ICON: Barcode | 14 | text-teal-600 ] Connexion instantanée par badge :
                Si votre équipe utilise des cartes ou badges personnalisés, bippez directement votre code-barres à la douchette. La caisse valide instantanément la frappe sans toucher à l'écran.
                
                [ST][ICON: User | 14 | text-teal-600 ] Profil actif et entrée directe :
                Une fois authentifié, votre prénom et votre rôle apparaissent dans le bandeau inférieur. Si un vendeur ou un préparateur est déjà connecté sur le Hub, un clic sur la tuile [BTN: Terminal Caisse] ouvre directement l'écran de vente sans redemander de code !
                [CLEAR]
                
                [📸 session_relais_vendeur_f6.jpg | left | sm]
                [T]Relais en cours de service
                Pour prendre le relais d'un collègue sur un poste sans perdre les articles déjà saisis dans son panier, ne videz jamais la vente !
                Appuyez simplement sur la touche [KEY: F6] ou cliquez sur le bouton [BTN: Vendeur] dans la colonne des commandes de caisse.
                Une fenêtre de connexion rapide apparaît en surimpression : saisissez votre code PIN ou bippez votre badge pour vous attribuer le panier. La transaction sera formellement enregistrée sous votre nom.
                [CLEAR]
                [TIP]Fermeture de session : Lorsque vous quittez votre poste, cliquez sur l'icône de déconnexion à côté de votre nom en bas d'écran pour reverrouiller l'accès aux commandes et au tiroir.
                `
        },
        {
            id: "ouverture-caisse-fond",
            title: "2. Ouverture de session, fond initial et verrouillage des écarts",
            content:
                `
                Au démarrage de chaque journée ou service, le logiciel impose l'ouverture formelle de session pour autoriser les encaissements sur le terminal.
                
                [📸 session_ouverture_tiroir.jpg | right | md]
                [T]Contrôle physique du tiroir
                La fenêtre d'ouverture rappelle le nom du poste physique et le collaborateur connecté :
                [ST][ICON: Calculator | 14 | text-teal-600] Fond de caisse attendu :
                Le système affiche en bleu le montant théorique laissé dans le tiroir lors de la clôture de la veille (par exemple : 150,00 €).
                
                [ST][ICON: Unlock | 14 | text-teal-600] Déclenchement de l'ouverture physique :
                Cliquez sur le bouton [BTN: Ouvrir Tiroir] pour envoyer une impulsion électrique au tiroir-caisse sans attendre la première vente. Vous pouvez ainsi compter sereinement vos coupures et rouleaux de monnaie.
                
                [ST][ICON: Calculator | 14 | text-teal-600] Saisie au pavé tactile :
                Tapez le montant réel compté au centime près via les touches du pavé virtuel ou avec les chiffres de votre clavier, puis cliquez sur [BTN: Ouvrir] ou appuyez sur [KEY: Entrée].[CLEAR]
                
                [📸 session_alerte_ecart_ouverture.jpg | right | md]
                [WARNING]Détection d'écart et sécurité anti-erreur PIN
                Si le montant saisi s'écarte de plus de 0,01 € du fond attendu par le logiciel (par exemple en cas de frappe réflexe de son code PIN dans la case de montant), la procédure s'interrompt immédiatement avec l'écran « Écart d'ouverture ! ».
                — [BTN: Corriger] : Permet d'effacer la saisie et de recompter le tiroir.
                
                [ST][ICON: ShieldAlert | 14 | text-teal-600] Verrouillage hiérarchique (Code Supérieur) :
                Si l'écart constaté est jugé anormal par le système, le bouton de forçage direct disparaît : la validation exige impérativement le code PIN d'un profil [PERM: Manager] ou [PERM: Admin].
                
                [ST][ICON: CheckCircle | 14 | text-teal-600] Validation capacitive par appui long :
                Une fois l'autorisation accordée (ou pour les écarts mineurs), le forçage requiert un maintien appuyé d'une seconde complète sur le bouton [BTN: Maintenir pour forcer]. Une jauge visuelle se remplit pour briser toute validation involontaire.
                
                [ST][ICON: RefreshCcw | 14 | text-teal-600] Ajustement automatique comptable (NF525) :
                Tout forçage d'ouverture génère instantanément un mouvement de caisse officiel (« AJUSTEMENT AUTO ») dans le journal des flux de trésorerie (en ENTRÉE ou en SORTIE). La différence est ainsi tracée à la seconde près et imputée au vendeur sans rupture comptable.
                [CLEAR]
                `
        },
        {
            id: "mouvements-tiroir-justificatifs",
            title: "3. Mouvements de tiroir (Entrées / Sorties) et justificatifs obligatoires",
            content:
                `
                En conformité avec les règles de gestion de trésorerie, tout mouvement d'espèces non issu d'un encaissement client direct doit être consigné par un justificatif normé.
                
                [📸 session_mouvement_caisse.jpg | right | md]
                [T]Accès au module de gestion du tiroir
                Cliquez sur le bouton [BTN: Tiroir] depuis le cockpit de caisse pour ouvrir le panneau d'enregistrement des flux.
                
                [ST][ICON: Unlock | 14 | text-teal-600] Bouton « OUVRIR SANS MONTANT » :
                Le grand bouton supérieur envoie une commande d'impulsion directe au tiroir-caisse (adaptée au pilote configuré : commandes directes en mode RAW/ESC-POS ou impulsion système). Cette ouverture mécanique sans flux financier est immédiatement scellée dans le journal d'audit NF525 sous le motif officiel [KEY: OUVERTURE MANUELLE (FLASH)].
                
                [ST][ICON: ArrowDownUp | 14 | text-teal-600] Enregistrer un flux chiffré :
                Basculez entre le bouton vert [BTN: ENTRÉE] ou le bouton rouge [BTN: SORTIE], puis saisissez le montant précis au pavé numérique.
                [CLEAR]
                
                [WARNING]Justificatif obligatoire sous contrôle strict
                Pour prévenir les erreurs comptables et les omissions, il est techniquement impossible de valider un mouvement sans choisir un motif légal prédéfini :
                — En [BTN: ENTRÉE] : « Apport de monnaie (Fond de caisse) » ou « Régularisation d'erreur de caisse ».
                — En [BTN: SORTIE] : « Dépôt Banque / Coffre », « Achat de fournitures (Timbres, Matériel) » ou « Prélèvement Direction ».
                
                [📸 session_bon_caisse_imprime.jpg | left | sm]
                [T]Édition automatique du bon thermique
                Dès que vous cliquez sur [BTN: VALIDER & IMPRIMER], le tiroir s'ouvre et l'imprimante thermique édite instantanément un justificatif officiel « BON DE CAISSE » portant :
                [CLEAR]
                — La qualification indélébile : « ENCAISSEMENT » ou « DÉCAISSEMENT ».
                — La date et l'heure certifiées à la seconde.
                — Le nom du vendeur ayant exécuté l'opération.
                — Le motif réglementaire sélectionné et le montant contrasté en euros.
                — Deux encadrés d'émargement : [BTN: Signature Vendeur] et [BTN: Signature Manager].
                [CLEAR]
                [TIP]Conservation des justificatifs : Tous les bons de caisse imprimés en cours de journée doivent impérativement être déposés dans le bac à billets du tiroir physique pour le pointage du soir.
                `
        },
        {
            id: "fin-service-pointage",
            title: "4. Fin de service, pointage TPE obligatoire et dépôt bancaire",
            content:
                `
                Lors du changement d'équipe ou avant la fermeture du magasin, chaque caissier clôture son poste dans la modale [BTN: Fin de Service].
                
                [📸 session_fin_service_comptage.jpg | lg]
                [T]Comptage physique des espèces au tiroir
                La zone de comptage est divisée en deux colonnes ergonomiques pour faciliter le dénombrement :
                [ST][ICON: Banknote | 14 | text-teal-600] Billets :
                Saisissez les quantités constatées pour chaque coupure de 200 €, 100 €, 50 €, 20 €, 10 € et 5 €.
                [ST][ICON: Coins | 14 | text-teal-600] Pièces :
                Indiquez le nombre d'unités pour les pièces de 2 €, 1 € et les centimes (50, 20, 10, 5, 2 et 1 centime).
                TipTac additionne les lignes en temps réel et met à jour instantanément la case « Total Compté (Tiroir) ».
                
                [WARNING]Blocage strict sur tiroir non compté
                Si le tiroir est censé contenir des espèces théoriques mais qu'aucune pièce ni billet n'a été dénombré (total à 0,00 €), le bouton final reste grisé avec l'indication « Veuillez compter votre tiroir ». L'oubli de comptage est ainsi rendu impossible.
                
                [T]Pointage obligatoire des cartes bancaires et chèques
                Pour éliminer les erreurs de saisie sur le TPE, la validation de la session est conditionnée au pointage exhaustif des encaissements hors espèces :
                
                [📸 session_pointage_cb_modal.jpg | right | md]
                [ST][ICON: CreditCard | 14 | text-teal-600] Pointage des Cartes Bancaires :
                Cliquez sur [BTN: À Pointer] pour afficher les transactions du poste. Vous pouvez cocher chaque ligne individuellement ou cliquer sur le raccourci [BTN: Tout pointer] si le total de votre télécollecte correspond au centime près.
                Si une ligne est décochée, le statut validé saute instantanément et exige une réconciliation complète.
                
                [ST][ICON: FileText | 14 | text-teal-600] Pointage des Chèques :
                Procédez de même pour pointer la liasse physique des chèques face aux montants enregistrés sur le poste.[CLEAR]
                
                [T]Dépôt Banque et alerte de prélèvement à zéro
                [ST][ICON: Building | 14 | text-teal-600] Dépôt Banque (Prélèvement) :
                Indiquez la somme prélevée pour être déposée au coffre ou en banque.
                [WARNING]Sécurité Prélèvement à 0,00 € (Appui long)
                Si vous laissez la case à 0,00 € (oubli fréquent lors du départ), un écran d'alerte spécifique apparaît. La validation exige de maintenir enfoncé le bouton [BTN: Maintenir pour valider] pendant une seconde complète pour confirmer qu'aucun dépôt n'est emporté.
                
                [ST][ICON: Wallet | 14 | text-teal-600] Fond laissé pour demain :
                Le solde restant ([BTN: Total Compté] - [BTN: Dépôt Banque]) formera le fond attendu de la prochaine session.
                
                [📸 session_alerte_ecart_fin.jpg | left | sm]
                [T]Contrôle des écarts, tolérance et approbation
                TipTac calcule l'écart net entre le réel compté et le théorique attendu :
                — Tolérance automatique (1,00 €) : Les écarts d'arrondis inférieurs ou égaux à 1,00 € portent la mention « Toléré automatiquement » et n'interrompent pas le flux de travail.
                — Écarts supérieurs : Si la différence dépasse le seuil paramétré, l'écran rouge « Écart détecté ! » s'interpose. La validation requiert alors la saisie d'un code [PERM: Manager] ou [PERM: Admin], suivie d'un appui long de confirmation sur [BTN: Maintenir pour valider l'écart].
                [CLEAR]
                `
        },
        {
            id: "cloture-globale-z",
            title: "5. Clôture Globale (Z), sécurité anti-oubli et forçage",
            content:
                `
                En fin de journée commerciale, une fois les clients partis et tous les postes fermés par le personnel, le gérant ou responsable procède au scellement de la journée.
                
                Un rôle [PERM: Manager] ou [PERM: Admin] est impératif pour lancer la clôture Z. Une permission individuelle de réaliser les clôtures Z peut également être accordée aux rôles Vendeur ou Préparateur depuis l'écran de configuration des utilisateurs.
                
                [📸 session_cloture_z_dashboard.jpg | lg]
                [T]Tableau de bord de synthèse du Z
                L'écran « Clôture Globale (Z) » rassemble et consolide l'ensemble des données d'activité de votre commerce :
                — Le bandeau supérieur présente 3 compteurs flash : [KEY: CA TTC], [KEY: Panier Moy.] et [KEY: Tickets].
                — La colonne de gauche présente la grille compacte des paiements avec montants et volumes de transactions (traductions claires : [KEY: ESPÈCES], [KEY: CHÈQUES], [KEY: CAGNOTTE FIDÉLITÉ], [KEY: WEB / EN LIGNE]), ainsi que le [KEY: Top Rayons] (les 3 familles motrices avec montant de CA et jauge de contribution relative).
                
                [📸 session_detail_caisses.jpg | right | md]
                [T]Bilan par Caisse et équilibre comptable universel
                La colonne de droite détaille la clôture physique de chaque terminal :
                — Chaque poste détaille son CA propre, son badge d'écart [KEY: Écart] (gris si nul, vert si positif, rouge si déficit), son [KEY: Dépôt] bancaire prélevé et le fond [KEY: Laissé en caisse] pour le lendemain.
                — Règle de calcul du fond théorique : le moteur se base en priorité sur le fond déclaré le matin (ou celui de la veille), additionne les ventes espèces et entrées diverses, puis déduit les sorties et dépôts réalisés en cours de journée.
                — Formule comptable universelle du réel : le montant compté global consolide mathématiquement [KEY: Total Prélèvements + Total Laissé en caisse].
                — En pied de colonne, deux synthèses financières automatisent votre remise :
                  • [KEY: Banque Total (Journée + Z)] : cumule les dépôts effectués en cours de journée et les prélèvements de fin de service.
                  • [KEY: Caisse Globale (Restant)] : somme exacte des espèces physiques restant dans les tiroirs de l'ensemble du magasin.
                [CLEAR]
                
                [📸 session_force_z_modal.jpg | left | md]
                [T]Sécurité Anti-Oubli et Forçage à la Jauge (2 secondes)
                Si un ou plusieurs vendeurs ont oublié de faire leur [BTN: Fin de Service], la clôture Z standard est verrouillée et la fenêtre « Caisses encore ouvertes » apparaît.
                Elle liste les terminaux encore ouverts et alerte le manager qu'une clôture autoritaire déclarera le contenu de leurs tiroirs comme totalement vide (0,00 €), générant un écart négatif égal au montant théorique non recompté.
                
                [WARNING]Protection anti-clic accidentel par jauge de maintien
                Pour empêcher tout forçage involontaire irréversible, le bouton [BTN: MAINTENIR POUR FORCER] intègre une sécurité capacitive : vous devez maintenir votre doigt ou le clic de la souris enfoncé sans relâcher pendant 2 secondes consécutives. 
                Une jauge rouge se remplit visuellement de 0 % à 100 % sous votre pression avant d'exécuter la fermeture forcée des sessions et de rouvrir l'écran du Z.
                [CLEAR]
                `
        },
        {
            id: "ticket-z-nf525",
            title: "6. Modale du Ticket Z, conformité NF525 et réimpressions",
            content:
                `
                Dès la validation de la clôture, TipTac enregistre la journée dans la base inaltérable et ouvre la modale de finalisation avec impression automatique du ticket thermique officiel.
                
                [📸 session_modal_ticket_z.jpg | lg]
                [T]Organisation du panneau de finalisation
                L'écran se compose d'une barre de commande à gauche et d'un visualiseur de reçu à droite :
                [ST][ICON: CheckCircle | 14 | text-teal-600] Confirmation visuelle :
                Un encart vert contrasté confirme : « Caisse Clôturée - Impression du Z lancée ».
                [ST][ICON: Printer | 14 | text-teal-600] Bouton « RÉIMPRIMER LE Z » :
                Un bouton sécurisé temporisé permet de renvoyer une seconde copie thermique sans risque de bloquer la file d'impression.
                [ST][ICON: FileText | 14 | text-teal-600] Bouton « FACTURE A4 » :
                Formate l'ensemble de la clôture sur un document A4 prêt pour l'archivage classeur ou l'envoi en PDF à votre expert-comptable.
                [ST][ICON: Lock | 14 | text-teal-600] Bouton « Fin Session » :
                Verrouille définitivement le poste pour la nuit et ramène le terminal sur l'écran d'accueil sécurisé.
                
                [📸 session_ticket_z_complet.jpg | right | sm]
                [T]Anatomie légale du Ticket Z thermique (NF525)
                Le ticket imprimé sur papier thermique 80 mm structure l'audit fiscal complet :
                — [KEY: En-tête légal] : Enseigne, forme juridique, ville, SIRET, RCS, NAF, TVA intra, numéro séquentiel inaltérable (ex : [KEY: CLÔTURE JOURNALIÈRE N° 42] ou [KEY: ARCHIVE N° Z-42] pour un duplicata) et plage de numérotation chronologique des tickets de la journée (ex : [KEY: Tickets : N° 1024 à N° 1089]).
                — [KEY: Ventilation comptable du CA] : Total CA TTC et Total HT, accompagnés de la ventilation par nature d'activité : [KEY: Ventes négoce] (biens), [KEY: Production propre] et [KEY: Prestations services].
                — [KEY: Retours et déductions] : Ligne distincte [KEY: Dont Retours (X)] isolant le nombre d'articles repris et le montant remboursé, montant des [KEY: Éco-participations] incluses et remises de cagnotte fidélité accordées.
                — [KEY: Ventilation TVA par taux] : Détaille pour chaque taux légal la base soumise et le montant de taxe collecté (ex : [KEY: TVA 20% (HT: 150.00 €) : 30.00 €]).
                — [KEY: Répartition des encaissements] : Détaille chaque mode de règlement perçu avec son volume de transactions (quantité). Les lignes dont le solde net est nul (0,00 €) sont automatiquement épurées pour une parfaite clarté.
                — [KEY: Détail par Caisse & Web] : Liste chaque terminal physique (avec son CA, son écart, son dépôt, son fond laissé et la ventilation de ses paiements) ainsi que la ligne dédiée [KEY: 🌐 Boutique Web] pour les flux Click & Collect en ligne.
                — [KEY: Mouvements de Tiroir] : Récapitule le fond initial, les ventes espèces, les entrées/sorties diverses, le montant [KEY: THÉORIQUE EN CAISSE], le [KEY: COMPTÉ (RÉEL)] et l'[KEY: ÉCART CONSTATÉ], suivi du [KEY: TOTAL DÉPOSÉ BANQUE] et du [KEY: FOND LAISSÉ POUR DEMAIN].
                [NOTE]Archives Périodiques : Lors de l'édition d'une clôture mensuelle ou annuelle, les sections physiques de pointage de tiroir sont automatiquement masquées pour se concentrer sur les agrégats fiscaux et comptables.
                [CLEAR]
                
                [T]Cumul Perpétuel Inaltérable et Signature Numérique SHA-256
                Conformément aux normes anti-fraude NF525, deux sceaux cryptographiques terminent le reçu :
                [ST][ICON: ShieldCheck | 14 | text-teal-600] Le Grand Total TTC Perpétuel :
                Ce montant cumulatif grandit à chaque clôture et additionne l'intégralité du chiffre d'affaires réalisé depuis le tout premier jour d'exploitation du logiciel. Il ne peut jamais être réinitialisé, même en cas de changement d'exercice comptable.
                [ST][ICON: Lock | 14 | text-teal-600] La signature cryptographique :
                Une empreinte numérique unique générée par algorithme SHA-256. Elle fusionne les totaux du jour avec la signature du Z précédent (ou le sceau d'initialisation de la caisse), formant une chaîne de blocs continue qu'aucun utilisateur ni technicien ne peut altérer a posteriori sans briser la preuve fiscale.
                `
        }
    ]
};