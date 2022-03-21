import * as S from './Product.style'

const Product = ({ name, description, image, price }) => {
  return (
    <S.Product>
      <p>{name}</p>
      <p>{description}</p>
      <img src={image} alt="imagem do produto" width="200px" height="200px" />
      <p>{price}</p>
    </S.Product>
  )
}

export default Product
