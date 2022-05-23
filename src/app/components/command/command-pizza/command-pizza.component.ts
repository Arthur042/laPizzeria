import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-command-pizza',
  templateUrl: './command-pizza.component.html',
  styleUrls: ['./command-pizza.component.css']
})
export class CommandPizzaComponent implements OnInit {

  pizzasList !: Pizza[];
  constructor(private PizzaService: PizzaService) { }

  ngOnInit(): void {
    this.PizzaService.getAllPizza().subscribe(data => {
      this.pizzasList = data;
    })
  }

}
