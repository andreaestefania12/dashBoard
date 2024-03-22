import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenUrl = 'https://idcs-c8553962ba99475898f94f793cde2e41.identity.oraclecloud.com/oauth2/v1/token';
  private clientId = 'cf68ca90549e4db29265241f3e686d73'; 
  private clientSecret = 'de76de92-7039-4ad5-813c-0f5df8d92092';

  constructor(private http: HttpClient) { }

  getToken():  Observable<any>  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`)
    });
    const body = new URLSearchParams();
    body.set('grant_type', 'password'); 
    body.set('username', 'testgrupos');
    body.set('password', 'Microfinanzas13');
    body.set('scope', 'https://f7wy3xfdrlwfgrdwzj4uczz7ujuca3sq.analytics.ocp.oraclecloud.comurn:opc:resource:consumer::all');

    return this.http.post(this.tokenUrl, body.toString(), { headers });
  }
}

export interface AuthResponse {
  access_token: string;
}