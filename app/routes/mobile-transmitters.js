import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('mobile-transmitter', {
      page: {
        offset: 0,
        limit: 50
      }
    });
  },
});
