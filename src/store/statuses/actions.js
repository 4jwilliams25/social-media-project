import axios from "axios";
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

// Get Status Action Creator
export const getStatus = () => {
  return dispatch => {
    dispatch({
      type: GET_STATUS_PENDING
    });
    axios
      .get("http://localhost:8082/api/sosh/statuses")
      .then(res => {
        dispatch({
          type: GET_STATUS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_STATUS_FAILED,
          payload: err
        });
      });
  };
};

// Add Status Action Creator
export const addStatus = newStatus => {
  return dispatch => {
    dispatch({
      type: ADD_STATUS_PENDING
    });
    axios
      .post("http://localhost:8082/api/sosh/statuses", newStatus)
      .then(res => {
        dispatch({
          type: ADD_STATUS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_STATUS_FAILED,
          payload: err
        });
      });
  };
};

// Get Comments Action Creator
export const getComments = () => dispatch => {
  dispatch({
    type: GET_COMMENTS_PENDING
  });
  axios
    .get("http://localhost:8082/api/sosh/comments")
    .then(res => {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_COMMENTS_FAILED,
        payload: err
      });
    });
};

// Add Comment Action Creator
export const addComment = (newComment, statusId) => dispatch => {
  dispatch({
    type: ADD_COMMENT_PENDING
  });
  axios
    .post("http://localhost:8082/api/sosh/comments", {
      ...newComment,
      status_id: statusId
    })
    .then(res => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: { ...res.data, status_id: statusId }
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_COMMENT_FAILED,
        payload: err
      });
    });
};
