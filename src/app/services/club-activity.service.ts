import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClubActivity } from '../class/club-activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubActivityService {
  URL:string="http://localhost:3000/Activity"
  constructor(private httpClient:HttpClient) { }

   getAllActivities():Observable<ClubActivity[]>{
    return this.httpClient.get<ClubActivity[]>(this.URL)
   }
   getActivityById(id: number):Observable<ClubActivity>{
    return this.httpClient.get<ClubActivity>(this.URL+"/"+id)
   }
	
	addActivity(activity:any):Observable<ClubActivity>{
    return this.httpClient.post<ClubActivity>(this.URL,activity)
  }
	
	 editActivity(id: number,activity: any):Observable<ClubActivity>{
    return this.httpClient.put<ClubActivity>(this.URL+"/"+id, activity)
   }
	
	deleteActivity(activity: any):Observable<ClubActivity>{
    return this.httpClient.delete<ClubActivity>(this.URL+"/"+activity)
  }

}
