import styled from 'styled-components'

export const Tittle1 = styled.h1`
  margin: 10px;
  display: inline-block;
  font-family: Poppins;
  font-weight: 700;
  font-style: italic;
`

export const Area = styled.div`
  width: 70%;
  display: inline-block;
  float: left;
  border: 1px solid blue;
`

export const SubArea = styled.div`
  width: 28%;
  display: inline-block;
  float: right;
  border: 1px solid blue;
`

export const Tittle2 = styled.h2`
  margin: 10px;
  font-family: Poppins;
`

export const Tittle3 = styled.h3`
  margin: 10px;
`
export const Tittle4 = styled.h4`
  margin: 10px;
  font-family: Poppins;
`

export const Resume = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: darkblue;
  font-family: Poppins;
  color: white;
  width: 100%;

  h3 {
    display: inline-block;
  }
`

export const Button = styled.button`
  background-color: darkblue;
  margin-left: 20px;
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
export const Button2 = styled.button`
  background-color: orange;
  margin-left: 20px;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  float: left;
  margin-right: 10px;
  font-family: Bebas neue;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`
