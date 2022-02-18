const express = require('express');

const router = express.Router();

const Product = require('../models/Product');

// Index: GET all of the products
router.get('/', async (req, res, next) => {
	try {
		// Get all of the products from the database
		const products = await Product.find({}).populate('owner');
		// Send them back to the client as JSON
		res.json(products);
	} catch (err) {
		next(err);
	}
});

// Show: GET one product
router.get('/:id', async (req, res, next) => {
	try {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

//Create: POST a new product
router.post('/', async (req, res, next) => {
	try {
		const newProduct = await Product.create(req.body);
		res.status(201).json(newProduct);
	} catch (error) {
		next(error);
	}
});

//Update: Edit a product
router.put('/:id', async (req, res, next) => {
	try {
		const productToUpdate = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json(productToUpdate);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const productToDelete = await Product.findByIdAndDelete(req.params.id);
		if (productToDelete) {
			res.json(productToDelete);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
