import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    save(params){
      var newFeedback = this.store.createRecord('feedback', params);
      newFeedback.save();
      this.transitionTo('index');
    }
  }
});
