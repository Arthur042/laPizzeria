import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dessert } from '../models/dessert';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  apiUrl = environment.apiUrl +'/Dessert'
  constructor(private HttpClient: HttpClient) { }

  getAllDessert() :Observable<Dessert[]>{
    return this.HttpClient.get<Dessert[]>(this.apiUrl);
  } 

  addDessert(dessert: Dessert) :Observable<Dessert>{
    return this.HttpClient.post<Dessert>(this.apiUrl, dessert);
  }

  deleteDessert(id ?: number): Observable<Dessert>{
    return this.HttpClient.delete<Dessert>(this.apiUrl + '/' + id);
  }

  GetWithId(id ?: number): Observable<Dessert>{
    return this.HttpClient.get<Dessert>(this.apiUrl + '/' + id);
  }

  updateDessert(dessert: Dessert): Observable<Dessert>{
    return this.HttpClient.put<Dessert>(this.apiUrl + '/' + dessert.id, dessert)
  }
}

