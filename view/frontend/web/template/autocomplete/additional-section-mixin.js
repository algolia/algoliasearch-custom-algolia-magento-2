// SAMPLE ADDITIONAL SECTION MIXIN
define(function () {
  "use strict";

  const mixin = {
    getHeaderHtml: function ({ section }) {
      return `This ${section.name} template was customized!`;
    },
  };

  return function (target) {
    return { ...target, ...mixin };
  };
});
