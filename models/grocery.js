const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const grocerySchema = new Schema({
	item: {
		type: String,
	},
	category: {
		type: String,
        enum: [ 'Beverages', 'Dairy', 'Meat', ' Produce', 'Snacks' ]
	},
});



module.exports = mongoose.model('Grocery', grocerySchema);