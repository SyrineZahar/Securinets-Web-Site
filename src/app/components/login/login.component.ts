import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder,private router:Router,private authService:AdminService){ }
  loginForm!:FormGroup;
  ngOnInit() {
    this.loginForm=this.fb.group(
      {
        username: ['',[Validators.required]],
        pwd: ['',[Validators.required,Validators.minLength(4)]]
      }
    )
  } 
  async login(lg:string, mdp:string){
    if(await this.authService.login(lg, mdp))
      this.router.navigate(['/bureau']);
    else
      alert("Login ou mot de passe incorrect"); 
    }
  isValidUsername(){
    return this.loginForm.get('username')?.invalid &&
    this.loginForm.get('username')?.touched;
    }
    
    isValidPassword(){
    return this.loginForm.get('pwd')?.invalid &&
    this.loginForm.controls['pwd'].touched;
    }
    
}
