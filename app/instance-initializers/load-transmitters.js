export function initialize(appInstance) {
  var store = appInstance.lookup('service:store')
  store.findAll('mobile-transmitter');
  // store.findAll('vehicle');

  store.query('vehicle', {
    include: "map-icon",
    // filter: {"active" : true}
  });
}

export default {
  name: 'load-transmitters',
  initialize
};
