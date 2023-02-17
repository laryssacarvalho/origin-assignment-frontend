import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Score } from 'src/app/models/score.enum';

@Component({
  selector: 'app-score-result',
  templateUrl: './score-result.component.html',
  styleUrls: ['./score-result.component.css']
})
export class ScoreResultComponent implements OnInit {
  title: string = '';
  score!: Score;

  constructor(private readonly router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.score = this.route.snapshot.paramMap.get('score')! as Score;
    this.setTitle();
  }

  onBtnClick(){
    this.router.navigate(["calculate-score"]);
  }

  setTitle(){
    if(this.score == Score.Healthy){
      this.title = 'Congratulations!';
    } else if(this.score == Score.Medium){
      this.title = 'There is room for improvement.'
    } else {
      this.title = 'Caution!'
    }
  }
}
