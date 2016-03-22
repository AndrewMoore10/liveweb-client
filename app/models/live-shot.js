import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  location: DS.attr(),
  instruction: DS.attr(),
  is_active: DS.attr(),
  status: DS.attr(),
  status_name: DS.attr(),
  status_options: DS.attr(),
  call_in: DS.attr(),
  established: DS.attr(),
  fed: DS.attr(),
  receiver: DS.belongsTo("receiver", { async: true}),
  transmitter: DS.belongsTo("transmitter", { polymorphic: true, async: true}),
  reporter: DS.belongsTo("user", {inverse: 'reporter_live_shots',  async: true}),
  photogs: DS.hasMany("user", {inverse: 'live_shots',  async: true}),
  shows: DS.hasMany("show", { async: true}),
  lat: DS.attr(),
  lon: DS.attr(),
  ch: DS.attr(),
  router_dest: DS.attr(),
  issues: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  modified_by: DS.belongsTo("user", {inverse: 'modified_live_shots', async: true}),
  created_by: DS.belongsTo("user", {inverse: 'created_live_shots', async: true})
});
