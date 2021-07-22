import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GoalTemplate } from '../goal'

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  @Output() addGoal = new EventEmitter<GoalTemplate>();
  newGoal = new GoalTemplate (0, "", "", new Date());

  submitGoal(){
    this.addGoal.emit(this.newGoal)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
