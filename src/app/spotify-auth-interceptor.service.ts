import { Injectable } from '@angular/core';
import {  HttpRequest,
  HttpHandler,
  HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthInterceptorService implements HttpInterceptor{
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token  = localStorage.getItem('access_token') ;
    request = request.clone({
      setHeaders: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    return next.handle(request);
  }
}
