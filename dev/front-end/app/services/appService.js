angular.module('appService', [])

.factory('Contact', function($http) {

	// create a new object
	var contactFactory = {};

	// get all contacts
	contactFactory.all = function() {
		return $http.get('/api/contacts/');
	};

	// create a contact
	contactFactory.create = function(contactData) {
		return $http.post('/api/contacts/', contactData);
	};

	// update a contact
	contactFactory.update = function(id, contactData) {
		return $http.put('/api/contacts/' + id, contactData);
	};

	// delete a contact
	contactFactory.delete = function(id) {
		return $http.delete('/api/contacts/' + id);
	};

	// return our entire contactFactory object
	return contactFactory;

})
