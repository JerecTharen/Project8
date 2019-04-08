import { createStore } from 'redux';


const initialState = {cart: []};

function reducer(state, action){

    if (action.type === 'ADD_TO_CART') {
        // console.log('in add to cart');
        let inCart = false;
        state.cart.forEach((item)=>{
            // console.log('in iteration for', item);
            // console.log(item.id === action.item.id);
            if(item.id === action.item.id){
                // console.log('in if');
                inCart = true
            }
        });
        if(!inCart){
            // console.log('not in cart');
            return {
                cart: state.cart.concat(action.item)
            }
        }
        else{
            // console.log('in cart');
            return state;
        }

    }
    else if(action.type === 'DELETE_FROM_CART'){
        return{
            cart: state.cart.filter((item=> (item.id !== action.id)))
        }
    }
    else{
        return state;
    }
}


const store = createStore(reducer, initialState);
// console.log(store.getState());
export default store;
