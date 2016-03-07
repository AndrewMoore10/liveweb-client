import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // params.include = "transmitter";
    // Ember.Logger.log(params)
    var record = this.store.findRecord('live-shot', params.id);
    // Ember.Logger.log(record)
    return record;
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
