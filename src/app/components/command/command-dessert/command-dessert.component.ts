import { Component, OnInit } from '@angular/core';
import { Dessert } from 'src/app/models/dessert';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-command-dessert',
  templateUrl: './command-dessert.component.html',
  styleUrls: ['./command-dessert.component.css']
})
export class CommandDessertComponent implements OnInit {

  dessertList !: Dessert[];
  constructor(private DessertService : DessertService) { }

  ngOnInit(): void {
    this.DessertService.getAllDessert().subscribe(data => {
      this.dessertList = data;
    })
  }
}
