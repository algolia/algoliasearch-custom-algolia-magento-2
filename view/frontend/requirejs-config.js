/**
 * Documentation: https://www.algolia.com/doc/integration/magento-2/customize/autocomplete-menu
 **/

/**
 * This starter file provides a means to override the Algolia search experience using RequireJS.
 *
 * You can customize Algolia's JavaScript in one of 3 ways:
 *   1. Via a complete override of the underlying dependency
 *   2. Via a JavaScript mixin (recommended especially for templates)
 *   3. Via front end custom events (hooks.js is included to demonstrate how to handle custom front end events)
 */
const config = {
    map: {
        "*": {
            // Include your own hooks to handle front end events - see https://www.algolia.com/doc/integration/magento-2/customize/custom-front-end-events/
            algoliaHooks: 'Algolia_CustomAlgolia/js/hooks',

            // Add any dependencies you might need for your own customizations
            // For instance, this lib supplies the "recent searches" plugin
            // How this might be used is demonstrated in hooks.js using the `afterAutocompletePlugins` event
            algoliaRecentSearchesPluginLib: 'Algolia_CustomAlgolia/js/lib/autocomplete-plugin-recent-searches',

            ////////////////////////////////////
            // ALGOLIA FRONTEND LIB OVERRIDE  //
            ////////////////////////////////////

            // Uncomment to load your own specific version of InstantSearch e.g. 4.65.0
            // algoliaInstantSearchLib: 'Algolia_CustomAlgolia/js/lib/algolia-instantsearch.local.min',

            /**
             * This can be done for other libraries as well such as Autocomplete, Recommend etc.
             * Check the `lib` directory in the core module for versioned dependency source files
             */

            ////////////////////////////////////
            // AUTOCOMPLETE TEMPLATE OVERRIDE //
            ////////////////////////////////////

            // Uncomment the following line to override the products.js functional template
            // productsHtml: 'Algolia_CustomAlgolia/js/internals/template/autocomplete/products'
        },
    },

    config: {
        // Use mixins where possible to only override *specific functions* within the Algolia implementation
        // This makes upgrades easier in the future since you will not have to merge all changes into your template overrides
        mixins: {
            //////////////////////////////////
            // AUTOCOMPLETE TEMPLATE MIXINS //
            //////////////////////////////////

            /**
             *  You can add a mixin to customize only a single portion of a template based on the corresponding function.
             *  Use the `html` tagged template literal supplied via the function arguments to return your custom content as HTML.
             */

            // Uncomment the following mixins to override the hit template via a JavaScript mixin for a given source
            // "Algolia_AlgoliaSearch/js/template/autocomplete/products": {
            //   "Algolia_CustomAlgolia/js/template/autocomplete/products-mixin": true,
            // },
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

            //////////////////////////////////
            //  OTHER AUTOCOMPLETE MIXINS   //
            //////////////////////////////////

            // Uncomment the following mixin to see a demonstration of how you can modify the logic behind how Autocomplete functions
            // "Algolia_AlgoliaSearch/js/autocomplete": {
            //     "Algolia_CustomAlgolia/js/autocomplete-mixin": true,
            // },

            //////////////////////////////////
            //     INSTANTSEARCH MIXINS     //
            //////////////////////////////////

            // Uncomment the following mixin to see a demonstration of how you can modify the logic behind how InstantSearch functions
            // Some examples include: Changing runtime behaviors and adding libraries to the algoliaBundle used in legacy front end hooks
            // "Algolia_AlgoliaSearch/js/instantsearch": {
            //     "Algolia_CustomAlgolia/js/instantsearch-mixin": true,
            // },

            //////////////////////////////////
            //     INTERNAL LIB MIXINS      //
            //////////////////////////////////

            // Uncomment the following mixin to change the template parsing engine from Mustache to Hogan
            // "Algolia_AlgoliaSearch/js/internals/template-engine": {
            //     "Algolia_CustomAlgolia/js/internals/template-engine-mixin": true,
            // },

            // Uncomment the following mixin to change the behavior of common util functions
            // "Algolia_AlgoliaSearch/js/internals/common": {
            //     "Algolia_CustomAlgolia/js/internals/common-mixin": true,
            // },
        },
    }
};
