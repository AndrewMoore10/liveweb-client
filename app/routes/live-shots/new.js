import Ember from 'ember';
import LiveShot from './live-shot'

export default LiveShot.extend({
  // controllerName: 'live-shots.live-shot', //Explicit, Inherited
  model(){
   return this.store.createRecord('live-shot',
    { 
      title: "new ls"
    }); 
  }
}); 