import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import {NgSpinningPreloader} from 'ng2-spinning-preloader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    // NgSpinningPreloader 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
