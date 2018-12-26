import {
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
  CREATE_STREAM
} from "../actions/types";
import _ from "lodash";

//redux always return a new object
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      //copy the state into new object, assign the object at KEY: action.payload.id to the new PASSED in action.payload
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
