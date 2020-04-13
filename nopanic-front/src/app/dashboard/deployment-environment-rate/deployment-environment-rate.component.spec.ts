import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentEnvironmentRateComponent } from './deployment-environment-rate.component';

describe('DeploymentEnvironnementRateComponent', () => {
  let component: DeploymentEnvironmentRateComponent;
  let fixture: ComponentFixture<DeploymentEnvironmentRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeploymentEnvironmentRateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentEnvironmentRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
