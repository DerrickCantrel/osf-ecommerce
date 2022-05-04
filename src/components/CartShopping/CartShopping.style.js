import styled from 'styled-components'

export const Tittle1 = styled.h1`
  margin: 10px;
  display: inline-block;
`

export const SubArea = styled.div`
  margin: 10px;
  display: inline-block;
  float: right;
  border: 1px solid blue;
`

export const Tittle2 = styled.h2`
  margin: 10px;
`

export const Tittle3 = styled.h3`
  margin: 10px;
`
export const Tittle4 = styled.h4`
  margin: 10px;
`

export const Resume = styled.div`
  display: inline-block;
  background-color: red;

  h3 {
    display: inline-block;
  }
`

export const Button = styled.button`
  background-color: darkblue;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  float: left;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`
