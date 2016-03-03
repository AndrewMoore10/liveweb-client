import Ember from 'ember';

export default Ember.Component.extend({
  doubleClick: function() {
    console.log("double click");
    this.set('isEditing', true);
    return false;
  },
  focusOut: function() {
    this.set('isEditing', false);
    var model = this.get('model');
    model.save();
  },
});
