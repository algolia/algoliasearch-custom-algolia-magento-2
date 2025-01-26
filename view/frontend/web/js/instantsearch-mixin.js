// SAMPLE INSTANTSEARCH MIXIN
// These mixins demonstrate ways that you can override behaviors and configurations in the core InstantSearch implementation
// More mixin support to come...

define(['algoliaHoganLib'], function (Hogan) {
    "use strict";

    return function (target) {
        // Demonstrates how to load legacy bundle with additional libs for older front end hook API
        const mixin = {
            mockAlgoliaBundle: function () {
                console.log("Customizing the algoliaBundle...");
                const algoliaBundle = this._super();
                algoliaBundle.Hogan = Hogan;
                return algoliaBundle;
            },
        };

        return target.extend(mixin);
    };
});
