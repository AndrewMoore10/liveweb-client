import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('live-shot');
    // return this.store.query('live-shot', {
    //   include: "transmitter,receiver,shows,reporter,photogs",
    //   page: {
    //     offset: 0,
    //     limit: 50
    //   }
    // });
  },

  actions: {
  }
});
