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
  textDecorationLine: 'none'
})

export const Search = styled.input`
  width: 50%;
  border-radius: 8px;
  border: 1px solid gray;
  box-shadow: 0px 0px 2px red;
  padding-left: 20px;
  font-size: 16px;
  margin-right: 5px;
  margin-top: 5px;
  transition: width 0.4s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
    width: 90%;
  }

  ::placeholder {
    color: darkblue;
    font-size: 16px;
  }
`

export const Carrinho = styled(ShoppingCartOutline)`
  color: white;

  &:hover {
    color: darkblue;
    transition: 0.5s;
  }
`

export const Subtitle = styled.h4({
  fontFamily: 'sans-serif',
  color: '#f5f5f5',
  backgroundColor: '#0433ff'
})
