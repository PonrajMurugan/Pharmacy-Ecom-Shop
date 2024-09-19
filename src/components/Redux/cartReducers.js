import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../Redux/action';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === product.id);

      if (existingProduct) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + product.price,
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + product.price,
      };

    case REMOVE_FROM_CART:
      const itemToRemove = state.cartItems.find((item) => item.id === action.payload);
      
      if (!itemToRemove) return state;

      if (itemToRemove.quantity === 1) {
        const filteredCartItems = state.cartItems.filter((item) => item.id !== action.payload);
        return {
          ...state,
          cartItems: filteredCartItems,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - itemToRemove.price,
        };
      } else {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
          totalQuantity: state.totalQuantity - 1,
          totalPrice: state.totalPrice - itemToRemove.price,
        };
      }

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        totalQuantity: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
