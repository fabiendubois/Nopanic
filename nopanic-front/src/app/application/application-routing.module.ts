import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
  },
  {
    path: ":application",
    component: ApplicationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
