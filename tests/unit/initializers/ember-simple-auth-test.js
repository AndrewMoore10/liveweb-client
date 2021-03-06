import Ember from 'ember';
import EmberSimpleAuthInitializer from '../../../initializers/ember-simple-auth';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | ember simple auth', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  EmberSimpleAuthInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
