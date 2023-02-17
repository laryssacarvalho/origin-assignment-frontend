import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateScoreFormComponent } from './calculate-score-form/calculate-score-form.component';

const routes: Routes = [
  { path:  "", pathMatch:  "full", redirectTo:  "calculate-score" },
  { path: "calculate-score", component: CalculateScoreFormComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
