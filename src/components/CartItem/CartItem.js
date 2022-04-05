import * as S from './CartItem.style'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'

const CartItem = () => {
  const { cart, setQtdCart, handleAddItemToCart, handleRemoveItemFromCart } =
    useContext(AuthContext)

  return cart.map(cartItem => (
    <>
      <S.Li>
        <S.H2>{cartItem.name}</S.H2>
        <S.H3>{cartItem.price}</S.H3>
        <S.Botao onClick={() => handleAddItemToCart(cartItem)}>+</S.Botao>
        {setQtdCart}
        <S.Botao onClick={() => handleRemoveItemFromCart(cartItem.id)}>
          -
        </S.Botao>
      </S.Li>
    </>
  ))
}

export default CartItem
