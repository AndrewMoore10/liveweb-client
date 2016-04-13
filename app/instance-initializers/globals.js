export function initialize(appInstance) {
  var store = appInstance.lookup('service:store')
  store.findAll('receiver');
  store.findAll('show');
  store.findAll('map-icon');
  store.query('live-shot', {
    include: "map-icon",
    filter: {"active" : true}
  });
  var Host = Ember.Object.extend({
    url: store.adapterFor('application').get('host')
  });
  // var assetHost = 
  // Ember.Logger.log(assetHost)
  appInstance.register('globals:host', Host)
  appInstance.inject('route', 'asset_host', 'globals:host');
}

export default {
  name: 'globals',
  initialize
};
