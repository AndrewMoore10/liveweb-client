import DS from 'ember-data';

import Transmitter from './transmitter';

export default Transmitter.extend({
  name: DS.attr(),
  status: DS.attr(),
  status_name: DS.attr(),
  description: DS.attr(),
  active: DS.attr(),
  vehicle_type: DS.attr(),
  v_type_name: DS.attr(),
  v_type_options: DS.attr(),
  vin: DS.attr(),
  license: DS.attr(),
  year: DS.attr(),
  has_transmitter: DS.attr(),
  picture: DS.attr(),
  mast_height: DS.attr(),
  stowed_height: DS.attr(),
  mileage_due: DS.attr(),
  engine_hrs_due: DS.attr(),
  power_type: DS.attr(),
  gps: DS.attr(),
  gps_updated_at: DS.attr(),
  gps_lat: DS.attr(),
  gps_lon: DS.attr(),
  gps_type: DS.attr(),
  gps_type_name: DS.attr(),
  gps_type_options: DS.attr(),
  mojio_id: DS.attr(),
  address: DS.attr(),
  map_icon: DS.belongsTo("map_icon", { async: true}),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  logs: DS.hasMany("log", {async: true}),
  transmitterType: Ember.computed( function(){
    return "vehicle";
  }),
  transmitterTypeHuman: Ember.computed( function(){
    return "Vehicle";
  })
  // logs: DS.hasMany("vehicle-log"),
  // equipment: DS.hasMany("equipment"),
  // assigned_to: DS.belongsTo("user"),

});
