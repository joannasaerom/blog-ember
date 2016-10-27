import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  admin: Ember.inject.service('logged-in'),
  showUpdateForm: false,
  actions: {
    show() {
      this.set('showUpdateForm', true);
    },

    update(post){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        edited: moment().format('LL h:mm:ss a')
      };
      this.sendAction('update', post, params);
      this.set('showUpdateForm', false);
      // this.set('title', '');
      // this.set('author', '');
      // this.set('content', '');
    }

  }
});
