import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'], 
})
export class Signup {

  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log("Submit clicked");
    if (this.signupForm.valid) {
      var arrItems={
        username:this.signupForm.value.email,
        password:this.signupForm.value.password
      }
      console.log(arrItems.username)
      // var temp:string=""+this.signupForm.value.email;
      // localStorage.setItem('Email',temp);
      // var temp1:string=""+this.signupForm.value.password;
      // localStorage.setItem('Password',temp1);
      localStorage.setItem('items',JSON.stringify(arrItems));
      alert("Signup successful");
    }
  }
}