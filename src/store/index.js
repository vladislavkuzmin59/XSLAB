import Vue from 'vue'
import Vuex from 'vuex'
import mentors from './modules/mentors'
import subscriptions from './modules/subscriptions'
import curses from '@/store/modules/curses'
import myCurses from '@/store/modules/myCurses'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mentors,
    subscriptions,
    curses,
    myCurses
  },
})
