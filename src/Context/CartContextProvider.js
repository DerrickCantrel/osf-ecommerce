import React, { useState } from 'react'
import CartItem from '../components/CartItem/CartItem'
//import ListProducts from '../components/ListProducts/ListProducts'

export const AuthContext = React.createContext({})

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = product => setCart(prev => [...prev, product])

  function handleAddItemToCart(newAddProduct) {
    console.log('objeto: ' + newAddProduct.id)
    const productAdditions = newAddProduct
    setCart([...cart, productAdditions])
  }

  function handleRemoveItemFromCart(id) {
    console.log(id)
    const filteredCart = cart.filter(cartItem => cart.indexOf(cartItem) !== id)
    setCart(filteredCart)
  }

  const handleSumPrice = cart.reduce((a, b) => a + b.price, 0)

  const clearCart = () => setCart([])

  return (
    <AuthContext.Provider
      value={{
        cart,
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
