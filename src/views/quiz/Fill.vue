<template>
  <div class="layout-padding" v-if="Object.keys(quiz).length > 0">
    <div v-if="!showScore">
      <q-card>
        <q-card-title>
          {{ quiz.questions[selected - 1].text }}
        </q-card-title>
        <!--<q-card-separator />-->
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
        <q-card>
          <q-pagination class="justify-center" style="display:flex" v-model="selected" :max="quiz.questions.length" />
        </q-card>
      </q-fixed-position>

      <q-fixed-position corner="bottom-right" :offset="[20, 80]">
        <q-btn color="primary" round icon="send" @click="submitQuiz"></q-btn>
      </q-fixed-position>
    </div>

    <div v-else>
      Your score: {{ currentScore }} / {{ maxScore }}
      <br/>
      <router-link to="/">Return to home</router-link>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex"
import { QCard, QCardTitle, QCardSeparator, QCardMain, QPagination, QRadio, QCheckbox, QInput, QFixedPosition, QBtn, QTabs, QTab, QTabPane } from "quasar"

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
    submitQuiz () {
      this.$http.post(this.$store.state.hostname + "quizzes/score", {
        "submission": this.$store.state.quizSubmission
      }).then(data => {
        console.log(data)
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
