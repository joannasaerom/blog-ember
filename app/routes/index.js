import Ember from 'ember';

export default Ember.Route.extend({
  admin: Ember.inject.service('logged-in'),
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    update(post, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      var post_comments = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(post_comments).then(function() {
        return post.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
