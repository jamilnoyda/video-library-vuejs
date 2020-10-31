<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.is_done}">

    <input type="checkbox" v-on:change="markDone" class="checkbox"  />
    <button @click="$emit('del-todo',todo.id)" class="del" >x</button>

    <p>{{todo.title}}</p>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods:{
      markDone(){
          this.todo.is_done= !this.todo.is_done;
      }
  }
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
