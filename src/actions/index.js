import { ADD_SNEAKER, DELETE_SNEAKER, UPDATE_SNEAKER } from "./types";

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

export const updateSneaker = (newSneakerData, oldUpcId) => {
  return {
    type: UPDATE_SNEAKER,
    payload: newSneakerData,
    oldUpcId
  };
};
