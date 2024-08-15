import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL='https://api.agify.io?name='

  constructor(private httpClient:HttpClient) { }

  getGame(name: string){
    return this.httpClient.get(this.URL+name)
  }

}
