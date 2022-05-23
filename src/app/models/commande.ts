export class Commande {
    product ?: string;
    quantity ?: number;
    price ?: number;

    constructor(product ?: string, quantity  ?: number, price ?: number) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}
