import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  

  constructor(private router:Router) {}
  article: any;

  async ngOnInit()  {
    const rep= await fetch("http://127.0.0.1:8000/article")
    if (rep.ok){
      rep.json().then(data=>{
        this.article= data;
        console.log(this.article)
      })
    }
    
  }

  badel() {
    this.router.navigateByUrl('modifier')
  }

  async supprimer() {
    
    const rep= await fetch("http://127.0.0.1:8000/supprimer")
    
    if (rep.ok){
      rep.json().then(data=>{
        this.article= data;
        console.log(this.article)
      })
    }
  }
 
}
