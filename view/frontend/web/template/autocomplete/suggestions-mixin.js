// SAMPLE SUGGESTIONS MIXIN
define(function () {
  "use strict";

  const mixin = {
    getHeaderHtml: function () {
      return "This suggestions template was customized!";
    },
  };

  return function (target) {
    return { ...target, ...mixin };
  };
});
