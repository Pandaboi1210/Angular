import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Summa } from './summa/summa';


@Component({
  selector: 'app-root',
  imports: [Summa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveForms');
  
}
