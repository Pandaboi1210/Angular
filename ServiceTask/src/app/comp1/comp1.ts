import { Component, inject } from '@angular/core';
 import { AddToKart } from './add-to-kart';
@Component({
  selector: 'app-comp1',
  imports: [],
templateUrl: './comp1.html',
  styleUrl: './comp1.css',
})
export class Comp1 {
  KartItems:any;
  KartItemsService: AddToKart=inject(AddToKart);

  addtothekart(){
    this.KartItems=this.KartItemsService.setkartItems();
    let val=this.KartItems=this.KartItemsService.getKartItems();
    console.log(val);
  }
}
