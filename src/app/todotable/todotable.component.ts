import { Component, OnInit } from '@angular/core';


class ToDoItem{
  whatTodo: string;
   
  constructor( whatTodo: string ) {
    this.whatTodo = whatTodo;  

  }
}

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.scss']
})


export class TodotableComponent implements OnInit {

  cases: ToDoItem[] = [
    {whatTodo: 'test one'},
    {whatTodo: 'test two'},
    {whatTodo: 'test three'}
  ];

  addItem(whatTodo): void {  

    if (whatTodo) {
      this.cases.push(
        new ToDoItem(
          whatTodo
          )
      );
    } else {
      alert("Please, enter something!");
    }

      
  }

  removeItem(e, number): void { 
    
    e.preventDefault();  
    this.cases.splice(number,1);
      
  }

  constructor() { }

  ngOnInit() {
  }


}




