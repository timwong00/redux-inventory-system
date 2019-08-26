import { ADD_SNEAKER, DELETE_SNEAKER } from "./types";

export const addSneaker = sneakerData => {
  return {
    type: ADD_SNEAKER,
    payload: sneakerData
  };
};

export const deleteSneaker = upcId => {
  return {
    type: DELETE_SNEAKER,
    upcId
  };
};
