const mongoose = require('mongoose');
const groceries = require('../controllers/groceries');
const Schema = mongoose.Schema;


const grocerySchema = new Schema({
	item: {
		type: String,
	},
	category: {
		type: String,
        enum: [ 'beverages', 'dairy', 'meat', 'produce', 'snacks', 'spirits', 'frozen', 'personal care', 'breakfast', 'miscellaneous' ]
	},

	quantity: {
		type: Number,
	}
});



module.exports = mongoose.model('Grocery', grocerySchema);