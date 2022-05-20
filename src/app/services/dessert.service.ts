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
}
