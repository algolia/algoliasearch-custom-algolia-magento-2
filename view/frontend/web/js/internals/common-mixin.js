// SAMPLE COMMON LIB MIXIN
define(function () {
    "use strict";

    return function (target) {
        const mixin = {
            isMobile() {
                console.log("Mobile user agent?", target.isMobileUserAgent());
                console.log("Touch device?", target.isTouchDevice()); //ignore this criteria
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
