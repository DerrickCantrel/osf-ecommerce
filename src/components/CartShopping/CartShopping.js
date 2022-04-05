//import * as S from './CartShopping.style.js'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'
//import ListProducts from '../ListProducts/ListProducts'
import CartItem from '../CartItem/CartItem'

const CartShopping = () => {
  const { cart, emptyCart } = useContext(AuthContext)
  console.log(cart)
  console.log(cart.length)

  return (
    <>
      <h1>Sacola de Compras</h1>
      {cart.length === 0 ? (
        <h3>Carrinho Vazio</h3>
      ) : (
        <>
          <CartItem />
          <button onClick={() => emptyCart()}>Esvaziar Carrinho</button>
        </>
      )}
    </>
  )
}

export default CartShopping

//<ListProducts products={cart} />
