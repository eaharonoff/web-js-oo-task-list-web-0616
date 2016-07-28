'use strict';
// Task Model

//add tasks to list 

const Task = (function(){
  var counter = 0;
  return class {
    constructor(description,priority,list_id){
      this.description = description
      this.priority = priority
      this.list_id = list_id 
      this.id = counter++
      Store.tasks.push(this)
    }


    
  }
}())
