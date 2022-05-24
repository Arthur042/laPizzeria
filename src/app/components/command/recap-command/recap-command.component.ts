import { Component, Input, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-recap-command',
  templateUrl: './recap-command.component.html',
  styleUrls: ['./recap-command.component.css']
})
export class RecapCommandComponent implements OnInit {
  @Input() pizzaTotalSwap?: boolean;
  totalPrice ?: number = 0;
  constructor(private CommandeService : CommandeService ) { }

  ngOnInit(): void {
    this.totalPrice = this.CommandeService.totalPrice();
  }

}
