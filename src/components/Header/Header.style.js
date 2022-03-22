import styled from 'styled-components'

export const Header = styled.header({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  padding: '20px',
  borderBottom: '2px solid gray'
})

export const Title = styled.h1({
  margin: 0,
  color: 'darkblue',
  fontFamily: 'Poppins'
})

export const Search = styled.input({
  borderRadius: '8px',
  border: '1px solid gray',

  '::placeholder': {
    color: 'darkblue',
    padding: '10px'
  }
})

export const Subtitle = styled.h4({
  fontFamily: 'sans-serif',
  color: 'gray'
})
