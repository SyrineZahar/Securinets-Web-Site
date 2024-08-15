import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/class/departement';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  dep!: Departement[]
  depForm!: FormGroup
  constructor(private depService:DepartementService, private fb:FormBuilder){}
  ngOnInit(): void {
    this.depService.getAllDepartements().subscribe(
      data => 
      this.dep= data
    )
    this.depForm= this.fb.group(
      {
        nom:["", [Validators.required, Validators.minLength(5)]]
      }
    )
  }
  addDepartement() {
    if (this.depForm.valid) {
      const newDepName = this.depForm.value.nom.trim().toLowerCase();
      const depExists = this.dep.some(dep => dep.nom.trim().toLowerCase() === newDepName);
  
      if (depExists) {
        alert("departement exists already!");
      } else {
        this.depService.addDepartement(this.depForm.value).subscribe(
          data => {
            console.log(data);
            this.dep.push(data as Departement);
          }
        );
        alert("Department added successfully");
      }
    } else {
      alert("The form conditions are not met");
    }
  }
  
  deleteDepartement(id:number){
    this.depService.deleteDepartementById(id).subscribe(
      ()=>this.dep=this.dep.filter((e)=> {return e.id != id})
    )
    alert("Deletion successful");
  }
}
