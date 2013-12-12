/*global $, M*/
// The app gets initialized with the configuration provided from the config.js
// and gets appended to the global (window) namespace named like the app
(function(global) {
    'use strict';


global.RemoteView2 = M.Application.extend().create(global.RemoteView2.mconfig);

    $(document).ready(function() {

        global.RemoteView2.start({
            routing: {
                routes: {
                   // 'absinthe': 'absintheController',
                   // 'beer': 'beerController',
                    '': 'menu',
                    'detail': 'detail'
                    //m:routes
                },
            //    absintheController: global.RemoteView2.Controllers.AbsintheController.create(),
            //    beerController: global.RemoteView2.Controllers.BeerController.create(),
                menu: global.RemoteView2.Controllers.MenuController.create(),

                detail: global.RemoteView2.Controllers.DetailController.create()
            //    detail: global.RemoteView2.Controllers.DetailController.create(),
                //m:controllers
            }
        });
    });

})(this);