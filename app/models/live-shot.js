import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  location: DS.attr(),
  instruction: DS.attr(),
  status: DS.attr(),
  call_in: DS.attr(),
  established: DS.attr(),
  fed: DS.attr(),
  receiver: DS.belongsTo("receiver", { async: true}),
  transmitter: DS.belongsTo("transmitter", { polymorphic: true, async: true}),
  // transmitter_id: DS.attr(),
  // transmitter_type: DS.attr(),
  // reporter: DS.belongsTo("user"),
  // photogs: DS.hasMany("user"),
  shows: DS.hasMany("show", { async: true}),
  lat: DS.attr(),
  lon: DS.attr(),
  ch: DS.attr(),
  router_dest: DS.attr(),
  issues: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  // modified_by: DS.belongsTo("user")

});
