//import * as S from './CartShopping.style.js'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'
//import ListProducts from '../ListProducts/ListProducts'
import CartItem from '../CartItem/CartItem'
import * as C from './CartShopping.style'

const CartShopping = () => {
  const { cart, clearCart, handleSumPrice } = useContext(AuthContext)
  console.log(cart)
  console.log(cart.length)

  return (
    <>
      <C.Tittle1>Sacola de Compras</C.Tittle1>
      {cart.length === 0 ? (
        <C.Tittle2>Carrinho Vazio</C.Tittle2>
      ) : (
        <>
          <CartItem />
          <C.Button onClick={() => clearCart()}>Esvaziar Carrinho</C.Button>
        </>
      )}
      <C.SubArea>
        <C.Tittle1>Resumo</C.Tittle1>
        <C.Tittle4>SubTotal</C.Tittle4>
        <C.Resume>
          <C.Tittle3>TOTAL</C.Tittle3>
          <C.Tittle3>R$ {handleSumPrice.toFixed(2)}</C.Tittle3>
        </C.Resume>
      </C.SubArea>
    </>
  )
}

export default CartShopping

//<ListProducts products={cart} />
