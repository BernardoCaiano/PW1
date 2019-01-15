import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefa: {
      name: "",
      priority: 0,
      category: ""
    },
    tasks: []
    
  },

  mutations: {

  },

  actions: {

  }

});
