<template>
<div>
  <p>{{quiz.title}}</p>
  <ol>
    <li v-for="qQId in quiz.question_ids">
      {{ questions[qQId].question }}
      <ol type="a">
        <li v-for="(answer, index) in questions[qQId].answers">
          <label>


            <input type="radio" v-model="picked[qQId]" :value="index">
{{answer}}
          </label>
        </li>
      </ol>
    </li>
  </ol>
  <button @click="submitQuiz()" :disabled="isCompleted()">Submit Quiz</button>
</div>
</template>

<script>
  import {quizzes} from '@/assets/quiz_data/quizzes.json'
  import {questions} from '@/assets/quiz_data/questions.json'
    export default {
        name: 'QuizzesShow',
        data() {
            return {
              quizzes,
              quizId: parseInt(this.$route.params.id),
              questions: {},
              quiz: {},
              picked: {},
            }
        },
        created(){
          // create a lookup table for questions, keyed by ID, easier than supplied json
          questions.forEach(q => this.questions[q.id] = q);
          this.quiz = this.getQuiz();
        },
        methods: {
          submitQuiz(){
            console.log('hi');
          },
          isCompleted() {

            // when length of picked equal to that of questions
            // TODO picked format is weird observer may need other option
            console.log(this.picked)
            return false;
          },
          getQuiz() {
            return this.quizzes.find( quiz => quiz.id === this.quizId );
          }
        }
    }
</script>

<style scoped>
    #quiz {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
