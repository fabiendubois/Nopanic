import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentRateComponent } from './deployment-rate.component';

describe('DeploymentRateComponent', () => {
  let component: DeploymentRateComponent;
  let fixture: ComponentFixture<DeploymentRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
