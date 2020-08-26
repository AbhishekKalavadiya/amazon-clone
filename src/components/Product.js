import React from 'react'
import {useStateView} from '../StateProvider'
import './Product.css'

function Product({ title, id, image, price, rating}) {

    const [{basket}, dispatch] = useStateView()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>🔥</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt='image'/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product