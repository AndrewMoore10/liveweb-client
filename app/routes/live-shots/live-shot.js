import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    params.include = "transmitter"
    Ember.Logger.log(params)
    var record = this.store.findRecord('live-shot', params.id);
    Ember.Logger.log(record)
    return record;
  },
  afterModel: function() {
    return Ember.RSVP.hash({
      vehicles: this.store.findAll('vehicle').then((function(_this) {
        return function(vehicles) {
          return _this.set('vehicles', vehicles);
        };
      })(this)),
      mobileTransmitters: this.store.findAll('mobile-transmitter').then((function(_this) {
        return function(mobileTransmitters) {
          return _this.set('mobileTransmitters', mobileTransmitters);
        };
      })(this))
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('vehicles', this.get('vehicles'));
    return controller.set('mobileTransmitters', this.get('mobileTransmitters'));
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