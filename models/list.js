const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const listSchema = new Schema({
	items: [{ type: Schema.Types.ObjectId, ref: 'Grocery '}],
    name: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('List', listSchema);