import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  status: DS.attr(),
  status_name: DS.attr("string", {readOnly: true}),
  status_options: DS.attr(),
  status_note: DS.attr(),
  receiver_type: DS.attr(),
  type_name: DS.attr("string", {readOnly: true}),
  type_options: DS.attr(),
  live_shots: DS.hasMany("live-shot", {async: true })
});
