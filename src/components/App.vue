<template>
  <div>
    <h1>TODOS</h1>
    <input class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo">
    <ul class="todo-list">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      todos: [{
        content: '112',
        completed: true
      }, {
        content: '1232',
        completed: false
      }],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
