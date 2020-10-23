import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch Finding Nimo',  'Find an online version and stream Merlin Finds His son'),
    new Goal(2, 'Buy cookies', 'I have to buy cookis for my sons friends coming to play tomorrow'),
    new Goal(3, 'Get new phone case', 'This is for Davids birthday coming up soon'),
    new Goal(4, 'Get Dog Food', 'Puppy food is finished'),
    new Goal(5, 'Solve math homework', 'I need to practice before exams'),
    new Goal(6, 'Plan for Angular Tutorial over the weekend', 'I need to master Angular and improve skills'),
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
