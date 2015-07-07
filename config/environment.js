/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'login',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    googleAppId: process.env.LOCAL_GOOGLE_APP_ID;
    // googleApiKey: process.env.LOCAL_GOOGLE_API_KEY;
    hostUrl: "http://"+process.env.LOCAL_HOST+":4200";

    torii: {
      providers: {
        'google-oauth2': {
          apiKey: ENV.googleAppId, // This should be App ID NOT apiKey
          redirectUri: ENV.hostUrl,
          accessType: 'offline',
          scope: 'https://www.googleapis.com/auth/contacts.readonly email https://www.googleapis.com/auth/calendar profile'
        }
      }
    },

    'simple-auth-oauth2': {
      // added to deal with google access code
      serverInitialTokenEndpoint: ENV.apiUrl + '/' + ENV.API_NAMESPACE + '/tokens',

      serverTokenEndpoint: 'oauth/token',
      serverTokenRevocationEndpoint: 'oauth/revoke',
      refreshAccessTokens: true
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
