const Expense = require('../models/Expense');
const expenseService = require('../services/expenseService');

exports.addExpense = async (req, res) => {
  try {
    const expense = await expenseService.createExpense(req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ 'participants.user': req.params.userId });
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.downloadBalanceSheet = async (req, res) => {
  try {
    const balanceSheet = await expenseService.generateBalanceSheet();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename=balanceSheet.json');
    res.send(JSON.stringify(balanceSheet, null, 2));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};