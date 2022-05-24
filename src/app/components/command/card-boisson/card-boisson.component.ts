import { Component, Input, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Boisson } from 'src/app/models/boisson';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-card-boisson',
  templateUrl: './card-boisson.component.html',
  styleUrls: ['./card-boisson.component.css']
})
export class CardBoissonComponent implements OnInit {
  faMinus = faMinusCircle;
  faPlus = faPlusCircle;
  quantity : number = 0;

  @Input() boisson ?: Boisson;

  constructor(private CommandeService : CommandeService) { }

  ngOnInit(): void {
  }

  add(boisson : Boisson){
    this.quantity += 1;
    this.CommandeService.addPizza(boisson,this.quantity);

  }

  addPLus(boisson : Boisson){
    this.quantity += 1;
    this.CommandeService.addPizza(boisson,this.quantity);
  }

  removePLus(boisson : Boisson) {
    this.quantity -= 1;
    this.CommandeService.addPizza(boisson,this.quantity);
  }
}
