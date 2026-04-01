import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToKart {

  obj1:any = {
    name: "Apple",
    price: 1000,
    img: "download.jpg"
  }

  obj2:any = {
    name: "Banana",
    price: 600,
    img: "download (1).jpg"
  }

  kartItems:any[] = [];

  setkartItems() {

    if (this.kartItems.length === 0) {   // prevent duplicates

      const allItems = [this.obj1, this.obj2];

      for (let item of allItems) {
        this.kartItems.push(item);
      }

    }

  }

  getKartItems() {
    return this.kartItems;
  }

}