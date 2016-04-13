import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;

    return this.store.peekAll('vehicle');
  },
  afterModel: function(liveShots, transition) {
    var store = this.store;
    return this.set('activeLiveShots', store.peekAll('live-shot').filterBy('is_active', true, {live: true}));
    // return Ember.RSVP.hash({
    //   // activeLiveShots: [{'live-shot': 'sup'}],

    //   activeLiveShots: liveShots.filterBy('is_active', true, {live: true}),
    //   // activeLiveShots: store.peekAll('live-shot').filterBy('is_active', true, {live: true}),
    // });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    return controller.set('activeLiveShots', this.get('activeLiveShots'));;
  },
});
