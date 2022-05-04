import * as S from './CartItem.style'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'

const CartItem = () => {
  const { cart, setQtdCart, handleAddItemToCart, handleRemoveItemFromCart } =
    useContext(AuthContext)

  return cart.map(cartItem => (
    <S.Ul>
      <S.Li>
        <S.H2>{cartItem.name}</S.H2>
        <S.Botao1 onClick={() => handleAddItemToCart(cartItem)}>+</S.Botao1>
        {setQtdCart}0
        <S.Botao2 onClick={() => handleRemoveItemFromCart(cartItem.id)}>
          -
        </S.Botao2>
        <S.H3>R$ {cartItem.price}</S.H3>
      </S.Li>
    </S.Ul>
  ))
}

export default CartItem
