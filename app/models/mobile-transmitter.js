import DS from 'ember-data';

import Transmitter from './transmitter';

export default Transmitter.extend({
  name: DS.attr(),
  description: DS.attr(),
  active: DS.attr(),
  device_type: DS.attr(),
  status: DS.attr(),
  note: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  transmitterType: Ember.computed( function(){
    return "mobile-transmitter";
  }),
  transmitterTypeHuman: Ember.computed( function(){
    return "Mobile Transmitter";
  })
  // logs: DS.hasMany("vehicle-log"),
  // equipment: DS.hasMany("equipment"),
  // assigned_to: DS.belongsTo("user"),

});
