import {selectBiggestTransaction} from '../selectors'

test('should return biggest transaction', () => {
  const transactions = {
    '44df1bd1-fcf0-48ce-a6d0-921c486f6ca3': {
      id: '44df1bd1-fcf0-48ce-a6d0-921c486f6ca3',
      transaction: 'transaction1',
      amount: '634',
    },
    'e168e8ea-ec74-426d-b0d2-be39fad7823e': {
      id: 'e168e8ea-ec74-426d-b0d2-be39fad7823e',
      transaction: 'transaction2',
      amount: '532',
    },
    '477d8f0f-5da3-4d1e-ae30-0b3bef17d600': {
      id: '477d8f0f-5da3-4d1e-ae30-0b3bef17d600',
      transaction: 'transaction3',
      amount: '57',
    },
  }
  const biggestTransaction = {
    id: '44df1bd1-fcf0-48ce-a6d0-921c486f6ca3',
    transaction: 'transaction1',
    amount: '634',
  }

  expect(selectBiggestTransaction({transactions})).toStrictEqual(
    biggestTransaction,
  )
})
