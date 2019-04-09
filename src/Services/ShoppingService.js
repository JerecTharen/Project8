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
            let newItem = action.item;
            newItem.amount = 1;
            return {
                cart: state.cart.concat(newItem)
            }
        }
        else{
            // console.log('in cart');
            let newCart = state.cart.map((item)=>{
                if(item.id === action.item.id){
                    item.amount++;
                    return item;
                }
                else{
                    return item;
                }
            });
            return {
                cart: newCart,
            };
        }

    }
    else if(action.type === 'UPDATE_AMOUNT'){
        let newCart = state.cart.map((item)=>{
            if(action.item.id === item.id){
                let newItem = item;
                newItem.amount = action.amount;
                return newItem;
            }
            else return item;
        });
        return {cart: newCart};
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
