/**
 * Documentation: https://community.algolia.com/magento/doc/m2/frontend-events/
 **/

/**
 * Autocomplete hook method
 * autocomplete.js documentation: https://github.com/algolia/autocomplete.js
 **/

function algoliaHookBeforeAutocompleteStart(sources, options, algoliaClient) {
	console.log('In hook method to modify autocomplete instance');
	
	// Modify default sources and options
	
	return [sources, options];
}

/**
 * InstantSearch hook methods
 * IS.js documentation: https://community.algolia.com/instantsearch.js/v2/getting-started.html
 **/

function algoliaHookBeforeInstantsearchInit(instantsearchOptions) {
	console.log('In method to modify instantsearch options');
	
	// Modify instant search options
	
	return instantsearchOptions;
}

function algoliaHookBeforeWidgetInitialization(allWidgetConfiguration) {
	console.log('In hook method to modify instant search widgets');
	
	// Modify instant search widgets
	
	return allWidgetConfiguration;
}

function algoliaHookBeforeInstantsearchStart(search) {
	console.log('In hook method to modify instant search instance before search started');
	
	// Modify instant search instance before search started
	
	return search;
}

function algoliaHookAfterInstantsearchStart(search) {
	console.log('In hook method to modify instant search instance after search started');
	
	// Modify instant search instance after search started
	
	return search;
}
