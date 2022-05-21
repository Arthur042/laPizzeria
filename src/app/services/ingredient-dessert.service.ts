import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientDessertService {
  apiUrl = environment.apiUrl + '/IngredientDessert'
  constructor(private HttpClient: HttpClient) { }

  getAllIngredient() :Observable<Ingredient[]> {
    return this.HttpClient.get<Ingredient[]>(this.apiUrl)
  }

  addIngredient(ingredient: Ingredient) :Observable<Ingredient>{
    return this.HttpClient.post<Ingredient>(this.apiUrl, ingredient);
  }
}
