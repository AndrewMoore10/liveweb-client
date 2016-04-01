import Ember from 'ember';

export default Ember.Service.extend({
  init: function () {
    this._super();
    Ember.Logger.log("Initializing socket");
    let socket = this.socket = io("http://localhost:3001");

    socket.on('updated', function(data) {
      Ember.Logger.log('update '  + data);
    })
  },
  connect: function(){
    Ember.Logger.log("Connecting");
    this.socket.emit('message', "whats up from client");
  }
});
