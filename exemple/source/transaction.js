/**
 * The Transaction object is similar to the Cart object, but represents a completed order. The Transaction object contains analogous sub-objects to the Cart object as well as additional sub-objects specific to completed orders.
 *
 * @scope confirmation
 * @path digitalData.transaction
 *
 * @param {String}     transactionID   A unique identifier for a particular transaction, usually an existing order identifier
 * @param {Object}     total           Details of the final price the purchaser has to pay
 * @param {Object[]}   item            List of items in the order
 *
 * @jsFiddle http://jsfiddle.net/phms/9HAGd/embedded/js/
 */
digitalData.transaction = {
	transactionID: "",
	total: {},
	item: []
};

/**
 * This object provides details of the final price the purchaser has to pay.
 *
 * @path digitalData.transaction.total
 * @scope confirmation
 *
 * @param {Number}   basePrice         Should be the price of the items before applicable discounts, shipping charges, and tax
 * @param {String}   voucherCode
 * @param {Number}   voucherDiscount
 * @param {String}   currency          Currency code using ISO 4217 (http://en.wikipedia.org/wiki/ISO_4217)
 * @param {Number}   taxRate
 * @param {Number}   shipping
 * @param {String}   shippingMethod
 * @param {Number}   priceWithTax
 * @param {Number}   transactionTotal  Should be the total price inclusive of all discounts, charges, and tax
 */
transaction.total = {
	basePrice: 0.0,
	voucherCode: "",
	voucherDiscount: 0.0,
	currency: "",
	taxRate: 0.0,
	shipping: 0.0,
	shippingMethod: "",
	priceWithTax: 0.0,
	transactionTotal: 0.0
};


/**
 * Esta chave é identica a *digitalData.cart[n].item*. Para mais detalhes consulte a página [digitalData.cart](cart.js.html#cart-item)
 *
 * @path digitalData.transaction.item[n]
 * @scope confirmation
 */
transaction.item = [{}];