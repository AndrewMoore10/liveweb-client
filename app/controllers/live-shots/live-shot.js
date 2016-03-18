import Ember from 'ember';

export default Ember.Controller.extend({
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
});