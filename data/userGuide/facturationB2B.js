export default {
    id: "FACTURATION_B2B",
    title: "Facturation B2B, Encours & Factur-X",
    category: "TipTacCaisse",
    iconName: "Briefcase",
    color: "text-indigo-700",
    articles: [
        {
            id: "b2b-comptes-pro-plafonds-tarifs",
            title: "1. Comptes Professionnels, plafonds d'encours et tarification B2B",
            content:
                `
                Le module B2B transforme vos fiches clients professionnelles en véritables comptes à terme dotés d'un suivi d'encours, d'une tarification dédiée et d'une facturation conforme aux normes **Factur-X (EN 16931)** et au **Décret 2022-1299**.

                Pour créer ou configurer les droits de crédit d'un client B2B, l'opérateur doit disposer de la permission [PERM: Gestion crédit & comptes B2B] (voir [LINK: ADMINISTRATION_LOGICIEL#personnalisation-permissions-fines | Permissions fines]).

                [T]Identité légale et coordonnées de facturation B2B
                Dans l'onglet professionnel de la fiche client (accessible depuis [LINK: CLIENTS_CRM#creation-edition-fiches-rgpd | Annuaire Clients]), renseignez les mentions exigées pour l'e-invoicing et la comptabilité :
                — [KEY: Raison Sociale] & [KEY: N° SIRET] (14 chiffres) / [KEY: N° SIREN] (9 chiffres obligatoires pour la facturation B2B).
                — [KEY: N° TVA Intracommunautaire] : Indispensable pour les clients assujettis.
                — [KEY: Code auxiliaire comptable] : Par exemple [KEY: 411CLIENT], utilisé dans les écritures du journal [KEY: FA] et le fichier FEC.
                — [KEY: E-mail de facturation] : Adresse dédiée à l'envoi automatique des factures PDF et relances.
                — [KEY: Adresse de livraison distincte] : Conformément au Décret 2022-1299, si la marchandise est livrée sur un chantier ou un dépôt différent du siège social, saisissez l'adresse de livraison séparée afin qu'elle figure sur la facture.

                [T]Paramètres de crédit, plafond d'encours et échéances
                Dans la section crédit B2B de la fiche client, définissez les règles financières du compte :
                — [BTN: Autoriser le paiement en compte] : Débloque le règlement différé [BTN: En Compte] sur le terminal de caisse et les bons de livraison facturables.
                — [KEY: Plafond d'encours (€)] : Montant maximum de crédit autorisé. En environnement connecté [PLAN: Plan Connect], ce plafond est piloté **globalement à l'échelle du réseau** et consolidé entre tous vos magasins.
                — [BTN: Compte bloqué] : Permet de geler immédiatement tout nouvel achat en compte (avec saisie d'un [KEY: Motif de blocage] horodaté et journalisé).
                — [KEY: Délai de paiement] : Choisissez l'échéance contractuelle ([KEY: 0], [KEY: 30], [KEY: 45] ou [KEY: 60 jours]).
                — [KEY: Mode d'échéance] : [KEY: COMPTANT] (à réception), [KEY: NET] (date de facture + délai), [KEY: FIN_DE_MOIS] (fin du mois + délai) ou [KEY: FIN_DE_MOIS_LE_10] (le 10 du mois suivant).
                — [KEY: Fréquence de facturation] : [KEY: MENSUELLE] (regroupement de fin de mois), [KEY: QUINZAINE] ou [KEY: IMMEDIATE].
                — [KEY: Type de règlement préféré] : Moyen de paiement habituel ([KEY: VIREMENT], [KEY: CHEQUE], [KEY: PRELEVEMENT], [KEY: CARTE_PRO]).

                [T]Les 2 modes de tarification B2B
                Vous pouvez attribuer au client professionnel l'un des deux régimes tarifaires suivants :
                [ST][ICON: Percent | 14 | text-indigo-600] 1. Prix de vente avec remise ([KEY: PRIX_VENTE_REMISE]) :
                Applique une remise fixe en pourcentage sur le prix public TTC. Au comptoir, le moteur applique automatiquement la règle « le meilleur l'emporte » entre cette remise B2B et les promotions en cours sur le rayon.
                [ST][ICON: Calculator | 14 | text-indigo-600] 2. Coût + Marge sur PA HT ([KEY: PA_HT_COEFF]) :
                Calcule automatiquement un prix de vente B2B à partir du Prix d'Achat HT de l'article multiplié par un coefficient de marge (ex : [KEY: x 1,25]). Si un article n'a pas de PA HT renseigné ou si le prix calculé présente un risque de revente à perte, TipTac affiche une alerte explicite avant validation.

                [WARNING]Protections légales RGPD (10 ans) et blocage de fusion
                Conformément à l'article L123-22 du Code de commerce, il est strictement impossible d'**anonymiser** un client dont l'encours B2B est non nul ou qui possède une facture/avoir B2B émis depuis moins de 10 ans. De même, l'outil de [BTN: Fusion] bloque l'absorption d'une fiche source qui détient déjà des factures, BL ou règlements B2B afin de préserver l'intégrité comptable.
                `
        },
        {
            id: "b2b-ventes-en-compte-comptoir",
            title: "2. Ventes « En compte » au comptoir et déblocage plafond Manager",
            content:
                `
                Lorsqu'un client professionnel vient retirer des marchandises au comptoir sans payer immédiatement, l'équipier peut enregistrer le ticket en paiement différé.

                [T]Conditions d'activation du bouton « En Compte »
                Sur l'écran d'encaissement de la caisse tactile, le bouton [BTN: En Compte] n'est actif que si :
                1. Un client professionnel est identifié sur le panier.
                2. L'option [KEY: Autoriser le paiement en compte] est activée sur sa fiche.
                3. Son compte n'est pas marqué comme bloqué.

                [T]Contrôle de l'encours en temps réel
                Avant de valider la transaction, TipTac calcule instantanément l'**encours engagé total** du client :
                — Factures émises non encore soldées (reste à payer).
                — Ventes « En compte » et Bons de Livraison [KEY: BL_A_FACTURER] déjà validés mais en attente de facturation.
                — Montant TTC du panier en cours.
                Une jauge visuelle indique la marge disponible restante avant d'atteindre le [KEY: Plafond d'encours].

                [WARNING]Règles strictes de fonctionnement en V1
                — **Pas de paiement mixte** : Un ticket validé [BTN: En Compte] passe en totalité sur l'encours client (il n'est pas possible de payer une partie en espèces/CB et le reste en compte sur un même ticket).
                — **Aucun point de fidélité** : Les achats enregistrés « En compte » ne génèrent pas de points de fidélité.
                — **Retours obligatoirement en compte** : Si le client rapporte un article acheté sur un ticket [KEY: EN_COMPTE], le remboursement s'effectue exclusivement en [KEY: EN_COMPTE] (jamais en espèces ni sur carte bancaire), venant diminuer son encours à facturer.

                [T]Déblocage exceptionnel par code PIN Manager
                Si le panier fait dépasser le plafond d'encours autorisé (ou si le compte nécessite une dérogation), l'encaissement est bloqué par sécurité :
                1. Un responsable muni de la permission [PERM: Déblocage plafond B2B] peut saisir son code PIN sur la fenêtre d'autorisation.
                2. Le responsable saisit un motif explicite de dépassement (ex : « Accord direction — chantier en cours »).
                3. L'autorisation, l'identité du responsable et le montant dépassé sont immédiatement scellés dans le journal d'audit anti-fraude des paniers.

                [T]Justificatif remis au client
                À l'issue de la validation, la caisse édite un **justificatif de passage / Bon de Livraison non acquitté** mentionnant explicitement que la vente est portée en compte client et que la facture officielle ([KEY: FAC-YYYY-XXXX]) sera émise ultérieurement selon la périodicité convenue. Aucune entrée d'argent n'est ajoutée au tiroir-caisse ni à la télécollecte TPE.
                `
        },
        {
            id: "b2b-bl-externes-facturables",
            title: "3. Bons de livraison externes facturables et cessions internes",
            content:
                `
                En complément des passages au comptoir, le module [LINK: LOGISTIQUE_STOCKS#sorties-b2b-externes-bl-a4 | Sorties B2B & Externes] permet d'expédier de la marchandise depuis la réserve ou de facturer des prestations annexes sur Bon de Livraison (BL).

                [T]Bascule entre Cession Interne et Bon de Livraison à facturer
                Lors de la création d'une sortie externe, sélectionnez la nature de l'opération :
                [ST][ICON: Truck | 14 | text-sky-600] 1. Cession Interne ([KEY: CESSION_INTERNE]) :
                Destinée aux prêts de matériel, démonstrations ou cessions hors circuit de vente classique. Valorisée au Prix d'Achat HT sur le document interne, sans impact sur l'encours client.
                [ST][ICON: FileText | 14 | text-indigo-600] 2. Bon de Livraison à facturer ([KEY: BL_A_FACTURER]) :
                Obligatoirement rattaché à un client professionnel de votre annuaire. Dès validation :
                — Le stock physique est décrémenté dans le registre [KEY: SORTIE_B2B].
                — Le montant est immédiatement ajouté à l'encours non facturé du client (avec contrôle du plafond et déblocage PIN possible).
                — Le BL devient automatiquement éligible pour être regroupé dans la prochaine facture B2B du client.

                [T]Souplesse de saisie : décimales, hors stock et lignes libres
                Pour répondre aux réalités des chantiers et artisans :
                — **Quantités décimales** : Saisissez des quantités fractionnaires (ex : [KEY: 2,50] m², [KEY: 12,75] kg ou litres).
                — **Articles non gérés en stock et lignes libres** : Vous pouvez ajouter des services ou fournitures ponctuelles (ex : « Forfait livraison palette », « Main d'œuvre pose ») avec désignation libre, prix unitaire et taux de TVA.
                — **Tarification et marges** : Si le client est en mode [KEY: PA_HT_COEFF], le tarif est calculé automatiquement avec alerte immédiate si le Prix d'Achat HT est manquant ou inférieur au seuil de revente à perte.

                [T]Confidentialité sur le BL A4 et annulation avant facturation
                — **Masquage du Prix d'Achat HT** : En mode [KEY: BL_A_FACTURER], le Bon de Livraison A4 imprimé pour le client masque strictement vos coûts d'achat HT et affiche uniquement les prix de vente destinés au client.
                — **Annulation avant facturation** : Tant qu'un BL n'a pas été intégré à une facture B2B émise, vous pouvez l'annuler depuis l'historique des sorties. Le stock est alors restitué automatiquement avec une trace d'audit inverse. Dès qu'il est facturé, il est verrouillé et seule l'émission d'un avoir B2B peut le corriger.
                `
        },
        {
            id: "b2b-tableau-bord-factures-facturx",
            title: "4. Tableau de bord Encours, Balance âgée, Facturation B2B & Factur-X",
            content:
                `
                Accessible depuis le Back-Office (permission [PERM: Facturation B2B]), le module « Facturation B2B & Encours » centralise le suivi des créances clients, la génération des factures et avoirs, et l'archivage conforme.

                [T]Tableau de bord des encours et Balance Âgée
                L'écran d'accueil présente en direct la santé financière de votre portefeuille professionnel :
                — **Synthèse globale** : Total des factures dues, part **Non échue**, part **Échue (en retard)**, montant **En attente de facturation** (tickets [KEY: EN_COMPTE] + [KEY: BL_A_FACTURER]) et liste des comptes dépassant leur plafond ou bloqués.
                — **Balance Âgée** : Ventilation automatique des créances impayées par ancienneté de retard : [KEY: Non échu], [KEY: 1–30 jours], [KEY: 31–60 jours], [KEY: 61–90 jours] et [KEY: > 90 jours].

                [T]Cycle de vie NF525 : Brouillon → Émission → Avoir
                TipTac respecte strictement l'inaltérabilité des pièces comptables :
                [ST][ICON: SquarePen | 14 | text-amber-600] 1. Brouillon (Unitaire ou Génération par lot) :
                Créez une facture brouillon pour un client ou lancez une **génération par lot** sur une période (ex : fin de mois) pour regrouper en un clic tous les tickets [KEY: EN_COMPTE] et BL externes non encore facturés de vos clients Pro. Tant que la facture est à l'état [KEY: BROUILLON], vous pouvez ajuster les notes, ajouter/retirer des BL ou la supprimer librement.
                [ST][ICON: Lock | 14 | text-indigo-700] 2. Émission atomique inaltérable ([KEY: FAC-YYYY-XXXX]) :
                Lorsque vous cliquez sur [BTN: Émettre la facture], le système attribue de façon atomique un numéro séquentiel continu sans rupture de séquence ([KEY: FAC-YYYY-XXXX]), calcule la date d'échéance, génère le scellement cryptographique et fige définitivement le document en lecture seule. Une facture émise ne peut **jamais** être modifiée ni supprimée.
                [ST][ICON: RotateCcw | 14 | text-rose-600] 3. Émission d'un Avoir B2B ([KEY: AVO-YYYY-XXXX]) :
                En cas d'erreur de facturation ou de retour après facturation, cliquez sur [BTN: Créer un Avoir] depuis la facture d'origine. Vous pouvez émettre un avoir total ou partiel : sa numérotation séquentielle suit le format [KEY: AVO-YYYY-XXXX] et son montant vient automatiquement en déduction du reste à payer de la facture liée.

                [T]Conformité Factur-X (EN 16931) & Décret 2022-1299
                Chaque facture et avoir émis intègre :
                — **Réconciliation TVA au centime près** : Calcul normé EN 16931 ventilant chaque taux de TVA sans écart d'arrondi entre la somme des lignes et le pied de facture.
                — **Données structurées Factur-X** : Génération automatique d'un fichier [KEY: facturx_json] normalisé prêt pour la transmission vers les plateformes de dématérialisation partenaires (PDP).
                — **Mentions légales étendues (Décret 2022-1299)** : Numéro SIREN du client, adresse de livraison distincte le cas échéant, nature de l'opération (biens / services / mixte), option TVA sur les débits, coordonnées bancaires IBAN/BIC, taux de pénalités de retard et indemnité forfaitaire de recouvrement (40 €) configurés dans les [LINK: PARAMETRES_MAGASIN#mentions-legales-conformite-nf525 | Paramètres Magasin].

                [T]PDF A4 d'émission, Duplicata « ACQUITTÉE » et envoi e-mail
                — **PDF original figé** : Dès l'émission, TipTac génère et archive un rendu PDF A4 strictement figé à la date d'émission (sans tampon ultérieur ni règlements postérieurs).
                — **Duplicata avec tampon « ACQUITTÉE »** : Lorsque la facture est soldée, l'édition ou le téléchargement d'un duplicata affiche automatiquement le tampon [KEY: ACQUITTÉE] avec le détail des règlements reçus.
                — **Envoi par e-mail (Unitaire ou par lot)** : Expédiez vos factures ou relances directement depuis le tableau de bord vers l'adresse de facturation du client.
                `
        },
        {
            id: "b2b-reglements-lettrage-releve",
            title: "5. Règlements (Back-Office & Comptoir), lettrage et Relevé de compte",
            content:
                `
                L'encaissement des factures B2B émises peut être enregistré à distance par la comptabilité (Back-Office) ou directement au magasin si le client vient régler sa facture au comptoir (permission [PERM: Règlements B2B]).

                [T]Deux circuits de règlement complémentaires
                [ST][ICON: Building | 14 | text-indigo-600] 1. Règlement Back-Office (Journal BQ) :
                Depuis le module « Facturation B2B », enregistrez les paiements reçus en banque ou par courrier : [KEY: VIREMENT], [KEY: CHEQUE], [KEY: PRELEVEMENT] ou [KEY: CARTE_PRO]. Indiquez la référence bancaire (ex : référence de virement ou numéro de chèque), la date d'encaissement et le montant reçu.
                [ST][ICON: CreditCard | 14 | text-teal-600] 2. Règlement de facture au comptoir ([KEY: REGLEMENT_FACTURE]) :
                Si un client professionnel se présente en caisse pour solder une facture échue, ouvrez la fonction de règlement de facture sur le terminal et encaissez en [KEY: CB], [KEY: Espèces] ou [KEY: Chèque]. Le montant entre bien dans votre tiroir-caisse physique ou télécollecte TPE de la journée, mais la transaction porte le type [KEY: REGLEMENT_FACTURE] afin d'être **strictement exclue du Chiffre d'Affaires du jour** (déjà comptabilisé lors de la vente initiale).

                [T]Lettrage multi-factures et écarts de centimes
                Lorsqu'un client règle plusieurs factures en un seul virement ou effectue un acompte partiel :
                — Répartissez le règlement sur une ou plusieurs factures ouvertes (lettrage automatique de la plus ancienne à la plus récente ou ventilation manuelle ligne par ligne).
                — Le statut des factures bascule automatiquement de [KEY: EMISE] vers [KEY: PARTIELLEMENT_PAYEE] puis [KEY: PAYEE] dès que le reste à payer atteint [KEY: 0,00 €].
                — **Écarts de règlement mineurs** : En cas d'écart de quelques centimes lors d'un virement, TipTac propose d'ajuster et de solder proprement le lettrage avec écriture comptable d'écart.

                [WARNING]Annulation ou rejet d'impayé (jamais de suppression)
                Si un chèque revient impayé ou qu'une saisie comporte une erreur, un règlement validé n'est **jamais supprimé** : utilisez l'action [BTN: Annuler / Rejeter] en saisissant un motif obligatoire. Le système génère une contre-passation horodatée et réouvre immédiatement le reste à payer sur les factures qui avaient été lettrées.

                [T]Relevé de compte client (Grand-Livre A4 / PDF)
                Depuis la fiche d'un client B2B, cliquez sur [BTN: Relevé de compte] pour éditer ou exporter en PDF son grand-livre chronologique sur une période choisie : factures émises, avoirs, règlements imputés, solde progressif et récapitulatif de sa balance âgée.
                `
        },
        {
            id: "b2b-comptabilite-fec-liasse",
            title: "6. Comptabilité B2B (418100 / 411000), Clôture Z, FEC et liaison Cloud",
            content:
                `
                TipTac relie automatiquement les flux commerciaux B2B, la caisse physique et les exports comptables sans double saisie ni double comptage de chiffre d'affaires.

                [T]Schéma des écritures comptables B2B
                — **À la vente au comptoir ([KEY: EN_COMPTE]) — Journal [KEY: VT]** : Le chiffre d'affaires HT et la TVA collectée sont comptabilisés au jour de la vente, avec pour contrepartie le compte d'attente [KEY: 418100] (« Clients — factures à établir »).
                — **À l'émission de la facture ([KEY: FAC-YYYY-XXXX]) ou de l'avoir ([KEY: AVO-YYYY-XXXX]) — Journal [KEY: FA]** : Le compte [KEY: 418100] est soldé au profit du compte client [KEY: 411000] (suffixé du [KEY: Code auxiliaire comptable] du client s'il est renseigné). Les éventuels Bons de Livraison externes [KEY: BL_A_FACTURER] repris dans la facture voient leur CA et leur TVA comptabilisés à cette date d'émission dans le journal [KEY: FA].
                — **Au règlement Back-Office — Journal [KEY: BQ]** : L'encaissement crédite le compte client [KEY: 411000] par le débit des comptes de trésorerie ([KEY: 512000] / [KEY: 511200]).

                [T]Impact sur la Clôture Journalière (Z)
                Dans le Z de fin de journée (voir [LINK: SESSIONS_CLOTURES#cloture-globale-z | Clôture Globale Z]) :
                — Les ventes [KEY: EN_COMPTE] sont intégrées au **Chiffre d'Affaires TTC/HT et à la TVA**, mais isolées hors du tiroir espèces et de la télécollecte TPE.
                — Les encaissements [KEY: REGLEMENT_FACTURE] réalisés au comptoir sont intégrés au **contrôle physique du tiroir et du TPE**, mais strictement exclus du CA du jour.

                [T]Liasse mensuelle et FEC DGFIP
                Lors de l'export depuis le [LINK: LEGAL_COMPTA#hub-expert-comptable | Hub Expert-Comptable] :
                — Le **Fichier FEC** officiel inclut désormais les journaux [KEY: VT], [KEY: FA] et [KEY: BQ] équilibrés au centime près.
                — La liasse mensuelle (et son envoi vers le Cloud) embarque deux fichiers CSV dédiés : [KEY: Registre_Factures_B2B_{YYYY-MM}.csv] et [KEY: Reglements_B2B_{YYYY-MM}.csv].
                — Si une facture ou un avoir B2B est émis tardivement sur un mois déjà exporté, TipTac marque automatiquement ce mois à régénérer afin que la liasse Cloud et votre expert-comptable reçoivent les écritures à jour.

                [TIP]Pilotage multi-sites et relances à distance : Si votre enseigne utilise TipTac Cloud, consultez [LINK: TIPTAC_CLOUD#cloud-facturation-encours-b2b | Facturation & Encours B2B sur TipTac Cloud] pour suivre l'encours consolidé du réseau, envoyer vos relances par e-mail et transmettre des règlements ou demandes de brouillons vers les caisses.
                `
        }
    ]
};
