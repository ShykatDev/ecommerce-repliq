import { actions } from "../actions";

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.CART_ADDED: {
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    }

    case actions.CART_REMOVED: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    }

    default:
      return state;
  }
};

export { initialState, cartReducer };
