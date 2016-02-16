var todos = []

var randomTodo = document.getElementById('cannot-decide')
var newTodoInput = document.getElementById('new-todo-input')
var todoList = document.getElementById('todo-list')
var Clear = document.getElementById('clear-markdown-button')

function renderTodos() {
  todoList.innerHTML = todos.map(function(todo, index) {
    return '<li>' +
      ' <button class="move-item-up" data-index="' + index + '">↑</button>' +
      todo +
      ' <button class="move-item-down" data-index="' + index + '">↓</button>' +
      ' <button class="remove-todo" data-index="' + index + '">X</button>' +
    '</li>'
  }).join('')
}

randomTodo.onclick = function(event) {
var randomNumber = Math.floor((Math.random() * todos.length));
var item = todos[Math.floor(Math.random()*todos.length)];
window.alert(item);
}


Clear.onclick = function(event) {
//  var clickedElement = event.target
  //if (clickedElement.className === 'clear-markdown-button') {
  todos.splice(0,todos.length)
//  }
renderTodos()
}

newTodoInput.onkeypress = function(event) {
  if (event.which === 13) {
    todos.push(this.value)
    this.value = ''
    renderTodos()
  }
}

todoList.onclick = function(event) {
  var clickedElement = event.target
  if (clickedElement.className === 'remove-todo') {
    todos.splice(clickedElement.dataset.index, 1)
    renderTodos()
  }
  if (clickedElement.className === 'move-item-up') {
    var clickedIndex = clickedElement.dataset.index
    var indexMoved = clickedIndex - 1
    var temp = todos[indexMoved]
    todos[indexMoved] = todos[clickedIndex]
    todos[clickedIndex] = temp
    renderTodos()
  }
  if (clickedElement.className === 'move-item-down') {
    var clickedIndex = clickedElement.dataset.index
    var indexMoved = parseInt(clickedIndex) + 1
    var temp = todos[clickedIndex]
    todos[clickedIndex] = todos[indexMoved]
    todos[indexMoved] = temp
    renderTodos()
  }
}
