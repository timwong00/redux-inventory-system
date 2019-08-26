import { ADD_SNEAKER, DELETE_SNEAKER, UPDATE_SNEAKER } from "../actions/types";

const sneakerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SNEAKER:
      return [...state, Object.assign({}, action.payload)];
    case DELETE_SNEAKER:
      return state.filter(sneakerData => sneakerData.upcId !== action.upcId);
    case UPDATE_SNEAKER:
      return state.map(sneaker => {
        if (sneaker.upcId === action.oldUpcId) {
          return {
            ...sneaker,
            brand: action.payload.newBrand,
            style: action.payload.newStyle,
            size: action.payload.newSize,
            upcId: action.payload.newUpcId
          };
        } else return sneaker;
      });
    default:
      return state;
  }
};

export default sneakerReducer;
