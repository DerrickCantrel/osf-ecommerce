import React, { useEffect, useState } from 'react'
//import CartItem from '../components/CartItem/CartItem'
//import ListProducts from '../components/ListProducts/ListProducts'

export const AuthContext = React.createContext({})

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [qtdCart, setQtdCart] = useState(1)
  const [cartPrice, setCartPrice] = useState(0)

  //const qtdItemCart = cart.filter()

  function handleIteratorAdd() {
    setQtdCart(qtdCart + 1)
    console.log('adicionou' + qtdCart)
  }

  function handleIteratorRev() {
    setQtdCart(qtdCart - 1)
    console.log('removeu:' + qtdCart)
  }

  const addProduct = product => setCart(prev => [...prev, product])

  /*
  const newQtd = (id, quantidade) =>
    cart.map(produto => {
      if (produto.id === id) produto.quantidade += quantidade
      handleIteratorAdd()
      return produto
    })
  */

  function handleAddItemToCart(newAddProduct) {
    if (qtdCart === 0) {
      console.log('heheheheh')
      return handleIteratorAdd()
    }

    const existsProduct = cart.some(product => product.id === newAddProduct.id)

    if (!existsProduct) {
      newAddProduct.qtd = 1
      return setCart([...cart, newAddProduct])
    } else {
      cart.map(product => {
        if (product.id === newAddProduct.id) newAddProduct.qtd += 1
      })
    }
    handleIteratorAdd()
  }

  function handleRemoveItemFromCart(revProduct) {
    if (revProduct.qtd > 1) {
      revProduct.qtd -= 1
      return handleIteratorRev()
    }
    cart.splice(revProduct, 1)
    setCart([...cart])
    //handleIteratorRev()
  }

  useEffect(() => {
    var handleSumPrice = cart.reduce((total, elemento) => {
      if (elemento.qtd >= 1) {
        return (total = total + elemento.qtd * elemento.price)
      } else if (qtdCart === 1) {
        elemento.qtd += 1
        console.log('elemento.qtd: ' + elemento.qtd)
        return (total = total + elemento.qtd * elemento.price)
      } else {
        return total
      }
    }, 0)
    setCartPrice(handleSumPrice)
  })

  function clearCart() {
    setCart([])
    setQtdCart(1)
  }

  return (
    <AuthContext.Provider
      value={{
        cart,
        qtdCart,
        cartPrice,
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

/*

function handleAddItemToCart(newAddProduct) {
    console.log('IDER: ' + newAddProduct.id)
    console.log('QTD: ' + newAddProduct.qtd)
    if (qtdCart === 0) {
      console.log('heheheheh')
      return handleIteratorAdd()
    }

    cart.map(item => {
      if (item.id === newAddProduct.id) {
        console.log('Item.id: ' + item.id)
        console.log('newAddProduct.id: ' + newAddProduct.id)
        console.log('QTD NEW: ' + newAddProduct.qtd)
        return (newAddProduct.qtd += 1)
      } else {
        setCart([...cart, newAddProduct])
        console.log('está fudido')
      }
    })


    handleIteratorAdd()
    console.log('passei por aqui')
  }

*/
