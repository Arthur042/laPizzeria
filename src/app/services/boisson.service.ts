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

  addBoisson(boisson: Boisson) :Observable<Boisson>{
    return this.HttpClient.post<Boisson>(this.apiUrl, boisson);
  }

  deleteBoisson(id ?: number): Observable<Boisson>{
    return this.HttpClient.delete<Boisson>(this.apiUrl + '/' + id);
  }

  GetWithId(id ?: number): Observable<Boisson>{
    return this.HttpClient.get<Boisson>(this.apiUrl + '/' + id);
  }

  updateBoisson(boisson: Boisson): Observable<Boisson>{
    return this.HttpClient.put<Boisson>(this.apiUrl + '/' + boisson.id, boisson)
  }
}
