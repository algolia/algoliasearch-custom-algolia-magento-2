// SAMPLE AUTOCOMPLETE MIXIN
// These mixins demonstrate ways that you can override behaviors and configurations in the core Autocomplete implementation

define(['uiComponent'], function (Component) {
    "use strict";

    return function (target) {
        const mixin = {
            initialize: function () {
                this._super();
                console.log("The original debounce was:", target.prototype.DEBOUNCE_MS);
                console.log("The updated debounce is:", this.DEBOUNCE_MS);

                console.log("The original minimum characters before search was:", target.prototype.MIN_SEARCH_LENGTH_CHARS);
                console.log("The updated minimum characters before search is:", this.MIN_SEARCH_LENGTH_CHARS);

            },
            // Set debounce to 600ms
            DEBOUNCE_MS: 600,
            // Set minimum number of characters before search to 5
            MIN_SEARCH_LENGTH_CHARS: 5,

            handleAutocompleteStateChange: function(state) {
                console.log("In mixin to listen to changes to Autocomplete state:", state);
            }
        };

        return target.extend(mixin);
    };
});
