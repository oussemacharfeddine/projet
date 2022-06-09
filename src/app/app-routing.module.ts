import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';
import { LoginSellerComponent } from './login-seller/login-seller.component';
import { ModifierComponent } from './modifier/modifier.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
import { WestComponent } from './west/west.component';

const routes: Routes = [
{path: '', component: WestComponent},
{path: 'login' , component: LoginSellerComponent },
{path: 'article', component:ArticleComponent},
{path: 'signup' , component: SignupComponent},
{path: 'blog', component:BlogComponent},
{path:'contact',component:ContactComponent},
{path: 'crud', component:CrudComponent},
{path:'shop', component:ShopComponent},
{path:'modifier', component:ModifierComponent}


 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
