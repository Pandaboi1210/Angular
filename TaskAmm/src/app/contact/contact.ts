import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {}