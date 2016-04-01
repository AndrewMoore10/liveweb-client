import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  socketio: Ember.inject.service(),
  init: function () {
    this._super();
    this.get("socketio").connect();
  }
});
