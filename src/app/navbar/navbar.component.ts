import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  continue(){
    this.router.navigateByUrl('blog');
  }
  contact(){
    this.router.navigateByUrl('contact')
  }
  gotosale(){
    this.router.navigateByUrl('article')
  }
  gotoshop(){

    this.router.navigateByUrl('shop')

  }

}
