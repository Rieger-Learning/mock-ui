import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Login from './pages/login';
import { ModalPlugin } from 'bootstrap-vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
})