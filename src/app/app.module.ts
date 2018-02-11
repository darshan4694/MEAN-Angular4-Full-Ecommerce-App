import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// material //
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './users/register/register.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SigninComponent } from './users/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { UsersDataService } from './users-data.service';
const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'signin',      component: SigninComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavBarComponent,
    SigninComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    )
  ],
  providers: [
    UsersDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
