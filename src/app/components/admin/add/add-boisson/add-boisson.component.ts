import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Boisson } from 'src/app/models/boisson';
import { BoissonService } from 'src/app/services/boisson.service';

@Component({
  selector: 'app-add-boisson',
  templateUrl: './add-boisson.component.html',
  styleUrls: ['./add-boisson.component.css']
})
export class AddBoissonComponent implements OnInit {
  newBoisson = new Boisson();
  constructor(private BoissonService:BoissonService, private toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
  }

  add() :void {
    this.BoissonService.addBoisson(this.newBoisson).subscribe(data => {
      this.toastr.success('produit enregistré avec succès', 'redirection en cours');
      this.router.navigate(['/admin/Boisson'])
    })
  }
}
