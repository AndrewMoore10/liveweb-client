import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  live_shots: DS.hasMany("live-shot", {async: true}),
  transmitterType: Ember.computed( function(){
    return "transmitter";
  }),
  transmitterTypeHuman: Ember.computed( function(){
    return "Transmitter";
  })
});
