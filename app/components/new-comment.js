import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        date: moment().format('LL h:mm:ss a'),
        post: this.get('post')
      };
      this.sendAction('save', params);
      this.set('content', '');
      this.set('author', '');
    }
  }
});
