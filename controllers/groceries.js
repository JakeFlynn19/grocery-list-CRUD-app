const Grocery = require('../models/grocery');

module.exports = {
  index,
  show,
  new: newGrocery,
  create,
  getCategory,
  delete: deleteGrocery,
  edit,
  update,
};

function index(req, res) {
    Grocery.find({}, function(err, groceries) {
      res.render('groceries/index', { groceries });
    });
};

function newGrocery(req, res) {
    res.render('groceries/new');
};

function deleteGrocery(req, res) {
  Grocery.findByIdAndDelete({_id:req.params.id}).exec(function(err, grocery) {
  });  res.redirect('/groceries');
}


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

function edit(req, res) {
  Grocery.findById(req.params.id, function(err, grocery) {
    res.render('groceries/edit', {grocery});
  });
}
  

function update(req, res) {
  req.body.done = false;
  Grocery.findByIdAndUpdate(req.params.id, req.body, function(err, grocery) {
    res.redirect('/groceries');
  })
}


function getCategory(req, res) {
  console.log(req.params.category)
  Grocery.find({ category: req.params.category }, function(err, groceriesByCat) {
    res.render('groceries/category', { groceriesByCat, category: req.params.category })
  })
}