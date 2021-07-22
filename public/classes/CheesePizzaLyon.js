import { Pizza } from "../abstract/Pizza.js";
export class CheesePizzaLyon extends Pizza {
    constructor() {
        super("Pizza sauce style Lyon et fromage", "Pâte épaissse", "Sauce aux tomates cerise");
        this.garnitures.push("Lamelles de mozarella");
    }
    cut() {
        console.log("Découpage en parts carrés");
    }
}
