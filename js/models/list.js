

'use strict';
// List Model
const List = (function () {
  var counter = 0
  return class {
    constructor(title){
    this.title = title
    this.id = counter++
    this.tasks = []
    Store.lists.push(this)
    }
  }

}())