import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';
  age: number = 0;
  constructor(private router:Router){}
  ngOnInit() {
    const temp = JSON.parse(localStorage.getItem('items') || '{}');

    this.username = temp.username;
    this.email = temp.email;
    this.password = temp.password;
    this.age = temp.age;
  }
 deleteProfile() {
  localStorage.removeItem('items');
  alert('Profile deleted successfully');
  this.router.navigate(['/']);
}
}

