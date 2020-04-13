import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCountComponent } from './application-count.component';

describe('ApplicationCountComponent', () => {
  let component: ApplicationCountComponent;
  let fixture: ComponentFixture<ApplicationCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
