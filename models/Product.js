const mongoose = require('../db/connection');

// make a new schema with 2 properties, and assign it to a variable
const ProductSchema = new mongoose.Schema({
	title: String,
	description: String,
	image: String,
	price: Number,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

const Product = mongoose.model('Product', ProductSchema);

// export the newly created model
module.exports = Product;
