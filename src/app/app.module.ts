import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { SecurinetsComponent } from './components/securinets/securinets.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ClubComponent } from './components/club/club.component';
import { BureauComponent } from './components/bureau/bureau.component';
import { SidebarBureauComponent } from './components/sidebar-bureau/sidebar-bureau.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { DepartementsComponent } from './components/departements/departements.component';
import { departementName } from './pipe/departementName';
import { EditComponent } from './components/edit/edit.component';
import { ApiComponent } from './components/api/api.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminComponent } from './components/admin/admin.component';
import { ActivityComponent } from './components/activity/activity.component';
import { AddActivityComponent } from './components/add-activity/add-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    IntroComponent,
    SocialMediaComponent,
    SecurinetsComponent,
    ContactComponent,
    LoginComponent,
    ClubComponent,
    BureauComponent,
    SidebarBureauComponent,
    FooterComponent,
    ActivityDetailsComponent,
    DepartementsComponent,
    departementName,
    EditComponent,
    ApiComponent,
    ErrorComponent,
    AdminComponent,
    ActivityComponent,
    AddActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
