// language - http://timtrott.co.uk/culture-codes/

/**
 * The Page object carries significant details about the page, and the most commonly used data elements are captured by the specification below.
 *
 * @path digitalData.page
 * @scope all
 *
 * @param {Object}  pageInfo  Describes details about the pages
 * @param {Object}  category  Describes the page categories
 *
 * @jsFiddle http://jsfiddle.net/phms/2jrLb/embedded/js/
 */
digitalData.page = {
	pageInfo: {},
	category: {}
};


/**
 * Describes details about the page.
 *
 * @path digitalData.page.pageInfo
 * @scope all
 *
 * @param {String}		 pageName		 Title (document.title)
 * @param {String}		 destinationURL	 URL (document.location)
 * @param {String}		 referringURL	 URL of the page that linked to this page (document.referrer)
 * @param {String}		 sysEnv			 Page environment: 'test', 'desktop', 'mobile'
 * @param {String[]}	 breadCrumbs	 Navigation hierarchy
 * @param {String}		 language		 Region code (ISO 639 two-letter lowercase culture code associated with a language and an ISO 3166 two-letter uppercase subculture code associated with a country or region)
 * @param {String}		 geoRegion		 Language code using ISO 3166-2 (http://en.wikipedia.org/wiki/ISO_3166-2)
 */
page.pageInfo = {
	pageName: document.title,
	destinationURL: document.location,
	referringURL: document.referrer,
	sysEnv: "",
	breadCrumbs: [],
	language: "",
	geoRegion: ""
};


/**
 * Because of the wide range of methods for categorization, an object literal is provided for page categories.
 *
 * <table class="table table-bordered table-striped">
 * <tr> <th colspan="2">Allowed values ​​for 'pageType':</th> </tr>
 * <tr> <th>home</th> <td>Home Page</td> </tr>
 * <tr> <th>product</th> <td>Product details page</td> </tr>
 * <tr> <th>catalog</th> <td>Category / Product List page</td> </tr>
 * <tr> <th>search</th> <td>Search results</td> </tr>
 * <tr> <th>cart</th> <td>Cart / basket page</td> </tr>
 * <tr> <th>checkout</th> <td>Between the cart page and confirmation page</td> </tr>
 * <tr> <th>purchase</th> <td>Confirmation page</td> </tr>
 * <tr> <th>404</th> <td>Error page</td> </tr>
 * </table>
 *
 * @path digitalData.page.category
 * @scope all
 *
 * @param {String}   pageType   Page type/template: home, product, catalog, search, cart, checkout, purchase, 404 (source: http://goo.gl/GRcakH)
 */
page.category = {
	pageType: ""
};


/**
 * This measuring the query term and number of results returned for onsite search functions.
 *
 * @path digitalData.page.pageInfo.onsiteSearchTerm;  digitalData.page.pageInfo.onsiteSearchResults
 * @scope search result
 *
 * @param {String}		 onsiteSearchTerm		 Query term
 * @param {Number}		 onsiteSearchResults	 Number of results returned
 *
 * @jsFiddle http://jsfiddle.net/phms/dLqYr/embedded/js/
 */
pageInfo.onsiteSearchTerm = "";
pageInfo.onsiteSearchResults = 0;