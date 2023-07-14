const OAuth2Server = require('oauth2-server');

// Create oauth instance here
const oauth = new OAuth2Server({
    model: require('./model'),
    allowBearerTokensInQueryString: true,
    accessTokenLifetime: 60 * 60
});



module.exports = {
    // Add confidential clients[]
    confidentialClients: [{
      clientId: 'codecademy',
      clientSecret: 'codec@demy',
      grants: [
        'client_credentials'
      ]
    }],
    // Add tokens[]
    tokens: []
  }