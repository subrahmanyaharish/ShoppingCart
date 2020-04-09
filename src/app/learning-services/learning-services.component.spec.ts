import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningServicesComponent } from './learning-services.component';

describe('LearningServicesComponent', () => {
  let component: LearningServicesComponent;
  let fixture: ComponentFixture<LearningServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
