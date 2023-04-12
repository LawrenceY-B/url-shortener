import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';
import { ShortenComponent } from './lib/shorten/shorten.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShortenComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ShortenComponent
  ]
})
export class SharedModule { }
