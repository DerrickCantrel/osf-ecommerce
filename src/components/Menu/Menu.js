import * as S from './Menu.style.js'

const Menu = ({ setBusca }) => {
  return (
    <>
      <S.Nav>
        <S.Ul>
          <S.Li>
            <S.A href="#todasCategorias" onClick={e => setBusca('')}>
              Todas categorias
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="#acessorios" onClick={e => setBusca('acessorios')}>
              Acessórios
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="#seguranca" onClick={e => setBusca('seguranca')}>
              Segurança
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="#ferramentas" onClick={e => setBusca('ferramentas')}>
              Ferramentas
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="#roupas" onClick={e => setBusca('roupas')}>
              Roupas
            </S.A>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </>
  )
}

export default Menu
