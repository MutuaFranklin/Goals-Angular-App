export class GoalTemplate{
  showDescription:boolean;
  name: any;
  constructor(public id:number, public nameOfGoal:string, public description:string, public completeDate:Date){
      this.showDescription = false;
  }
}






