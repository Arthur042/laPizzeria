import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Pizza } from 'src/app/models/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  faTrash = faTrashCan;
  faEdit = faPenToSquare;
  pizzas !: Pizza[];
  constructor(private PizzaService:PizzaService) { }

  ngOnInit(): void {
    this.PizzaService.getAllPizza().subscribe(data => {
      this.pizzas = data;

      // this.pizzas[0].ingredient?.forEach(Element => {
      //   console.log(Element)
      // });
      
    })
  }

}
