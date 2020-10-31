<template>
  <div id="app">
    <Header />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" kill="rahul" /> -->
    <AddTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  // todos: [
  //   {
  //     id: 1,
  //     title: "title one todot1",
  //     is_done: true,
  //     has_checklist: false,
  //   },
  //   {
  //     id: 2,
  //     title: "title one todot2",
  //     is_done: true,
  //     has_checklist: false,
  //   },
  //   {
  //     id: 3,
  //     title: "title one todot3",
  //     is_done: true,
  //     has_checklist: false,
  //   },
  // ],
  components: {
    // HelloWorld,
    Todos,
    Header,
    AddTodo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "title one todot1",
          is_done: true,
          has_checklist: true,
        },
        {
          id: 2,
          title: "title one todot2",
          is_done: false,
          has_checklist: true,
        },
        {
          id: 3,
          title: "title one todot3",
          is_done: true,
          has_checklist: false,
        },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    addTodo(newTodo) {
      // let temp = {
      //   id: Math.floor(Math.random() * 1001),
      //   title: title,
      //   is_done: false,
      //   has_checklist: false,
      // };
      this.todos.push(newTodo);
    },
  },

  // props: {
  //   todos: Object,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
