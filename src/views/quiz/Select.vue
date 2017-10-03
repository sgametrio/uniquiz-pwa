<template>
  <div class="layout-padding">
    <p class="caption">Select a course</p>
    <q-dialog-select
      v-model="courseId"
      :options="selectCourses"
      title="Courses"
      @change="updatePremadeQuizzes"
    />
    <div v-if="courseId.length !== 0">
      <div v-if="premadeQuizzes.length > 0">
        <h5 class="text-center">Start a pre-made quiz</h5>
        <div class="row inline" v-for="quiz of premadeQuizzes" :key="quiz.id">
          <q-card inline>
            <q-card-title>
              {{ quiz.name }}
            </q-card-title>
          </q-card>
        </div>
      </div>
      <q-card>
        <q-card-title>
          <h5 class="text-center">Create a random quiz</h5>
        </q-card-title>
        <q-card-main>
          <p class="caption">{{ numberOfQuestions }} questions selected</p>
          <q-slider v-model="numberOfQuestions" label :min="5" :max="20" />

        </q-card-main>
        <q-card-separator />
        <q-card-actions align="end">
          <q-btn
            color="primary"
            :disable="courseId.length === 0"
            icon="create"
            @click="startQuiz">
            Let's go!
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex"
import { QSlider, QCard, QCardTitle, QCardSeparator, QCardMain, QCardActions, QDialogSelect, QBtn } from "quasar"

export default {
  data () {
    return {
      numberOfQuestions: 5,
      selectCourses: [],
      courseId: ""
    }
  },
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QBtn,
    QSlider,
    QDialogSelect
  },
  computed: {
    ...mapState({
      premadeQuizzes: state => state.premadeQuizzes,
      courses: state => state.courses
    })
  },
  mounted: function () {
    this.fetchCourses().then(data => {
      this.$store.commit("updateCourses", { courses: data.data.data })
      // Refresh courses to be displayed into select
      this.selectCourses = []
      for (let course of data.data.data) {
        this.selectCourses.push({
          "label": course.name,
          "value": course.id
        })
      }
    }).catch(function (data) {
      console.log(data)
    })
    /* this.fetchQuizzes().then(data => {
      this.$store.commit("updatePremadeQuizzes", { quizzes: data.data.data })
    }).catch(function (data) {
      console.log(data)
    }) */
  },
  methods: {
    fetchCourses () {
      return this.$http.get(this.$store.state.hostname + "courses")
    },
    fetchQuizzes () {
      return this.$http.get(this.$store.state.hostname + "quizzes/named")
    },
    fetchQuizzesByCourse (course) {
      return this.$http.get(this.$store.state.hostname + "quizzes/named" /* ,
        params: {
          courseId: course
        } */)
    },
    startQuiz () {
      this.$http.post(this.$store.state.hostname + "quizzes/create", {
        numberOfQuestions: this.numberOfQuestions,
        courseId: this.courseId
      }).then(data => {
        this.$store.commit("updateCurrentQuiz", { quiz: data.data.data })
        this.$store.commit("prepareQuizSubmission", { quiz: data.data.data })
        // Now I have to change view
        this.$router.push("/quiz/" + data.data.data.id)
      }).catch(data => {
        console.log(data)
      })
    },
    updatePremadeQuizzes (selectedCourse) {
      this.fetchQuizzesByCourse(selectedCourse).then(data => {
        this.$store.commit("updatePremadeQuizzes", { quizzes: data.data.data })
      }).catch(data => {
        console.log(data)
      })
    }
  }
}
</script>
