import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-comp1',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {}
