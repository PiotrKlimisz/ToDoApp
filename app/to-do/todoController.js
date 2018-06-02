'use strict';

import { ToDo } from '../models/todo';
 
angular.module('app').controller('ToDoController', function($scope) {
  this.title = 'Hello world';
  // this.newTodo = new ToDo(666);

  // this.todos = this.ToDoService.getAllToDos();
});
