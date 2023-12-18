import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ConcertInfoComponent } from './components/pages/concert-info/concert-info.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'concert-info/:id', component: ConcertInfoComponent },

];
