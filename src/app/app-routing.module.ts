import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateScoreFormComponent } from './components/calculate-score-form/calculate-score-form.component';
import { ScoreResultComponent } from './components/score-result/score-result.component';

const routes: Routes = [
  { path:  "", pathMatch:  "full", redirectTo:  "calculate-score" },
  { path: "calculate-score", component: CalculateScoreFormComponent },  
  { path: "score-result", component: ScoreResultComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
