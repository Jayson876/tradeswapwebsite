import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workers', component: WorkersListComponent },
  { path: 'signin', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
