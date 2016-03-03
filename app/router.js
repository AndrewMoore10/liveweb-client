import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('vehicles', function() {
  });
  this.route('vehicle', { path: '/vehicle/:id' });

  this.route('mobile-transmitters', function() {
  });
  this.route('mobile-transmitter', { path: '/mobile-transmitter/:id' });

  this.route('receivers', function() {
  });
  this.route('receiver', { path: '/receiver/:id' });

  this.route('live-shots', function() {
  });
  this.route('live-shot', { path: '/live-shot/:id' });

  this.route('shows', function() {
  });
  this.route('show', { path: '/show/:id' });
});

export default Router;
