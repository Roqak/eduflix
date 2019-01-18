<template>
  <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <!-- <span>Vuetify</span> -->
        <span class="font-weight-light">EDUFLIX</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
      <v-btn
        flat
      >
        <!-- <span class="mr-2">Sign Up</span> -->
            <router-link to="/bar">Go to Bar</router-link>
      </v-btn>
            <router-link to="/bar">Go to Bar</router-link>

      <v-btn
        flat
        href="#"
        target="_blank"
      >
        <span class="mr-2">Sign In</span>
      </v-btn>
    </v-toolbar>
</template>

<script>

    export default {
        name: 'Header',
        data () {
            return {
               
            }
        },
        mounted() {
        //    alert("mounted")
        },
        methods: {
            
        }
    }
</script>

<style>

</style>
