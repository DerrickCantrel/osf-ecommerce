import Header from './components/Header'
import Menu from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListProducts from './components/ListProducts/ListProducts'
import { useEffect, useState } from 'react'

import ProductData from './mocks/produtos.json'
import CartShopping from './components/CartShopping'

function App() {
  const [products, setProducts] = useState(ProductData)
  const [busca, setBusca] = useState('')
  const [categorias] = useState(ProductData)

  useEffect(() => {
    setProducts(
      ProductData.filter(product => {
        console.log('to filtrando')
        return product.name.includes(busca) || product.categoria.includes(busca)
      })
    )
  }, [busca, categorias])

  return (
    <BrowserRouter>
      <Header busca={busca} setBusca={setBusca} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu setBusca={setBusca} />
              <ListProducts products={products} />
            </>
          }
        />
        <Route path="/CartShopping" element={<CartShopping />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
return (
    <BrowserRouter>
      <Header busca={busca} setBusca={setBusca} />
      <Menu setBusca={setBusca} />
      <ListProducts products={products} />
      <Routes>
        <Route path="/cartShopping" element={<CartShopping />} />
      </Routes>
    </BrowserRouter>
  )
*/
