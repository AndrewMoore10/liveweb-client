import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    v_type_name: { serialize: false },
    v_type_options: { serialize: false },
    gps_type_name: { serialize: false },
    gps_type_options: { serialize: false }
  }
});