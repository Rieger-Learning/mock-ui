/***********************************************
 * FONTAWESOME
***********************************************/
/***********************************************
// easiest way of importing -- below this is the vue way
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// ability to use as normal -- causes large final bundle
new Vue({ router, store, render: h=> h(App),}).$mount('#app')

// import dom auto transforms <i> into <svg>
// this is so you can use things like bootstrap4 datepicker
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
***********************************************/
import Vue from 'vue'
import {library, icon} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faBug} from '@fortawesome/free-solid-svg-icons';

library.add(faBug);

Vue.component('fa-icon', FontAwesomeIcon)