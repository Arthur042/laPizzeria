export class Pizza {
    id?: number;
    name?: string;
    image?: string;
    price?: number;
    isNormal?: boolean;
    base?: string;
    ingredient?: string[];

    constructor(id?: number, name?: string, image?: string, price?: number, isNormal?: boolean, base?: string, ingredient?: string[]){
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
        this.isNormal = isNormal;
        this.base = base;
        this.ingredient = ingredient;
    }
}
