export function ToDo(id) {
  this.id = id;
  this.title = '';
  this.complete = false;
  
  console.log('test!');

  this.create = function(values) {
    Object.assign(this, values);
  };
  
}
