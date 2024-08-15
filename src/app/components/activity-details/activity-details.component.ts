import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubActivity } from 'src/app/class/club-activity';
import { AdminService } from 'src/app/services/admin.service';
import { ClubActivityService } from 'src/app/services/club-activity.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit{
  identifiant!:number;
  activity!:ClubActivity
  constructor(private activatedRoute:ActivatedRoute, private activityService:ClubActivityService,private authService: AdminService){}
  ngOnInit(){
    this.identifiant=this.activatedRoute.snapshot.params['id'];
    this.activityService.getActivityById(this.identifiant).subscribe(
      data => {this.activity=data 
        console.log(data)}
      
    )
     
  }
  onSupprimer(){
    this.activityService.deleteActivity(this.identifiant)
    .subscribe();
    }
  isAdmin() {
    return this.authService.isAuthenticated();
 }
}
