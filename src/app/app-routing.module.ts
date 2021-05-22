import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyHomeComponent } from './spotify-home/spotify-home.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';

const routes: Routes = [
   {path : 'home', component: SpotifyHomeComponent},
   {path : 'login', component: SpotifyLoginComponent},
   {path : '**', component: SpotifyLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {
  } 



 