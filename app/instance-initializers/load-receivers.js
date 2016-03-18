export function initialize(appInstance) {
  var store = appInstance.lookup('service:store')
  store.findAll('receiver');
  store.findAll('show');
}

export default {
  name: 'load-receivers',
  initialize
};
