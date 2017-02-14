import Ember from 'ember';
import Vehicle from './vehicle'

export default Vehicle.extend({
  
  session: Ember.inject.service(),
  currentUser: Ember.computed.alias('session.data.authenticated.user'),
  model(){
    var currentUser = this.get('currentUser')
    if(!currentUser) return this.transitionTo('login');
    var user = this.store.peekRecord('user', currentUser.id);
    var icon = this.store.peekAll('map-icon').filter(function(record){ return record.get('name') == "Default" })[0]
    return this.store.createRecord('vehicle',
    {
      name: "Vehicle Name",
      map_icon: icon
    });
  }
});
