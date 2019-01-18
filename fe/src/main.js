import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import router from './router'
import VueRouter from 'vue-router'
import SignUp from './components/SignUp.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  // { path: '/', component: Foo },
  { path: '/bar', component: SignUp }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
