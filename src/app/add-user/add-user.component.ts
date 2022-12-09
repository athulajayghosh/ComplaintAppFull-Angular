import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  name=""
  address=""
  phoneno=""
  email=""
  username=""
  password=""
  confirmpassword=""
 constructor(private api:ApiService){}

  readEmpData=()=>{
    let data:any={
      name:this.name,
      phoneno:this.phoneno,
      email:this.email,
      username:this.username,
      password:this.password,
    }
    if (this.password==this.confirmpassword) {
        this.api.adduser(data).subscribe(
        (response)=>{
        console.log(response)
        alert("Registration Successful")
        this.name=""
        this.phoneno=""
        this.email=""
        this.username=""
        this.password=""
        this.confirmpassword=""
        })
      
    } else {
      alert("Password & Confirm Password does't match , Try Again")
      this.password=""
      this.confirmpassword=""
      
    }

}
}
