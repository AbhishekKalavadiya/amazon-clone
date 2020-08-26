import React from 'react'
import './CheckoutProduct.css'


function CheckoutProduct({ item, title, price, rating, image}) {
    return (
        <div className='checkoutProduct'>
            <img src={image} alt=''/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>🌟</p>
                        ))
                    }
                </div>

                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
