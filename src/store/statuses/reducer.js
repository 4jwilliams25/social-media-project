import {
  GET_STATUS_SUCCESS,
  GET_STATUS_FAILED,
  GET_STATUS_PENDING,
  ADD_STATUS_PENDING,
  ADD_STATUS_SUCCESS,
  ADD_STATUS_FAILED,
  GET_COMMENTS_PENDING,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  ADD_COMMENT_PENDING,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED
  // REMOVE_STATUS_PENDING,
  // REMOVE_STATUS_SUCCESS,
  // REMOVE_STATUS_FAILED
} from "./constants";

const initialState = {
  statusList: [],
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STATUS_PENDING:
      return state;
    case GET_STATUS_SUCCESS:
      return {
        statusList: action.payload
      };
    case GET_STATUS_FAILED:
      return action.payload;
    case ADD_STATUS_PENDING:
      return state;
    case ADD_STATUS_SUCCESS:
      return {
        ...state,
        statusList: [...state.statusList, action.payload]
      };
    case ADD_STATUS_FAILED:
      return action.payload;
    case GET_COMMENTS_PENDING:
      return state;
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload
      };
    case GET_COMMENTS_FAILED:
      return action.payload;
    case ADD_COMMENT_PENDING:
      return state;
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case ADD_COMMENT_FAILED:
      return action.payload;
    default:
      return state;
  }
};
