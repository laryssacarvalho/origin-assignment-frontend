import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateScoreFormComponent } from './calculate-score-form.component';

describe('CalculateScoreFormComponent', () => {
  let component: CalculateScoreFormComponent;
  let fixture: ComponentFixture<CalculateScoreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateScoreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateScoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
