/* eslint-disable */
import { IRound } from '@/utils/models';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    rounds: [
      { winner: 'timo', points: 42, start: 1604682786287 },
      { winner: 'timo', points: 74, start: 1604682787525 },
      { winner: 'timo', points: 8, start: 1604682788277 },
      { winner: 'timo', points: 5, start: 1604682788736 },
      { winner: 'petra', points: 46, start: 1604682790740 },
      { winner: 'petra', points: 5, start: 1604682791759 },
      { winner: 'petra', points: 22, start: 1604682792840 },
      { winner: 'petra', points: 47, start: 1604682793720 }
    ] as IRound[]
  },
  getters: {
    rounds: (state: any): IRound[] => {
      return state.rounds || [];
    },
    timo: (state: any): number => {
      return (state.rounds as IRound[])
        .filter(x => x.winner !== 'timo')
        .map(x => x.points)
        .reduce((a, b) => a + b, 0);
    },
    petra: (state: any): number => {
      return (state.rounds as IRound[])
        .filter(x => x.winner !== 'petra')
        .map(x => x.points)
        .reduce((a, b) => a + b, 0);
    }
  },
  mutations: {
    add(state: any, round: { winner: string; points: number }) {
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
