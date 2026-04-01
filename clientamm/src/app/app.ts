import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usercomponent } from "./usercomponent/usercomponent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Usercomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
