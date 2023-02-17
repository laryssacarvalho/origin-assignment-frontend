import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Score } from 'src/app/models/score.enum';

import { ScoreResultComponent } from './score-result.component';

describe('ScoreResultComponent', () => {
  let component: ScoreResultComponent;
  let fixture: ComponentFixture<ScoreResultComponent>;
  let routerMock = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreResultComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap( { 'score': 'Healthy' } ) } } },
        { provide: Router, useValue: routerMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreResultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should set score and call setTitle', () => {
    spyOn(component, 'setTitle');
    fixture.detectChanges();
    expect(component.score).toBe('Healthy');
    expect(component.setTitle).toHaveBeenCalled();
  });

  it('#onBtnClick should redirect to calculate score screen', () => {
    component.onBtnClick();
    
    expect(routerMock.navigate).toHaveBeenCalledWith(['calculate-score']);
  });

  it('#setTitle should set title correctly when score is Healthy', () => {
    component.score = Score.Healthy;
        
    component.setTitle();
    
    expect(component.title).toBe('Congratulations!');    
  });

  it('#setTitle should set title correctly when score is Medium', () => {
    component.score = Score.Medium;
    
    component.setTitle();
    
    expect(component.title).toBe('There is room for improvement.');    
  });

  it('#setTitle should set title correctly when score is Low', () => {
    component.score = Score.Low;
    
    component.setTitle();
    
    expect(component.title).toBe('Caution!');
  });

  it('#getScoreBarType should return full when score is healthy', () => {
    component.score = Score.Healthy;

    var type = component.getScoreBarType();
    
    expect(type).toBe('full');    
  });

  it('#getScoreBarType should return medium when score is medium', () => {
    component.score = Score.Medium;

    var type = component.getScoreBarType();
    
    expect(type).toBe('medium');    
  });

  it('#getScoreBarType should return medium when score is low', () => {
    component.score = Score.Low;

    var type = component.getScoreBarType();
    
    expect(type).toBe('low');    
  });
});
