/**
 * Documentation: https://www.algolia.com/doc/integration/magento-2/customize/custom-front-end-events/
 **/

/**
 * Autocomplete hook method
 * autocomplete.js documentation: https://github.com/algolia/autocomplete.js
 **/

define(["jquery", "algoliaAnalytics", "algoliaBundle"], function (
  $,
  algoliaAnalyticsWrapper,
  algoliaBundle
) {
  algolia.registerHook(
    "beforeAutocompleteSources",
    function (sources, algolia_client, algoliaBundle) {
      console.log("In hook method to modify autocomplete data sources");

      // use the global window variable `algoliaConfig` to see what has been configured in the system configuration
      console.log(algoliaConfig);

      // Modify autocomplete data sources

      return sources;
    }
  );

  algolia.registerHook("beforeAutocompleteOptions", function (options) {
    console.log("In hook method to modify autocomplete options");

    // Modify autocomplete options

    return options;
  });

  /**
   * InstantSearch hook methods
   * IS.js v2 documentation: https://community.algolia.com/instantsearch.js/
   * IS.js v4 documentation: https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/
   **/

  algolia.registerHook(
    "beforeInstantsearchInit",
    function (instantsearchOptions, algoliaBundle) {
      console.log("In method to modify instantsearch options");

      // Modify instant search options

      return instantsearchOptions;
    }
  );

  algolia.registerHook(
    "beforeWidgetInitialization",
    function (allWidgetConfiguration, algoliaBundle) {
      console.log("In hook method to modify instant search widgets");

      // Modify instant search widgets

      return allWidgetConfiguration;
    }
  );

  algolia.registerHook(
    "beforeInstantsearchStart",
    function (search, algoliaBundle) {
      console.log(
        "In hook method to modify instant search instance before search started"
      );

      // Modify instant search instance before search started

      return search;
    }
  );

  algolia.registerHook(
    "afterInstantsearchStart",
    function (search, algoliaBundle) {
      console.log(
        "In hook method to modify instant search instance after search started"
      );

      // Modify instant search instance after search started

      return search;
    }
  );
});
