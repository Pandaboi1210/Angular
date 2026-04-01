import { Component } from '@angular/core';
import { Checking } from './checking/checking';

@Component({
  selector: 'data-binding',
  imports: [Checking],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  username:String="Pradeep";
  age:number=21;
  salary:number=5000;
}
