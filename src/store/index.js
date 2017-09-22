import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostname: "https://uniquiz-api.demetriocarrara.me/api/",
    courses: [],
    currentQuiz: {},
    premadeQuizzes: [],
    quizSubmission: {}
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
    },
    updateSubmission (state, payload) {
      state.quizSubmission = payload.submission
    },
    updateAnswersIds (state, payload) {
      state.quizSubmission.questions[payload.index].answersIds = payload.answersIds
    },
    updateAnswerId (state, payload) {
      state.quizSubmission.questions[payload.index].answerId = payload.answerId
    },
    updateOpenAnswerText (state, payload) {
      state.quizSubmission.questions[payload.index].openAnswerText = payload.openAnswerText
    },
    prepareQuizSubmission (state, payload) {
      state.quizSubmission.id = payload.quiz.id
      state.quizSubmission.questions = []
      for (let question of payload.quiz.questions) {
        state.quizSubmission.questions.push({
          "id": question.id,
          "answersIds": [], // Multiple choice answer
          "openAnswerText": null, // Open answer
          "answerId": null // Single choice answer
        })
      }
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
