// src/main.js

import Vue from 'vue';
import App from './app';
import router from './router';

/***********************************************
 * Bootstrap
 ***********************************************/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

/***********************************************
 * Bootstrap
 ***********************************************/
import VueCookies from "vue-cookies"
Vue.use(VueCookies)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});


/***********************************************
 * FONTAWESOME

// easiest way of importing -- below this is the vue way
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// ability to use as normal -- causes large final bundle
new Vue({ router, store, render: h=> h(App),}).$mount('#app')
***********************************************/
// import dom auto transforms <i> into <svg>
// this is so you can use things like bootstrap4 datepicker
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
 
library.add(fab)
library.add(faVuejs)
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({  router,  store,  render: h => h(App),}).$mount('#app')

