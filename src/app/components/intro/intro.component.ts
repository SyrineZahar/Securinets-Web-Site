import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  intro1= "assets/bodygsecurity.png";
  intro2= "assets/boyhacker.png";
  intro3= "assets/girlchecking.png";
  constructor(private router:Router){}
  navigateTo(){
    this.router.navigate(['/club/']);
  }
}
