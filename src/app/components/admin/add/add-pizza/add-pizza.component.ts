import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ingredient } from 'src/app/models/ingredient';
import { Pizza } from 'src/app/models/pizza';
import { IngredientService } from 'src/app/services/ingredient.service';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent implements OnInit {
  newPizza = new Pizza();
  newIngredient = new Ingredient(1,'');
  ingredients : Ingredient[] = [];
  ingredientSelected : string[] = [];
  bases = ['Tomate', 'Crème'];
  constructor(private IngredientService: IngredientService, private PizzaService:PizzaService, private toastr: ToastrService, public router: Router) { }

  ngOnInit(): void {
    this.IngredientService.getAllIngredient().subscribe(data => {
      this.ingredients = data 
    })
  }

  add() :void {
    this.newPizza.ingredient = this.ingredientSelected;
    this.newPizza.isNormal = true;
    this.PizzaService.addPizza(this.newPizza).subscribe(data => {
      this.toastr.success('produit enregistré avec succès', 'redirection en cours');
      this.router.navigate(['/admin/Pizza'])
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
    this.IngredientService.addIngredient(this.newIngredient).subscribe(data => {
      this.toastr.info('Ingrédient ajouté avec succès');
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
      });
    })
  }
}
