import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    status_name: { serialize: false },
    status_options: { serialize: false },
    type_name: { serialize: false },
    type_options: { serialize: false },
  }
});