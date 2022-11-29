import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { ContactusComponent } from './public/pages/contactus/contactus.component';
import { HeaderComponent } from './public/partials/header/header.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';

import { SignInComponent } from './public/pages/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './public/modules/materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRegistrationComponent } from './public/pages/registration/client-registration/client-registration.component';
import { TradesmanRegistrationComponent } from './public/pages/registration/tradesman-registration/tradesman-registration.component';
import { FooterComponent } from './public/partials/footer/footer.component';
import { WorkersComponent } from './public/pages/workers/workers.component';
import { ScrollDirective } from './public/directives/scroll.directive';
import { TradesmanProfileComponent } from './public/pages/tradesman-profile/tradesman-profile.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AddTradesmanComponent } from './admin/add-tradesman/add-tradesman.component';
import { ViewClientComponent } from './admin/view-client/view-client.component';
import { EditTradesmanComponent } from './admin/edit-tradesman/edit-tradesman.component';
import { ViewTradesmanComponent } from './admin/view-tradesman/view-tradesman.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    HeaderComponent,
    WorkersListComponent,

    SignInComponent,

    ClientRegistrationComponent,
    TradesmanRegistrationComponent,
    FooterComponent,
    WorkersComponent,
    ScrollDirective,
    TradesmanProfileComponent,
    ContactComponent,
    AdminHomeComponent,
    AdminNavComponent,
    AddTradesmanComponent,
    ViewClientComponent,
    EditTradesmanComponent,
    ViewTradesmanComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
