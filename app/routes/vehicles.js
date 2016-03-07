import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model() {
    Ember.Logger.log('Route get vehicles...');

    return this.store.query('vehicle', {
      page: {
        offset: 0,
        limit: 50
      }
    });
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
