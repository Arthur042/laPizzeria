import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Boisson } from 'src/app/models/boisson';
import { BoissonService } from 'src/app/services/boisson.service';

@Component({
  selector: 'app-update-boisson',
  templateUrl: './update-boisson.component.html',
  styleUrls: ['./update-boisson.component.css']
})
export class UpdateBoissonComponent implements OnInit {
  id !: number;
  newBoisson !: Boisson;
  constructor(private BoissonService:BoissonService, private toastr: ToastrService, public router: Router, private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get('id'));
    this.BoissonService.GetWithId(this.id).subscribe(data => {
      this.newBoisson = data
    })
  }

  update() :void {
    this.BoissonService.updateBoisson(this.newBoisson).subscribe(data => {
      this.toastr.success('redirection en cours', 'produit modifié avec succès');
      this.router.navigate(['/admin/Boisson'])
    })
  }
}
