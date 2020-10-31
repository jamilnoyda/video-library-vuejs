<template>
  <div>
    <!-- {{kill}} -->
    <div v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  //   props: {
  //     msg: String,
  //     kill: String,
  //     todos: ["todos"],
  //   },
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"],
};
</script>
<style scoped>

</style>