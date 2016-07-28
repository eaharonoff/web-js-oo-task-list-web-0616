'use strict';
// Lists Controller
var ListsController = (function(){
    // debugger
    function create(){
    var listTitle = $("input#list_title").val()
    var list = new List(listTitle)

    //select box functionality
    $("select#select_list").append(list.name)
    $("input[type='text']").val('')
    var selectList = document.getElementById("select_list")
    var option = document.createElement("option")
    option.value = list.id 
    option.text = list.title 
    selectList.add(option)
    //creates a box for a list 
    $('#lists').append(`<div id=list-${list.id}><h2><button value= '${list.id}' class='destroy-list'>x</button>  ${list.title}</h2><ul id=list-${list.id} data-id=${list.id}></ul></div>`)
  }

   function destroy(){
    // debugger 
    var the_id = parseInt(event.target.value)
    $(`#list-${the_id}`).remove()
  } 


  return {
    create,
    destroy
  }
}())



