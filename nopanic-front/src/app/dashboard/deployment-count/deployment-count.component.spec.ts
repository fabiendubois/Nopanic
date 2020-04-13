import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentCountComponent } from './deployment-count.component';

describe('DeploymentCountComponent', () => {
  let component: DeploymentCountComponent;
  let fixture: ComponentFixture<DeploymentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
