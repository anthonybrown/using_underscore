var msgEach = document.getElementById('each');
var objMsg = document.getElementById('obj');
var people = document.getElementById('people');

var names = ['Tony', 'Klaudia', 'Jacob', 'Zeu Zeu', 'Shaggy', 'Bunna', 'Stormy', 'Rosco', 'Monkey', 'Chinchilly'];

var name = _.each(names, function (elem, index, list) {
	msgEach.innerHTML +=
		'Element: '   + elem  + ' '  +
		'Index: '     + index + ', ' +
		'List length' + list.length + '<br />'
});

var author = {
	firstName: 'Tony',
	lastName: 'Brown'
}

_.each(author, function (val, key) {
	objMsg.innerHTML +=
		'Value: ' + '<strong>' + val + '</strong>' + ', ' + '<br />' +
		' Key: ' +  '<em><strong>' + key + '</em></strong>' + '<br />'
})

var peoples = {
	names: ['Tony', 'Klaudia', 'Jacob'],
	getMessage: function (name) {
		return 'Hello there ' + name + '!' + '<br>'
	}
}

_.each(people.names, function (elem, index, list) {
	peoples.innerHTML += this.getMessage(elem)
}, people);
// passing in peoples after iterator
// as the last argument to the each function
// will bind peoples to the this pointer.
// without passing in peoples
// it would point to the iterator function
// instead of the getMessage method
// very handy to pass in the context to the each function.

