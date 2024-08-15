import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClubComponent } from './components/club/club.component';
import { BureauComponent } from './components/bureau/bureau.component';
import { adminGuard } from './guard/admin.guard';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { DepartementsComponent } from './components/departements/departements.component';
import { ErrorComponent } from './components/error/error.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';


const routes: Routes = [
  { path: "login", title: "Securinets Iset'ch Login", component: LoginComponent },
  { 
    path: "bureau",
    title: "Bureau Securinets Club",
    component: BureauComponent,canActivate:[adminGuard],
    children: [
      { path: "activity", title: "activity Securinets Club", component: ActivityDetailsComponent },
      {path:"departement", title: "departement Securinets Club", component: DepartementsComponent},
      {path:"addActivity", title: "add Securinets Club", component: AddActivityComponent},
      {path:"Admin", title: "Admin Securinets Club", component: AdminComponent}
    ]
  },
  { path: "club", title: "Securinets Iset'ch Club", component: ClubComponent },
  { path: "clubactivity/:id", component: ActivityDetailsComponent},
  { path: "editAct/:id",  title: "editact Securinets Club",component: EditComponent},
  { path: "contact", title: "Securinets Iset'ch Contact", component: ContactComponent },
  { path: "home", title: "Securinets Iset'ch", component: HomeComponent },
  { path: "", pathMatch: "full", title: "Securinets Iset'ch", component: HomeComponent },
  { path: "**", title: "404", component: ErrorComponent  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
