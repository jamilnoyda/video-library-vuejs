import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    todos: []
  },
  actions: {
    async getTodos({ commit }) {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      // .then((res) => (this.todos = res.data))
      // .catch((err) => console.log(err));
      console.log(res.data)
      commit('setTodos', res.data)
    },
    async saveTodos({ commit }, title) {

      const res = await axios.post("https://jsonplaceholder.typicode.com/todos",
        {
          title: title,
          completed: true
        }
      )
      // .then((res) => (this.todos = res.data))
      // .catch((err) => console.log(err));

      commit('insertTodos', res.data)
    },


    async deleteTodo({ commit }, id) {

      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,
      )

      commit('deleteTodos', id)

    },


    async filterTodos({ commit }, e) {
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );

      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      // .then((res) => (this.todos = res.data))
      // .catch((err) => console.log(err));
      console.log(res.data)
      commit('setTodos', res.data)


    },
    async doneTodo({ commit }, todo) {


      await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo
      )

      commit('updateTodo', todo)




    }
  },
  mutations: {

    setTodos: (state, todos) => (state.todos = todos),
    insertTodos: (state, todos) => state.todos.unshift(todos),
    deleteTodos: (state, id) => state.todos = state.todos.filter((todo) => todo.id !== id),
    updateTodo(state, updTodo) {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
    }

  },

  modules: {
  },
  getters: {
    allTodos: (state) => state.todos

  }

})
