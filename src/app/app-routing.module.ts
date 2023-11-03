import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', component: ShopComponent},
  {path:'about', component: AboutComponent},
  {path:'faq', component: FAQComponent},
  {path:'contact',component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
