import Ember from 'ember';

export default Ember.Controller.extend({
  content: {},
  init: function() {
    console.log("Item controller initialized");
    this._super();
  },
  transmitterTypes: Ember.computed(function(){
    return [
      { index: 0,
        type: "vehicle",
        store: this.store.findAll('vehicle')
      },
      { index: 1,
        type: "mobile-transmitter",
        store: this.store.findAll('mobileTransmitter')
      }
    ]
  }),
});