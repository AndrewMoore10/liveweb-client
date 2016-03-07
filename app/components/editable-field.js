import Ember from 'ember';

export default Ember.Component.extend({
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
    this.set('isEditing', false);
    var model = this.get('model');
    if(model.get("hasDirtyAttributes"))
      model.save();
  },

  isTextArea: function() {
    return this.get('type') == "textarea";
  }.property('type'),

  isSelect: function() {
    return this.get('type') == "select";
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
