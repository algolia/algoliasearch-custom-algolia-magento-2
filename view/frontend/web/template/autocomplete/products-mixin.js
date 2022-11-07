// SAMPLE PRODUCT MIXIN
define(function () {
  "use strict";

  const mixin = {
    getHeaderHtml: function () {
      return "This product template was customized!";
    },

    getItemHtml: function ({ item, components, html }) {
      return html`<a
        class="algoliasearch-autocomplete-hit"
        href="${item.__autocomplete_queryID != null
          ? item.urlForInsights
          : item.url}"
      >
        <div class="thumb">
          <img src="${item.thumbnail_url || ""}" alt="${item.name || ""}" />
        </div>
        <div class="info">
          ${components.Highlight({ hit: item, attribute: "name" })}

          <!-- BEGIN SAMPLE CUSTOMIZATION -->
          <!-- (Adding SKU to autocomplete HTML output) -->
          <div class="sku">${item.sku}</div>
          <!-- END SAMPLE CUSTOMIZATION -->

          <div class="algoliasearch-autocomplete-category">
            ${this.getColorHtml(item, components, html)}
            ${this.getCategoriesHtml(item, components, html)}
          </div>

          ${this.getPricingHtml(item, html)}
        </div>
      </a>`;
    },
  };

  return function (target) {
    return { ...target, ...mixin };
  };
});
