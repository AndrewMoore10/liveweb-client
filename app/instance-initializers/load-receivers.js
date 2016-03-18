export function initialize(appInstance) {
  var store = appInstance.lookup('service:store')
  store.findAll('receiver');
}

export default {
  name: 'load-receivers',
  initialize
};
