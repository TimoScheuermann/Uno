/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    a: 1,
  },
  getters: {
    a: (state: any): number => {
      return state.a;
    },
  },
  mutations: {
    updateA(state: any, a: number) {
      state.a = a;
    },
  },
});

export default store;
