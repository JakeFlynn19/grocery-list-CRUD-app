const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1234@cluster0.1gq2e.mongodb.net/grocery-list?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });