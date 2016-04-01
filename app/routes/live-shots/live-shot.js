import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'live-shots.live-shot',
  model(params) {
    params.include = "transmitter"
    Ember.Logger.log(params)
    var record = this.store.queryRecord('live-shot', { id: params.id, include: "transmitter,receiver,shows,reporter,photogs" });
    Ember.Logger.log(record)
    return record;
  },
  // afterModel: function() {
  //   return Ember.RSVP.hash({
  //     vehicles: this.store.findAll('vehicle').then((function(_this) {
  //       return function(vehicles) {
  //         return _this.set('vehicles', vehicles);
  //       };
  //     })(this)),
  //     mobileTransmitters: this.store.findAll('mobile-transmitter').then((function(_this) {
  //       return function(mobileTransmitters) {
  //         return _this.set('mobileTransmitters', mobileTransmitters);
  //       };
  //     })(this))
  //   });
  // },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('shows', this.store.peekAll('show'));
    controller.set('map_icons', this.store.peekAll('map_icon'));
    controller.set('vehicles', this.store.peekAll('vehicle'));
    controller.set('receivers', this.store.peekAll('receiver'));
    // controller.set('vehicles', this.get('vehicles'));
    return controller.set('mobileTransmitters', this.store.peekAll('mobile-transmitter'));
    // return controller.set('mobileTransmitters', this.get('mobileTransmitters'));
  },


  //===================
  // 1 second refresh
  //===================

  // afterModel(){
  //   var _this = this;
  //   Ember.run.later(this, function(){
  //       _this.refresh();
  //   }, 1000)
  // },

  actions: {
    // reloadModel: function() {
    //   Ember.Logger.log('Route  refresh...');
    //   this.refresh();
    // }
  }
});
