const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/expenses', expenseController.addExpense);
router.get('/expenses/user/:userId', expenseController.getUserExpenses);
router.get('/expenses/overall', expenseController.getOverallExpenses);
router.get('/expenses/balance-sheet', expenseController.downloadBalanceSheet);

module.exports = router;
