import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
    data: {title: 'About me'}
  },
  {
    path:'projects',
    component : ProductsComponent,
    data:{title:'My projects'}
  },
  {
    path:'contact',
    component : ContactComponent,
    data:{title:'Contact me'}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: false }),
    AngularFontAwesomeModule,
    SlimLoadingBarModule,
    LocalStorageModule.withConfig({
      prefix: "storage",
      storageType: "localStorage"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
