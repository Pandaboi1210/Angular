import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });
   constructor(private router: Router) {}
  onSubmit() {
  if (this.loginForm.valid) {
    const temp: any = JSON.parse(localStorage.getItem('items') || '[]');
    console.log(temp);
    const email=
    this.loginForm.value.email;
    const password =
      this.loginForm.value.password;
      console.log(temp.username);
    if (email == temp.email && password == temp.password) {
      alert("Login Successful");
      this.router.navigate(['/home']);
    }
    else {
      alert("Invalid Login Creds");
    }
  }
  else{
   
    alert("Didnt Work");
  }
}
}
