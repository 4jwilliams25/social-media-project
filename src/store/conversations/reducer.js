import {
  GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
  ADD_MESAGE_PENDING,
  ADD_MESAGE_SUCCESS,
  ADD_MESAGE_FAILED
} from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_PENDING:
      return state;
    case GET_MESSAGES_SUCCESS:
      return action.payload;
    case GET_MESSAGES_FAILED:
      return action.payload;
    case ADD_MESAGE_PENDING:
      return state;
    case ADD_MESAGE_SUCCESS:
      return [...state, action.payload];
    case ADD_MESAGE_FAILED:
      return action.payload;
    default:
      return state;
  }
};
