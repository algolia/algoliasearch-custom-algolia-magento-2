// SAMPLE TEMPLATE ENGINE MIXIN
define(function () {
    "use strict";

    return function (target) {
        const mixin = {
            getSelectedEngineType: function () {
                return target.ENGINE_TYPE_HOGAN;
            },
        };

        return { ...target, ...mixin };
    };
});
