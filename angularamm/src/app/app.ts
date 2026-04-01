import { Component, signal } from '@angular/core';
//import { navdha } from './navbar/nav';
import { DataBinding } from "./data-binding/data-binding";

@Component({
  selector: 'app-root',
  imports: [/*navdha,*/ DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularamm');
}
