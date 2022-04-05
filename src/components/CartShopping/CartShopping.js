//import * as S from './CartShopping.style.js'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'
import ListProducts from '../ListProducts/ListProducts'

const CartShopping = () => {
  const { cart, emptyCart } = useContext(AuthContext)
  console.log(cart)
  console.log(cart.length)

  return (
    <>
      <h1>Sacola de Compras</h1>
      {cart.length === 0 ? (
        <h3>Sem produtos no Carrinho</h3>
      ) : (
        <>
          <ListProducts products={cart} />
          <button onClick={() => emptyCart()}>Esvaziar Carrinho</button>
        </>
      )}
    </>
  )
}

export default CartShopping
