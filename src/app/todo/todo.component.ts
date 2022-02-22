import { Component, OnInit } from '@angular/core';
import { GoalTimeFrameType, Rating, Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  valueRating1: Rating = {
    description: 'Less dependent on one country',
    rating: 8 
  };

  costRating1: Rating = {
    rating: 2  
  };

  todo1: Todo = {
    id: 1, 
    goal: 'Move abroad',
    value: this.valueRating1,
    cost: this.costRating1,
    timeframe: GoalTimeFrameType.LONG_TERM
  };

  valueRating2: Rating = {
    description: 'Less dependent on one country',
    rating: 6 
  };

  costRating2: Rating = {
    rating: 2  
  };

  todo2: Todo = {
    id: 2, 
      goal: 'Work from home', 
      value: this.valueRating2,
      cost: this.costRating2,
      timeframe: GoalTimeFrameType.SHORT_TERM 
  };

  todoList: Array<Todo> = [
    this.todo1,
    this.todo2
  ];

  headElements = ['ID', 'Goal', 'Value', 'Cost', 'Timeframe'];  

  constructor() { }

  ngOnInit(): void {
    var sortedTodo: Array<Todo> = this.todoList.sort((todo1: Todo, todo2: Todo) => {
      let todo1Val: number;
      let todo2Val: number;
      
      if(todo1.cost) {
        todo1Val = todo1.value.rating - todo1.cost.rating; 
      } else {
        todo1Val = todo1.value.rating; 
      }
      
      if(todo2.cost) {
        todo2Val = todo2.value.rating - todo2.cost.rating;
      } else {
        todo2Val = todo2.value.rating;
      }

      if(todo1Val > todo2Val) {
        return 1;
      } else {
        return -1;
      }            
    });
    
    /*
    this.todoService.callEndpoint()
    .subscribe((res) => {
      console.log("result");
    });
    */
  }
}
