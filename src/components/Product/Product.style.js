import styled from 'styled-components'

export const Product = styled.div`
  display: flex-grid;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin: 5px;
  padding: 10px;
  max-width: 200px;
  min-height: 450px;
  background-color: white;
  box-shadow: 0 0 10px grey;

  &:hover {
    transition: 0.5s;
  }
`

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
    background-color: darkblue;
    transition: 0.5s;
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
