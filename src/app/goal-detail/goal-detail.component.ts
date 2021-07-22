import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GoalTemplate } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { goals } from '../goalList';



@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})

export class GoalDetailComponent implements OnInit {

  // @Input() goalDescription!: GoalTemplate;

  // @Output() isComplete = new EventEmitter<boolean>();
  // @Output() goalIsComplete = new EventEmitter<boolean>();

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

  // goalDelete(complete:boolean){
  //   this.goalIsComplete.emit(complete);

  // }

  goal!:any;

  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }

}

