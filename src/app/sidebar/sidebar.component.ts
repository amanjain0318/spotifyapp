import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private httpClient: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
  }

  
  myPlayList() {
    // let headers =  new HttpHeaders().set('Authorization',`Bearer ${'BQDFJmeEQsmx7DoSyb7EGzPcPq0fbdOVpKNWrd_z2X3BVb9FUzeswXIIo8mULT0p4e-IZtRfyN_mEDOL2aL7d1S9IV_32Jd7DLVR65TnGCDnchicTtO50Eq73IUT7YbPbtxX70CDfq1hXfPKA7Y7bgsvdUbrLFhXZJuGY4ZI0r3ifnAwk6s5P3u7VtGKiXtdRKPEBpK-YHT_qIK2YnDQppCpxufcRpuTg32gcoi6E9pprCp6HF2mQwE0VXBVAiu4bwVJARgsh6eHR3EHswsnjv8KVjbYYaL4FDOcDZZp'}`)
    // .set('Accept', 'application/json')
    // .set('Content-Type', 'application-json');
    // console.log('Button is Clicked'+headers);

    this.httpClient.get<any>('https://api.spotify.com/v1/me/playlists').subscribe(
      data => {
        alert("Process is under construction"); 
      }
    );
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['']);
  }
}
