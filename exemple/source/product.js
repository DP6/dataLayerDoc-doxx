/**
 * The Product object carries details about a particular product with frequently used properties listed below.
 * This is intended for data about products displayed on pages or other content. For products added to a shopping cart or ordered in a transaction, see the Cart and Transaction objects.
 *
 * @path digitalData.product[n]
 * @scope product and catalog
 *
 * @param {Object}	 productInfo	 Details about the product
 * @param {Object}	 category 		 Product categories
 * @param {Object}	 price 			 Product price
 *
 * @jsFiddle http://jsfiddle.net/phms/Qjy3L/embedded/js/
 */
digitalData.product = [{
	productInfo: {},
	category: {},
	price: {}
}];


/**
 * Describes the details of each products.
 *
 * @path digitalData.product[n].productInfo
 * @scope product and catalog
 *
 * @param {String}   productID          SKU code
 * @param {String}   productName        Product name
 * @param {String}   description        Full product name
 * @param {String}   productURL         Base URL
 * @param {String}   manufacturer     	Manufacturer code/ID
 */
product.productInfo = {
	productID: "",
	productName: "",
	description: "",
	productURL: "",
	manufacturer: ""
};


/**
 * Because of the wide range of methods for categorization, an object literal is provided for product categories.
 *
 * @path digitalData.product[n].category
 * @scope product and catalog
 *
 * @param {String}   primaryCategory   Primary set of product category
 */
product.category = {
	primaryCategory: ""
};


/**
 * This object provides details of the product price. Specification source http://goo.gl/GRcakH.
 *
 * @path digitalData.product[n].price
 * @scope product and catalog
 *
 * @param {Number}    basePrice     Should be the price of the product before applicable discounts, shipping charges, and tax
 * @param {Number}    regularPrice  Should be the total price inclusive of all discounts and charges
 * @param {String}    currency      Currency code using ISO 4217 (http://en.wikipedia.org/wiki/ISO_4217)
 * @param {Number}    shipping      Shipping value, mainly for products with zero shipping
 */
product.price = {
	basePrice: 0.0,
	salePrice: 0.0,
	regularPrice: 0.0,
	currency: "",
	shipping: 0.0
};