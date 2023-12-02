import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">TeeRex</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/'} class="nav-link active text-light" aria-current="page" >Home</Link>
        </li>
       
        <li>
<Link to={'/cart'}>
                <button className='btn btn-light me-3'>Cart </button>
    
</Link>
        </li>
        <li>
<Link to={'/wishlist'}>
                <button className='btn btn-light'>Wishlist </button>
    
</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header