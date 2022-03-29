import styled from 'styled-components'
import { ShoppingCartOutline } from '@styled-icons/evaicons-outline/ShoppingCartOutline'

export const Header = styled.header({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 50px',
  padding: '20px',
  borderBottom: '2px solid gray',
  backgroundColor: '#0433ff'
})

export const Title = styled.h1({
  margin: 0,
  color: '#f5f5f5',
  fontFamily: 'Poppins',
  backgroundColor: '#0433ff',
  textDecoration: 'none',

  link: {
    textDecoration: 'none'
  }
})

export const Search = styled.input({
  borderRadius: '8px',
  border: '1px solid gray',

  '::placeholder': {
    color: 'darkblue',
    padding: '10px'
  }
})

export const Carrinho = styled(ShoppingCartOutline)`
  color: white;
`

export const Subtitle = styled.h4({
  fontFamily: 'sans-serif',
  color: '#f5f5f5',
  backgroundColor: '#0433ff'
})
