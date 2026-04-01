import { Component, signal } from '@angular/core';
import { Kart } from './kart/kart';

@Component({
  selector: 'app-root',
  imports: [Kart],
  
templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kart');
}
