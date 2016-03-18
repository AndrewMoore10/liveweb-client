export function initialize(appInstance) {
  var store = appInstance.lookup('service:store')
  store.findAll('mobile-transmitter');
  store.findAll('vehicle');
}

export default {
  name: 'load-transmitters',
  initialize
};
