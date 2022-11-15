import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ContactusComponent } from './public/pages/contactus/contactus.component';
import { HeaderComponent } from './public/partials/header/header.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './public/modules/materials/materials.module';
import { RegistrationComponent } from './public/pages/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent,
    WorkersListComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
