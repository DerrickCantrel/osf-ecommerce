//import * as S from './CartShopping.style.js'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'
import { Link } from 'react-router-dom'
//import ListProducts from '../ListProducts/ListProducts'
import CartItem from '../CartItem/CartItem'
import * as C from './CartShopping.style'

const CartShopping = () => {
  const { cart, clearCart, handleSumPrice } = useContext(AuthContext)
  console.log(cart)
  console.log(cart.length)

  return (
    <>
      <C.Area>
        <C.Tittle1>CARRINHO</C.Tittle1>
        {cart.length === 0 ? (
          <>
            <C.Tittle2>Seu Carrinho está Vazio</C.Tittle2>
            <Link to="/">
              <C.Button2>Escolher Produtos</C.Button2>
            </Link>
          </>
        ) : (
          <>
            <CartItem />
            <C.Button onClick={() => clearCart()}>Esvaziar Carrinho</C.Button>
          </>
        )}
      </C.Area>
      <C.SubArea>
        <C.Tittle1>RESUMO</C.Tittle1>
        <C.Tittle4>SubTotal</C.Tittle4>
        <C.Resume>
          <C.Tittle3>TOTAL</C.Tittle3>
          {handleSumPrice === 0 ? (
            <C.Tittle3>A CALCULAR</C.Tittle3>
          ) : (
            <C.Tittle3>R$ {handleSumPrice.toFixed(2)}</C.Tittle3>
          )}
        </C.Resume>
      </C.SubArea>
    </>
  )
}

export default CartShopping

//<ListProducts products={cart} />
