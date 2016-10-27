import Ember from 'ember';

export default Ember.Component.extend({
  admin: Ember.inject.service('logged-in'),
  actions: {
    loginAttempt(users) {
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      for(var i=0; i<users.content.length; i++) {
        if(users.content[i]._data.username === params.username && users.content[i]._data.password === params.password) {
          this.get('admin').login();
        }
      }
      console.log(this.admin);
      if(this.get('admin').loggedIn) {
        this.sendAction('loginAttempt');
      } else {
        alert("Username and/or password invalid!");
      }
      this.set('username', '');
      this.set('password', '');
    }
  }
});
