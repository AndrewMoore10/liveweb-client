import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');

  this.route('live-shots', function() {
    this.route('new', { path: '/new' });
    this.route('live-shot', { path: '/:id' });
  });
  this.route('vehicles', function() {
    this.route('new', { path: '/new' });
    this.route('vehicle', { path: '/:id' })
  });
  this.route('mobile-transmitters', function() {
    this.route('mobile-transmitter', { path: '/:id' });
  });

  this.route('receivers', function() {
    this.route('new', { path: '/new' });
    this.route('receiver', { path: '/:id' });
  });
  this.route('receiver', { path: '/receiver/:id' });


  this.route('shows', function() {
  });
  this.route('show', { path: '/show/:id' });

  this.route('users', function() {
  });
  this.route('user', { path: '/user/:id' });

  this.route('map-icons', function() {
    this.route('map-icon', { path: '/:id' });
  });

  this.route('livemap');
});

export default Router;
