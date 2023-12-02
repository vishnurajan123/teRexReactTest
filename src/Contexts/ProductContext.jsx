import React, { createContext, useState } from 'react'
export const cartResponseContext=createContext()
export const wishlistResponseContext=createContext()

function ProductContext({children}) {
    const [cart,setCart]=useState([])
    const [wishlist,stWishlist]=useState([])
  return (
    <>

<cartResponseContext.Provider value={{cart,setCart}}>
    <wishlistResponseContext.Provider value={{wishlist,stWishlist}}>
        
        
            {children}
    </wishlistResponseContext.Provider>
    
</cartResponseContext.Provider>

    </>
  )
}

export default ProductContext