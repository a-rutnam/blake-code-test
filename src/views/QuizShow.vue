<template>
    <div id="quiz">
quiz
<pre> {{quizzes}}
{{questions}}
</pre>
    </div>
</template>

<script>
  import quizzes from '@/assets/quiz_data/quizzes.json'
  import questions from '@/assets/quiz_data/questions.json'
    export default {
        name: 'QuizzesIndex',
        data() {
            return {
              quizzes,
              questions
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
