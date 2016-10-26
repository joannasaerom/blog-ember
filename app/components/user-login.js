import Ember from 'ember';

export default Ember.Component.extend({
  loggedIn: false,
  actions: {
    login(users) {
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      for(var i=0; i<users.content.length; i++) {
        if(users.content[i]._data.username === params.username && users.content[i]._data.password === params.password) {
          this.set('loggedIn', true);
        }
      }
      console.log(this.loggedIn);
      if(this.loggedIn) {
        this.sendAction('login');
      } else {
        alert("Username and/or password invalid!");
      }
      this.set('username', '');
      this.set('password', '');
    }
  }
});
