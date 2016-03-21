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
    this.send('getCurrentValue');
    this.send('fillMergedContent');
  },
  tagName: 'span',
  store: Ember.inject.service(),
  mergedContent: [], // array of type objects
  polyUpdater: Ember.observer('field.id', function(){
    this.send('getCurrentValue');
  }),
  currentMergedId: Ember.computed('polyId', 'polyType', function(){
    return `${this.get('polyType')}:${this.get('polyId')}`;
  }),
  actions: {
    getCurrentValue: function(){
      var _this = this;
      this.get('field').then( function (polyRel) {
        if(polyRel != null){
          _this.set("polyType", polyRel.constructor.modelName);
          _this.set("polyId", polyRel.id);
        }
      });
    },
    fillMergedContent: function(){
      var content = this.get('typeContent');
      var pushModelToMergedContent = function(model){
         _this.mergedContent.pushObject({value: content[i].type+":"+model.id, label: model.get("name") });
      }
      // var currentModel = this.get('model');

      this.set('mergedContent', []);
      this.mergedContent.pushObject({value: 0, label: "Select..." });
      var _this = this;
      for(var i = 0 ; i < content.length; i++){
        // Ember.Logger.log(content[i].type);
        // this.get('store').findAll(content[i].type);
        content[i].store.forEach( pushModelToMergedContent );
      }
    },
    selectPoly(merged) {
      var [type, id] = merged.split(':');
      this.set('polyType', type);
      this.set('polyId', id);
      this.send('updateModel');
    },
    updateModel(){
      Ember.Logger.log("saving");
      var store = this.get('store');
      var fieldname = this.get('fieldname');
      var id = this.get("polyId");
      var type = this.get("polyType");
      var model = this.get('model');
      var polyObj = store.peekRecord(type, id );
      model.set(fieldname, polyObj);

      // .then(function(polyObject){
      //   model.set(fieldname, polyObject);
      //   // model.save(); 
      // });
    }
  }
});
