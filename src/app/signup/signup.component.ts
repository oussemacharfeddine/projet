import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router  ) { }

  ngOnInit(): void {
  }
  async add() {
    var username=(<HTMLInputElement>document.getElementById("username")).value
    var email=(<HTMLInputElement>document.getElementById("email")).value
    var password=(<HTMLInputElement>document.getElementById("password")).value
    const body =`{"username":"${username}" ,"email":"${email}" , "password":"${password}"}`
    await fetch("http://127.0.0.1:8000/signup", {
      method:"post",
      body: body,
      headers: {
        "Content-type": "application/json"
      },
    }).then((body)=>body.json())

     this.router.navigateByUrl('login')
    
     
    
    
   

  

}
}
