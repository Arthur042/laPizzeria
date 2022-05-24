import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  faMinus = faMinusCircle;
  faPlus = faPlusCircle;
  quantity : number = 0;
  isSelected : boolean = true;

  @Output() changeTotal : EventEmitter<boolean> = new EventEmitter
  @Input() pizza ?: Pizza;

  constructor(private CommandeService : CommandeService) { }

  ngOnInit(): void {
  }

  addLittle(pizza : Pizza){
    this.quantity += 1;
    this.CommandeService.addPizza(pizza,this.quantity);
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.changeTotal.emit(this.isSelected);
  }

  addBig(pizza : Pizza){
    this.quantity += 1;
    pizza.isNormal = false;
    this.CommandeService.addPizza(pizza,this.quantity);
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.changeTotal.emit(this.isSelected);
  }

  addLittlePLus(pizza : Pizza){
    this.quantity += 1;
    this.CommandeService.addPizza(pizza,this.quantity);
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.changeTotal.emit(this.isSelected);
  }

  addBigPlus(pizza : Pizza){
    this.quantity += 1;
    pizza.isNormal = false;
    this.CommandeService.addPizza(pizza,this.quantity);
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.changeTotal.emit(this.isSelected);
  }

  removeLittlePLus(pizza : Pizza) {
    this.quantity -= 1;
    this.CommandeService.addPizza(pizza,this.quantity);
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.changeTotal.emit(this.isSelected);
  }

  removeBigPlus(pizza : Pizza) {
    this.quantity -= 1;
    pizza.isNormal = false;
    this.CommandeService.addPizza(pizza,this.quantity);
    this.isSelected ? this.isSelected = false : this.isSelected = true;
    this.changeTotal.emit(this.isSelected);
  }
}
