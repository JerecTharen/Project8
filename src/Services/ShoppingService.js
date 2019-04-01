import { createStore } from 'redux';



const initialState = {cart: [],};

function reducer(state, action){
    let test;
    switch(action.type){
        case 'ADD_TO_CART':
            test = 5;
            break;
        case 'DELETE_FROM_CART':
            test = 4;
            break;
        // case 'DELETE_FROM_CART':
        //     test = 4;
        //     break;
        default:
            test = 0;
            break;
    }
    console.log(test);
}


const store = createStore(reducer, initialState);
export default store;
