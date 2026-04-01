import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Obse } from './obse/obse';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Obse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('observeableamm');
}
