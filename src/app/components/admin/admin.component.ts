import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/class/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  admin!:Admin[]
  adminForm!:FormGroup
  constructor(private adminService:AdminService, private fb: FormBuilder){}
  ngOnInit(): void {
    this.adminService.getAdmin().subscribe(
      data => this.admin=data
    )
    this.adminForm= this.fb.group(
      {
        username:["",[Validators.required, Validators.minLength(5)]],
        pwd:["",[Validators.required,Validators.pattern(/.*[0-9].*/)]]
      }
    )
  }
  async change(pwd: string,npwd: string,vnpwd: string){
      if(await this.adminService.change(pwd,npwd,vnpwd))
        alert("Password changed");
      else
      alert("Your fields are invalid");
   
    }
  

  addAdmin(){
    if(this.adminForm.valid){
      this.adminService.addAdmin(this.adminForm.value).subscribe(
        data=>{
          this.admin.push(data as Admin)}
      )
      alert("added successfully");
    }
    else{
      alert("Your fields are invalid");
    }
   
  }

  deleteAdmin(id: number) {
    if (this.admin.length === 1) {
      alert("Unable to delete the last administrator");
      return;
    }

    this.adminService.deleteAdmin(id).subscribe(
      () => {
        this.admin = this.admin.filter(e => e.id !== id);
        alert("Administrator deleted successfully");
      }
    );
  }

}
