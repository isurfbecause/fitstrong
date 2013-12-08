Meteor.Router.add({
  //'/': 'postsList',
  '/': 'welcome',
  '/innout': 'innout',
  '/posts/_id': {
  	to: 'postPage',
  	and: function(id) { Session.set('currentPostId', id); }
  }
});