import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Homepage } from './homepage/homepage';
import { Prehome } from './prehome/prehome';
import { Profile } from './profile/profile';

import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [

  { path: '', component: Prehome },

  { path: 'home', component: Homepage },

  { path: 'login', component: Login },

  { path: 'signup', component: Signup },

  { path: 'profile', component: Profile },

  {
    path: 'Products',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component',
      }).then((a)=>a.App)
  },

{
  path: 'kart',
  loadComponent: () =>
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Component',
    }).then(a => a.App)
},

];