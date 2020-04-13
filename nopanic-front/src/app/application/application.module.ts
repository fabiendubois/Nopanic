import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ApplicationComponent, ApplicationDetailComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule
  ]
})
export class ApplicationModule { }
