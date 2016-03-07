import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

export default DeviseAuthorizer.extend({
  tokenAttributeName: 'auth_token',
  identificationAttributeName: 'email',
    // authorize(data, block) {
    //   Ember.Logger.log("HERERERE IN THE AUTOER")
    //   const { tokenAttributeName, identificationAttributeName } = this.getProperties('tokenAttributeName', 'identificationAttributeName');
    //   const userToken          = data[tokenAttributeName];
    //   const userIdentification = data[identificationAttributeName];
    //   Ember.Logger.log(data)
    //   Ember.Logger.log(identificationAttributeName)
    //   Ember.Logger.log(userIdentification)
    // }
});