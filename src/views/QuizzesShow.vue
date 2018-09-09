<template>
<div>
  <p>{{quiz.title}}</p>


  <ol>
<li v-for="qId in quiz.question_ids">
  {{ questionsLookUp[qId].question }}
</li>

  </ol>
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
              questionsLookUp: {},
              quiz: {}
            }
        },
        created(){
          // create a lookup table for questions, keyed by ID
          questions.forEach(q => this.questionsLookUp[q.id] = q);
          this.quiz = this.getQuiz();
        },
        methods: {
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
