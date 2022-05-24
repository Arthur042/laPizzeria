import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-homme',
  templateUrl: './command-homme.component.html',
  styleUrls: ['./command-homme.component.css']
})
export class CommandHommeComponent implements OnInit {

  pizzaTotalSwap ?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  swapTotal(event : boolean) {
    this.pizzaTotalSwap = event;
  }
}
