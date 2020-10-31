<template>
  <div class="todo-item" >


    <button @click="$emit('del-todo',todo.id)" class="del" >x</button>

    <p class="item-text" >{{todo.title}}</p>
    <p class="item-text">{{todo.category}}</p>
    <p class="item-text">{{todo.loop}}</p>
 
 
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods:{
      markDone(){
          
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
.item-text {
  color:black;

}
/* .checkbox {
  color: #fff;
  border: none;
  padding: 5px 9px;

  
  float: left;
}  */
</style>
