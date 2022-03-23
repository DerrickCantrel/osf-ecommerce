import styled from 'styled-components'

export const Product = styled.div({
  margin: '0px',
  //padding: topo, left, right, bottom
  padding: '10px',
  maxWidth: '200px',
  maxHeight: '400px',
  backgroundColor: 'white'
})

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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Archivo, sans-serif',
  fontSize: '18px',
  fontWeight: '700'
})
