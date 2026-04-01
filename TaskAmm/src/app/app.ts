import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}