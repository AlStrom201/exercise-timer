import Vue from 'vue';
import Vuex from 'vuex';
import timer from './modules/timer';


Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    timer
  }
})
