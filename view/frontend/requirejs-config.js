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

const config = {
    map: {
        "*": {
            // Include your own hooks to handle front end events - see https://www.algolia.com/doc/integration/magento-2/customize/custom-front-end-events/
            algoliaHooks: 'Algolia_CustomAlgolia/js/hooks',

            // Additional lib for recent searches plugin - OPTIONAL
            algoliaRecentSearches: 'Algolia_CustomAlgolia/js/internals/autocomplete-plugin-recent-searches'

            ////////////////////////////////////
            // AUTOCOMPLETE TEMPLATE OVERRIDE //
            ////////////////////////////////////

            // Uncomment the following line to override the products.js functional template
            // productsHtml: 'Algolia_CustomAlgolia/js/internals/template/autocomplete/products'
        },
    },

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
            "Algolia_AlgoliaSearch/js/template/autocomplete/products": {
              "Algolia_CustomAlgolia/js/template/autocomplete/products-mixin": true,
            }
            // "Algolia_AlgoliaSearch/js/template/autocomplete/categories": {
            //   "Algolia_CustomAlgolia/js/template/autocomplete/categories-mixin": true,
            // },
            // "Algolia_AlgoliaSearch/js/template/autocomplete/pages": {
            //   "Algolia_CustomAlgolia/js/template/autocomplete/pages-mixin": true,
            // },
            // "Algolia_AlgoliaSearch/js/template/autocomplete/additional-section": {
            //   "Algolia_CustomAlgolia/js/template/autocomplete/additional-section-mixin": true,
            // },
            // "Algolia_AlgoliaSearch/js/template/autocomplete/suggestions": {
            //   "Algolia_CustomAlgolia/js/template/autocomplete/suggestions-mixin": true,
            // },
        },
    },
};
