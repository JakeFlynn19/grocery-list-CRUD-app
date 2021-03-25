const express = require('express');
const router = express.Router();
const groceriesCtrl = require('../controllers/groceries');

router.get('/groceries', groceriesCtrl.index);
router.get('/groceries/new', groceriesCtrl.new);
router.post('/groceries', groceriesCtrl.create);
router.delete('/groceries/:id', groceriesCtrl.delete);
router.get('/categories/:category', groceriesCtrl.getCategory)
router.put('/groceries/:id', groceriesCtrl.update);
router.get('/groceries/:id/edit', groceriesCtrl.edit);

module.exports = router;