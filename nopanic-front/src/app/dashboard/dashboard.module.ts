import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DeploymentCountComponent } from './deployment-count/deployment-count.component';
import { DeploymentRateComponent } from './deployment-rate/deployment-rate.component';
import { ApplicationCountComponent } from './application-count/application-count.component';
import { DeploymentEnvironmentRateComponent } from './deployment-environment-rate/deployment-environment-rate.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DeploymentCountComponent, DeploymentRateComponent, ApplicationCountComponent, DeploymentEnvironmentRateComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule
  ],
})
export class DashboardModule { }
