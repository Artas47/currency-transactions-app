export const removeTransaction = (transactions, id) => {
  return transactions.filter(transaction => {
    return transaction.id !== id;
  });
};
