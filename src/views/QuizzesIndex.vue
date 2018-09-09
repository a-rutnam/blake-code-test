<template>
  <div id="quiz">
Quizzes

<ul>
  <li v-for="quiz in quizzes">{{quiz.title}}</li>
</ul>



  </div>
</template>

<script>
  import quizzes from '@/assets/quiz_data/quizzes.json'
    export default {
        name: 'QuizzesIndex',
        data() {
            return {
              quizzes: quizzes.quizzes
            }
        },
        methods: {

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
