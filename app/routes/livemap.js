import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;

    return this.store.peekAll('vehicle');
  }
});
