import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-fom',
  templateUrl: './goal-fom.component.html',
  styleUrls: ['./goal-fom.component.css']
})
export class GoalFomComponent implements OnInit {

  newGoal = new Goal(0, ' ', '', new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal() {
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit() {
  }

}
