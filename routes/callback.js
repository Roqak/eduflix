const router = require('express').Router();
const { ExpressOIDC } = require('@okta/oidc-middleware');
const oidc = new ExpressOIDC({
    issuer: 'https://dev-807502.oktapreview.com/oauth2/default',
    client_id: '0oaihdnliidWVgXbE0h7',
    client_secret: 'c3ZUK69JgOd7XkWmxmXItOf9O1HqiGyv7vp4SurK',
    redirect_uri: 'http://localhost:9000/callback',
    scope: 'openid profile'
  });

router.get('/',(req,res)=>{
    res.send('This is the callback route')
});
// router.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
//     res.send(JSON.stringify(req.userContext.userinfo));
//   });


module.exports = router;