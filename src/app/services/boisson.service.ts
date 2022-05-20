import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Boisson } from '../models/boisson';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

  apiUrl = environment.apiUrl +'/boisson'
  constructor(private HttpClient: HttpClient) { }

  getAllBoisson() :Observable<Boisson[]>{
    return this.HttpClient.get<Boisson[]>(this.apiUrl);
  } 
}
