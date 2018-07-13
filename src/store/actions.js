export default {
  toggleTodo ({ commit }, todo) {
    commit('editTodo', {
      todo,
      content: todo.content,
      completed: !todo.completed
    });
  },
  addTodo ({ commit }, content) {
    commit('addTodo', {
      content,
      completed: false
    });
  }
}
