import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Cart } from './'
function Navbar() {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">JSM Headphones</Link>
      </p>

      <button type='button' className='cart-icon' onClick=''>
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">1</span>
      </button>

      <Cart />
    </div>
  )
}

export default Navbar