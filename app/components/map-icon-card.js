import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  pictureURL: Ember.computed.alias('map_icon.url')
});
