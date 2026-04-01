import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serviceserver } from '../serviceserver';

@Component({
  selector: 'app-serveradd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serveradd.html',
  styleUrls: ['./serveradd.css'],
})
export class Serveradd implements OnInit {
  userservice: Serviceserver = inject(Serviceserver);
  userData: any[] = [];
  ngOnInit(): void {
    this.addProduct(); 
    this.getProducts();
  }
  addProduct() {
    const productData = {
      title: 'I Added This',
      price: 2000,
      description: 'this is description gang',
      categoryId: 2,
      image: ['/1.jpg']
    };
    this.userservice.postUsers(productData).subscribe({
      next: (res) => {
        this.getProducts();
      },
    });
  }
  getProducts() {
    this.userservice.getUsers().subscribe({
      next: (data: any) => {
        this.userData = data;
      },
      error: (err) => console.log(err)
    });
  }
}