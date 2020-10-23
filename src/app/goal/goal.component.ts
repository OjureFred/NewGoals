import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch Finding Nimo',  'Find an online version and stream Merlin Finds His son', new Date(2020, 11, 14)),
    new Goal(2, 'Buy cookies', 'I have to buy cookis for my sons friends coming to play tomorrow', new Date(2019, 6, 9)),
    new Goal(3, 'Get new phone case', 'This is for Davids birthday coming up soon', new Date(2022, 1, 12)),
    new Goal(4, 'Get Dog Food', 'Puppy food is finished', new Date(2019, 0, 18)),
    new Goal(5, 'Solve math homework', 'I need to practice before exams', new Date(2019, 2, 14)),
    new Goal(6, 'Plan for Angular Tutorial over the weekend', 'I need to master Angular and improve skills', new Date(2030, 3, 21)),
  ];

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
