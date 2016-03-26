import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  assetHost: Ember.computed(function(){
    return this.get('store').adapterFor('application').get('host');
  }),
  pictureURL: Ember.computed('model.picture', function(){
    Ember.Logger.log(this.get('model.picture'));
    return this.get('model.picture') || '/images/no-avatar.png';
  })

});
