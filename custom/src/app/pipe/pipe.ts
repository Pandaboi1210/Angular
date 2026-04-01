import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from './reverse-pipe';

@Component({
  selector: 'app-pipe',
  imports: [CommonModule,ReversePipe],
  templateUrl: './pipe.html',
  styleUrls: ['./pipe.css'],
})
export class Pipe {
  emp_name: string = "summa";
  joining_date: Date = new Date();
  salary: number = 150000;
  performance_report: number = 75;
marker={
     price:50,
     brand:'apsara'     
}
para:string='summa dhanna da dei enna da panura dei poda punda da dei ne oru luru kuthi da dei';

printDetails(){
  console.log(this.emp_name);
  console.log(this.joining_date);
  console.log(this.salary);
  console.log(this.performance_report);
}
}