import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr(),
  status_name: DS.attr(),
  status_options: DS.attr(),
  status_note: DS.attr(),
  note: DS.attr(),
  mileage: DS.attr(),
  engine_hrs: DS.attr(),
  generator_hrs: DS.attr(),
  // attachement: DS.attr(),
  vehicle: DS.belongsTo("vehicle", { async: true}),
  created_at: DS.attr(),
  created_by: DS.belongsTo("user", {inverse: 'created_logs', async: true})
});
