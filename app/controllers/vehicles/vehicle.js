import Ember from 'ember';

export default Ember.Controller.extend({
  fun: Ember.computed(function(){
    return "stuff";
  })
});