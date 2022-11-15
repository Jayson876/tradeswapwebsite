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
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRegistrationComponent } from './public/pages/registration/client-registration/client-registration.component';
import { TradesmanRegistrationComponent } from './public/pages/registration/tradesman-registration/tradesman-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent,
    WorkersListComponent,
    ClientRegistrationComponent,
    TradesmanRegistrationComponent
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
