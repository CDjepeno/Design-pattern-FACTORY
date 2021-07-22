import { Pizza } from '../abstract/Pizza.js';
export class CheesePizzaParis extends Pizza {
    constructor() {
        super("Pizza sauce style paris et fromage", "Pâte fine", "Sauce Marinara");
        this.garnitures.push("Paramigiano reggiano râpé");
    }
}
