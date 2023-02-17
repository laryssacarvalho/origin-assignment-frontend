import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CalculateScoreResponse } from 'src/app/models/calculate-score-response.model';
import { Score } from 'src/app/models/score.enum';
import { FinancialScoreService } from 'src/app/services/financial-score.service';

import { CalculateScoreFormComponent } from './calculate-score-form.component';

describe('CalculateScoreFormComponent', () => {
  let component: CalculateScoreFormComponent;
  let fixture: ComponentFixture<CalculateScoreFormComponent>;
  let routerMock = jasmine.createSpyObj('Router', ['navigate']);
  const financialScoreServiceMock = jasmine.createSpyObj('FinancialScoreService', ['calculateScore']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CalculateScoreFormComponent ],
      providers: [
        { provide: Router, useValue: routerMock },
      ],
    })
    .compileComponents();

    TestBed.overrideProvider(FinancialScoreService, {
      useValue: financialScoreServiceMock,
    });

    fixture = TestBed.createComponent(CalculateScoreFormComponent);
    component = fixture.componentInstance;        
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onBtnClick should call financial service to calculate score', () => {
    spyOn(component.scoreFormGroup, 'reset');
  
    const responseData: CalculateScoreResponse = {
      score: Score.Healthy
    };

    financialScoreServiceMock.calculateScore.and.returnValue(of(responseData));

    component.scoreFormGroup.controls['annual-income'].setValue(1000);
    component.scoreFormGroup.controls['monthly-costs'].setValue(10);    

    component.onBtnClick();  
    
    expect(routerMock.navigate).toHaveBeenCalledWith(['score-result', { score: responseData.score }]);
    expect(component.scoreFormGroup.reset).toHaveBeenCalled();
  });
});
