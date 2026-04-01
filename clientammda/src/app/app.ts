import { Component, signal } from '@angular/core';
import { Serveradd } from "./serveradd/serveradd";

@Component({
  selector: 'app-root',
  imports: [ Serveradd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clientammda');
}
