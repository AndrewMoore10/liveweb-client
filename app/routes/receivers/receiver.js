import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  controllerName: 'receivers.receiver',
  model(params) {
    return this.store.findRecord('receiver', params.id);
  },
  actions: {
  }
});
