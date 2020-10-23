import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFomComponent } from './goal-fom.component';

describe('GoalFomComponent', () => {
  let component: GoalFomComponent;
  let fixture: ComponentFixture<GoalFomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalFomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
