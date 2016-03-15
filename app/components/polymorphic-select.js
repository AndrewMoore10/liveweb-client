import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    console.log("Item polycomponent initialized");
    this._super();
    
    var _this = this;
    this.get('field').then( function (polyRel) {
      _this.set("polyType", polyRel.constructor.modelName)
      _this.send('fillMergedContent');
    });
  },
  store: Ember.inject.service(),
  typeContent: null, // array of type objects
  mergedContent: [], // array of type objects
  selectedType: null, // selected type
  contentOfType: null,
  fieldname: null,
  currentMergedId: Ember.computed('field.id', 'polyType', function(){
    return `${this.get('polyType')}:${this.get('field.id')}`;
  }),
  // onTypeChange: Ember.observer( 'field', function(sender, key, value, rev){ // THIS SHOULD ONLY RUN ONCE ON LOAD SINCE field is never modified.
  //   Ember.Logger.log("field has changed");
  //   this.send("fillMergedContent");
  //   var _this = this;
  //   this.get('field').then( function (polyRel) {
  //     _this.set("polyType", polyRel.constructor.modelName)
  //     if ( _this.getIndexOf(polyRel.constructor.modelName ) < 0) return false;
  //     _this.send('updateContentOfType');
  //   });
  // }),
  // getIndexOf: function(type){
  //   var options = this.get('typeContent');
  //   var selectedType = this.get('polyType');
  //   for(var i = 0; i < options.length; i++){
  //     if(options[i].type == selectedType) return i;
  //   }
  //   return -1;
  // },
  actions: {
    fillMergedContent: function(){
      var content = this.get('typeContent');
      var currentModel = this.get('model');

      this.set('mergedContent', [])
      var _this = this;
      for(var i = 0 ; i < content.length; i++){
        Ember.Logger.log(content[i].type);
        content[i].store.forEach( function (model){
          // mergedContent.push({value: content[i].type+":"+model.id, label: model.name})
          Ember.Logger.log(model);
          _this.mergedContent.pushObject({value: content[i].type+":"+model.id, label: model.get("name") })
        })
      }
      // this.set('mergedContent', mergedContent);
    },
    // updateContentOfType: function(){
    //   var type = this.get("polyType");
    //   if ( this.getIndexOf(type) < 0) return false;
    //   Ember.Logger.log("type is " + type + " at index " + this.getIndexOf(type) );
    //   this.set('contentOfType', this.get('typeContent')[this.getIndexOf(type)].store ); //this.store.findAll(this.get('selectedType')))
    //   // this.set('field.id', null);
    // },
    // selectType(type) {
    //   this.set('polyType', type);
    //   this.send('updateContentOfType');
    //   Ember.Logger.log("changed to " + type);
    // },
    // selectId(id) {
    //   this.set('field.id', id);
    //   Ember.Logger.log("id changed to " + id);
    // },
    selectPoly(merged) {
      var [type, id] = merged.split(':')
      this.set('polyType', type);
      this.set('field.id', id);
      Ember.Logger.log("poly changed to " + merged);
    },
    // this.constructor.typeKey
    save(){
      var store = this.get('store');
      var fieldname = this.get('fieldname');
      // var id = this.$("#"+fieldname+"-id");
      var id = this.get("field.id");
      // var type = this.$("#"+this.get("fieldname")+"-type");
      var type = this.get("polyType");
      var model = this.get('model');
      store.findRecord(type, id ).then(function(polyObject){
        Ember.Logger.log(fieldname + " is ");
        Ember.Logger.log(polyObject);
        model.set(fieldname, polyObject);
        model.save(); 
      });
    }
  }
});
