import Ember from 'ember';

export default Ember.Component.extend({
  admin: Ember.inject.service('logged-in'),
  actions: {
    update(post, params){
      this.sendAction('update', post, params);
    },
    delete(post) {
      if(confirm("Are you sure you would like to delete this post?")) {
        this.sendAction('delete', post);
      }
    }
  }
});
