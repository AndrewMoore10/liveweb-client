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
    })
    // }).then(function (results){
    //   return store.peekAll('live-shot').filterBy('is_active', true, {live: true});
    // });

  },
  afterModel: function(liveShots, transition) {
    var store = this.store;
    this.set('inactiveLiveShots', store.peekAll('live-shot').filterBy('is_active', false, {live: true}));
    this.set('canceled', store.peekAll('live-shot').filterBy('status', 2, {live: true}));
    return this.set('activeLiveShots', store.peekAll('live-shot').filterBy('is_active', true, {live: true}));
    // return Ember.RSVP.hash({
    //   // activeLiveShots: [{'live-shot': 'sup'}],

    //   activeLiveShots: liveShots.filterBy('is_active', true, {live: true}),
    //   // activeLiveShots: store.peekAll('live-shot').filterBy('is_active', true, {live: true}),
    // });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('canceled', this.get('canceled'));
    controller.set('inactiveLiveShots', this.get('inactiveLiveShots'));
    return controller.set('activeLiveShots', this.get('activeLiveShots'));;
  },

  actions: {
  }
});
