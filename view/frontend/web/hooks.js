/**
 * Documentation: https://community.algolia.com/magento/doc/m2/frontend-events/
 **/

/**
 * Autocomplete hook method
 * autocomplete.js documentation: https://github.com/algolia/autocomplete.js
 **/

algolia.registerHook('beforeAutocompleteSources', function(sources, algoliaClient) {
	console.log('In hook method to modify autocomplete data sources');
	
	// Modify autocomplete data sources
	
	return sources;
});

algolia.registerHook('beforeAutocompleteOptions', function(options) {
	console.log('In hook method to modify autocomplete options');
	
	// Modify autocomplete options
	
	return options;
});

/**
 * InstantSearch hook methods
 * IS.js documentation: https://community.algolia.com/instantsearch.js/v2/getting-started.html
 **/

algolia.registerHook('beforeInstantsearchInit', function(instantsearchOptions) {
	console.log('In method to modify instantsearch options');
	
	// Modify instant search options
	
	return instantsearchOptions;
});

algolia.registerHook('beforeWidgetInitialization', function(allWidgetConfiguration) {
	console.log('In hook method to modify instant search widgets');
	
	// Modify instant search widgets
	
	return allWidgetConfiguration;
});

algolia.registerHook('beforeInstantsearchStart', function(search) {
	console.log('In hook method to modify instant search instance before search started');
	
	// Modify instant search instance before search started
	
	return search;
});

algolia.registerHook('afterInstantsearchStart', function(search) {
	console.log('In hook method to modify instant search instance after search started');
	
	// Modify instant search instance after search started
	
	return search;
});
