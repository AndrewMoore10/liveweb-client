import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  assetHost: Ember.computed(function(){
    return this.get('store').adapterFor('application').get('host');
  }),
  pictureURL: Ember.computed.alias('map_icon.url')
});
