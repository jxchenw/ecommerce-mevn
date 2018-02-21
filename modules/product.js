const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
	name: {
		type: String
	}
});

const CategorySchema = new Schema({
	name: {
		type: String
	},
	parent: {
		type: Number,
		default: 0
	}
});

const ProductSchema = new Schema({
	name: {
		type: String
	},
	category: CategorySchema,
	brand: BrandSchema,
	price: {
		type: Number,
		default: 0
	},
	image: {
		type: String
	}
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;