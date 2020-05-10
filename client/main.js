// src/main.js

import Vue from 'vue';
import App from './App';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});