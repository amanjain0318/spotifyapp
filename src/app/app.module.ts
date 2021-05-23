import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyHomeComponent } from './spotify-home/spotify-home.component';
import { SpotifyAuthInterceptorService } from './spotify-auth-interceptor.service';
import {FormsModule} from '@angular/forms';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyHomeComponent,
    SpotifyLoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [{
     provide : HTTP_INTERCEPTORS,
     useClass : SpotifyAuthInterceptorService,
     multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
