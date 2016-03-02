import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('vehicles', function() {
  });
  this.route('vehicle', { path: '/vehicle/:id' });
});

export default Router;
