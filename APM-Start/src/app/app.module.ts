//app module - root app module, which declares app components
//with "import" statement and "declarations"
import { NgModule } from '@angular/core';
//BrowserModule - for the features that needs to run this app in a browser
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//AppCompon
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent, //AppComponent - the first component, loaded for the app
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
