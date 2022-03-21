import Header from './components/Header'
import Product from './components/Product'
import ListProducts from './components/ListProducts/ListProducts'
import BagImage from './assets/images/controle-ps5.jpg'
import { useState } from 'react'

import ProductData from './mocks/produtos.json'

function App() {
  const [products, setProducts] = useState(ProductData)
  return (
    <>
      <Header />
      <ListProducts products={products} />
    </>
  )
}

export default App
