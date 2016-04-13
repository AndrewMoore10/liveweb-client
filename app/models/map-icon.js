import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  width: DS.attr(),
  height: DS.attr(),
  anchor_x: DS.attr(),
  anchor_y: DS.attr(),
  icon: Ember.computed("url", "width", "height", "anchor_x", "anchor_y", function(){
    return { 
      url: this.get("url"),
      scaledSize: new google.maps.Size(this.get("width"), this.get("height")),
      anchor: new google.maps.Point(this.get("anchor_x"), this.get("anchor_y"))
    }
  }),
  live_shots: DS.hasMany("live-shot")
});
