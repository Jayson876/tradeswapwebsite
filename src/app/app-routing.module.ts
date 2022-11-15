import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './public/pages/registration/registration.component';
import { HomeComponent } from './public/pages/home/home.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'workers', component: WorkersListComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
