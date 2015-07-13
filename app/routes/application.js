import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    invalidateSession: function () {
      this.get('session').invalidate();
    },
    authenticate: function() {
      this.get('session').authenticate('simple-auth-authentiator:torii', 'google-oauth2');
    }
  }
});