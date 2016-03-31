import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    status_name: { serialize: false },
    status_options: { serialize: false },
    dest_options: { serialize: false },
    channel_options: { serialize: false },
    is_active: { serialize: false }
  }
});