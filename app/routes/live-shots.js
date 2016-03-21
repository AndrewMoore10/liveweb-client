import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.store.findAll('live-shot');
    var store = this.store;
    return this.store.query('live-shot', {
      include: "transmitter,receiver,shows,reporter,photogs",
      page: {
        offset: 0,
        limit: 50
      }
    }).then(function (results){
      return store.peekAll('live-shot').filterBy('instruction', null, {live: true});
    });

  },

  actions: {
  }
});
