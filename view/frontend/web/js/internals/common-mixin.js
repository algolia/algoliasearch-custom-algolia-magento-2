// SAMPLE COMMON LIB MIXIN
define(function () {
    "use strict";

    return function (target) {
        const mixin = {
            isMobile() {
                console.log("Mobile user agent?", target.isMobileUserAgent());
                console.log("Touch device?", target.isTouchDevice());
                return target.isMobile();
            },
        };

        return { ...target, ...mixin };
    };
});
