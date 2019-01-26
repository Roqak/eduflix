import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import router from './router'
import VueRouter from 'vue-router'
import SignUp from './components/SignUp.vue'
import HelloWorld from './components/HelloWorld'
import SignIn from './components/SignIn'
import {store} from './store.js'




Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/signup', component: SignUp },
  { path: '/signin', component: SignIn }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(App),
  store: store,
  router
}).$mount('#app')
