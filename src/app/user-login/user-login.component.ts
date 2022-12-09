import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password=""
  userdata:any={}
  constructor(private api:ApiService , private route:Router){

  }
  readvalue=()=>{
    let data={"email" : this.email,"password":this.password}
    console.log(data)
    this.api.fetchuser(data).subscribe(
      (response:any)=>{
        this.email=""
        this.password=""
        if (response.status == "success") {
          let userid=response.id
          console.log(userid)
          localStorage.setItem("userid",userid)
          this.route.navigate(["/profile"])
        } else {
          alert(response.message)
        }   

      }
    )}
}
