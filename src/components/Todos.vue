<template>
  <div>
    <!-- <div v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)" />
    </div> -->
     <div v-for="todo in allTodos" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" />
    </div>     
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapGetters, mapActions } from "vuex";

export default {
  
  name: "Todos",
  methods:{
    ...mapActions(['getTodos']),

  },
  components: {
    TodoItem,
  },
  
  // props: ["todos"],
  computed: mapGetters(['allTodos']),
  created(){
    this.getTodos();
  }
};
</script>
<style scoped>
</style>