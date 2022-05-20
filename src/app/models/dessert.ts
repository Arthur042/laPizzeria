export class Dessert {
    id?: number;
    name?: string;
    image?: string;
    price?: number;
    quantity ?: number
    ingredient?: string[];
    constructor(id?: number, name?: string, image?: string, price?: number, quantity?: number, ingredient?: string[]){
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.quantity = quantity;
        this.ingredient = ingredient;
    }
    
}
