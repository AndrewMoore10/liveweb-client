import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  status: DS.attr(),
  status_note: DS.attr(),
  receiver_type: DS.attr(),
  live_shots: DS.hasMany("live-shot")
});
