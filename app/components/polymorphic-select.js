import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    console.log("Item polycomponent initialized");
    this._super();
    this.send('updateContentOfType');
    // Ember.Logger.log("selectedType has changed to " + this.get('selectedIndex') )
    // Ember.Logger.log(this.get('typeContent')[this.get('selectedIndex')].store  )
    // this.set('contentOfType', this.get('typeContent')[this.get('selectedIndex')].store ); //this.store.findAll(this.get('selectedType')))
  },
  store: Ember.inject.service(),
  typeContent: null, // array of type objects
  selectedType: null, // selected type
  contentOfType: null,
  fieldname: null,
  onTypeChange: Ember.observer( 'field.transmitterType', function(sender, key, value, rev){
    if ( this.getIndexOf(this.get('field.transmitterType') ) < 0) return false;
    this.send('updateContentOfType');
  }),
  getIndexOf: function(type){
    var options = this.get('typeContent');
    var selectedType = this.get('field.transmitterType');
    for(var i = 0; i < options.length; i++){
      if(options[i].type == selectedType) return i;
    }
    return -1;
  },
  actions: {
    updateContentOfType: function(){
      var type = this.get("field.transmitterType");
      if ( this.getIndexOf(type) < 0) return false;
      // Ember.Logger.log(type.value);
      // Ember.Logger.log(this.get('typeContent')[this.getIndexOf(type)].type);
      this.set('contentOfType', this.get('typeContent')[this.getIndexOf(type)].store ); //this.store.findAll(this.get('selectedType')))
    },
    selectType(type) {
      this.set('field.transmitterType', type);

      this.send('updateContentOfType');
      Ember.Logger.log("changed to " + type);
    },
    selectId(id) {
      this.set('field.id', id);
      Ember.Logger.log("id changed to " + id);
    },
    // this.constructor.typeKey
    save(){
      var store = this.get('store');
      var fieldname = this.get('fieldname');
      // var id = this.$("#"+fieldname+"-id");
      var id = this.get("field.id");
      // var type = this.$("#"+this.get("fieldname")+"-type");
      var type = this.get("field.transmitterType");
      var model = this.get('model');
      var transmitter = store.findRecord(type, id ).then(function(tx){

        Ember.Logger.log("transmitter is ");
        Ember.Logger.log(tx);
        model.set('transmitter', tx);
        model.save(); 
      });
    }
  }
});
