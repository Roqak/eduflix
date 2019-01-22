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
      <div class="text-xs-center"><h1>Eduflix</h1></div>
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
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ]
    })
  }
</script>

<style>

</style>
