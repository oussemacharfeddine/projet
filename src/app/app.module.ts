import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WestComponent } from './west/west.component';
import { LoginSellerComponent } from './login-seller/login-seller.component';
import { ArticleComponent } from './article/article.component';

import { EspaceSellerComponent } from './espace-seller/espace-seller.component';
import { SignupComponent } from './signup/signup.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';
import { ShopComponent } from './shop/shop.component';
import { ModifierComponent } from './modifier/modifier.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WestComponent,
    LoginSellerComponent,
    ArticleComponent,
    
    EspaceSellerComponent,
    SignupComponent,
    BlogComponent,
    ContactComponent,
    CrudComponent,
    ShopComponent,
    ModifierComponent,
    

   
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
