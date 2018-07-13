<template>
  <div class="todo-item">
    <span v-bind:class="{ completed: todo.completed }">{{ todo.content }}</span>
    <button
      type="button" name="button"
      @click="toggleTodo(todo)"
    >
      {{ todo.completed ? '未完成' : '完成' }}
    </button>
    <button
      type="button" name="button"
      @click="(e) => deleteTodo(e)"
    >
    删除
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoItem',
  props: ['todo'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions({
      toggleTodo: 'toggleTodo'
    }),
    deleteTodo: function(e) {
      console.log('delete an item');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-item {
  margin: 10px;
}

.completed {
  text-decoration: line-through;
}
</style>
