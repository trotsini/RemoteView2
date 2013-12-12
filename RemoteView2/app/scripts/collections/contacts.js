/*global RemoteView2*/


/**
 * A collection is just a list of models and even more.
 * It contains a bunch of helper functions, sync logic
 * and events.
 *
 * For further information go to:
 * http://the-m-project.org/docs/absinthe/Collection.html
 * http://backbonejs.org/#Collection
 */


RemoteView2.Collections = RemoteView2.Collections.ContactsCollection || {};

(function () {
    'use strict';

    RemoteView2.Collections.ContactsCollection = M.Collection.extend({

        model: RemoteView2.Models.ContactModel,

        // the collection uses the localStorage of the browser through the M.LocalStorageStore

        store: M.LocalStorageStore.create({})
    });
})();
