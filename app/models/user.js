import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  fn: DS.attr(),
  ln: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  picture: DS.attr(),
  live_shots: DS.hasMany("live-shot"),
  reporter_live_shots: DS.hasMany("live-shot"),
  modified_live_shots: DS.hasMany("live-shot"),
  created_live_shots: DS.hasMany("live-shot"),
  created_logs: DS.hasMany("log"),
  vehicles: DS.hasMany("live-shot"),

});
