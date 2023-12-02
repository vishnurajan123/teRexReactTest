import React, { useContext, useEffect, useState } from 'react'
import { getProducts } from '../services/allAPI'
import { cartResponseContext, wishlistResponseContext } from '../Contexts/ProductContext'

function Home() {
    const {cart,setCart}=useContext(cartResponseContext)
    const {wishlist,stWishlist}=useContext(wishlistResponseContext)
    const [products,setProducts]=useState([])
    const getAllProducts=async()=>{
        // api call
        const {data}=await getProducts();
        setProducts(data.products)
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    const handleCart=(product)=>{

        setCart(prevState => [...prevState, product])


    }

    const handleWishlist=(product)=>{
        stWishlist(prevState => [...prevState, product])
    }
    console.log(cart);
  return (
    <div className='d-flex justify-content-evenly flex-wrap'>

  {
        products?.length>0?products.map(product=>(

            <div className="card m-4" style={{width:"18rem"}}>
  <img width={"200px"} height={"200px"}  src={product?.thumbnail} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.title.slice(0,20)}</h5>
    <p class="card-text">{product.description.slice(0,40)}</p>
    <h3 className='text-danger'>$ {product?.price}</h3>
    
  </div>
  <div className='d-flex  container p-3'>
    <button onClick={()=>handleCart(product)} className='btn btn-dark me-2'><i class="fa-solid fa-cart-shopping"></i></button>
    <button onClick={()=>handleWishlist(product)} className='btn btn-dark'><i class="fa-solid fa-heart"></i></button>
  </div>
</div>

        )) : <p>Nothing to display</p>

  }


    </div>
  )
}

export default Home