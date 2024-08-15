import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sidebar-bureau',
  templateUrl: './sidebar-bureau.component.html',
  styleUrls: ['./sidebar-bureau.component.css']
})
export class SidebarBureauComponent {
  constructor(private authService:AdminService,private router:Router){}
    onDisconnect(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
