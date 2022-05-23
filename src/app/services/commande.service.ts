import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  commande : Commande[] = [] 
  commandeTemp : Commande = new Commande()
  constructor() { }

  addPizza(pizza : Pizza, quantity: number) {
    this.commandeTemp.product = pizza.name;
    this.commandeTemp.quantity = quantity;

    if (pizza.isNormal == true && pizza.price) {
      this.commandeTemp.price = pizza.price
    } else if(pizza.isNormal == false && pizza.price) {
      this.commandeTemp.price = pizza.price + 2;
    }

    console.log(this.commande);
    
    if (this.commande.length > 0) {
      this.commande.forEach(element => {
        
        if (element.product === this.commandeTemp.product && element.quantity && element.price && this.commandeTemp.price){
          console.log('tableau sup 0 article identique');
          element.quantity = quantity;
          element.price = this.commandeTemp.price * quantity
        } else if (element.product !== this.commandeTemp.product && element.quantity && element.price && this.commandeTemp.price){
          console.log('tableau sup 0mais article diff');
          
          this.commande.push(this.commandeTemp);
        }
      }) 
    } else{
      console.log('tableau inf 0');
      this.commande.push(this.commandeTemp);
    }
    console.log(this.commande);
    
    
  }
}
