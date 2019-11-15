import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from "../statuses/constants";

const initialState = {
  userList: [],
  loggedInUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return state;
    case GET_USERS_SUCCESS:
      return {
        userList: action.payload
      };
    case GET_USERS_FAILED:
      return action.payload;
    case USER_LOGIN_PENDING:
      return state;
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload
      };
    case USER_LOGIN_FAILED:
      return action.payload;
    default:
      return state;
  }
};
