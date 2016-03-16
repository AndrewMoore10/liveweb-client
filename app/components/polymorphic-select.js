import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    console.log("Item polycomponent initialized");
    this._super();
    // var content = this.get('typeContent');
    // for(var i = 0 ; i < content.length; i++){
    //   Ember.Logger.log(content[i].type);
    //   this.get('store').findAll(content[i].type);
    // }
    this.send('fillMergedContent');
  },
  store: Ember.inject.service(),
  typeContent: null, // array of type objects
  mergedContent: [], // array of type objects
  selectedType: null, // selected type
  contentOfType: null,
  fieldname: null,
  polyUpdater: Ember.observer('field.id', function(){

    var _this = this;
    this.get('field').then( function (polyRel) {
      if(polyRel != null){
        _this.set("polyType", polyRel.constructor.modelName);
        _this.send('fillMergedContent');
      }
    });
    Ember.Logger.log("poly changed to " + this.get('polyType') );
  }),
  currentMergedId: Ember.computed('field.id', 'polyType', function(){
    return `${this.get('polyType')}:${this.get('field.id')}`;
  }),
  actions: {
    fillMergedContent: function(){
      var content = this.get('typeContent');
      var pushModelToMergedContent = function(model){
         Ember.Logger.log(model);
         _this.mergedContent.pushObject({value: content[i].type+":"+model.id, label: model.get("name") });
      }
      // var currentModel = this.get('model');

      this.set('mergedContent', []);
      this.mergedContent.pushObject({value: 0, label: "Select Transmitter" });
      var _this = this;
      for(var i = 0 ; i < content.length; i++){
        Ember.Logger.log(content[i].type);
        // this.get('store').findAll(content[i].type);
        content[i].store.forEach( pushModelToMergedContent );
      }
    },
    selectPoly(merged) {
      var [type, id] = merged.split(':');
      this.set('polyType', type);
      this.set('polyId', id);
    },
    save(){
      var store = this.get('store');
      var fieldname = this.get('fieldname');
      var id = this.get("polyId");
      var type = this.get("polyType");
      var model = this.get('model');
        Ember.Logger.log(id);
      store.findRecord(type, id ).then(function(polyObject){
        model.set(fieldname, polyObject);
        model.save(); 
      });
    }
  }
});
