import * as P from './Product.style'

const Product = ({ name, description, image, price }) => {
  return (
    <P.Product>
      <P.Title>{name}</P.Title>
      <P.Description>{description}</P.Description>
      <P.Image src={image} alt="imagem do produto" />
      <P.Preco>{price}</P.Preco>
    </P.Product>
  )
}

export default Product
