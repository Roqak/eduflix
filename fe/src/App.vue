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
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar> -->
    <Header/>

    <v-content>
      <!-- <SignUp/> -->
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import SignUp from './components/SignUp';
import Header from './components/Header';
// import Sam from './components/Sam';

export default {
 
  name: 'App',
  components: {
    HelloWorld,
    SignUp,
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
