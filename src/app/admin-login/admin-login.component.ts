import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminUserid=""
  adminPassword=""

  constructor(private route:Router){}

  adminreadValues=()=>{
    let adminlogindata:any={
      adminUserid:this.adminUserid,
      adminPassword:this.adminPassword
    }

    console.log(adminlogindata)
    if (this.adminUserid=="admin" && this.adminPassword=="12345") {
      this.route.navigate(["/dashboard"])
      
    } else {
      alert("Invalid Userid/Password")
      this.adminUserid=""
      this.adminPassword=""
      
    }
  }
}
