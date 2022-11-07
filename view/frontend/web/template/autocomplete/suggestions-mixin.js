// SAMPLE SUGGESTIONS MIXIN
define(function () {
  "use strict";

  const mixin = {
    getHeaderHtml: function () {
      return "This suggstions template was customized!";
    },
  };

  return function (target) {
    return { ...target, ...mixin };
  };
});
