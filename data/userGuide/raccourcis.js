export default {
    id: "RACCOURCIS",
    title: "Raccourcis Clavier & Pavé Numérique",
    category: "TipTacCaisse",
    iconName: "Zap",
    color: "text-amber-500",
    sections: [
        {
            id: "saisie-pave-numerique",
            title: "Saisie au Pavé Numérique & Calculs",
            items: [
                { 
                    key: "0 à 9", 
                    desc: "Saisie directe d'une quantité avant de scanner un article, ou saisie d'un montant pour un article à prix libre (0 €)." 
                },
                { 
                    key: ", ou .", 
                    desc: "Séparateur décimal. Sur un article à prix libre, la saisie de la 2ᵉ décimale valide automatiquement l'ajout au panier." 
                },
                { 
                    key: "* ou X", 
                    desc: "Multiplicateur. Permet de multiplier une quantité (« 3 * » puis l'article) ou de saisir quantité et prix combinés (« 3 * 12,50 » puis l'article)." 
                },
                { 
                    key: "-", 
                    desc: "Quantité négative (Mode Retour). Préfixe la ligne par un signe moins pour reprendre un article (action réservée aux profils autorisés)." 
                },
                { 
                    key: "Entrée", 
                    desc: "Valide la saisie numérique en cours ou applique le prix libre tapé." 
                },
                { 
                    key: "Suppr / C", 
                    desc: "Efface instantanément la saisie numérique en mémoire ou annule l'attente de prix libre." 
                },
                { 
                    key: "Retour ⌫", 
                    desc: "Efface le dernier caractère tapé au pavé numérique." 
                }
            ]
        },
        {
            id: "navigation-panier",
            title: "Navigation & Gestion du Panier",
            items: [
                { 
                    key: "Flèche Droite →", 
                    desc: "Bascule directement sur l'onglet suivant du clavier tactile de vente." 
                },
                { 
                    key: "Flèche Gauche ←", 
                    desc: "Revient sur l'onglet précédent du clavier tactile." 
                },
                { 
                    key: "Page Up", 
                    desc: "Ouvre la recherche Client pour associer une fiche au ticket par nom, téléphone ou code fidélité." 
                },
                { 
                    key: "Page Down", 
                    desc: "Ouvre le Catalogue Articles pour rechercher un produit hors clavier ou créer une référence rapide." 
                },
                { 
                    key: "/", 
                    desc: "Touche contextuelle : met le ticket en attente si le panier est rempli, ou ouvre la liste des attentes si le panier est vide." 
                },
                { 
                    key: "Home (Début)", 
                    desc: "Vide intégralement le panier en cours (nécessite une confirmation de sécurité)." 
                },
                { 
                    key: "Échap", 
                    desc: "Ferme la fenêtre ou modale active, ou annule l'action de confirmation en cours." 
                }
            ]
        },
        {
            id: "encaissement-reglement",
            title: "Fenêtre d'Encaissement (Touches Réflexes)",
            items: [
                { 
                    key: "F12 ou +", 
                    desc: "Valide le panier et ouvre l'écran de paiement (ou génère directement le document officiel si la caisse est en mode Devis)." 
                },
                { 
                    key: "/", 
                    desc: "Dans la fenêtre de règlement : sélectionne la Carte Bancaire (CB) et télétransmet le montant au TPE." 
                },
                { 
                    key: "*", 
                    desc: "Dans la fenêtre de règlement : sélectionne les Espèces. Si vous tapez le montant remis avant d'appuyer sur *, le rendu s'affiche immédiatement." 
                },
                { 
                    key: "-", 
                    desc: "Dans la fenêtre de règlement : sélectionne le règlement par Chèque." 
                },
                { 
                    key: "Entrée", 
                    desc: "Dans la fenêtre de règlement : valide le montant en espèces ou finalise la vente dès que le reste à payer atteint 0,00 €." 
                }
            ]
        },
        {
            id: "supervision-manager",
            title: "Supervision & Raccourcis Manager",
            items: [
                { 
                    key: "F6", 
                    desc: "Changer d'opérateur : ouvre le pavé PIN sans fermer ni vider le panier en cours (relais caisse)." 
                },
                { 
                    key: "End (Fin)", 
                    desc: "Ouvre l'Historique général des ventes (recherche de tickets, réimpressions et retours d'articles)." 
                }
            ]
        }
    ]
};