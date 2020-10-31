<template>
  <form @submit="addTodo">
    <input type="text" v-model="title" name="title" aria-placeholder="Add Todo" />
    <input value="Add" type="submit" class="btn" />
  </form>
</template>
<script>

// import uuid from 'uuid';
export default {
  
  name: "AddTodo",
  methods:{
    addTodo(e){
      e.preventDefault()
      const newTodo={
        // id: uuid.v4(),
        id: Math.floor(Math.random() * 1001),


        title:this.title,
        is_done:false
      }
      this.$emit('add-todo',newTodo)
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>