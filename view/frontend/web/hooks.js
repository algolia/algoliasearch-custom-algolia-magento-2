/**
 * Documentation: https://www.algolia.com/doc/integration/magento-2/customize/custom-front-end-events/
 **/

/**
 * Autocomplete hook method
 * autocomplete.js documentation: https://github.com/algolia/autocomplete.js
 *
 * NOTE: This module is for demonstration purposes only and is intended to show how front end event hooks might be used.
 * Be mindful that introducing things like new sources and plugins can affect the layout of your final render.
 * Utilize DOM or CSS to control the final presentation as needed.
 **/

// NOTE: The algoliaRecentSearches dependency is optional and is only supplied for demonstration of inclusion of the recent searches plugin
define(['jquery', 'algoliaAnalytics', 'algoliaBundle', 'suggestionsHtml', 'algoliaRecentSearches', 'algoliaCommon'], function (
    $,
    algoliaAnalyticsWrapper,
    algoliaBundle,
    suggestionsHtml,
    algoliaRecentSearches
) {

    algolia.registerHook(
        "afterAutocompleteSources", //after
        function (sources, searchClient) {
            console.log("In hook method to modify autocomplete data sources");

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

    algolia.registerHook('afterAutocompletePlugins', (plugins, searchClient) => {
        // Modify an existing plugin like Query Suggestions (use Algolia instead of Magento)
        // See https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/
        /*
        const pluginIndex = plugins.findIndex(plugin => plugin.name === 'aa.querySuggestionsPlugin');
        if (pluginIndex > -1) {
            // Replace the entire plugin
            plugins[pluginIndex] = algoliaBundle.createQuerySuggestionsPlugin.createQuerySuggestionsPlugin({
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
    });

    algolia.registerHook("afterAutocompleteOptions", function (options) {
        console.log("In hook method to modify autocomplete options");

        // Modify autocomplete options
        // options.openOnFocus = true;

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
