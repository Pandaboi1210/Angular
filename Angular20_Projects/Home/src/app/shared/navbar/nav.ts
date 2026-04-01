import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'Navbar',
  imports: [RouterLink],
  templateUrl:"./nav.html", 
  styleUrl: './nav.css'
})
export class Navbar{
}