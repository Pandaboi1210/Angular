import { Component } from "@angular/core";
import { Left } from "./left/left";
import { Right } from "./right/right";
import { Fotter } from "./fotter/fotter";

@Component({
  selector: 'navdha',
  imports: [Left, Right, Fotter],
  templateUrl:"./nav.html", 
  styleUrl: './nav.css'
})
export class navdha{
}