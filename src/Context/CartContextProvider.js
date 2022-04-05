import React, { useState } from 'react'
//import ListProducts from '../components/ListProducts/ListProducts'

export const AuthContext = React.createContext({})

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  //const [qtdCart, setQtdCart] = useState(0)
  const addProduct = product => setCart(prev => [...prev, product])

  function handleAddItemToCart(newAddProduct) {
    console.log('objeto: ' + newAddProduct.id)

    setCart([...cart, newAddProduct])
  }

  function handleRemoveItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter(
      cartItem => cart.indexOf(cartItem) !== clickedItemIndex
    )
    setCart(filteredCart)
  }

  const clearCart = () => setCart([])

  return (
    <AuthContext.Provider
      value={{
        cart,
        addProduct,
        clearCart,
        handleAddItemToCart,
        handleRemoveItemFromCart
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default CartContextProvider
