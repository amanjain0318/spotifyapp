import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.css']
})
export class SpotifyLoginComponent implements OnInit {

  clientId = '8b9632e0839c4882b1474fe9ad899164';
  clientSecret = 'f060d4494dec4a5e8837e8908c0f9aa7';
  authUrl = 'https://accounts.spotify.com/authorize';
  TOKEN = 'https://accounts.spotify.com/api/token';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.onPageLoad();
  }

  
  

  submit() { 
    // this.clientId = form.clientId;
    // this.clientSecret = form.clientSecret;
    let url = this.authUrl;
    url += '?client_id=' + this.clientId;
    url += '&response_type=code';
    url += '&redirect_uri=' + encodeURI('http://localhost:4200/index.html');
    url += '&show_dialog=true';
    url += '&scope=user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-follow-modify user-follow-read user-library-modify user-library-read user-read-email user-read-private';
    console.log(url);
    window.location.href = url;
  }

  onPageLoad() {
    
    let code = null;
    if (window.location.search.length > 0) {
      const urlParam = new URLSearchParams(window.location.search);
      code = urlParam.get('code');
      this.fetchAccestoken(code);
      // alert('response '+JSON.parse(xhr.responseText));
       window.history.pushState("", "", 'http://localhost:4200/index.html');
    }
  }
  fetchAccestoken(code: any) {
    
    let body = "grant_type=authorization_code";
    body += '&code=' + code;
    body += '&redirect_uri=' + encodeURI('http://localhost:4200/index.html');
    body += '&client_id=' + this.clientId;
    body += '&client_secret=' + this.clientSecret;
    let xhr = new XMLHttpRequest();
     xhr.open("POST", this.TOKEN, true);
     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
     xhr.setRequestHeader('Authorization','Basic '+ btoa(this.clientId + ':' + this.clientSecret));
     xhr.send(body);
     xhr.onload  = function() {
      
      if (xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        
          if (data.access_token != undefined) {
          let access_token = data.access_token;
          localStorage.setItem('access_token', access_token);
        }
        if (data.refresh_token != undefined) {
        let refresh_token = data.refresh_token;
        
          localStorage.setItem('refresh_token', refresh_token);
        }
          
      }
      else {
        alert( 'Daya mataji');
      }

    };
    this.router.navigate(['/home']);
  }

}
