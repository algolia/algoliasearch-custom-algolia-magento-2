// SAMPLE CATEGORIES MIXIN
define(function () {
  "use strict";

  const mixin = {
    getHeaderHtml: function () {
      return "This category template was customized!";
    },
  };

  return function (target) {
    return { ...target, ...mixin };
  };
});
