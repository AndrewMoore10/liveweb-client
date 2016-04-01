import Ember from 'ember';
import LiveShot from './live-shot'

export default LiveShot.extend({
  // controllerName: 'live-shots.live-shot', //Explicit, Inherited
  session: Ember.inject.service(),
  currentUser: Ember.computed.alias('session.data.authenticated.user'),
  model(){
    var currentUser = this.get('currentUser')
    if(!currentUser) return this.transitionTo('login');
    var user = this.store.peekRecord('user', currentUser.id);
    var icon = this.store.peekAll('map-icon').filter(function(record){ return record.get('name') == "Default" })[0]
   return this.store.createRecord('live-shot',
    { 
      title: "",
      map_icon: icon,
      modified_by: user,
      created_by: user
    }); 
  }
}); 