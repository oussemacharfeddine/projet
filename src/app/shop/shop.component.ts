import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }
  url!: string;

  ngOnInit(): void {
  }

async send() {
  var name = (<HTMLInputElement>document.getElementById("name")).value
  var price = (<HTMLInputElement>document.getElementById("price")).value
  var desc = (<HTMLInputElement>document.getElementById("desc")).value
  const body =`{"name":"${name}" ,"price":"${price}" , "desc":"${desc}" , "img":"${this.url}" }`
     await fetch("http://127.0.0.1:8000/send", {
      method:"post",
      body: body ,
      headers: { 
        "Content-type": "application/json"
      },
    }).then((body)=>body.json())




  }


  onSelectFile(event:any){
    if(event.target.files && event.target.files[0]){

      var reader= new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload =async data=>{
        this.url=data.target?.result as string;
      }

    }


  }

}
