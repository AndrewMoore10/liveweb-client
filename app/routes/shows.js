import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('show', {
      page: {
        offset: 0,
        limit: 50
      }
    });
  },
});
