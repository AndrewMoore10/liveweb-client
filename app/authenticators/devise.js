import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
    serverTokenEndpoint: 'http://10.40.10.45:3000/users/sign_in',
    identificationAttributeName: 'username',
});