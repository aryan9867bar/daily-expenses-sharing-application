const Expense = require('../models/Expense');
const User = require('../models/User');

exports.createExpense = async (data) => {
  const { amount, description, splitMethod, participants } = data;
  
  if (splitMethod === 'percentage') {
    const totalPercentage = participants.reduce((sum, p) => sum + p.percentage, 0);
    if (totalPercentage !== 100) {
      throw new Error('Percentages do not add up to 100');
    }
  }
  
  const expense = new Expense(data);
  await expense.save();
  return expense;
};

exports.generateBalanceSheet = async () => {
    const expenses = await Expense.find().populate('participants.user');
    const balanceSheet = {};
  
    expenses.forEach(expense => {
      expense.participants.forEach(participant => {
        if (participant.user && participant.user.email) {
          const { user, amount } = participant;
          if (!balanceSheet[user.email]) {
            balanceSheet[user.email] = { name: user.name, total: 0 };
          }
          balanceSheet[user.email].total += amount;
        }
      });
    });
  
    return balanceSheet;
  };
