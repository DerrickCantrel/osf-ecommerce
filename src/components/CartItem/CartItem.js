import * as S from './CartItem.style'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'

const CartItem = () => {
  const { cart, handleAddItemToCart, handleRemoveItemFromCart } =
    useContext(AuthContext)

  return cart.map(cartItem => (
    <S.Ul>
      <S.Li>
        <S.H2>{cartItem.name}</S.H2>
        <S.Botao1 onClick={() => handleAddItemToCart(cartItem)}>+</S.Botao1>
        {cartItem.qtd}
        <S.Botao2 onClick={() => handleRemoveItemFromCart(cartItem)}>
          -
        </S.Botao2>
        <S.H3>R$ {cartItem.price.toFixed(2)}</S.H3>
      </S.Li>
    </S.Ul>
  ))
}

export default CartItem
