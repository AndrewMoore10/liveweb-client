import Ember from 'ember';
import LiveShot from './live-shot'

export default LiveShot.extend({
  // controllerName: 'live-shots.live-shot', //Explicit, Inherited
  session: Ember.inject.service(),
  currentUser: Ember.computed.alias('session.data.authenticated.user'),
  model(){
    var currentUser = this.get('currentUser')
    // model.set('modified_by', store.peekRecord('user', currentUser.id));
   return this.store.createRecord('live-shot',
    { 
      title: "",
      modified_by: this.store.peekRecord('user', currentUser.id),
      created_by: this.store.peekRecord('user', currentUser.id)
    }); 
  }
}); 