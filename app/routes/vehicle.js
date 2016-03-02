import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    Ember.Logger.log('Route get 1 vehicle...');
    Ember.Logger.log(params);

    return this.store.findRecord('vehicle', params.id);
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
