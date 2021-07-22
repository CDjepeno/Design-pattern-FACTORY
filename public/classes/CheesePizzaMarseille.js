import { Pizza } from "../abstract/Pizza.js";
export class CheesePizzaMarseille extends Pizza {
    constructor() {
        super("Pizza sauce style Marseille et fromage", "Pâte pan", "Sauce aux tomates fraise de marseille");
        this.garnitures.push("Sauce pimente");
    }
    cut() {
        console.log("Découpage en parts en rectangle");
    }
}
