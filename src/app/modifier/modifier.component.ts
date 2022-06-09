import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async  modifier(){
      var newname =(<HTMLInputElement>document.getElementById("newname")).value
      var newprice =(<HTMLInputElement>document.getElementById("newnprice")).value
      var newdesc =(<HTMLInputElement>document.getElementById("newdesc")).value
      const body =`{"newname":"${newname}" ,"newprice":"${newprice}" , "newdesc":"${newdesc}" }`
        await fetch("http://127.0.0.1:8000/modifier", {
      method:"post",
      body: body ,
      headers: { 
        "Content-type": "application/json"
      },
    }).then((body)=>body.json())
  }

}
