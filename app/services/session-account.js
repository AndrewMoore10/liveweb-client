import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const session = this.get('session');
      // Ember.Logger.log(session.get("localStorage"));
      const user = this.get('session.data.authenticated.user');
      Ember.Logger.log("Session: ");
      Ember.Logger.log(session);
      if (!Ember.isEmpty(user)) {
        return this.get('store').findRecord('user', user.id).then((user) => {
          session.set('currentUser', user.get('name'));
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});