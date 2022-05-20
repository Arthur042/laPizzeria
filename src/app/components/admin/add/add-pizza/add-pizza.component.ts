import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {
  newPizza = new Pizza();
  ingredients = ['jambon','champignon','oeuf','mozzarela','roquefort','parmesan','chèvre','Poulet','oeuf','Curry','Oignon','chorizo','poivron','annanas','basilic'];
  ingredientSelected : string[] = [];
  bases = ['Tomate', 'Crème'];
  constructor() { }

  ngOnInit(): void {
  }

  add() :void {
    this.newPizza.ingredient = this.ingredientSelected;
    this.newPizza.isNormal = true;
    console.log(this.newPizza);
  }
  onCheckChange($event: Event, ingredient: string) {
    console.log(this.ingredientSelected);
    console.log(ingredient);
    if($event.returnValue){
      this.ingredientSelected.push(ingredient);
    }
   
   }
}
