import { createStore } from 'redux';


const initialState = {cart: []};

function reducer(state, action){
    if (action.type === 'ADD_TO_CART') {
        return {
            cart: state.cart.concat(action.item)
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
console.log(store.getState());
export default store;
