import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ImagesComponent } from './images/images.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';





@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ImagesComponent,
    WhatsappComponent,
  ],
  exports: [
    NavComponent,
    FooterComponent,
    ImagesComponent,
    WhatsappComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
