<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <input type="checkbox" v-on:change="markDone(todo)" v-model="value" class="checkbox" />
    <button @click="deleteTodo(todo.id)" class="del">x</button>

    <p>{{todo.title}}</p>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["deleteTodo", "doneTodo"]),
    markDone(todo) {
      const updateTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.doneTodo(updateTodo);

    },
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
.checkbox {
  color: #fff;
  border: none;
  padding: 5px 9px;

  cursor: pointer;
  float: left;
}

</style>
