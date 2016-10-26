import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        comment: this.get('comment'),
        date: moment().format('LL')
      };
      this.sendAction('save', params);
      this.set('name', '');
      this.set('email', '');
      this.set('comment', '');
    }
  }
});
