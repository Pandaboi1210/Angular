import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serviceserver } from '../serviceserver';

@Component({
  selector: 'app-usercomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercomponent.html',
  styleUrls: ['./usercomponent.css'],
})
export class Usercomponent implements OnInit {

  userservice: Serviceserver = inject(Serviceserver);

  userData: any[] = [];

  ngOnInit(): void {
    this.userservice.getUsers().subscribe({
      next: (data: any) => {
        console.log(data);
        this.userData = data;
      },
      error: (err) => {
        console.log('Error:', err);
      }
    });
  }

}