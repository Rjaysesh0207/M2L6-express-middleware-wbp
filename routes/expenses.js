const express = require('express');
const router = express.Router();

const expensesCtrl = require('../controllers/expenses');

router.get('/', expensesCtrl.index);

router.get('/:id', expensesCtrl.show);

router.get('/new', expensesCtrl.new);

router.post('/', expensesCtrl.create);

module.exports = router;