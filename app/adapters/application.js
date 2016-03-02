import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // namespace: 'api',
  host: 'http://10.40.10.45:3000'
});
