import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LogIn } from '../models/log-in';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  apiUrl = environment.apiUrl + '/logIn'

  constructor(private HttpClient: HttpClient) { }

  checkMail() :Observable<LogIn[]>{
    return this.HttpClient.get<LogIn[]>(this.apiUrl)
  }
}
