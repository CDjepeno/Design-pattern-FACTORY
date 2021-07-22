export class Pizzeria {
    orderPizza(type) {
        let pizza;
        pizza = this.createPizza(type);
        pizza.prepare();
        pizza.cook();
        pizza.cut();
        pizza.wrap();
        return pizza;
    }
}
