// programmatically populate our database with seed data
const { getMaxListeners } = require('../models/Product');
const Product = require('../models/Product');
const User = require('../models/User');

const productSeeds = require('./seeds.json');

Product.deleteMany({})
	.then(() => {
		console.log('Deleted all the products');
		User.deleteMany({});
	})
	.then(() => {
		console.log('Deleted all the users');
		return User.create({ email: 'arwaller7@gmail.com', name: 'Admin' });
	})
	.then((user) => {
		console.log('User created!', user);
		return productSeeds.map((product) => {
			return { ...product, owner: user._id };
		});
	})
	.then((products) => {
		return Product.insertMany(products);
	})
	.then((newProducts) => {
		console.log('Created new products!', newProducts);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
