// SAMPLE COMMON LIB MIXIN
// These mixins demonstrate ways that you can modify the behavior of core utility libraries that Algolia uses under the hood

define(function () {
    "use strict";

    return function (target) {
        const mixin = {
            isMobile() {
                console.log("Mobile user agent?", target.isMobileUserAgent());
                console.log("Touch device?", target.isTouchDevice()); // This example implementation ignores this criteria for isMobile
                return target.isMobile();
            },

            getCookie(name) {
                // Here you can hook into how cookies are retrieved for the Algolia extension
                console.log("Retrieving cookie:", name);
                return target.getCookie();
            }
        };

        return { ...target, ...mixin };
    };
});
