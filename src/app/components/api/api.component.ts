import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent{
  result!:any
  constructor(private apiService: ApiService){}
  start(e:any){
    var name= e.target.value
    this.apiService.getGame(name).subscribe(
      data => this.result=data
    )
  }
}
