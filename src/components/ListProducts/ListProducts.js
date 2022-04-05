import Product from '../Product'

const ListProducts = ({ products }) => {
  return products.map(product => (
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  ))
}
export default ListProducts
