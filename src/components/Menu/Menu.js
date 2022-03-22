//import './Menu.css'
import * as S from './Menu.style.js'

const Menu = () => {
  return (
    //eslint-disable-next-line no-empty-pattern
    <>
      <S.Nav>
        <S.Ul>
          <S.Li>Categorias</S.Li>
          <S.Li>Acessórios</S.Li>
          <S.Li>Segurança</S.Li>
          <S.Li>Ferramentas</S.Li>
          <S.Li>Roupas</S.Li>
        </S.Ul>
      </S.Nav>
    </>
  )
}

export default Menu
