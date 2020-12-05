import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'

import UnosPodataka from "./components/UnosPodataka.vue"


Vue.use(Buefy);
Vue.use(VueRouter);

const router = [
  {
    path: "/",
    component: UnosPodataka
  },
];


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
