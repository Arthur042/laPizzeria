import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  isSelected :boolean = false;
  faMinus = faMinusCircle;
  faPlus = faPlusCircle;
  quantity : number = 0;

  @Input() pizza ?: Pizza;

  constructor(private CommandeService : CommandeService) { }

  ngOnInit(): void {
  }

  addLittle(pizza : Pizza){
    this.quantity += 1;
    this.isSelected === false ? this.isSelected = true : this.isSelected = false;
    this.CommandeService.addPizza(pizza,this.quantity);

  }

  addBig(pizza : Pizza){
    this.quantity += 1;
    this.isSelected === false ? this.isSelected = true : this.isSelected = false;
    pizza.isNormal = false;
    this.CommandeService.addPizza(pizza,this.quantity);
  }

  addLittlePLus(pizza : Pizza){
    this.quantity += 1;
    this.CommandeService.addPizza(pizza,this.quantity);
  }

  addBigPlus(pizza : Pizza){
    this.quantity += 1;
    pizza.isNormal = false;
    this.CommandeService.addPizza(pizza,this.quantity);
  }
}
