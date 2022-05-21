import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dessert } from 'src/app/models/dessert';
import { Ingredient } from 'src/app/models/ingredient';
import { DessertService } from 'src/app/services/dessert.service';
import { IngredientDessertService } from 'src/app/services/ingredient-dessert.service';

@Component({
  selector: 'app-update-dessert',
  templateUrl: './update-dessert.component.html',
  styleUrls: ['./update-dessert.component.css']
})
export class UpdateDessertComponent implements OnInit {
  id !: number;
  newDessert !: Dessert;
  newIngredient = new Ingredient(1,'');
  ingredients : Ingredient[] = [];
  ingredientSelected : string[] = [];
  constructor(private IngredientDessertService: IngredientDessertService, private DessertService:DessertService, private toastr: ToastrService, public router: Router,private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(<string>this.ActivatedRoute.snapshot.paramMap.get('id'));
    this.DessertService.GetWithId(this.id).subscribe(data => {
      this.newDessert = data
    })
    this.IngredientDessertService.getAllIngredient().subscribe(data => {
      this.ingredients = data 
    })
  }

  update() :void {
    this.newDessert.ingredient = this.ingredientSelected;
    this.DessertService.updateDessert(this.newDessert).subscribe(data => {
      this.toastr.success('redirection en cours', 'produit modifié avec succès');
      this.router.navigate(['/admin/Dessert'])
    })
  }

  onCheckChange(ingredient: string) {
    if(!this.ingredientSelected.includes(ingredient)){
      this.ingredientSelected.push(ingredient);
    } else if (this.ingredientSelected.includes(ingredient)) {
      for (let i = 0; i < this.ingredientSelected.length; i++) {
        if (this.ingredientSelected[i] === ingredient) {
          this.ingredientSelected.splice(i, 1)
        }
      }
   }
  }

  addIngredient(){
    this.newIngredient.id = Date.now()
    this.IngredientDessertService.addIngredient(this.newIngredient).subscribe(data => {
      this.toastr.info('Ingrédient ajouté avec succès');
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
      });
    })
  }
}
