const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../controllers/groceries');

router.get('/', groceriesCtrl.index);
router.get('/new', groceriesCtrl.new);
router.get('/:id', groceriesCtrl.show);
router.post('/', groceriesCtrl.create);

module.exports = router;