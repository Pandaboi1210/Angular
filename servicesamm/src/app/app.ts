import { Component, OnInit, inject } from '@angular/core';
import { UserService } from './user';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// export class App implements OnInit {
export class App{
  // userArray: string[] | undefined;

  // userService: UserService = inject(UserService);

  // // ngOnInit(): any{
  // //   let summa=this.userArray = this.userService.getUser();
  // //   console.log(summa);
  // // }
  // loadUsers() {
  //   let summa=this.userArray = this.userService.getUser();
  //   console.log(summa);
  // }
  userArray: string[] | undefined;
  constructor(private userService:UserService){
  }
  protected loadUsers() {
    let summa=this.userArray = this.userService.getUser();
    console.log(summa);
  }

}