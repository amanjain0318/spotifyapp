import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spotify-home',
  templateUrl: './spotify-home.component.html',
  styleUrls: ['./spotify-home.component.css']
})
export class SpotifyHomeComponent implements OnInit {
  
  constructor(private httpClient: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
    this.checkSession();
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
    // let headers =  new HttpHeaders().set('Authorization',`Bearer ${'BQDFJmeEQsmx7DoSyb7EGzPcPq0fbdOVpKNWrd_z2X3BVb9FUzeswXIIo8mULT0p4e-IZtRfyN_mEDOL2aL7d1S9IV_32Jd7DLVR65TnGCDnchicTtO50Eq73IUT7YbPbtxX70CDfq1hXfPKA7Y7bgsvdUbrLFhXZJuGY4ZI0r3ifnAwk6s5P3u7VtGKiXtdRKPEBpK-YHT_qIK2YnDQppCpxufcRpuTg32gcoi6E9pprCp6HF2mQwE0VXBVAiu4bwVJARgsh6eHR3EHswsnjv8KVjbYYaL4FDOcDZZp'}`)
    // .set('Accept', 'application/json')
    // .set('Content-Type', 'application-json');
    // console.log('Button is Clicked'+headers);

    this.httpClient.get<any>('https://api.spotify.com/v1/me/playlists').subscribe(
      data => {
        alert(JSON.stringify(data, null , ''));
        
      }
    );
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['']);
  }
}
