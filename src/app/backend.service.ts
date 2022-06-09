import {
    Injectable,
    OnInit
  } from '@angular/core';
  
  @Injectable({
    providedIn: 'root'
  })
  
export class BackendService implements OnInit {
     
  constructor() {}
  
  ngOnInit() {}
  login(mail: string, pwd: string) {
    let log = {
      mail: "",
      pwd: ""
    }
    log.mail = mail
    log.pwd = pwd
    const url = 'http://127.0.0.1:8000/login';

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(log)

      })
      .then(response => response.json())
      

     
  }
}