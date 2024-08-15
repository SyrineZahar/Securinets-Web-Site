import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  image: string = "assets/insta.png";
  insta="assets/insta.png"
  fb="assets/fb.png"
    picToRender(id:number) {
      if(id==1){
        this.image=this.fb
      }
      else {
        this.image=this.insta
      }
    }
}
