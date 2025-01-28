// SAMPLE INSTANTSEARCH MIXIN
// These mixins demonstrate ways that you can override behaviors and configurations in the core InstantSearch implementation
// More mixin support to come...

define(['algoliaHoganLib'], function (Hogan) {
    "use strict";

    return function (target) {
        const mixin = {
            // Demonstrates how to load legacy bundle with additional libs for older front end hook API
            mockAlgoliaBundle: function () {
                console.log("Customizing the algoliaBundle...");
                const algoliaBundle = this._super();
                algoliaBundle.Hogan = Hogan;
                return algoliaBundle;
            },

            /**
             * Demonstrates how to modify params like typo tolerance at runtime via the InstantSearch configure widget
             * https://www.algolia.com/doc/api-reference/search-api-parameters/
             */
            getSearchParameters: function () {
                const searchParameters = this._super();
                searchParameters.typoTolerance = false;
                return searchParameters;
            }
        };

        return target.extend(mixin);
    };
});
