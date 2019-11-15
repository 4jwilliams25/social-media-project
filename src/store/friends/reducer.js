import {
  GET_FRIEND_REQUESTS_PENDING,
  GET_FRIEND_REQUESTS_SUCCESS,
  GET_FRIEND_REQUESTS_FAILED
} from "./constants";

const initialState = {
  friendRequests: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIEND_REQUESTS_PENDING:
      return state;
    case GET_FRIEND_REQUESTS_SUCCESS:
      return {
        friendRequests: action.payload
      };
    case GET_FRIEND_REQUESTS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
