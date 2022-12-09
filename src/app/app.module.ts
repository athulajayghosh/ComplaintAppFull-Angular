import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsernavComponent } from './usernav/usernav.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const myRoute:Routes=[
  {path:"",
  component:AdminLoginComponent},
  {path:"dashboard",
  component:DashboardComponent},
  {path:"adduser",
  component:AddUserComponent},
  {path:"userlogin",
  component:UserLoginComponent},
  {path:"profile",
  component:UserprofileComponent}

  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    DashboardComponent,
    AddUserComponent,
    UserLoginComponent,
    UsernavComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
