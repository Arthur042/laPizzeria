import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Dessert } from 'src/app/models/dessert';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-admin-dessert',
  templateUrl: './admin-dessert.component.html',
  styleUrls: ['./admin-dessert.component.css']
})
export class AdminDessertComponent implements OnInit {
  faTrash = faTrashCan;
  faEdit = faPenToSquare;
  desserts !: Dessert[];
  constructor(private DessertService : DessertService) { }

  ngOnInit(): void {
    this.DessertService.getAllDessert().subscribe(data => {
      this.desserts = data;
    })
  }

  deleteDessert(id?: number) {
    this.DessertService.deleteDessert(id).subscribe(data => {
      this.desserts = this.desserts.filter(dessert => dessert.id != id);
    })
  }
}
