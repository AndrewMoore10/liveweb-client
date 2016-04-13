import Ember from 'ember';
import DataAdapter from '../adapters/application';


export default Ember.Component.extend({
  positionalParams: ['userId'],
  store: Ember.inject.service()
});
