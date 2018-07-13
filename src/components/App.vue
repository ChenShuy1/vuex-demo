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
        v-for="(todo, index) in filterTodos"
        :key="index"
        :todo="todo"
      />
    </ul>
    <div class="tab">
      <button type="button" name="button" @click="getAll">全部</button>
      <button type="button" name="button" @click="getActive">未完成</button>
      <button type="button" name="button" @click="getCompleted">完成</button>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapGetters } from 'vuex'

const filter = {
  'all': (todos) => todos,
  'active': (todos) => todos.filter((todo) => !todo.completed),
  'completed': (todos) => todos.filter((todo) => todo.completed)
}

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data () {
    return {
      filter,
      visibility: 'all',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filterTodos () {
      return this.filter[this.visibility](this.todos);
    }
  },
  methods: {
    addTodo: function(e) {
      const content = e.target.value;
      e.target.value = '';
      if (content) {
        this.todos.push({
          content,
          completed: false
        })
      }
    },
    getAll: function() {
      this.visibility = 'all';
    },
    getActive: function() {
      this.visibility = 'active';
    },
    getCompleted: function() {
      this.visibility = 'completed';
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
