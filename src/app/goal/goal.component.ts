import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert-service/alert.service';
import { GoalTemplate } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';



@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  // goals: GoalFormat[] = [
  //   new GoalFormat(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020,3,14)),
  //   new GoalFormat(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2020,6,9)),
  //   new GoalFormat(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2022,1,12)),
  //   new GoalFormat(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2019,0,18)),
  //   new GoalFormat(5,'Solve math homework','Damn Math', new Date(2019,2,1)),
  //   new GoalFormat(6,'Plot my world domination plan','Cause I am an evil overlord', new Date(2030,3,14)),
  // ];

  goals: GoalTemplate[];
  alertService: AlertService;
  quote!:Quote;

  goToUrl(id: any){
    this.router.navigate(['/goals',id])
  }

  deleteGoal(index:any){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }

  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  //This shows how to hide/show details
  toggleDetails(index:number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  //The complete goal function
  completeGoal(isComplete:boolean, index:number){
    if (isComplete){
      this.goals.splice(index, 1)
    }
  }

  constructor(goalService:GoalService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }
  ngOnInit(): void {

    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }

}
