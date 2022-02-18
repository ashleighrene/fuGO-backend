const mongoose = require('../db/connection');

// make a new schema with all properties, and assign it to a variable
const UserSchema = new mongoose.Schema({
	name: String,
	email: { type: String, unique: true },
	address: String,
	total: Number,
	status: String,
	paymentMethod: String,
});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const User = mongoose.model('User', UserSchema);

// export the newly created model
module.exports = User;
