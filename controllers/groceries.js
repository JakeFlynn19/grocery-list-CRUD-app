const Grocery = require('../models/grocery');

module.exports = {
  index,
  show,
  new: newGrocery,
  create,
};

function index(req, res) {
    Grocery.find({}, function(err, groceries) {
      res.render('groceries/index', { groceries });
    });
};

function newGrocery(req, res) {
    res.render('groceries/new');
};

function create(req, res) {
	Grocery.create(req.body, function(err, grocery) {
        console.log(req.body); 
        res.redirect('/groceries'); 
    })
}

function show(req, res) {
	Grocery.findById(req.params.id, function(err, grocery) {
        res.render('groceries/show');
    })
}
