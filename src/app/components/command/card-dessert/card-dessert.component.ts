import { Component, Input, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Dessert } from 'src/app/models/dessert';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-card-dessert',
  templateUrl: './card-dessert.component.html',
  styleUrls: ['./card-dessert.component.css']
})
export class CardDessertComponent implements OnInit {
  faMinus = faMinusCircle;
  faPlus = faPlusCircle;
  quantity : number = 0;

  @Input() dessert ?: Dessert;

  constructor(private CommandeService : CommandeService) { }

  ngOnInit(): void {
  }

  add(dessert : Dessert){
    this.quantity += 1;
    this.CommandeService.addPizza(dessert,this.quantity);

  }

  addPLus(dessert : Dessert){
    this.quantity += 1;
    this.CommandeService.addPizza(dessert,this.quantity);
  }

  removePLus(dessert : Dessert) {
    this.quantity -= 1;
    this.CommandeService.addPizza(dessert,this.quantity);
  }
}
