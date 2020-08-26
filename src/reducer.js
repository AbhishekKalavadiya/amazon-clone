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
   
    switch(action.type){

        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            return state
        default :
            return state
    }
}

export default reducer