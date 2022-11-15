import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';
import { ClientRegistrationComponent } from './public/pages/registration/client-registration/client-registration.component';
import { TradesmanRegistrationComponent } from './public/pages/registration/tradesman-registration/tradesman-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'workers', component: WorkersListComponent },
  { path: 'registration-client', component: ClientRegistrationComponent },
  { path: 'registration-tradesman', component: TradesmanRegistrationComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
