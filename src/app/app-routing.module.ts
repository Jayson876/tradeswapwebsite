import { TradesmanProfileComponent } from './public/pages/tradesman-profile/tradesman-profile.component';
import { ContactusComponent } from './public/pages/contactus/contactus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';
import { ClientRegistrationComponent } from './public/pages/registration/client-registration/client-registration.component';
import { TradesmanRegistrationComponent } from './public/pages/registration/tradesman-registration/tradesman-registration.component';
import { WorkersComponent } from './public/pages/workers/workers.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddTradesmanComponent } from './admin/add-tradesman/add-tradesman.component';
import { EditTradesmanComponent } from './admin/edit-tradesman/edit-tradesman.component';
import { ViewTradesmanComponent } from './admin/view-tradesman/view-tradesman.component';
import { ViewClientComponent } from './admin/view-client/view-client.component';


const routes: Routes = [
  // client routes
  { path: '', component: HomeComponent },
  { path: 'workers2', component: WorkersListComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'workers', component: WorkersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact2', component: ContactusComponent },
  { path: ':id/profile', component: TradesmanProfileComponent },
  { path: 'registration-client', component: ClientRegistrationComponent },
  { path: 'registration-tradesman', component: TradesmanRegistrationComponent },
  { path: '**', redirectTo: 'home' },

  // admin routes
  {path: 'admin/home', component: AdminHomeComponent },
  {path: 'admin/add-tradesman', component: AddTradesmanComponent },
  {path: 'admin/edit-tradesman', component: EditTradesmanComponent},
  {path: 'admin/view-tradesman', component: ViewTradesmanComponent},
  {path: 'admin/view-client', component: ViewClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
