// SAMPLE PAGES MIXIN
define(function () {
  "use strict";

  const mixin = {
    getHeaderHtml: function () {
      return "This page template was customized!";
    },
  };

  return function (target) {
    return { ...target, ...mixin };
  };
});
