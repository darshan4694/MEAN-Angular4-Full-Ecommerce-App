import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material //
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
