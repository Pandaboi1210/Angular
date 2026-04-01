import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  imports: [FormsModule,CommonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons {

  texts1 = 'Go';
  result = 'false';

  checkText() {
    if (this.texts1 === 'Go') {
      this.result = 'true';
    } else {
      this.result = 'false';
    }
  }

}
