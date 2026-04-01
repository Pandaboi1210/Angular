import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Serviceserver {

  http: HttpClient = inject(HttpClient);

  // GET users/products
  getUsers() {
    return this.http.get('https://api.escuelajs.co/api/v1/products');
  }

  postUsers(data: any) {
    return this.http.post('https://api.escuelajs.co/api/v1/products/', data);
  }

}