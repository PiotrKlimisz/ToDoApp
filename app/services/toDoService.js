angular.module('app').service('ToDoService', function() {
  var todos = [];
  var lastId = 0;

  this.addTodo = function(todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  };

  this.deleteToDoById = function(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  };

  this.updateTodoById = function(id, values) {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  };

  this.getAllToDos = function() {
    return this.todos;
  };

  this.getTodoById = function(id) {
    return this.todos.filter(todo => todo.id === id).pop();
  };

  this.toggleTodoComplete = function(todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  };
});
