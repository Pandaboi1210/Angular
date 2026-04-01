import { Routes } from '@angular/router';
import { Comp1 } from './comp1/comp1';
import { Comp2 } from './comp2/comp2';
import { Comp3 } from './comp3/comp3';
import { Comp11 } from './comp1/comp11/comp11';

export const routes: Routes = 
[
  {
    path: 'comp1',
    component: Comp1,
    children: [
      { path: 'comp11', component: Comp11 }
    ]
  },
  { path: 'comp2', component: Comp2 },
  { path: 'comp3', component: Comp3 },
];