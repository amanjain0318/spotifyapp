import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spotify-home',
  templateUrl: './spotify-home.component.html',
  styleUrls: ['./spotify-home.component.css']
})
export class SpotifyHomeComponent implements OnInit {
  user: SpotifyUser = new SpotifyUser;
  constructor(private httpClient: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
    this.checkSession();
    this.userProfile();
    this.myFollowing();
    this.myPlayList();
  }

  userProfile(){
    this.httpClient.get<any>('https://api.spotify.com/v1/me').subscribe(
      data => {
      console.log('user object '+data);
      this.user  =  data;
     
      }
    );
  }
  myFollowing(){
    this.httpClient.get<any>('https://api.spotify.com/v1/me/following?type=artist').subscribe(
      data => {
      console.log('myfollowing object '+data);
      }
    );  
  }
  checkSession(){
   setTimeout(() => {
    if(localStorage.getItem('access_token')===null)
    {
      this.router.navigate(['']);
    }
   }, 3000);
  
  }
  
  myPlayList() {
    this.httpClient.get<any>('https://api.spotify.com/v1/me/playlists').subscribe(
      data => {
          console.log(data);
      }
    );
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['']);
  }

}


export class SpotifyUser{
display_name?: string;
email?: string;
followers?: string[]  = [];
}