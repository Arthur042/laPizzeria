import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  apiUrl = environment.apiUrl + '/Commande'

  commandes : Commande[] = [] 
  commandeTemp : Commande = new Commande()

  constructor() { }

  addPizza(pizza : Pizza, quantity: number) {

    this.commandeTemp.product = pizza.name;
    this.commandeTemp.quantity = quantity;

    if ((pizza.isNormal == true && pizza.price) || (pizza.isNormal == undefined && pizza.price)) {
      this.commandeTemp.price = pizza.price
    } else if(pizza.isNormal == false && pizza.price) {
      this.commandeTemp.price = pizza.price + 2;
    }

    let cloneCommandeTemp = JSON.parse(JSON.stringify(this.commandeTemp));
    
    if (this.commandes.length > 0) {

      if (this.commandes.some(commande => commande.product === this.commandeTemp.product)) {
        for (let i = 0; i < this.commandes.length; i++) {
          if (this.commandes[i].product === this.commandeTemp.product && this.commandeTemp.price){
            this.commandes[i].quantity = quantity;
            this.commandes[i].price = this.commandeTemp.price * quantity
          } 
        } 
      } else {
        this.commandes.push(cloneCommandeTemp);
      }
    } else{
      this.commandes.push(cloneCommandeTemp);
    }
    console.log(this.commandes); 
  }
  
  totalPrice() :number {
    let totalPrice : number = 0;
    this.commandes.forEach(element => {
      if (element.price){
        totalPrice += element.price
      }
    })

    return totalPrice;
  }
}