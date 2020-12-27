/* eslint-disable */
import { IRound } from '@/utils/models';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    rounds: [] as IRound[]
  },
  getters: {
    rounds: (state: any): IRound[] => {
      return ((state.rounds || []) as IRound[]).reverse();
    }
  },
  mutations: {
    add(
      state: any,
      round: {
        winner: string;
        points: number;
        drawTimo: number;
        drawPetra: number;
      }
    ) {
      state.rounds.push({
        ...round,
        start: new Date().getTime()
      } as IRound);
    },
    remove(state: any, date: number) {
      state.rounds = state.rounds.filter((x: IRound) => x.start !== date);
    }
  }
});

export default store;
