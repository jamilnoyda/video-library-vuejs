<template>
  <form @submit="onSubmit">
    <input type="text" v-model="title" name="title" aria-placeholder="Add Todo" />
    <input value="Add" type="submit" class="btn" />
  </form>
</template>
<script>
import { mapActions } from "vuex";

// import uuid from 'uuid';
export default {
  name: "AddTodo",
  methods: {
    ...mapActions(["saveTodos"]),

    onSubmit(e) { 
      e.preventDefault();
      
      this.saveTodos(this.title);
      this.title = "";
    },
  },
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