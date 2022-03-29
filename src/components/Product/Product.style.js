import styled from 'styled-components'

export const Product = styled.div({
  margin: '0px',
  //padding: topo, left, right, bottom
  padding: '10px',
  maxWidth: '200px',
  minHeight: '450px'
})

export const ButtonHover = styled.button`
  border: none;
  background-color: blue;
  color: white;
  margin: auto;
  font-size: 16px;
  text-decoration: none;
  padding: 15px 32px;
  text-align: center;
  display: block;
  cursor: pointer;

  &:hover {
    border: 2px solid blue;
    background-color: white;
    color: blue;
  }
`

export const Title = styled.p({
  fontFamily: 'Archivo, sans-serif',
  fontSize: '20px',
  fontWeight: '700',
  paddingBottom: '5px',
  textAlign: 'center'
})

export const Description = styled.p({
  fontFamily: 'Archivo',
  fontSize: '15px',
  fontWeight: '400',
  paddingBottom: '5px',
  textAlign: 'justify'
})

export const Image = styled.img({
  width: '200px',
  height: '200px',
  marginBottom: '10px'
})

export const Preco = styled.p({
  fontFamily: 'Archivo, sans-serif',
  //top right bottom left
  margin: '10px 0px 10px 50px',
  fontSize: '22px',
  fontWeight: '700'
})
