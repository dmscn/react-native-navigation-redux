import { ADD_PLACE, REMOVE_PLACE } from "./actionTypes";

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
};

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    placeKey: key
  };
};
