import Header from './components/Header'
import Menu from './components/Menu'
import ListProducts from './components/ListProducts/ListProducts'
import { useEffect, useState } from 'react'

import ProductData from './mocks/produtos.json'

function App() {
  const [products, setProducts] = useState(ProductData)
  const [busca, setBusca] = useState('')
  const [categorias] = useState('')

  useEffect(() => {
    setProducts(
      ProductData.filter(product => {
        console.log('to filtrando')
        return product.name.includes(busca) || product.categoria.includes(busca)
      })
    )
  }, [busca, categorias])

  return (
    <>
      <Header busca={busca} setBusca={setBusca} />
      <Menu />
      <ListProducts products={products} />
    </>
  )
}

export default App
