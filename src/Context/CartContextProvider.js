import React, { useState } from 'react'

export const AuthContext = React.createContext({})

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addProduct = product => setCart(prev => [...prev, product])
  const emptyCart = () => setCart([])

  return (
    <AuthContext.Provider value={{ cart, addProduct, emptyCart }}>
      {children}
    </AuthContext.Provider>
  )
}

export default CartContextProvider
