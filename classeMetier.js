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
        this.#messTab = console.log("votre assurance est mise à jour");
    }
    repeindre(couleur){
        if(couleur === this.#couleur){
            console.log("merci pour ce rafraichissement");
        }else{
            this.#couleur = couleur;
            console.log("super cette nouvelle couleur!")
        }
    }
}

let voiture1 = new Voiture("911 - 911", "orange", 1102, 112, 55, 5);
