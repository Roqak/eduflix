<template>
    <v-container fluid>
    
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      
    </v-parallax>

      <!-- <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex> -->
      <!-- <v-parallax src="../assets/hero.jpeg" alt="par">
      </v-parallax> -->
      <br>
      <div class="text-xs-center"><h1>Eduflix {{count}}</h1></div>
      <button @click="incr">inc</button>
      <br>
<v-layout row>
      <v-flex xs4 order-lg2>
        <v-card tile flat class="indigo lighten-1 white--text">
          <v-card-media class="circle" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-card-media>
          <v-card-title>Online Course</v-card-title>
          <v-card-text>Acess Top Notch Online Materials</v-card-text>

        </v-card>
      </v-flex>
      <v-flex xs4 order-lg2>
        <v-card tile flat class="indigo lighten-1 white--text">
          <v-card-media class="circle" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-card-media>
          <v-card-title>Online Course</v-card-title>
          <v-card-text>Acess Top Notch Online Materials</v-card-text>

        </v-card>
      </v-flex>
      <v-flex xs4 order-lg2>
        <v-card tile flat class="indigo lighten-1 white--text">
          <v-card-media class="circle" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-card-media>
          <v-card-title>Online Course</v-card-title>
          <v-card-text>Acess Top Notch Online Materials</v-card-text>

        </v-card>
      </v-flex>
      
    </v-layout>
    </v-container>
      
</template>

<script>
import Serv from './Serv';

  export default {
    components: {
    Serv
  },
  computed: {
    count () {
	    return this.$store.state.count
    }
  },
  methods: {
     
      incr () {
        this.$store.commit('increment')
      }
    },
    data: () => ({
      
    })
  }
</script>

<style>

</style>
