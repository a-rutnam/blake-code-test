<template>

<p>{{getQuiz()}}</p>

</template>

<script>
  import quizzes from '@/assets/quiz_data/quizzes.json'
  import questions from '@/assets/quiz_data/questions.json'
    export default {
        name: 'QuizzesShow',
        data() {
            return {
              quizzes: quizzes.quizzes,
              questions,
              quizId: parseInt(this.$route.params.id),
            }
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
