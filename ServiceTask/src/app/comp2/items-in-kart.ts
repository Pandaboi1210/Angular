import { Injectable } from '@angular/core';
import { AddToKart } from '../comp1/add-to-kart';

@Injectable({
  providedIn: 'root',
})
export class ItemsInKart {

  constructor(private addToKart: AddToKart) {}

  getItems() {
    return this.addToKart.getKartItems();
  }

}