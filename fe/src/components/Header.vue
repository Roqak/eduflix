<template>
  <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <!-- <span>Vuetify</span> -->
        <span class="font-weight-light"><router-link class="nav-link" to="/">EDUFLIX</router-link></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
         >
        <router-link class="nav-link" to="/signin">Sign In</router-link>
      </v-btn>
      <v-btn
        flat
         >
        <router-link class="nav-link" to="/signup">Sign Up</router-link>
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
