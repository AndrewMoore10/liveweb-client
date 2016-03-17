import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const session = this.get('session');
      const user = this.get('session.data.authenticated.user');
      if (!Ember.isEmpty(user)) {
        return this.get('store').findAll('user', user.id).then((user) => {
          session.set('currentUser', user.get('name'));
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});