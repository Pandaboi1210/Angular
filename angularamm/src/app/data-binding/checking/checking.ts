import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-checking',
  imports: [],
  templateUrl: './checking.html',
  styleUrl: './checking.css',
})
export class Checking {
  @Input() username : String="";
  @Input() age!:number;
  @Input() salary!:number;
}
