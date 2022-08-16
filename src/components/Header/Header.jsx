import React from 'react';
import CartIcon from '../Cart/CartIcon';

import './Header.css';

function Header() {
  return (
    <>
    <div className='header'>
        <h1>Cart Mart</h1>
<CartIcon />
    </div>
    <div className='line'></div>
    </>
  )
}

export default Header