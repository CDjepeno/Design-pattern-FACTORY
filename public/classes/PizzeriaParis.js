import { Pizzeria } from "../abstract/Pizzeria.js";
import { CheesePizzaParis } from './CheesePizzaParis.js';
export class PizzeriaParis extends Pizzeria {
    createPizza(type) {
        let pizza;
        if (type === "fromage") {
            pizza = new CheesePizzaParis();
        }
        else
            return null;
        return pizza;
    }
}
