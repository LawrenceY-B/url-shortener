import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpperComponent } from './components/upper/upper.component';
import { LowerComponent } from './components/lower/lower.component';
import { MiddleComponent } from './components/middle/middle.component';
import { SharedModule } from 'src/assets/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    LowerComponent,
    MiddleComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
