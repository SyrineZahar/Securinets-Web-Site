import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo= "assets/logo.png";
  public constructor(private router:Router){}
  navigateTo(){
    this.router.navigate(['/login/']);
  }
}
