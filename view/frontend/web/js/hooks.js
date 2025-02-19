/**
 * Documentation: https://www.algolia.com/doc/integration/magento-2/customize/custom-front-end-events/
 **/

/**
 * NOTE: This module is for demonstration purposes only and is intended to show how front end event hooks might be used.
 * Be mindful that introducing things like new sources and plugins can affect the layout of your final render.
 * Utilize DOM or CSS to control the final presentation as needed.
 **/

/**
 * Inject your dependencies as needed
 * e.g. algoliaRecentSearchesPluginLib are only supplied for demonstration of inclusion of the recent searches plugin
 * You can specify additional dependencies via your local module's requirejs-config.js
 */
define([
    'jquery',
    'algoliaCommon',
    'algoliaInstantSearchLib', // inject core Algolia frontend libraries as needed
    'algoliaQuerySuggestionsPluginLib',
    'algoliaAutocompleteSuggestionsHtml',
    'algoliaRecentSearchesPluginLib'
], function (
    $,
    algolia,
    instantsearch,
    querySuggestionsPlugin,
    suggestionsHtml,
    algoliaRecentSearches
) {

    //////////////////////////////////
    //      AUTOCOMPLETE HOOKS      //
    //////////////////////////////////

    /**
     * Autocomplete documentation: https://github.com/algolia/autocomplete
     */

    algolia.registerHook(
        "afterAutocompleteSources",
        (sources, searchClient) => {
            console.log("In hook method to modify Autocomplete data sources");

            // Use the global window variable `algoliaConfig` to see what has been configured in the system configuration
            console.log("Algolia config:", algoliaConfig);

            // Modify autocomplete data sources

            /*
            // Add new source
            sources.push({
                sourceId : "custom-source",
                // Use algoliaConfig.indexName to utilize index prefix by store scope
                indexName: // algoliaConfig.indexName + '_<your_custom_index>',
                options  : {hitsPerPage: 3},
                // templates: null,
                templates: {
                    noResults() {
                        return "No results found";
                    },
                    header() {
                        return 'CUSTOM SOURCE';
                    },
                    item({item, html}) {
                        console.log("Your custom item:", item);
                        return html`<a class="aa-ItemLink" href="${item.path}">${item.label}</a>`;
                    }
                }
            });
            */

            // modify an existing source
            // const pages = sources.find(source => source.sourceId === 'pages');
            // console.log("Pages:", pages);

            return sources;
        }
    );

    algolia.registerHook(
        'afterAutocompletePlugins',
        (plugins, searchClient) => {
            console.log("In hook method to modify Autocomplete plugins");

            // Modify an existing plugin like Query Suggestions (use Algolia instead of Magento)
            // See https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/
            /*
            const pluginIndex = plugins.findIndex(plugin => plugin.name === 'aa.querySuggestionsPlugin');
            if (pluginIndex > -1) {
                // Replace the entire plugin
                plugins[pluginIndex] = querySuggestionsPlugin.createQuerySuggestionsPlugin({
                    searchClient,
                    // Build your suggestions index per https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/#implementing-query-suggestions
                    indexName: '<your_query_suggestions_index>',
                    getSearchParams() {
                        return {hitsPerPage: algoliaConfig.autocomplete.nbOfProductsSuggestions};
                    },
                    transformSource({source}) {
                        return {
                            ...source,
                            getItemUrl({item}) {
                                return algoliaConfig.resultPageUrl + `?q=${item.query}`;
                            },
                            templates: {
                                noResults({html}) {
                                    return suggestionsHtml.getNoResultHtml({html});
                                },
                                header({html, items}) {
                                    return suggestionsHtml.getHeaderHtml({html});
                                },
                                item({item, components, html}) {
                                    return suggestionsHtml.getItemHtml({item, components, html})
                                },
                                footer({html, items}) {
                                    return suggestionsHtml.getFooterHtml({html})
                                },
                            },
                        };
                    },
                });
            }
            */

            // Install a new plugin like "recent searches"
            // See: https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-plugin-recent-searches/createLocalStorageRecentSearchesPlugin/
            /*
            const recentSearchesPlugin = algoliaRecentSearches.createLocalStorageRecentSearchesPlugin({
                key: 'navbar',
                transformSource({source}) {
                    return {
                        ...source,
                        templates: {
                            ...source.templates,
                            header: () => 'Recent searches',
                            item: ({item, html}) => {
                                // console.log("Item:", item);
                                return html`<a class="aa-ItemLink" href="${algoliaConfig.resultPageUrl}?q=${encodeURIComponent(item.label)}">${item.label}</a>`;
                            }
                        }
                    }
                }
            });
            */

            // Replace existing plugins completely (e.g. to replace query suggestions)
            // return [recentSearchesPlugin];

            // or add to existing plugins (requires additional front end formatting via CSS etc.)
            // plugins.unshift(recentSearchesPlugin);

            return plugins;
        }
    );

    algolia.registerHook(
        "afterAutocompleteOptions",
        (options) => {
            console.log("In hook method to modify Autocomplete options");

            // Modify autocomplete options
            // options.openOnFocus = true;

            return options;
        }
    );

    //////////////////////////////////
    //     INSTANTSEARCH HOOKS      //
    //////////////////////////////////

    /**
     * InstantSearch hook methods
     * IS.js v4 documentation: https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/
     **/

    algolia.registerHook(
        "beforeInstantsearchInit",
        function (instantsearchOptions) {
            console.log("In method to modify InstantSearch options");

            // Modify instant search options
            // console.log("InstantSearch options:", instantsearchOptions);

            return instantsearchOptions;
        }
    );

    algolia.registerHook(
        "beforeWidgetInitialization",
        function (allWidgetConfiguration, algoliaBundle) {
            console.log("In hook method to modify InstantSearch widgets");

            // Here you can modify the instant search widgets configuration before InstantSearch is initialized

            // For instance uncomment the following to see how you can easily modify the standard price slider
            // const rangeSlider = allWidgetConfiguration.rangeSlider[0];
            // rangeSlider.panelOptions.templates.header = `<div class="name price-slider-label">Price [This is a custom header]</div>`;
            // rangeSlider.panelOptions.templates.footer = "[This is a custom footer]";

            // The algoliaBundle has been discontinued in the core extension and its use in frontend hooks is accordingly deprecated
            // If the bundle is still needed, a lightweight version can be accessed in 3.15.0
            // console.log("Algolia bundle:", algoliaBundle);

            return allWidgetConfiguration;
        }
    );

    algolia.registerHook(
        "beforeInstantsearchStart",
        function (search) {
            console.log(
                "In hook method to modify the InstantSearch instance before search has started"
            );

            // Modify instant search instance before search started
            // For instance you can add a secondary set of hits to your InstantSearch UI
            // search.addWidgets([
            //     instantsearch.widgets.hits({
            //         container: '#custom-second-hits', // This element must be present in the DOM - can be added via wrapper.phtml
            //     })
            // ]);

            return search;
        }
    );

    algolia.registerHook(
        "afterInstantsearchStart",
        function (search) {
            console.log(
                "In hook method to modify the InstantSearch instance after search has started"
            );

            // Modify instant search instance after search started

            return search;
        }
    );
});
