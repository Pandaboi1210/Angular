import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

import { Description } from './home/description/description';
import { Work } from './home/work/work';
import { Toc } from './home/toc/toc';

import { Origin } from './about/origin/origin';
import { Location } from './about/location/location';

import { Email } from './contact/email/email';
import { Number } from './contact/number/number';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'description', component: Description },
      { path: 'work', component: Work },
      { path: 'toc', component: Toc }
    ]
  },
  {
    path: 'about',
    component: About,
    children: [
      { path: 'origin', component: Origin },
      { path: 'location', component: Location }
    ]
  },
  {
    path: 'contact',
    component: Contact,
    children: [
      { path: 'email', component: Email },
      { path: 'number', component: Number }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];