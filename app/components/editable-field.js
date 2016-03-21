import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  currentUser: Ember.computed.alias('session.data.authenticated.user'),
  userCanEdit: true,
  doubleClick: function() {
    console.log("double click");
    this.set('isEditing', true);
    Ember.run.scheduleOnce('afterRender', this, this.focusField);
    return false;
  },
  focusField: function() {
    var val = this.$('input,textarea').val();
    this.$('input,textarea').focus();

    this.$('input,textarea').val('');
    this.$('input,textarea').val(val);
  },
  focusOut: function() {
    // Ember.Logger.log("focus out");
    // this.set('isEditing', false);
    // var model = this.get('model');
    // model.save(); //has dirty does not detect dirty relationship
    // if(model.get("hasDirtyAttributes")){}
    // else Ember.Logger.log("no dirty");
  },
  isTextArea: function() {
    return this.get('type') == "textarea";
  }.property('type'),

  isSelect: function() {
    return this.get('type') == "select";
  }.property('type'),

  isPolySelect: function() {
    return this.get('type') == "poly-select";
  }.property('type'),

  isPowerSelect: function() {
    return this.get('type') == "power-select";
  }.property('type'),

  isPowerSelectMultiple: function() {
    return this.get('type') == "power-select-multiple";
  }.property('type'),

  isCheckbox: function() {
    return this.get('type') == "checkbox";
  }.property('type'),

  hasAltLabel: function() {
    return this.get('alt-label');
  }.property('alt-label'),

  hasContent: function() {
    return this.get('content');
  }.property('content'),

  newRecord: Ember.computed( 'model', function(){
    return this.get('model').get('isNew');
  }),

  //For Select
  optionValuePath: "content.value",
  optionLabelPath: "content.label",
  _valuePath: Ember.computed('optionValuePath', function () {
    var optionValuePath = this.get('optionValuePath');
    return optionValuePath.replace(/^content\.?/, '');
  }),
  _labelPath: Ember.computed('optionLabelPath', function () {
    var optionLabelPath = this.get('optionLabelPath');
    return optionLabelPath.replace(/^content\.?/, '');
  }),
  contentValues: Ember.computed('content.[]', '_valuePath', '_labelPath', function () {
    var valuePath = this.get('_valuePath');
    var labelPath = this.get('_labelPath');
    var content = this.get('content') || [];
    Ember.Logger.log(`${labelPath}: ${valuePath}`);
    Ember.Logger.log(content);
    if (valuePath && labelPath) {
      return content.map(function (element){
        if( typeof element.get == 'function' ) return { value: element.get(valuePath), label: element.get(labelPath) };
        else return { value: element[valuePath], label: element[labelPath] };
      });
    } else {
      return content.slice();
    }
  }),
  fieldValue: Ember.computed("field", "relationship", function(){
    var field = this.get('field');
    var relationship = this.get('relationship');
    if(! Ember.isEmpty( relationship ) ){
      return field.get("id");
    }
    else{
      return field;
    }
  }),
  actions:{
    save(){
      this.set('isEditing', false);
      var store = this.get('store');
      var model = this.get('model');
      var currentUser = this.get('currentUser')
      model.set('modified_by', store.peekRecord('user', currentUser.id));
      model.save(); //has dirty does not detect dirty relationship
      if(model.get("hasDirtyAttributes")){}
      else Ember.Logger.log("no dirty");
    },
    selectChanged(value){
      var model = this.get('model');
      var relationship = this.get('relationship');
      if(! Ember.isEmpty( relationship ) ){
        var selectedRelated = this.get('store').peekRecord(relationship, value )
        model.set(relationship, selectedRelated)
      }
      else{
        this.set('field', value);
      }
    },
    searchAction(term){
      return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.run.debounce(this, this._performSearch, term, resolve, reject, 600);
      });
    },
    onchangeAction(value){
      var model = this.get('model');
      var fieldname = this.get('fieldname');
      model.set(fieldname, value);
      model.save();
      Ember.Logger.log(`${fieldname} changed; value: ${value}`)

    }
  },
  _performSearch(term, resolve, reject) {
    if (Ember.isBlank(term)) { return resolve([]); }
    var store = this.get('store');
    var fieldname = this.get('fieldname');
    var searchField = this.get('searchField');
    var filter = {};
    var _className = this.get('className');
    filter[searchField] = term
    
    return resolve(this.get('field').then(function (field){
      var className = _className || field.constructor.modelName;
      return store.query(className, {filter} )
    }))
  },
});
