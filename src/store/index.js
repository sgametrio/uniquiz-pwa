import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostname: "https://uniquiz-api.demetriocarrara.me/api/",
    courses: [],
    currentQuiz: {},
    premadeQuizzes: []
  },
  mutations: {
    updateCourses (state, payload) {
      state.courses = payload.courses
    },
    updateCurrentQuiz (state, payload) {
      state.currentQuiz = payload.quiz
    },
    updatePremadeQuizzes (state, payload) {
      state.premadeQuizzes = payload.quizzes
    }
  }
})

/* export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
}) */
