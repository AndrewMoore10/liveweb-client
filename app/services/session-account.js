import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const session = this.get('session');
      Ember.Logger.log(session.get('data.authenticated.user.fn'));
      const user = this.get('session.data.authenticated.user');
      // console.log(accountId);
      if (!Ember.isEmpty(user)) {
        
        session.set('currentUser', user.fn + " " + user.ln);
        resolve();
        // return this.get('store').find('user', user.id).then((account) => {
        //   this.set('currentUser', account);
        //   resolve();
        // }, reject);
      } else {
        resolve();
      }
    });
  }
});
