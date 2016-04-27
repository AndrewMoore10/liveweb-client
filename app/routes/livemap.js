import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;

    return this.store.peekAll('vehicle').filterBy('gps', true, {live: true});
  },
  afterModel: function(liveShots, transition) {
    var store = this.store;
    this.set('receiveSites', store.peekAll('receiver').filterBy('status', 0, {live: true}))
    this.set('establishedLiveShots', store.peekAll('live-shot').filterBy('status', 1, {live: true}));
    return this.set('activeLiveShots', store.peekAll('live-shot').filterBy('is_active', true, {live: true}));
    // return Ember.RSVP.hash({
    //   // activeLiveShots: [{'live-shot': 'sup'}],

    //   activeLiveShots: liveShots.filterBy('is_active', true, {live: true}),
    //   // activeLiveShots: store.peekAll('live-shot').filterBy('is_active', true, {live: true}),
    // });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('receiveSites', this.get('receiveSites'));
    controller.set('establishedLiveShots', this.get('establishedLiveShots'));
    return controller.set('activeLiveShots', this.get('activeLiveShots'));
  },
});
