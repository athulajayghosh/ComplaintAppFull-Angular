import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  userid:any=""
  constructor(private api:ApiService){
    this.userid=localStorage.getItem("userid")
    let data:any ={"id":this.userid}
  
   this.api.getUserData(data).subscribe(
    (response:any)=>{
      this.userdata=response
    }
   )
}  

userdata:any=[]
}
