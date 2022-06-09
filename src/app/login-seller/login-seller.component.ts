import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {

  constructor(private router: Router, private backendservice:BackendService) { 
  
  }
  
  

  ngOnInit(): void {
    
  }
  async log(mail:string ,pwd:string,e: { preventDefault: () => void; }){
    e.preventDefault();
    
    
    this.backendservice.login(mail ,pwd)
  
          }
      
          gohome(){
            this.router.navigateByUrl('')
          }
        

}
