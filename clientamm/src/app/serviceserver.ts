import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Serviceserver {
  http:HttpClient=inject(HttpClient);

  getUsers(){
    return this.http.get('https://fakestoreapi.com/Products');
  }
}