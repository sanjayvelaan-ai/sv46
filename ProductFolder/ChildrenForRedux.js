import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CforRedux = () => {
  const products = [
    {id: 1, name: "HP", price: 45000},
    {id: 2, name: "DELL", price: 56000},
    {id: 3, name: "ACER", price: 38000}
  ]
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
console.log(count)
  return (
    <>
      <h1>CHILDREN FOR REDUX</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <button onClick={() => dispatch({type: "Increment", products: item})}>INCREMENT</button>
        </div>
      ))}
      {Array.isArray(count) && count.map(i => (
        <div key={i.id}>
          <h1>{i.name}</h1>
          <p>Price: ₹{i.price}</p>
        </div>
      ))}
    </>
  )
}

export default CforRedux;