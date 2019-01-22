<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">EDUFLIX</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
      <router-view>
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar> -->
    <Header/>

    <v-content>
      <!-- <SignUp/> -->
      <router-view>
      <HelloWorld/>
      <Serv/>
      </router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Serv from './components/Serv';
import Footer from './components/Footer'
import SignIn from './components/SignIn'

// import Sam from './components/Sam';

export default {
 
  name: 'App',
  components: {
    HelloWorld,
    SignUp,
    Header,
    Serv,
    Footer,
    SignIn
  },
  data () {
    return {
      //
    }
  }
}
</script>
