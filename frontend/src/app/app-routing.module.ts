import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule, BrowserModule, FormsModule]
})
export class AppRoutingModule { }
