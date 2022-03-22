import styled from 'styled-components'

export const ListProducts = styled.ul({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  maxWidth: '1000px',
  //margin: topo, left, bottom, right
  margin: '10px 0px 0px 10px',
  gap: '10px',
  style: 'none',

  li: {
    listStyle: 'none',
    border: '1px solid darkblue'
  }
})
