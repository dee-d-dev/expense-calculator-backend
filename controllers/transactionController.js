const TransactionModel = require("../models/TransactionModel");

//get transaction
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionModel.find();     
  } catch (err) {}
};

//add transaction
exports.addTransactions = async (req, res) => {
  res.send("Add transacction");
};

//delete transaction
exports.deleteTransactions = async (req, res) => {
  res.send("Delete transacction");
};

//
exports.getTransactions = async (req, res) => {
  res.send("GET transacction");
};
