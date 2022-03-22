import * as S from './Header.style.js'

const Header = ({ setBusca }) => {
  return (
    <S.Header>
      <S.Title>Soul Extreme</S.Title>
      <S.Search placeholder="Busca" onChange={e => setBusca(e.target.value)} />
      <S.Subtitle>A sua loja de artigos esportivos</S.Subtitle>
    </S.Header>
  )
}

export default Header
