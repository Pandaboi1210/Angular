import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(data: any) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (data.email === user.email && data.password === user.password) {
      return true;
    }

    return false;
  }
}
