export const selectPlnRate = state => state.currency.plnRate

export const selectTransactions = state => Object.values(state.transactions)

export const selectBiggestTransaction = state => {
  const arrOfAmounts = Object.values(state.transactions).map(transaction => {
    return transaction.amount
  })
  const biggestTransaction = Object.values(state.transactions).find(
    transaction => {
      return transaction.amount >= Math.max(...arrOfAmounts.map(Number))
    },
  )
  return biggestTransaction
}
