import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
import QuizzesIndexComponent from "./views/QuizzesIndex.vue"
import QuizzesShowComponent from "./views/QuizzesShow.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "QuizzesIndex"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/quizzes",
            name: "QuizzesIndex",
            component: QuizzesIndexComponent
        },
        {
            path: "/quizzes/:id",
            name: "QuizzesShow",
            component: QuizzesShowComponent
        },
    ]
})
