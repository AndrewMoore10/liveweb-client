import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  controllerName: 'vehicles.vehicle',
  model(params) {
    Ember.Logger.log('Route get 1 vehicle...');
    Ember.Logger.log(params);

    var record = this.store.queryRecord('vehicle', { id: params.id, include: "logs" });
    // return this.store.findRecord('vehicle', params.id);
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

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('logs', this.store.peekAll('log'));
    return;
    // return controller.set('mobileTransmitters', this.get('mobileTransmitters'));
  },
  actions: {
    // reloadModel: function() {
    //   Ember.Logger.log('Route  refresh...');
    //   this.refresh();
    // }
  }
});
