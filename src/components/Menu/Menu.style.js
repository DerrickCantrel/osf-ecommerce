import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex-grid;
  flex-direction: row;
  border: 1px solid gray;
  margin-top: 5px;
  margin-left: 5px;
  padding: 5px;
  width: 150px;
  height: 455px;
  background-color: white;
`
export const Li = styled.nav`
  color: red;
`

export const A = styled.nav`
  color: darkblue;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: darkblue;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
    transition: width 0.4s;
  }
`

export const Ul = styled.nav`
  font-family: Poppins;
  font-weight: 400;
  margin-left: 10px;
`
