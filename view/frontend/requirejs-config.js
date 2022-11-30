/**
 * Documentation: https://www.algolia.com/doc/integration/magento-2/customize/autocomplete-menu
 **/

/**
 * This starter file provides a means to override the Algolia search experience using RequireJS.
 *
 *
 *
 * You can customize Autocomplete in 2 ways:
 *   1. Via a complete override of the underlying functional template
 *   2. Via a JavaScript mixin (recommended)
 */

var config = {
  map: {
    "*": {
      algoliaHooks: "Algolia_CustomAlgolia/hooks",

      ////////////////////////////////////
      // AUTOCOMPLETE TEMPLATE OVERRIDE //
      ////////////////////////////////////

      // Uncomment the following line to override the products.js functional template
      // productsHtml': 'Algolia_CustomAlgolia/internals/template/autocomplete/products'
    },
  },

  /////////////////////
  // FRONT END HOOKS //
  /////////////////////

  // Uncomment the following line to include front-end hook methods - see https://www.algolia.com/doc/integration/magento-2/customize/custom-front-end-events/
  // deps: ["algoliaHooks"],

  //,

  ////////////////////////
  // AUTOCOMPLETE MIXIN //
  ////////////////////////

  /**
   *  You can add a mixin to customize only a single portion of a template based on the corresponding function.
   *  Use the `html` tagged template literal supplied via the function arguments to return your custom content as HTML.
   */

  config: {
    mixins: {
      // Uncomment the following mixins to override the hit template via a JavaScript mixin for a given source
      // "Algolia_AlgoliaSearch/internals/template/autocomplete/products": {
      //   "Algolia_CustomAlgolia/template/autocomplete/products-mixin": true,
      // },
      // "Algolia_AlgoliaSearch/internals/template/autocomplete/categories": {
      //   "Algolia_CustomAlgolia/template/autocomplete/categories-mixin": true,
      // },
      // "Algolia_AlgoliaSearch/internals/template/autocomplete/pages": {
      //   "Algolia_CustomAlgolia/template/autocomplete/pages-mixin": true,
      // },
      // "Algolia_AlgoliaSearch/internals/template/autocomplete/additional-section": {
      //   "Algolia_CustomAlgolia/template/autocomplete/additional-section-mixin": true,
      // },
      // "Algolia_AlgoliaSearch/internals/template/autocomplete/suggestions": {
      //   "Algolia_CustomAlgolia/template/autocomplete/suggestions-mixin": true,
      // },
    },
  },
};
