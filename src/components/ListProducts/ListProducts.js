import * as S from './ListProducts.style'

import Product from '../Product'

const ListProducts = ({ products }) => {
  return (
    <S.ListProducts>
      {products.map(product => (
        <li key={product.id}>
          <Product
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        </li>
      ))}
    </S.ListProducts>
  )
}
export default ListProducts
