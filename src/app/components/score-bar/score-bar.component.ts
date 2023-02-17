import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html',
  styleUrls: ['./score-bar.component.css']
})
export class ScoreBarComponent implements OnInit {

  constructor() { }
  	
	@Input() type: string = '';

  ngOnInit(): void {
  }

}
