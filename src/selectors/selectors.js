export const selectPlnRate = () => {
  return state => state.currency.plnRate
}

export const selectTransactions = () => {
  return state => Object.values(state.transactions)
}

export const selectBiggestTransaction = () => {
  return state => {
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
}
