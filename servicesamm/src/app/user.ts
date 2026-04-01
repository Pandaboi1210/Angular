import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userArray: string[] = ["Pradeep", "Panda"];

  getUser(): string[] {
    return this.userArray;
  }

  setUser(userArray: string[]){
    this.userArray = userArray;
  }

}