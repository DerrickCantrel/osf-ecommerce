import * as S from './Header.style.js'
import { Link } from 'react-router-dom'
//import { useCart } from '../../hooks/useCart'

const Header = ({ setBusca }) => {
  //const { cart } = useCart()
  //const cartSize = cart.length

  return (
    <S.Header>
      <Link to="/">
        <S.Title>Soul Extreme</S.Title>
      </Link>
      <S.Search placeholder="Busca" onChange={e => setBusca(e.target.value)} />
      <Link to="CartShopping">
        <S.Carrinho />
      </Link>
      <S.Subtitle>A sua loja de artigos esportivos</S.Subtitle>
    </S.Header>
  )
}

export default Header

/*
  <Cart to="/cart">
        <S.Carrinho>
          <strong>Meu Carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </S.Carrinho>
      </Cart>
      <S.Subtitle>A sua loja de artigos esportivos</S.Subtitle>
    </S.Header>
*/
