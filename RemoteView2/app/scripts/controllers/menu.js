/*global RemoteView2*/

RemoteView2.Controllers = RemoteView2.Controllers || {};

(function() {
    'use strict';

    RemoteView2.Controllers.MenuController = M.Controller.extend({

        // The Content of the page
        contentView: null,

        // define contacts collection
        contacts: null,

        // use this model as reference to the form views
        newContact: null,


        // Called when the Application starts
        applicationStart: function() {
            // Create a layout and apply it to the application
            var layout = M.SwitchLayout.extend().create(this);

            // Set the Layout to the View
            RemoteView2.setLayout(layout);
            // Initialze the Collection
            this.initData();
            // Initialize the Views
            this.initViews();
            // Apply the Views to the Layout (render)
            this._applyViews();
        },

        show: function() {
            // Initialze the Collection
            this.initData();
            // Initialize the Views
            this.initViews();
            // Apply the Views to the Layout (render)
            this._applyViews();
            // Switch the Layout
            RemoteView2.getLayout().startTransition();
        },

        initViews: function() {
            //        Create the MenuView with the controller (this) as scope
            this.contentView = RemoteView2.Views.MenuView.create(this);
        },

        _applyViews: function() {
            RemoteView2.getLayout().applyViews({
                content: this.contentView
            })

        },
        //Navigation: on button tap
        gotoDetailView: function() {
            //navigate to the detail view via a route
            RemoteView2.navigate({
                route: '/detail',
                transition: M.PageTransitions.CONST.FALL
            });
        },

        // initialze the data
        initData: function() {
            //create a model to store the first and the last name
            this.newContact = RemoteView2.Models.ContactModel.create();
            // create the contacts collections if it doesn't exist
            if( !this.contacts ) {
                // create the collection with demo data
                this.contacts = RemoteView2.Collections.ContactsCollection.create(this.getContacts());

            }
            // fetch the data
            //this.getContacts();
        },

        // get the contacts
        getContacts: function() {
            // create some demo data
            return [
                {"name": 'foo', "lastname": "bar"},
                {"name": 'max', "lastname": "mustermann"}
            ];

            // read the data from the store
            //this.contacts.fetch();
        }

        //addContact: function(){
        // add a new model instance based on the the new contact model to the collection
        //this.contacts.create(this.newContact.attributes);

    })
})();






