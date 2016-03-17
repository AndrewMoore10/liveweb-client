import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

export default DeviseAuthorizer.extend({
  tokenAttributeName: 'auth_token',
  identificationAttributeName: 'email',
});