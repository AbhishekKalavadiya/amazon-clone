export const initialState = {
    basket: [
        {
            id: "6",
            title: "book6 - The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            price: 3101.22,
            rating: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9Csr0sBIQEqgplRmy9m2whsliv8kNQFgeBQ&usqp=CAU'
        }
    ],
    user: null
}



const reducer = (state, action) => {
   console.log(action)
    switch(action.type){

        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            
            let newBasket = [...state.basket]

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            if(index >= 0){
                newBasket.splice(index,1)
            }else{
                console.log('id not found')
            }
            
            return {
                ...state,
                basket: newBasket
            }
        default :
            return state
    }
}

export default reducer