import { Component, OnInit } from '@angular/core';
import { Boisson } from 'src/app/models/boisson';
import { BoissonService } from 'src/app/services/boisson.service';

@Component({
  selector: 'app-command-boisson',
  templateUrl: './command-boisson.component.html',
  styleUrls: ['./command-boisson.component.css']
})
export class CommandBoissonComponent implements OnInit {
  boissonList !: Boisson[];
  constructor(private BoissonService : BoissonService) { }

  ngOnInit(): void {
    this.BoissonService.getAllBoisson().subscribe(data => {
      this.boissonList = data;
    })
  }
}
