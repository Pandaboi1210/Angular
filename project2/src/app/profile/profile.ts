import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  source:string="assets/image1.png";
  background:string="assets/image.png";
  details:Details={
    Name: "Pradeep" ,
Age: 20,
Gender: "Male",
Location: "Chennai",
Occupation: "Panimalar Student",
Email: "sureshpradeep.ag@gmail.com",
Phone: "+91 7358219989",
  };
}
interface Details{
  Name: string;
Age: number;
Gender: string;
Location: string;
Occupation: string;
Email: string;
Phone: string;
}

