import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import {BASE_URL} from '../config';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }

  findUsersByTablero(tableroId:number):Observable<Response>{
    return this.http.get(`${BASE_URL}api/tablero/${tableroId}`);
  }
}
