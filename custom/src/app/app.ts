import { Component, signal } from '@angular/core';
import { Summa } from './summa/summa';


@Component({
  selector: 'app-root',
  imports: [ summa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('custom');
  fetchdata:number=0;
  handlesenduser(data:any){
    this.fetchdata = data;
  }
}
