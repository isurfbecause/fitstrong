Meteor.Router.add({
  //'/': 'postsList',
  '/': 'welcome',
  '/innout': 'innout',
  '/excercise': 'excercise',
  '/posts/_id': {
  	to: 'postPage',
  	and: function(id) { Session.set('currentPostId', id); }
  }
});