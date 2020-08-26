import React from 'react'
import { useStateView } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css'

function Checkout() {

    const [{basket}, dispatch] = useStateView()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='data:image/png;base64,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' alt='ad'/>

                    {
                        basket?.length === 0 ? (
                            <h2>
                                Your Basket is Empty. Add something
                            </h2>
                        ) : (
                            <div>
                                <h2 className='checkout__title'>Your Shopping Basket</h2>
                                
                                {
                                    basket?.map(({id, title, image, price, rating}) => (
                                        <CheckoutProduct 
                                            item={id}
                                            title={title}
                                            image={image}
                                            price={price}
                                            rating={rating}
                                        />
                                    ))                           
                                }

                            </div>

                        )
                    }
            </div>
            {
                basket.length > 0 && (
                    <div className='checkout__right'>
                        <Subtotal />    
                    </div>    
                )
            }
        </div>
    )
}

export default Checkout
