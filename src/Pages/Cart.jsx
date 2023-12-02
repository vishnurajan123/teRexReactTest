import React, { useContext, useEffect, useState } from 'react'
import { cartResponseContext } from '../Contexts/ProductContext'

function Cart() {

    const {cart,setCart}=useContext(cartResponseContext)
    const [total,setTotal]=useState(0)
    const handleDelete=(id)=>{
        setCart(cart.filter(item=>item.id!=id))
    }
    const cartTotal=()=>{
        if(cart.length>0){
            setTotal(cart.map(item=>item.price).reduce((p1,p2)=>p1+p2))
          }
          else(
            setTotal(0)
          )
    }

    useEffect(()=>{
        cartTotal()
    },[cart])
console.log(cart);
  return (
    <div className='d-flex justify-content-evenly'>
 <div>
{cart?.length>0&&
<p className='text-center mt-4'>
        <button onClick={()=>setCart([])} className='btn btn-dark'>Clear cart</button>
    
</p>   }  <div className='d-flex justify-content-evenly flex-wrap'>
    
    {
          cart?.length>0?cart.map(product=>(
    
              <div className="card m-4" style={{width:"18rem"}}>
    <img width={"200px"} height={"200px"}  src={product?.thumbnail} className="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{product.title}</h5>
      <p class="card-text">{product.description}</p>
      <h3 className='text-danger'>$ {product?.price}</h3>
      
    </div>
    <div className='d-flex  container p-3'>
      <button onClick={()=>handleDelete(product.id)} className='btn btn-dark me-2'><i class="fa-solid fa-trash"></i></button>
    </div>
    </div>
    
          )) : <p className='text-danger'>No items in Cart </p>
    
    }
    
    
      </div>
 </div>
 {cart?.length>0&&<div className='mt-5 pt-2'>
    <div className='shadow p-4 d-flex justify-content-center align-items-center flex-column mt-5' style={{width:"18rem",height:"300px"}}>

        <h2>Total amount</h2>
        <h5>Number of products:{cart.length}</h5>
        <h5>Total: {total} </h5>
        <button className='btn btn-dark mt-5'>Proceed to Payment</button>

    </div>

 </div>}

    </div>
  )
}

export default Cart