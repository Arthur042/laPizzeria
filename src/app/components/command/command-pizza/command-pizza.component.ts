import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-command-pizza',
  templateUrl: './command-pizza.component.html',
  styleUrls: ['./command-pizza.component.css']
})
export class CommandPizzaComponent implements OnInit {
  @Output() swapTotal : EventEmitter<boolean> = new EventEmitter;

  pizzasList !: Pizza[];
  constructor(private PizzaService: PizzaService) { }

  ngOnInit(): void {
    this.PizzaService.getAllPizza().subscribe(data => {
      this.pizzasList = data;
    })
  }

  changeTotal(event: boolean) {
    this.swapTotal.emit(event);
  }

}
