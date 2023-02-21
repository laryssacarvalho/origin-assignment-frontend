import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { ToastService } from 'src/app/services/toast.service';
import { CalculateScoreRequest } from '../../models/calculate-score-request.model';
import { FinancialScoreService } from '../../services/financial-score.service';

@Component({
  selector: 'app-calculate-score-form',
  templateUrl: './calculate-score-form.component.html',
  styleUrls: ['./calculate-score-form.component.css'],
  providers: [FinancialScoreService],
})
export class CalculateScoreFormComponent {
  faDollarSign = faDollarSign;

  scoreFormGroup = new FormGroup({
    annualIncome: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    monthlyCosts: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
  });

  constructor(private service: FinancialScoreService, private readonly router: Router) {   
    
  }
  
  onBtnClick(){
    if(this.scoreFormGroup.valid){
      var request = new CalculateScoreRequest ();
      
      request.annualIncome = this.scoreFormGroup.controls.annualIncome.value!;
      request.monthlyCosts = this.scoreFormGroup.controls.monthlyCosts.value!;
      
      this.service.calculateScore(request).subscribe({      
        next: (r) => this.router.navigate(['score-result', { score: r.score }]),
        error: (e) => {
          console.log(e) 
        }
      });
      
      this.scoreFormGroup.reset();
    } else if(this.scoreFormGroup.pristine && !this.scoreFormGroup.touched){
      this.scoreFormGroup.controls.annualIncome.markAsTouched();
      this.scoreFormGroup.controls.monthlyCosts.markAsTouched();
    }
  }

  get annualIncome() { return this.scoreFormGroup.get('annualIncome'); }

  get monthlyCosts() { return this.scoreFormGroup.get('monthlyCosts'); }
}
