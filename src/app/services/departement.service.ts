import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../class/departement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  URL="http://localhost:3000/departement"
  constructor(private httpClient:HttpClient) { }
  getAllDepartements():Observable<Departement[]>{
    return this.httpClient.get<Departement[]>(this.URL)
  }

  getDepartement(id:number):Observable<Departement>{
    return this.httpClient.get<Departement>(this.URL+"/"+id)
  }

  addDepartement(d:Departement){
    return this.httpClient.post(this.URL, d)
  }
  
  deleteDepartementById(id:number):Observable<Departement>{
    return this.httpClient.delete<Departement>(this.URL+"/"+id)
  }
}
