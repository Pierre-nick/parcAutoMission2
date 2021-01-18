class Voiture{
    #immatriculation;
    #couleur;
    #poids;
    #puissance ;
    #capReservoir;
    #nivEssence ;
    #nbrePlace ;
    #assure ;
    #messTab;
    
    constructor(immatriculation, couleur, poids, puissance, capReservoir, nbrePlace){
        this.#immatriculation = immatriculation;
        this.#couleur = couleur;
        this.#poids = poids;
        this.#puissance = puissance;
        this.#capReservoir = capReservoir;
        this.#nbrePlace = nbrePlace;
        this.#nivEssence = 5;
        this.#assure = false;
        this.#messTab = console.log("coucou");
    }

    set majAssurance(nouvAssure){
        this.#assure = nouvAssure;
        this.#messTab = "votre assurance est mise à jour";
    }
    repeindre(couleur){
        if(couleur === this.#couleur){
            this.#messTab = "merci pour ce rafraichissement";
        }else{
            this.#couleur = couleur;
            this.#messTab = "super cette nouvelle couleur!";
        }
    }
    mettreEssence(value){
        if((value + this.#nivEssence) > this.#capReservoir){
            this.#messTab = "ERREUR ! Vous ne pouvez pas mettre plus que la capacité totale de votre réservoir";
        }else{
            this.#nivEssence += value;
            this.#messTab = "Votre réservoir contient maintenant " + this.#nivEssence + " L sur " + this.#capReservoir + " possible.";
            return this.#nivEssence
        }
    }
    seDeplacer(distance,vitesseMoyenne){
        var consommation;
        if(vitesseMoyenne < 50 && vitesseMoyenne > 0){
            consommation = distance * 0.1;            
        }else if (vitesseMoyenne >= 50 && vitesseMoyenne < 90){
            consommation = distance * 0.05;
        }else if (vitesseMoyenne >= 90 && vitesseMoyenne < 130){
            consommation = distance * 0.08;
        }else{
            consommation = distance * 0.12;
        }
        if(consommation <= this.#nivEssence){
            this.#messTab = "vous avez consommé " + consommation + " litres.";
        }else{
            this.#messTab = "Erreur, le voyage est impossible avec le niveau d'essence déclaré";
        }
    }
    toString(){
        return "Le numéro d'immatriculation du véhicule est " + this.#immatriculation + ". Sa puissance est de " + this.#puissance + "cvx. Il est de couleur " + this.#couleur + ".";
    }
}

let voiture1 = new Voiture("911 - 911", "orange", 1102, 112, 55, 5);
