//app module - root app module, which declares app components with "import" statement and "declarations"
import { NgModule } from '@angular/core';
//BrowserModule - for the features that needs to run this app in a browser
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//AppCompon
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent, //AppComponent - the first component, loaded for the app
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
