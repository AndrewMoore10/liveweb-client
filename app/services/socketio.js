import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  init: function () {
    this._super();
    Ember.Logger.log("Initializing socket");
    let socket = this.socket = io("http://10.40.10.45:3001");
    let store = this.get('store');
    socket.on('updated', function(data) {
      // Ember.Logger.log('update ');
      // Ember.Logger.log(data);
      store.pushPayload(data);
    })
  },
  connect: function(){
    Ember.Logger.log("Connecting");
    this.socket.emit('message', "whats up from client");
  }
});
