import DS from 'ember-data';

export default DS.Model.extend({
  live_shots: DS.hasMany("live-shot"),
  transmitterType: Ember.computed( function(){
    return "transmitter";
  }),
  transmitterTypeHuman: Ember.computed( function(){
    return "Transmitter";
  })
});
