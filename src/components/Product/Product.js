import * as P from './Product.style'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/CartContextProvider'

function Product({ id, name, description, image, price, qtd }) {
  const { addProduct } = useContext(AuthContext)

  return (
    <P.Product>
      <P.Title>{name}</P.Title>
      <P.Description>{description}</P.Description>
      <P.Image src={image} alt="imagem do produto" width={200} height={200} />
      <P.Preco>R$ {price.toFixed(2)}</P.Preco>

      <P.ButtonHover
        type="button"
        onClick={() =>
          addProduct({
            id: id,
            name: name,
            description: description,
            price: price,
            image: image,
            qtd: qtd
          })
        }
      >
        Comprar
      </P.ButtonHover>
    </P.Product>
  )
}

export default Product
