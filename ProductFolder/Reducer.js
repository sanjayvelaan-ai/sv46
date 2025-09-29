import React, { useReducer } from "react";


export const initialState = { cart: [] };

 export  function Reducer(state, action) {
    switch (action.type) {
        case "ADD":
            return { cart: [...state.cart, action.product] }

        case "REMOVE":
            // return { cart: state.cart.filter((item) => item.id !== action.id) };
            let index = state.cart.findIndex(item=>item.id===action.product);
            const updateCart=[...state.cart];
            updateCart.splice(index,1);
            return {cart:updateCart}

        case "CLEAR":
            return { cart: [] };

        default:
            return state;
    }
}
