import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalculateScoreRequest } from '../models/calculate-score-request.model';
import { Observable } from 'rxjs';
import { CalculateScoreResponse } from '../models/calculate-score-response.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class FinancialScoreService {
  baseURL: string = "";
  
  constructor(private http: HttpClient) {
    this.baseURL = environment.apiUrl;
  }
  
  calculateScore(request: CalculateScoreRequest): Observable<CalculateScoreResponse> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(request);
    return this.http.post<CalculateScoreResponse>(this.baseURL + 'FinancialScore', body, { 'headers':headers });    
  }
}