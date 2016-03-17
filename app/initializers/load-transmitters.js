export function initialize(application) {
  var store = application.lookup('service:store')
  store.findAll('vehicle');
  store.findAll('mobile-transmitter');
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'load-transmitters',
  initialize: initialize
};
