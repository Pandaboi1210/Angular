import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { noCaps } from '../Custom_Validation/noCaps';

@Component({
  selector: 'app-summa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './summa.html',
  styleUrl: './summa.css',
})
export class Summa {
    userform = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3),noCaps]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmpassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    age : new FormControl('', [Validators.required,Validators.min(18)])
  });

  handleSubmit() {
    console.log(this.userform.value);
  }
}
