import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  count=0;
  @Output()
  CountHandler = new EventEmitter();
  increment(){
    this.count++;
    this.CountHandler.emit(this.count);
  }
}
