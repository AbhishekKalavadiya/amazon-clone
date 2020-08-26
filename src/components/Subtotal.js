import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateView}  from '../StateProvider'
import './Subtotal.css'

const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount,0)

function Subtotal() {

    const [{basket}, dispatch] = useStateView()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value} `}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'/> This order contains a gift
                        </small>
                    </>
                )}
            
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>proceed to checkout</button>
        </div>
    )
}

export default Subtotal
