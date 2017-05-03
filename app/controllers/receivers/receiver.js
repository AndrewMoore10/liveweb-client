import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  init: function() {
    this._super();
  },
  actions:{
    save(){
      Ember.Logger.log("Saving new receiver");
      var model = this.get('model');
      var _this = this;
      model.save().then(function (record){
        _this.transitionToRoute('receivers.receiver', record.id);
      });
    }
  }
});
