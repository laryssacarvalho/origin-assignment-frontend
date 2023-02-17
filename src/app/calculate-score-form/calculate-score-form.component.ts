import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { CalculateScoreRequest } from '../models/calculate-score-request.model';
import { FinancialScoreService } from '../services/financial-score.service';

@Component({
  selector: 'app-calculate-score-form',
  templateUrl: './calculate-score-form.component.html',
  styleUrls: ['./calculate-score-form.component.css'],
  providers: [FinancialScoreService],
})
export class CalculateScoreFormComponent {
  faDollarSign = faDollarSign;

  scoreFormGroup = new FormGroup({
    "annual-income": new FormControl(null, [Validators.required, Validators.min(1)]),
    "monthly-costs": new FormControl(null, [Validators.required, Validators.min(1)]),
  });

  constructor(private service: FinancialScoreService) { }
  
  onBtnClick(){
    if(this.scoreFormGroup.valid){
      var request = new CalculateScoreRequest ();
      
      request.annualIncome = this.scoreFormGroup.controls['annual-income'].value!;
      request.monthlyCosts = this.scoreFormGroup.controls['monthly-costs'].value!;
  
      this.service.calculateScore(request).subscribe({
        next: (r) => { debugger; },
        error: (e) => console.log(e)
      });
      
      this.scoreFormGroup.reset();
    }
  }
}
