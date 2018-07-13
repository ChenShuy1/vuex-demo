export default {
  allTodos: (state) => {
    return state.todos;
  },
  doneTodos: (state) => {
    return state.todos.filter((todo) => todo.completed);
  },
  activeTodos: (state) => {
    return state.todos.filter((todo) => !todo.completed);
  },
}
