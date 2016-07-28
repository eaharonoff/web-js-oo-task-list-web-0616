// Initialize

// $(function() { // on document ready
//   listController = new ListsController();
//   listController.init();
//   tasksController = new TasksController();
//   tasksController.init();
// });
const Store = {
  lists: [],
  tasks: []
};
//add list 
$(document).on('ready', function(){
  //listen for submit button to create list 
  $('#add_list').on('submit', function(){
    event.preventDefault()
    // debugger
    ListsController.create(); 
    //listen for submit button to delete list 
  });
  $('body').on('click', '.destroy-list', function(){
      ListsController.destroy();
    });
  //add task
  $('#add_task').on('submit', function(){
    event.preventDefault()
    TasksController.create();
    });
  })
  //delete task from
// $(document).on('ready', function(){
//   $('.destroy-task').on('submit', function(){

//     event.preventDefault()
//     TasksController();
//   });

// })

