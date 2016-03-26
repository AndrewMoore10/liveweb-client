import Ember from 'ember';
import DataAdapter from '../adapters/application';


export default Ember.Component.extend({
  positionalParams: ['userId'],
  store: Ember.inject.service(),
  assetHost: Ember.computed(function(){
    return this.get('store').adapterFor('application').get('host');
  }),
  pictureURL: Ember.computed('user.picture', function(){
    return this.get('user.picture') || '/images/no-avatar.png';
  })
});
