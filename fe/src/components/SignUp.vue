<template>
  <div id="app">
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>SignUp</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" name="Email" label="Email"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
            <v-text-field prepend-icon="lock" name="CPassword" label="Confirm Password" type="password"></v-text-field>
            <v-card-actions>
              <v-btn primary large block :v-on="click">SignUp</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      name: 'SignUp',
      
    }),

        mounted() {
          //  alert("mounted")
        },
    methods: {
     
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>