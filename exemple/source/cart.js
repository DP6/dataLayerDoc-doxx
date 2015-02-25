/**
 * The Cart object carries details about a shopping cart or basket and the products that have been added to it. The Cart object is intended for a purchase that has not yet been completed. See the Transaction object below for completed orders.
 *
 * @scope shopping cart
 * @path digitalData.cart
 * 
 * @param {String}     cartID   An identifier for a particular shopping cart
 * @param {Object}     price    Details of the cart price
 * @param {Object[]}   item     List of items in the cart
 *
 * @jsFiddle http://jsfiddle.net/phms/rA62y/embedded/js/
 */
digitalData.cart = {
	cartID: "",
	price: {},
	item: []
};

/**
 * This object provides details of the cart total price.
 * 
 * @path digitalData.cart.price
 * @scope shopping cart
 *
 * @param {Number}   basePrice        Should be the price of the items before applicable discounts, shipping charges, and tax
 * @param {String}   voucherCode      Voucher name
 * @param {Number}   voucherDiscount  Example: for 5%, use 0.05
 * @param {String}   currency         Currency code using ISO 4217 (http://en.wikipedia.org/wiki/ISO_4217)
 * @param {Number}   taxRate          
 * @param {Number}   shipping         
 * @param {String}   shippingMethod   
 * @param {Number}   priceWithTax     
 * @param {Number}   cartTotal        Should be the total price inclusive of all discounts, charges, and tax
 */
cart.price = {
	basePrice: 0.0,
	voucherCode: "",
	voucherDiscount: 0.0,
	currency: "",
	taxRate: 0.0,
	shipping: 0.0,
	shippingMethod: "",
	priceWithTax: 0.0,
	cartTotal: 0.0
};

/**
 * This object is similar to the Product object, but represents the checkout itens. The cart.itens object contains analogous sub-objects to the Product object as well as additional sub-objects specific to shopping carts, as `quantity` and `digitalData.cart.item[n].price`.
 * 
 * @path digitalData.cart.item[n]
 * @scope shopping cart
 * 
 * @param {Number}   quantity     Describes details about the product
 * @param {Object}   productInfo  Details about the product
 * @param {Object}   category     Product categories
 * @param {Object}   price        Product price
 */
cart.item = [{
	quantity: 0,
	productInfo: {},
	category: {},
	price: {}
}];

/**
 * As for the main cart object `digitalData.cart.price`, where tracking on each individual item is desired.
 *
 * @path digitalData.cart.item[n].price
 * @scope shopping cart
 *
 * @param {Number}    basePrice        Should be the price of the product before applicable discounts, shipping charges, and tax
 * @param {Number}    salePrice        Should be the total price inclusive of all discounts and charges
 * @param {Number}    regularPrice     
 * @param {String}    voucherCode  
 * @param {Number}    voucherDiscount  
 * @param {String}    currency         Currency code using ISO 4217 (http://en.wikipedia.org/wiki/ISO_4217)
 * @param {Number}    taxRate          
 * @param {Number}    shipping         Shipping value, mainly for products with zero shipping
 * @param {String}    shippingMethod   
 * @param {Number}    priceWithTax     
 */
item.price = {
	basePrice: 0.0,
	salePrice: 0.0,
	regularPrice: 0.0,
	voucherCode: "",
	voucherDiscount: 0.0,
	currency: "",
	taxRate: 0.0,
	shipping: 0.0,
	shippingMethod: "",
	priceWithTax: 0.0,
};

/**
 * Esta chave é identica a *digitalData.product[n].productInfo*. Para mais detalhes consulte [digitalData.product](product.js.html#product-productInfo)
 *
 * @path digitalData.cart.item[n].productInfo
 * @scope shopping cart
 */
item.productInfo = {};


/**
 * Esta chave é identica a *digitalData.product[n].category*. Para mais detalhes consulte [digitalData.product](product.js.html#product-category)
 *
 * @path digitalData.cart.item[n].category
 * @scope shopping cart
 */
item.category = {};