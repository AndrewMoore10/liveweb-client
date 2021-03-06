import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  init: function() {
    this._super();
  },
  actions:{
    save(){

      Ember.Logger.log("Saving Live Shot");
      var model = this.get('model');
      var _this = this;
      model.save().then(function (record){
        _this.transitionToRoute('live-shots.live-shot', record.id);
      });
    }
  },
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
  })
});
