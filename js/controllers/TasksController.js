'use strict';
// Tasks Controller
var TasksController = (function(){
  debugger
  function create(){
    debugger 
    var desc = $("input#task_description").val()
    var prior = $("input#task_priority").val()
    var listId = $('select#select_list').val()
    var newTask = new Task(desc,prior,listId)
    debugger 
    //adds task item to specified list
    $(`#list-${newTask.list_id}`).append(`<li data-id=${newTask.id}><button class=destroy-task>x</button> ${newTask.description}, ${newTask.priority}</li>`)
  }

  // function delete(){
  //   debugger 
  //   // $(`#list-${}`).remove()
  // } 

  return {
    create
  } 
}())