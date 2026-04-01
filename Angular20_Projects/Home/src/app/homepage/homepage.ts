import { Component } from '@angular/core';
import { Navbar } from '../shared/navbar/nav';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-homepage',
  imports: [Navbar,RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
