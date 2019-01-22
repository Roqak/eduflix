<template>
  <div id="app">
              <h1>Welcome {{token}}</h1>

  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>{{name}}</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" name="Email" label="Email"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
            <v-card-actions>

              <v-btn primary large block @click="dodo">Login</v-btn>
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
      name: 'SignIn',
      token: ''
      
    }),

        mounted() {
          //  alert("mounted")
        },
    methods: {
     
      clear () {
        this.$refs.form.reset()
      },
      dodo(){
          alert('done')
          axios.post('http://localhost:4000/user/login/', {
            username: 'akinkunmi',
            password: 'pass1'
        })
        .then(function (response) {
            console.log(response.data.token);
            this.token = response.data.token;
        })
        .catch(function (error) {
            console.log(error.response);
        });
        // navigator.getBattery().then(function(result) {
        //   console.log(result)
        // });
        // fetch('http://localhost:4000/user/login/', {
	      //   method: 'post'
        //     }).then(function(response) {
        //       console.log(response)
        // }).catch(function(err) {
        //   // Error :(
        //     alert("Error")
        //     console.log(err)
        // });
              }
    }
  }
</script>