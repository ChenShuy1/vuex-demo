export default {
  editTodo: function(state, { todo, content, completed }) {
    todo.content = content;
    todo.completed = completed;
  },
  addTodo: function(state, todo) {
    state.todos.push(todo);
  }
}
