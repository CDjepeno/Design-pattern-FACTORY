import { Pizzeria } from "../abstract/Pizzeria.js";
import { CheesePizzaLyon } from "./CheesePizzaLyon.js";
export class PizzeriaLyon extends Pizzeria {
    createPizza(type) {
        let pizza;
        if (type === "fromage") {
            pizza = new CheesePizzaLyon();
        }
        else
            return null;
        return pizza;
    }
}
