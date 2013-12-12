/*global RemoteView2*/

RemoteView2.Views = RemoteView2.Views || {};

(function() {
    'use strict';

    RemoteView2.Views.AbsintheView = M.View.extend({
        cssClass: 'absinthe-container'
    }, {

        headline: M.View.extend({
            tagName: 'h1',
            value: M.I18N.get('absinthe.headline', {version: M.Version})
        }),

        text: M.View.extend({
            value: M.I18N.get('absinthe.text')
        }),

        button: M.ButtonView.extend({
            value: M.I18N.get('global.button.next'),
            events: {
                tap: function() {
                    RemoteView2.navigate({
                        route: '/beer'
                    });
                }
            }
        })

    });

})();
