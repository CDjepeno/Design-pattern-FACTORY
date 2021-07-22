import { CheesePizzaMarseille } from './CheesePizzaMarseille.js';
import { Pizzeria } from "../abstract/Pizzeria.js";
export class PizzeriaMarseille extends Pizzeria {
    createPizza(type) {
        let pizza;
        if (type === "fromage") {
            pizza = new CheesePizzaMarseille();
        }
        else
            return null;
        return pizza;
    }
}
