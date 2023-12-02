import React, { useContext } from 'react'
import { cartResponseContext, wishlistResponseContext } from '../Contexts/ProductContext'

function Wishlist() {
    const {wishlist,stWishlist}=useContext(wishlistResponseContext)
    const {cart,setCart}=useContext(cartResponseContext)
    const handleDelete=(id)=>{
        stWishlist(wishlist.filter(item=>item.id!=id))
    }
    const handleCart=(product)=>{

        setCart(prevState => [...prevState, product])


    }

    console.log(wishlist);
  return (
    <div><div >
    <div>{wishlist?.length>0&&
<p className='text-center mt-4'>
        <button onClick={()=>stWishlist([])} className='btn btn-dark'>Clear cart</button>
    
</p>   } 
        <div className='d-flex justify-content-evenly flex-wrap'>
       
       {
             wishlist?.length>0?wishlist.map(product=>(
       
                 <div className="card m-4" style={{width:"18rem"}}>
       <img width={"200px"} height={"200px"}  src={product?.thumbnail} className="card-img-top" alt="..."/>
       <div class="card-body">
         <h5 class="card-title">{product.title}</h5>
         <p class="card-text">{product.description}</p>
         <h3 className='text-danger'>$ {product?.price}</h3>
         
       </div>
       <div className='d-flex  container p-3'>
         <button onClick={()=>handleDelete(product.id)} className='btn btn-dark me-2'><i class="fa-solid fa-trash"></i></button>
         <button onClick={()=>handleCart(product)} className='btn btn-dark me-2'><i class="fa-solid fa-cart-shopping"></i></button>

       </div>
       </div>
       
             )) : <p className='text-danger'>No items in Wishlist </p>
       
       }
       
       
         </div>
    </div>
    
   
       </div></div>
  )
}

export default Wishlist