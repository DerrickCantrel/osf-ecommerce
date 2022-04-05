import * as P from './Product.style'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'

function Product({ id, name, description, image, price }) {
  const { addProduct } = useContext(AuthContext)

  return (
    <P.Product>
      <P.Title>{name}</P.Title>
      <P.Description>{description}</P.Description>
      <P.Image src={image} alt="imagem do produto" width={200} height={200} />
      <P.Preco>{price}</P.Preco>

      <P.ButtonHover
        type="button"
        onClick={() =>
          addProduct({
            id: id,
            name: name,
            description: description,
            price: price,
            image: image
          })
        }
      >
        Comprar
      </P.ButtonHover>
    </P.Product>
  )
}

export default Product
