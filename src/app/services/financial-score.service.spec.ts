import { TestBed } from '@angular/core/testing';
import { CalculateScoreRequest } from '../models/calculate-score-request.model';
import { CalculateScoreResponse } from '../models/calculate-score-response.model';
import { Score } from '../models/score.enum';
import { FinancialScoreService } from './financial-score.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('FinancialScoreService', () => {
  let service: FinancialScoreService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FinancialScoreService,
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(FinancialScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#calculateScore should call endpoint to calculate score', () => {
    const request = new CalculateScoreRequest ();
    request.annualIncome = 1000;
    request.monthlyCosts = 10;

    const responseData: CalculateScoreResponse = {
      score: Score.Healthy
    };
  
    service.calculateScore(request).subscribe((res) => {
      expect(responseData).toEqual(res);
    });
  
    const req = httpTestingController.expectOne(
      `${environment.apiUrl}FinancialScore`
    );

    req.flush(responseData);

    httpTestingController.verify();

    expect(req.request.method).toEqual('POST');  
  });  
});
