Customer Experience Digital Data Acquisition
============================================

The specification relies on a JavaScript Object (JSO) to collect customer experience data. User interaction with a brand's digital property occurs in a wide variety of areas: customer service, e- commerce transactions, information portals, B2B partner interaction, and more, and the JSO is designed to accommodate these (as well as being extensible). Further sections of this document will delve into detailed specifications for the JSO, but following are simple examples of an instance of the JSO to illustrate its usage.

The JSO is designed to be contained within a root object called ``digitalData`` — this is a matter of convenience and gives a common starting point. All other objects are sub-object from this root object. There is a ``pageInstanceID`` that is used to identify the page being measured within a unique environment — development, staging, or production, for example. Beyond that, the specification includes sub-objects such as ``page``, ``product``, ``cart``, ``transaction``, ``event``, ``component``, ``user``, ``privacyAccessCategories`` and ``version`` for collecting different types of data in the JSO. (Additional objects can be added to ``digitalData`` as part of the extension mechanism.) Within the sub-objects, the specification defines a number of standard names for properties, while custom properties can also be added through an ``attributes`` object.

*****

As an illustrative example, the digitalData object with the page object could be populated as below

	var digitalData = {
	    page: {
	        pageInfo: {
	            pageName: document.title,
	            destinationURL: document.location,
	            referringURL: document.referrer,
	            sysEnv: "mobile",
	            breadCrumbs: ["home", "Products", "Haircare"],
	            language: "en-US",
	            geoRegion: "US"
	        },
	        category: {
	            primaryCategory: "product"
	        }
	    },

	    version: "1.0"
	};

The specification allows the use of sub-objects and their properties as needed in any particular implementation. While the presence of the sub-objects is optional, sub-objects that are populated must adhere to the syntax and semantics defined in this document to be conformant with the specification.

*****

Another instance of populating `digitalData` with both `page` and `product` objects is shown below:

	var digitalData = {
		
		pageInstanceID: "ProductDetailPageNikonCamera-Staging",

		page: {
			pageInfo: {
				pageName: document.title,
				destinationURL: document.location,
				referringURL: document.referrer,
				sysEnv: "mobile",
				breadCrumbs: ["home", "Products", "Cameras"],
				language: "en-US",
				geoRegion: "US"
			},
			category: {
				pageType: "product"
			},
			attributes: {
				seasonal: "christmas"
			}
		},

		product: [{
			productInfo: {
				productName: "Nikon SLR Camera",
				sku: "sku12345",
				manufacturer: "Nikon"
			},
			category: {
				primaryCategory: "product",
				subCategory: "Cameras"
			},
			attributes: {
				productType: "Special Offer"
			}
		}],

	    version: "1.0"

	};

The `product` sub-object is an array with additional details to identify the product further.

As is evident from these examples, different pages that incorporate different types of data may populate different parts of the JSO to pass those data back to the server(s) for further analysis.

*****

Extending the Specification
----------------------------

Extending this specification is straightforward: implementers can add appropriate sub-objects or properties as needed.

**Adding a new object**. A new object can be added to the digitalData object to represent a completely new type of data. This could be added as a first-level object, such as the following:

	digitalData.newObject = {};

It could also take the form of adding a new sub-object to an existing object:

	digitalData.transaction.newObject = {};

**Adding a new properties**. An existing object can be extended by adding additional name-value pairs:

	digitalData.user[n].profile[n] = { newValue: "value" };

If reserved names are employed, they MUST use the types specified. If other names are employed, the values may take on any type. All of the first-level objects and some of their children contain an `attributes` object for extensibility, which does not reserve any names.

When extending the data layer, names SHOULD NOT use JavaScript reserved words, predefined names, or event handlers for the names of objects or properties. 

*****

Source
------

- **Customer Experience Digital Data Layer 1.0**
- [Customer Experience Digital Data Community Group](http://www.w3.org/community/custexpdata/)
- Revision Date: [December 10, 2013](http://www.w3.org/2013/12/ceddl-201312)