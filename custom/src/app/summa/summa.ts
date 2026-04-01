import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-summa',
  imports: [FormsModule],
  templateUrl: './summa.html',
  styleUrl: './summa.css',
})
export class Summa {
   handleSubmit(value:any)
  {
    console.log(value);
    
  }
}