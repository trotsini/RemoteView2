/*global RemoteView2*/

RemoteView2.Controllers = RemoteView2.Controllers || {};

(function () {
    'use strict';

    RemoteView2.Controllers.AbsintheController = M.Controller.extend({

        _absintheView: null,

        applicationStart: function() {
            this._initLayout();
        },

        show: function() {
            this._setViews();
            RemoteView2.getLayout().startTransition();
        },

        _initLayout: function() {
            var _layout = M.SwitchHeaderContentLayout.design(this, null, true);
            RemoteView2.setLayout(_layout);
            this._setViews();
        },

        _setViews: function() {
            if(!this._absintheView) {
                this._absintheView = RemoteView2.Views.AbsintheView.create(this);
            }
            RemoteView2.getLayout().applyViews({
                content: this._absintheView
            });
        }
    });

})();
