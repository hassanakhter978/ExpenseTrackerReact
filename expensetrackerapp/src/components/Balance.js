import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(trasnaction =>
    trasnaction.amount)
  console.log('amount ' + amounts)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log('Total is ' + total)
  return (
    <div>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
    </div>
  )
}
