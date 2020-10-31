<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <FilterTodo/>
    <Todos v-bind:todos="todos" />
    
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Todos from "../components/Todos";
import FilterTodo from "../components/FilterTodo"
import AddTodo from "../components/AddTodo";

export default {
  name: "App",

  components: {
    Todos,
    AddTodo,
    FilterTodo
  },
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