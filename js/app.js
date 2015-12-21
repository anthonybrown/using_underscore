var msgEach = document.getElementById('each');
var objMsg = document.getElementById('obj');
var people = document.getElementById('people');
var authors = document.getElementById('authors');
var mapMsg = document.getElementById('mapMsg');

// log function
var log = function (contents) {
	if (_.isArray(contents)) {
		_.each(contents, function (e, i, l) {
			log(e)
		});
	} else {
		$('#result').append('<li>' + contents + '</li>');
	}
};

var logAuth = function (contents) {
	if (_.isArray(contents)) {
		_.each(contents, function(e, i, l) {
			logAuth(e);
		});
	} else {
		$('#authors').append('<li>' + contents + '</li>');
	}
};

var names = ['Tony', 'Klaudia', 'Jacob', 'Zeu Zeu', 'Shaggy', 'Bunna', 'Stormy', 'Rosco', 'Monkey', 'Chinchilly'];

var name = _.each(names, function (elem, index, list) {
	//msgEach.innerHTML +=
	$('#each').append(
		'Element: '   + elem  + ' '  +
		'Index: '     + index + ', ' +
		'List length' + list.length + '<br />'
	);
});

var author = {
	firstName: 'Tony',
	lastName: 'Brown'
}

_.each(author, function (val, key) {
	//objMsg.innerHTML +=
	$('#obj').append(
		'Value: ' + '<strong>' + val + '</strong>' + ', ' + '<br />' +
		' Key: ' +  '<em><strong>' + key + '</em></strong>' + '<br />'
	)
})

var peoples = {
	names: ['Barak Obama', 'Hillary Clinton', 'Bill Clinton'],
	getMessage: function (name) {
		return 'Hello there ' + name + '!' + '<br>'
	}
}

_.each(peoples.names, function (elem, index, list) {
	people.innerHTML += this.getMessage(elem)
}, peoples);
// passing in peoples after iterator
// as the last argument to each function
// that will bind the peoples object
// to the this pointer of getMessage method
// passing in the context to the each function
// is very handy


var mapNames = ['Tony', 'Klaudia', 'Jacob'],
		m = _.map(mapNames, function(name) {
			return name + ' is mapped from an array.<br>'
		})
log(m);

var auths = {
	first: 'Ernest HemingWay',
	second : 'Edgar Allen Poe'
},

messenger = {
	getGreeting: function() {
		return 'Hello! ';
	},

	getMessage: function ( msg ) {
		return this.getGreeting() + msg;
	}
};

_.each(auths, function (value, key) {
	logAuth(this.getMessage(value));
}, messenger);
