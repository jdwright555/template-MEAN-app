angular.module('contactsCtrl', ['appService'])

.controller('contactsController', function(Contact) {

  	var vm = this;

    // grab all the contacts at page load for display
    Contact.all()
        .success(function(data) {

            // when all the contacts come back, remove the processing variable
            vm.processing = false;

            // create display tag to allow for variation in content
            if (data.length === 0) {
                vm.displaytag = false;
            } else {
                vm.displaytag = true;
            };

            // bind the results that come back to vm.contacts
            vm.contacts = data;

    });

    // function to delete a contact
    vm.deleteContact = function(id) {
        
        Contact.delete(id)
            .success(function(data) {

                // get all contacts to update the table
                // you can also set up your api 
                // to return the list of contacts with the delete call
                Contact.all()
                    .success(function(data) {
                        vm.processing = false;
                        vm.contacts = data;
                    });

                alert(data.message);

            });
    };

})
