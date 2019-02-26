import { Component, OnInit } from '@angular/core';


class ToDoItem{
  whatTodo: string;
  status: string;
   
  constructor( whatTodo: string, status: string ) {
    this.whatTodo = whatTodo; 
    this.status = status;

  }
}

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.scss']
})


export class TodotableComponent implements OnInit {

  cases: ToDoItem[] = [
    {whatTodo: 'test one', status: 'actual'},
    {whatTodo: 'test two', status: 'actual'},
    {whatTodo: 'test three', status: 'actual'},
    {whatTodo: 'test four', status: 'actual'},
    {whatTodo: 'test five', status: 'deleted'}
  ];
  status = [
    {name: "actual"},
    {name: "marked"},
    {name: "deleted"}
  ];

  addItem(event, input_todo): void {  

    if (input_todo.value) {
    
      this.cases.unshift(
        new ToDoItem(
          input_todo.value,
          this.status[0].name
          )
      );
    } else {
      alert("Please, enter something!");
    }

    event.preventDefault();
    const inputs = event.target.children;

    for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].getAttribute('type') != 'submit') {
        inputs[i].value = '';
      }
    }  
      
  }

  removeItem(e, number): void { 

    e.preventDefault(); 
    status = this.cases[number].status;


      this.cases[number].status = this.status[2].name;
      this.cases.push(this.cases[number]);
      this.cases.splice(number,1);  

    if( status == this.status[2].name ) {

      const sure = confirm("Are you sure?");
      if(sure) this.cases.splice(number,1);  

    } 
  }

  returnItem(e, number): void {  
    e.preventDefault(); 
    this.cases[number].status = this.status[0].name;  
    var test = this.cases.splice(number,1);  
    console.log(test);
    this.cases.unshift(test[0]);
    
    
  }

  tickItem(e, number): void { 
    e.preventDefault(); 

    if(this.cases[number].status == this.status[1].name){
      this.cases[number].status = this.status[0].name;
      return;
    };  

    this.cases[number].status = this.status[1].name;  

  }

  constructor() { }

  ngOnInit() {
  }


}




