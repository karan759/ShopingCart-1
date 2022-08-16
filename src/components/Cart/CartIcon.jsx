import React from 'react';
import './CartIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
function CartIcon() {
    const clickHandler= ()=>{
        console.log('Hi')
    }
  return (
    <>
    <button onClick={clickHandler} className="button">
     <FontAwesomeIcon icon={faCartShopping} style={{color:'277BC0', height:'30px'}} />
     <div className='notify'>1</div>
     </button>
    
    </>
  )
}

export default CartIcon