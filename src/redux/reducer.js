const initialState = {
  count: 0,
  selectedProducts: [],
  loggedIn: false,
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "COUNT_UP":
      const currentCount = state.count;
      return { ...state, count: currentCount + 1 };
    case "ADD_TO_CART":
      const selProducts = [...state.selectedProducts, action.product];
      return { ...state, selectedProducts: selProducts };
    case "REMOVE_FROM_CART":
      const productCopy = [...state.selectedProducts];
      const idx = productCopy.indexOf(action.product);
      productCopy.splice(idx, 1);
      return { ...state, selectedProducts: productCopy };
    case "LOGIN":
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}
