import * as P from './Product.style'

const Product = ({ name, description, image, price }) => {
  return (
    <P.Product>
      <P.Title>{name}</P.Title>
      <P.Description>{description}</P.Description>
      <img src={image} alt="imagem do produto" width="200px" height="200px" />
      <p>{price}</p>
    </P.Product>
  )
}

export default Product
