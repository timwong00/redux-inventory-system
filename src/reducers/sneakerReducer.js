import { ADD_SNEAKER, DELETE_SNEAKER } from "../actions/types";

const sneakerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SNEAKER:
      return [
        ...state,
        Object.assign({}, action.payload)
        // sneakerInfo: {
        //   ...state.sneakerInfo,
        //   [action.payload.upcId]: action.payload
        // }
      ];

    case DELETE_SNEAKER:
      return state.filter(sneakerData => sneakerData.upcId !== action.upcId);

    default:
      return state;
  }
};

export default sneakerReducer;
