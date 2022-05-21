import { Component, OnInit } from '@angular/core';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Boisson } from 'src/app/models/boisson';
import { BoissonService } from 'src/app/services/boisson.service';

@Component({
  selector: 'app-admin-boisson',
  templateUrl: './admin-boisson.component.html',
  styleUrls: ['./admin-boisson.component.css']
})
export class AdminBoissonComponent implements OnInit {
  faTrash = faTrashCan;
  faEdit = faPenToSquare;
  boissons !: Boisson[];
  constructor(private BoissonService :BoissonService) { }

  ngOnInit(): void {
    this.BoissonService.getAllBoisson().subscribe(data => {
      this.boissons = data;
    })
  }

  deleteBoisson(id?: number) {
    this.BoissonService.deleteBoisson(id).subscribe(data => {
      this.boissons = this.boissons.filter(boisson => boisson.id != id);
    })
  }
}
