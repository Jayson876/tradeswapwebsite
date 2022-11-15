import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { WorkersListComponent } from './public/pages/workers-list/workers-list.component';
import { WorkersComponent } from './public/pages/workers/workers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workers', component: WorkersListComponent },
  { path: 'workers2', component: WorkersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
