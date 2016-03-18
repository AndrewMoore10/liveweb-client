import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
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
    Ember.Logger.log("focus out");
    this.set('isEditing', false);
    var model = this.get('model');
    model.save(); //has dirty does not detect dirty relationship
    if(model.get("hasDirtyAttributes")){}
    else Ember.Logger.log("no dirty");
  },
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
        // Ember.Logger.log(element[valuePath]);
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
    selectChanged(value){
      var model = this.get('model');
      var field = this.get('field');
      var relationship = this.get('relationship');
      if(! Ember.isEmpty( relationship ) ){
        var selectedRelated = this.get('store').peekRecord(relationship, value )
        model.set(relationship, selectedRelated)
      }
      else{
        this.set('field', value);
        Ember.Logger.log(field);
        Ember.Logger.log(value.toString());
        // model.set(field, value.toString());
      }
    }

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

  isCheckbox: function() {
    return this.get('type') == "checkbox";
  }.property('type'),

  hasAltLabel: function() {
    return this.get('alt-label');
  }.property('alt-label'),

  hasContent: function() {
    return this.get('content');
  }.property('content')
});
