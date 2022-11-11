import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { WorkersListComponent } from './workers-list/workers-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workers', component: WorkersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
