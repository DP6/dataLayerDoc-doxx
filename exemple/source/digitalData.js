/**
 * The root JavaScript Object (JSO) MUST be `digitalData`, and all data properties within this specification MUST fall within the hierarchy of the digitalData object. And where objects are included they MUST conform to the **Key Names** and **Types** listed here.
 * 
 * @path var digitalData
 * @scope all
 * 
 * @param {Object} 		page 		Default object
 * @param {Object[]} 	product 	List of products
 * @param {Object} 		cart 		Shopping Cart object
 * @param {Object} 		transaction Purchase object
 * @param {Object[]} 	user 		Client object
 * @param {String} 		version 	The version of this specification used by the digitalData object.
 */
var digitalData = {
	page: {},
	product: [],
	cart: {},
	transaction: {},
	user: [],
	version: "1.0"
};