// SAMPLE AUTOCOMPLETE MIXIN
define(['uiComponent'], function (Component) {
    "use strict";

    return function (target) {
        const mixin = {
            initialize: function () {
                this._super();
                console.log("The original debounce was:", target.prototype.DEBOUNCE_MS);
                console.log("The updated debounce is:", this.DEBOUNCE_MS);
            },
            DEBOUNCE_MS: 600
        };

        return target.extend(mixin);
    };
});
