//import './Menu.css'
import * as S from './Menu.style.js'

const Menu = ({ setBusca }) => {
  return (
    <>
      <S.Nav>
        <S.Ul>
          <S.Li>
            <a href="#todasCategorias" onClick={e => setBusca('')}>
              Todas categorias
            </a>
          </S.Li>
          <S.Li>
            <a href="#acessorios" onClick={e => setBusca('acessorios')}>
              Acessórios
            </a>
          </S.Li>
          <S.Li>
            <a href="#seguranca" onClick={e => setBusca('seguranca')}>
              Segurança
            </a>
          </S.Li>
          <S.Li>
            <a href="#ferramentas" onClick={e => setBusca('ferramentas')}>
              Ferramentas
            </a>
          </S.Li>
          <S.Li>
            <a href="#roupas" onClick={e => setBusca('roupas')}>
              Roupas
            </a>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </>
  )
}

export default Menu
