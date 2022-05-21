import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl = environment.apiUrl + '/pizza';

  constructor(private HttpClient: HttpClient) { }

  getAllPizza() :Observable<Pizza[]>{
    return this.HttpClient.get<Pizza[]>(this.apiUrl);
  } 

  addPizza(pizza: Pizza) :Observable<Pizza>{
    return this.HttpClient.post<Pizza>(this.apiUrl, pizza);
  }

  deletePizza(id ?: number): Observable<Pizza>{
    return this.HttpClient.delete<Pizza>(this.apiUrl + '/' + id);
  }

  GetWithId(id ?: number): Observable<Pizza>{
    return this.HttpClient.get<Pizza>(this.apiUrl + '/' + id);
  }

  updatePizza(pizza: Pizza): Observable<Pizza>{
    return this.HttpClient.put<Pizza>(this.apiUrl + '/' + pizza.id, pizza)
  }
}
