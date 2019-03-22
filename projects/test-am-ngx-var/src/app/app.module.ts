import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmNgxVarModule } from 'am-ngx-var';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmNgxVarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
