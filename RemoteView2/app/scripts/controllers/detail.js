/*global RemoteView2*/

RemoteView2.Controllers = RemoteView2.Controllers || {};

(function () {
    'use strict';

    RemoteView2.Controllers.DetailController = RemoteView2.Controllers.MenuController.extend({

        initViews: function () {
            // Initialzie the DetailView  with the controller (this) as scope
            this.contentView = RemoteView2.Views.DetailView.create(this);
        },

        // Navigation: on button tap
        gotoMenuView: function () {
            // navigate to the menu view via a route
            RemoteView2.navigate({
                route: ''
            })


        }

    })
})();

