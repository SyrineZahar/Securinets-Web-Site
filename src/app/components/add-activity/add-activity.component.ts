import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/class/departement';
import { ClubActivityService } from 'src/app/services/club-activity.service';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  dep!:Departement[]
  activityForm!:FormGroup;
  constructor(private fb:FormBuilder, private activityService: ClubActivityService){}
  ngOnInit() {
    this.activityForm=this.fb.group(
      {
        
        name: ['',[Validators.required, Validators.minLength(5)]],
       picture: ["assets/bodygsecurity.png",[Validators.required,  Validators.minLength(12)]],
        date: ['2023-12-23',Validators.required],
        interne: [true],
        NombreDeParticipants:[17,[Validators.required, Validators.max(200)]]
      }
    )

  }

  onSubmit(){
    let activity=this.activityForm.value;
    if (this.activityForm.valid){
      this.activityService.addActivity(activity).subscribe(
        data =>{ 
          alert("Added successfully");
        }
      )
    }
    else{
      alert("Your fields are invalid");
    }
    
  }
}
