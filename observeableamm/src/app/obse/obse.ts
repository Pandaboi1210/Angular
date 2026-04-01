import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obse',
  imports: [],
  templateUrl: './obse.html',
  styleUrl: './obse.css',
})
export class Obse implements OnInit {

  xyz!: Observable<number>;

  ngOnInit() {

    this.xyz = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.error("Something went wrong");
      observer.complete();
    });

    this.xyz.subscribe({
      next: (value) => {
        console.log("Next:", value);
      },
      error: (err) => {
        console.log("Error:", err);
      },
      complete: () => {
        console.log("Completed");
      }
    });

  }

}