<template>
  <div>
    <q-tabs slot="navigation">
      <q-tab default slot="title" name="fill-in" v-if="!showScore" icon="edit">Fill in</q-tab>
      <q-tab slot="title" name="summary" icon="assignment">Summary</q-tab>

      <q-tab-pane name="fill-in" v-if="!showScore" style="padding-bottom:70px">
        <div class="layout-padding" v-if="Object.keys(quiz).length > 0">
          <q-card>
            <q-card-title>
              {{ quiz.questions[selected - 1].text }}
            </q-card-title>
            <q-card-main>
              <!-- Domanda a risposta singola -->
              <div v-if="quiz.questions[selected - 1].solutionType === 'single'">
                <div v-for="answer of quiz.questions[selected - 1].answers" :key="answer.id">
                  <q-card-separator style="margin-top:5px; margin-bottom:5px"/>
                  <q-radio v-model="answerId" :val="answer.id" :label="answer.text" />
                </div>
              </div>

              <!-- Domanda a risposta multipla -->
              <div v-else-if="quiz.questions[selected - 1].solutionType === 'multiple'">
                <div v-for="answer of quiz.questions[selected - 1].answers" :key="answer.id">
                  <q-card-separator style="margin-top:5px; margin-bottom:5px"/>
                  <q-checkbox v-model="answersIds" :val="answer.id" :label="answer.text"/>
                </div>
              </div>

              <!-- Domanda a risposta aperta -->
              <div v-else>
                <q-input v-model="openAnswerText" />
              </div>
            </q-card-main>
          </q-card>

          <q-fixed-position class="fixed-bottom" :offset="[10, 10]">
            <q-card class="bg-white">
              <q-pagination color="primary" class="justify-center" style="display:flex" v-model="selected" :max="quiz.questions.length" />
            </q-card>
          </q-fixed-position>
        </div>
      </q-tab-pane>

      <q-tab-pane name="summary">
        <div v-if="showScore">
          Your score: {{ currentScore }} / {{ maxScore }}
          <br/>
          <router-link to="/">Return to home</router-link>
        </div>

        <div v-else-if="quiz.questions !== undefined">
          Total questions: {{ quiz.questions.length }}
          <br/>
          Questions without an answer: TODO
          <br />
          Questions summary: TODO
          <q-fixed-position corner="bottom-right" :offset="[20, 20]">
            <q-btn color="red" icon-right="send" @click="submitQuizDialog">Submit answers</q-btn>
          </q-fixed-position>
        </div>

      </q-tab-pane>
    </q-tabs>
  </div>

</template>

<script>
import { mapState } from "vuex"
import { Dialog, QCard, QCardTitle, QCardSeparator, QCardMain, QPagination, QRadio, QCheckbox, QInput, QFixedPosition, QBtn, QTabs, QTab, QTabPane } from "quasar"

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QPagination,
    QRadio,
    QCheckbox,
    QInput,
    QFixedPosition,
    QBtn,
    QTabs,
    QTab,
    QTabPane
  },
  data () {
    return {
      maxScore: 0,
      currentScore: 0,
      showScore: false,
      selected: 1,
      answerId: null,
      answersIds: [],
      openAnswerText: null,
      quizId: this.$route.params.id
    }
  },
  created: function () {
    // Retrieve quiz if there isn't current one in vuex
    if (Object.keys(this.quiz).length === 0) {
      this.$http.get(this.$store.state.hostname + "quizzes/" + this.quizId).then(data => {
        this.$store.commit("updateCurrentQuiz", { quiz: data.data.data })
        this.$store.commit("prepareQuizSubmission", { quiz: data.data.data })
      }).catch(data => {
        // Failed to fetch, log and redirect
        console.log(data)
        this.$router.push("/quiz")
      })
    }
  },
  computed: {
    ...mapState({
      quiz: state => state.currentQuiz
    })
  },
  watch: {
    // NOTE: These changes have to be done with computed properties but I can't figure out
    // why it is not working with computed getter/setter retrieving values from store

    // Update Vuex and QRadio v-model value
    answerId: function (value) {
      this.$store.commit("updateAnswerId", { index: this.selected - 1, answerId: value })
    },
    // Update Vuex and QCheckbox v-model value
    answersIds: function (value) {
      this.$store.commit("updateAnswersIds", { index: this.selected - 1, answersIds: value })
    },
    // Update Vuex and QInput v-model value
    openAnswerText: function (value) {
      this.$store.commit("updateOpenAnswerText", { index: this.selected - 1, openAnswerText: value })
    },
    // Update QRadio, QCheckbox or QInput when I change question
    selected: function (value) {
      this.answerId = this.$store.state.quizSubmission.questions[this.selected - 1].answerId
      this.answersIds = this.$store.state.quizSubmission.questions[this.selected - 1].answersIds
      this.openAnswerText = this.$store.state.quizSubmission.questions[this.selected - 1].openAnswerText
    }
  },
  methods: {
    submitQuizDialog () {
      Dialog.create({
        title: "Submit your answers",
        message: "You are going to end the quiz by submitting your answers. Are you sure?",
        buttons: [
          "No",
          {
            label: "yes",
            handler: this.submitQuiz
          }
        ]
      })
    },
    submitQuiz () {
      // open a dialog to confirm the answers
      this.$http.post(this.$store.state.hostname + "quizzes/score", {
        "submission": this.$store.state.quizSubmission
      }).then(data => {
        this.currentScore = data.data.score
        this.maxScore = data.data.maxScore
        this.showScore = true
      }).catch(data => {
        console.log(data)
      })
    }
  }
}
</script>

<style>
.q-pagination > .q-input input::-webkit-input-placeholder {
  color: black;
}
</style>
