
App.User = DS.Model.extend({
	name: DS.attr(),
	email: DS.attr(),
	bio: DS.attr(),
	avatarUrl: DS.attr(),
	creationDate: DS.attr()
});

App.User.FIXTURES = [{
	id: 1,
	name: 'Sponge Bob',
	email: 'bob@sponge.com',
	avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
	bio: 'Sponge is Bob and Bob is Sponge',
	creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}, {
	id: 2,
	name: 'Gary Shanks',
	email: 'shanks@gary.com',
	avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
	bio: 'Sponge is Bob and Bob is Sponge',
	creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}, {
	id: 3,
	name: 'Jeetu Chang',
	email: 'chang@jeetu.com',
	avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
	bio: 'Sponge is Bob and Bob is Sponge',
	creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}];