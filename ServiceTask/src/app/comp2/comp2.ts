import { Component, inject } from '@angular/core';
import { ItemsInKart } from './items-in-kart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp2',
  imports: [CommonModule],
  templateUrl: './comp2.html',
  styleUrl: './comp2.css',
})
export class Comp2 {
  KartItems:any | undefined;
  KartItemsService: ItemsInKart=inject(ItemsInKart);

  showkart(){
    let val=this.KartItems=this.KartItemsService.getItems();
    console.log(val);
  }
}
