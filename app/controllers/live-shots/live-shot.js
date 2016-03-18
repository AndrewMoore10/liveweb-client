import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  init: function() {
    this._super();
  },
  receivers: Ember.computed(function(){
    return this.get("store").peekAll('receiver');
  }),
  transmitterTypes: Ember.computed(function(){
    return [
      { index: 0,
        type: "vehicle",
        store: this.get('vehicles')
      },
      { index: 1,
        type: "mobile-transmitter",
        store: this.get('mobileTransmitters')
      }
    ]
  }),
  actions:{
    searchReporters(term) {
      if (Ember.isBlank(term)) { return []; }
      var store = this.get('store');
      return store.query('user', {filter: { name: term } } )
    },
    reporterSearchChanged(value){
      var model = this.get('model');
      model.set("reporter", value);
      model.save();
      Ember.Logger.log(`reporter changed; value: ${value}`)
    },
    searchPhotogs(term) {
      if (Ember.isBlank(term)) { return []; }
      var store = this.get('store');
      return store.query('user', {filter: { name: term } } )
    },
    photogSearchChanged(value){
      var model = this.get('model');
      model.set("photogs", value);
      model.save();
      Ember.Logger.log(`reporter changed; value: ${value}`)
    }
  }
});