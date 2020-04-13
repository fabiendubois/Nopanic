import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironmentRoutingModule } from './environment-routing.module';
import { EnvironmentComponent } from './environment.component';
import { EnvironmentDetailComponent } from './environment-detail/environment-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EnvironmentComponent, EnvironmentDetailComponent],
  imports: [
    CommonModule,
    EnvironmentRoutingModule,
    SharedModule
  ]
})
export class EnvironmentModule { }
