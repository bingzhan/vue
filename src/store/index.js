import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './modules/cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // modules: {
  //   cart
  // },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
  state: {
    count: 0,
    name: 'kenliang',
    age: 28
  },
  getters: {
    // store的计算属性
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})