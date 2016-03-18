import Ember from 'ember';
import DataAdapter from '../adapters/application';


export default Ember.Component.extend({
  positionalParams: ['userId'],
  assetHost: "http://10.40.10.45:3000", //TODO: load this from initializer
});
