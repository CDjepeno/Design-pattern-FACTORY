export class Pizza {
    constructor(n, p, s) {
        this.n = n;
        this.p = p;
        this.s = s;
        this.garnitures = [];
        this.name = n;
        this.pate = p;
        this.sauce = s;
    }
    prepare() {
        console.log(`Préparation de :  + ${this.name}`);
        console.log(`Etalage de la pate : ${this.pate}`);
        console.log(`Ajout de la sauce : ${this.sauce}`);
        for (let garniture of this.garnitures) {
            console.log(`Ajout de la garnitures : ${garniture}`);
        }
    }
    cook() {
        console.log("Cuisson 25 minutes à 180°");
    }
    cut() {
        console.log("Découpage en parts triangulaires");
    }
    wrap() {
        console.log("Emballage dans une boite officielle");
    }
    getName() {
        return this.name;
    }
}
