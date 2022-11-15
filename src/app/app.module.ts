import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ContactusComponent } from './public/pages/contactus/contactus.component';
import { HeaderComponent } from './public/partials/header/header.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent,
    WorkersListComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
