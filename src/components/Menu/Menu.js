//import './Menu.css'
import * as S from './Menu.style.js'

const Menu = ({}) => {
  return (
    <S.Nav>
      <S.Strong>Categorias</S.Strong>
      <S.Ul>
        <S.Li>Acessórios</S.Li>
        <S.Li>Segurança</S.Li>
        <S.Li>Ferramentas</S.Li>
        <S.Li>Roupas</S.Li>
      </S.Ul>
    </S.Nav>
  )
}

export default Menu
