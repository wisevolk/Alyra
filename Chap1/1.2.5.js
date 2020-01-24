class Noeud {
    constructor(val) {
        this.valeur = val;
        this.gauche = undefined;
        this.droite = undefined;
        this.parent = undefined;
    }
    
    // Affiche la valeur du noeud et la valeur de ses deux enfants et de son parent
    toString() {
        var out = "Noeud " + this.valeur + ":  L";
        
        this.gauche === undefined ? out += "-" : out += this.gauche.valeur;
        out += " R";
        
        this.droite === undefined ? out += "-" : out += this.droite.valeur;
        out += " P";
        
        this.parent === undefined ? out += "-" : out += this.parent.valeur;
        log(out);
    }
    
    ajouterNoeud(valeur) {
        if (valeur < this.valeur) {
            if (this.gauche === undefined) {
                this._ajouterNoeud(new Noeud(valeur));
            } else {
                this.gauche.ajouterNoeud(valeur);
            }
        } else {
            if (this.droite === undefined) {
                this._ajouterNoeud(new Noeud(valeur));
            } else {
                this.droite.ajouterNoeud(valeur);
            }
        }
    }
    
    _ajouterNoeud(noeud) {
        if (noeud.valeur < this.valeur) {
            this.gauche = noeud;
        } else {
            this.droite = noeud;
        }
        noeud.parent = this;
    }
    
    trouverNoeud(valeur) {
        if (this.valeur === valeur) {
            return this;
        } else if (valeur < this.valeur && this.gauche !== undefined) {
            return this.gauche.trouverNoeud(valeur);
        } else if (valeur >= this.valeur && this.droite !== undefined) {
            return this.droite.trouverNoeud(valeur);
        }
        return undefined;
    }
    
    supprimerNoeud(valeur) {}
    
    infixe() {
        let parcours = [];
        if (this.gauche !== undefined) {
            parcours = [].concat(parcours, this.gauche.infixe());
        }
        parcours.push(this.valeur);
        if (this.droite !== undefined) {
            parcours = [].concat(parcours, this.droite.infixe());
        }
        return parcours;
    }
    
    afficher() {
        var out = "Noeud " + this.valeur + ": L";
        this.gauche === undefined ? out += "-" : out += this.gauche.valeur;
        out += " R";
        this.droite === undefined ? out += "-" : out += this.droite.valeur;
        out += " P";
        this.parent === undefined ? out += "-" : out += this.parent.valeur;
        console.log(out);       
        
        if (this.gauche !== undefined) this.gauche.afficher();
        if (this.droite !== undefined) this.droite.afficher();
    }
}

class Arbre {
    constructor() {
        this.racine = undefined;
    }
    
    //Méthode pour trouver une valeur donnée dans un arbre binaire de recherche
    trouverNoeud(valeur) {
        if (this.racine !== undefined) return this.racine.trouverNoeud(valeur);        
    }
    
    //Méthode pour ajouter un noeud
    ajouterNoeud(valeur) {
        if (this.racine !== undefined) this.racine.ajouterNoeud(valeur);
        else this.racine = new Noeud(valeur);
    }
    
    //Méthode pour supprimer un noeud
    supprimerNoeud(valeur) {
        if (this.racine !== undefined) return this.racine.supprimerNoeud(valeur);
    }
    
    //Méthode pour afficher l’arbre selon un parcours infixe
    //Cette méthode doit retournée un tableau contenant la valeur des noeuds
    infixe() {
        if (this.racine !== undefined) return this.racine.infixe();
    }
    
    //Méthode pour afficher la valeur d'un noeud à partir de sa valeur
    printNoeud (valeur) {
        let noeud = this.trouverNoeud(valeur);
        if (noeud !== undefined) noeud.toString();
    }
}

let a = new Arbre();
a.ajouterNoeud(30);
a.ajouterNoeud(18);
a.ajouterNoeud(24);
a.ajouterNoeud(11);
a.ajouterNoeud(33);
a.ajouterNoeud(13);
a.ajouterNoeud(40);
a.ajouterNoeud(46);
a.ajouterNoeud(14);
a.ajouterNoeud(21);
a.ajouterNoeud(12);
a.ajouterNoeud(10);
a.ajouterNoeud(31);
a.ajouterNoeud(35);
a.ajouterNoeud(32);

console.log(a.infixe());

a.supprimerNoeud(14);
console.log(a.supprimerNoeud(14));
a.printNoeud(13);