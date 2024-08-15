import { Component, Input, OnInit } from '@angular/core';
import { ClubActivity } from 'src/app/class/club-activity';
import { Departement } from 'src/app/class/departement';
import { ClubActivityService } from 'src/app/services/club-activity.service';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit{
  activity:ClubActivity[]=[]
  constructor( private activityService: ClubActivityService){}
  ngOnInit(): void {
      this.activityService.getAllActivities().subscribe(
        data => this.activity=data
      )
      
  }
}
