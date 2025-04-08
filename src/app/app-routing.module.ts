import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { GalleryShowerComponent } from './gallery-shower/gallery-shower.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'', component: ShopComponent},
  {path:'gallery', component: GalleryShowerComponent},
  {path:'about', component: AboutComponent},
  {path:'faq', component: FAQComponent},
  {path:'contact',component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top"})],
 exports: [RouterModule]
})
export class AppRoutingModule { }
