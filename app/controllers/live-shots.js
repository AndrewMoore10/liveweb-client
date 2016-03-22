import Ember from 'ember';

export default Ember.Controller.extend({

  filterOptions: Ember.computed( function(){
    return [
      { label: "Active" , value: "activeLiveShots"},
      { label: "Inactive" , value: "inactiveLiveShots"},
      { label: "Canceled" , value: "canceled"},
      { label: "All" , value: "model"}
    ];}
  ),
  selectedFilter: "activeLiveShots",
  filteredLiveShots: Ember.computed("selectedFilter", function(){
    var selected = this.get("selectedFilter");
    Ember.Logger.log("selected : " + selected);
    return this.get(selected);
  }),
  actions:{
    filterChanged(value){
      this.set("selectedFilter", value );
    }
  }
});