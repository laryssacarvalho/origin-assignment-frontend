import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ApiErrorResponse } from 'src/app/models/api-error-response.model';
import { CalculateScoreResponse } from 'src/app/models/calculate-score-response.model';
import { Score } from 'src/app/models/score.enum';
import { FinancialScoreService } from 'src/app/services/financial-score.service';
import { ToastService } from 'src/app/services/toast.service';

import { CalculateScoreFormComponent } from './calculate-score-form.component';

describe('CalculateScoreFormComponent', () => {
  let component: CalculateScoreFormComponent;
  let fixture: ComponentFixture<CalculateScoreFormComponent>;
  let routerMock = jasmine.createSpyObj('Router', ['navigate']);
  let toastServiceMock = jasmine.createSpyObj('ToastService', ['show']);
  const financialScoreServiceMock = jasmine.createSpyObj('FinancialScoreService', ['calculateScore']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CalculateScoreFormComponent ],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ToastService, useValue: toastServiceMock },
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

    component.scoreFormGroup.controls.annualIncome.setValue(1000);
    component.scoreFormGroup.controls.monthlyCosts.setValue(10);    

    component.onBtnClick();  
    
    expect(routerMock.navigate).toHaveBeenCalledWith(['score-result', { score: responseData.score }]);
    expect(component.scoreFormGroup.reset).toHaveBeenCalled();
  });

  it('#onBtnClick should call toast service when request returns an error', () => {
    spyOn(component.scoreFormGroup, 'reset');
  
    const responseError: ApiErrorResponse = {
      errors: ['error 1', 'error 2']
    };

    financialScoreServiceMock.calculateScore.and.returnValue(throwError(() => responseError));

    component.scoreFormGroup.controls.annualIncome.setValue(1000);
    component.scoreFormGroup.controls.monthlyCosts.setValue(10);    

    component.onBtnClick();  
        
    expect(toastServiceMock.show).toHaveBeenCalled();
  });
});
