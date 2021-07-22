import { PizzeriaParis } from './classes/PizzeriaParis.js';
import { PizzeriaLyon } from './classes/PizzeriaLyon.js';
export class PizzaTestDrive {
    main(args) {
        let pizzeriaParis = new PizzeriaParis();
        let pizzeriaLyon = new PizzeriaLyon();
        let pizzaL = pizzeriaLyon.orderPizza("fromage");
        console.log(`Luc a commandé une ${pizzaL.getName()}\n`);
        let pizzaM = pizzeriaParis.orderPizza("fromage");
        console.log(`Michel a commandé une ${pizzaM.getName()}\n`);
    }
}

const testDrive = new PizzaTestDrive()
testDrive.main()
