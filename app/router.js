import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('aboutme');
  this.route('contactme');
  this.route('projects');
  this.route('goingforward');

  this.route('admin', function() {
    this.route('invitations');
  });
});

export default Router;
