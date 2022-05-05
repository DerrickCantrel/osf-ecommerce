import React, { useState } from 'react'
//import CartItem from '../components/CartItem/CartItem'
//import ListProducts from '../components/ListProducts/ListProducts'

export const AuthContext = React.createContext({})

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  //const [qtdCart, setQtdCart] = useState(0)

  /*
  function handleIteratorAdd() {
    cart.map()
  }
  /*
  function handleIteratorAdd() {
    setQtdCart(qtdCart + 1)
  }
  */
  /*
  function handleIteratorRev() {
    setQtdCart(qtdCart - 1)
  }
  */

  const addProduct = product => setCart(prev => [...prev, product])

  function handleAddItemToCart(newAddProduct) {
    console.log('IDER: ' + newAddProduct.id)
    console.log('QTD: ' + newAddProduct.qtd)
    newAddProduct.qtd = 1
    cart.map(item => {
      if (item.id === newAddProduct.id) {
        newAddProduct.qtd = newAddProduct.qtd + 1
        console.log('QTD NEW: ' + newAddProduct.qtd)
      }
      setCart([...cart, newAddProduct])
    })
  }

  function handleRemoveItemFromCart(id) {
    cart.splice(id, 1)
    setCart([...cart])
    //handleIteratorRev()
  }

  const handleSumPrice = cart.reduce((a, b) => a + b.price, 0)

  function clearCart() {
    setCart([])
    //setQtdCart(0)
  }

  return (
    <AuthContext.Provider
      value={{
        cart,
        //qtdCart,
        addProduct,
        clearCart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        handleSumPrice
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default CartContextProvider
