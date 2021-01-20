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
        console.log("J'ai utilisé la fonction repeindre, ma couleur est maintenant " + this.#couleur + " message du tableau de bord :");
        console.log(this.#messTab);
    }
    mettreEssence(value){
        if((value + this.#nivEssence) > this.#capReservoir){
            this.#messTab = "ERREUR ! Vous ne pouvez pas mettre plus que la capacité totale de votre réservoir";
        }else{
            this.#nivEssence += value;
            this.#messTab = "Votre réservoir contient maintenant " + this.#nivEssence + " L sur " + this.#capReservoir + " possible.";
        }
        console.log("jai mis de l'essence avec la fonction mettreEssence, message du tableau de bord:");
            console.log(this.#messTab);
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
            this.#messTab = "vous avez consommé " + consommation + " litres. il vous reste " + (this.#nivEssence - consommation) + " litres dans le réservoir";
            this.#nivEssence = this.#nivEssence - consommation;
        }else{
            this.#messTab = "Erreur, le voyage est impossible avec le niveau d'essence déclaré";
        }
        console.log("j'ai programmé un voyage avec une distance et une vitesse moyenne, message du tableau de bord :");
        console.log(this.#messTab);
    }
    toString(){
        return console.log("Le numéro d'immatriculation du véhicule est " + this.#immatriculation + ". Sa puissance est de " + this.#puissance + "cvx. Il est de couleur " + this.#couleur + ".");
    }
}

let voiture1 = new Voiture("911 - 911", "orange", 1102, 112, 55, 5);
let voiture2 = new Voiture("118-218 haha","noir","950",90,55,5);
let voiture3 = new Voiture("123 soleil","vert",1230,155,40,2);

function test(voiture,couleur1,litresEssence,km,vitesse){
console.log(voiture);

voiture.repeindre(couleur1);

voiture.mettreEssence(litresEssence);

voiture.seDeplacer(km,vitesse);

voiture.toString();
}

test(voiture1,"bleu",5,160,90);
test(voiture2,"noir",35,160,90);
test(voiture3,"jaune",65,20,130);