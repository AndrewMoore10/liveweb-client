import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  live_shots: DS.hasMany("live-shot")
});
