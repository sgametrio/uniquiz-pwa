<template>
  <div class="layout-padding">
    <q-card>
      <q-card-title>
        {{ quiz.questions[selected - 1].text }}
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <!-- Domanda a risposta singola -->
        <div v-if="quiz.questions[selected - 1].solutionType === 'single'">
          <div v-for="answer of quiz.questions[selected - 1].answers" :key="answer.id">
            <q-radio v-model="answersIds[selected - 1]" :val="answer.id" :label="answer.text" />
          </div>
        </div>

        <!-- Domanda a risposta multipla -->
        <div v-else-if="quiz.questions[selected - 1].solutionType === 'multiple'">
          <div v-for="answer of quiz.questions[selected - 1].answers" :key="answer.id">
            {{ answer.text }}
          </div>
        </div>

        <!-- Domanda a risposta aperta -->
        <div v-else>
          <div v-for="answer of quiz.questions[selected - 1].answers" :key="answer.id">
            {{ answer.text }}
          </div>
        </div>
      </q-card-main>
      <q-card-actions align="center">
        <q-pagination v-model="selected" :max="quiz.questions.length" />
      </q-card-actions>
    </q-card>

    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" @click="submitQuiz" icon="send" />
    </q-fixed-position>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { QCard, QCardTitle, QCardSeparator, QCardMain, QCardActions, QPagination, QRadio, QFixedPosition, QBtn } from "quasar"

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QPagination,
    QRadio,
    QFixedPosition,
    QBtn
  },
  data () {
    return {
      selected: 1,
      answersIds: []
    }
  },
  computed: {
    ...mapState({
      quiz: state => state.currentQuiz
    })
  },
  methods: {
    submitQuiz () {
      return true
    }
  }
}
</script>
