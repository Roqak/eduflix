const express = require('express');
const app = express();
const callbackk = require('./routes/callback');
const user = require('./routes/user');
const mongoose = require('mongoose');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
const bodyParser = require('body-parser');
const course = require('./routes/courses');

mongoose.connect("mongodb://akin:akinkunmi1@ds243084.mlab.com:43084/eduflix")
.then(
  (result)=>{
    console.log("Connected to database");
  }
)
.catch((err)=>{
  console.log("error connecting to the database");
  console.log(err)
})


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// session support is required to use ExpressOIDC
app.use(session({
  secret: '4a45214f-3f18-4672-91a4-6f5082f2aa49',
  resave: true,
  saveUninitialized: false
}));

// const oidc = new ExpressOIDC({
//   issuer: 'https://dev-807502.oktapreview.com/oauth2/default',
//   client_id: '0oaihdnliidWVgXbE0h7',
//   client_secret: 'c3ZUK69JgOd7XkWmxmXItOf9O1HqiGyv7vp4SurK',
//   redirect_uri: 'http://localhost:9000/authorization-code/callback',
//   scope: 'openid profile'
// });

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes

// app.use(oidc.router);
// app.use('/authorization-code/callback',callbackk);
app.use('/user',user);
app.use('/course',course);
// app.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
//     // res.send(JSON.stringify(req.userContext.userinfo));
//     res.send("hello world")
//   });







// app.listen(9000,()=>{
//     console.log("Listening on port 9000");
// })
// oidc.on('ready', () => {
    app.listen(9000, () => console.log(`Started!`));
  // });
  
  // oidc.on('error', err => {
  //   console.log('Unable to configure ExpressOIDC', err);
  // });