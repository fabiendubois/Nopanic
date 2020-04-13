import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Nebular
import { NbCardModule, NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule, NbButtonModule, NbSpinnerModule, NbActionsModule, NbTreeGridModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// Components
import { DeploymentDetailComponent } from './components/deployment-detail/deployment-detail.component';
import { MenuLayoutComponent } from './layouts/menu-layout/menu-layout.component';
import { FooterLayoutComponent } from './layouts/footer-layout/footer-layout.component';

@NgModule({
  declarations: [DeploymentDetailComponent, MenuLayoutComponent, FooterLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    // Nebular
    NbCardModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbTreeGridModule,
    NbInputModule

  ],
  exports: [
    // Components
    DeploymentDetailComponent,
    MenuLayoutComponent,
    FooterLayoutComponent,
    // Nebular
    NbCardModule,
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
    NbMenuModule,
    NbActionsModule,
    NbTreeGridModule,
    NbInputModule
  ]
})
export class SharedModule { }
