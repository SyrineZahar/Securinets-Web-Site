import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Admin } from '../class/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) { }
  URL = "http://localhost:3000/admin";
 
   admin!: Admin[]
 
  getAdmin() {
     return this.httpClient.get<Admin[]>(this.URL).pipe(
       tap((data: Admin[]) => {
         this.admin = data;
       })
     );
  }
 
  private authenticated = false;
 
  public async change( pwd: string,npwd: string,vnpwd: string): Promise<boolean> {
   await this.getAdmin().toPromise();
   let found = false;
   this.admin.forEach(admin => {
     if (admin.pwd == pwd && npwd==vnpwd && npwd!="") {
       let id=admin.id;
       let username=admin.username;
       pwd=npwd;
       this.httpClient.put<Admin>(this.URL+"/"+id,{id,username,pwd}).subscribe();
       found = true;
     }
   });
   return this.authenticated = found;
 }
  public async login(username: string, pwd: string): Promise<boolean> {
       await this.getAdmin().toPromise();
       let found = false;
       this.admin.forEach(admin => {
         if (admin.username == username && admin.pwd == pwd) {
           found = true;
         }
       });
       return this.authenticated = found;
  }
  public logout() {
     this.authenticated = false;
  }
 
  public isAuthenticated() {
     return this.authenticated;
  }

  addAdmin(user: Admin) {
    return this.httpClient.post(this.URL, user);
  }
  deleteAdmin(id:number){
    return this.httpClient.delete(this.URL+"/"+id)
  }
}
