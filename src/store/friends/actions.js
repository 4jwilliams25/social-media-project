import {
  GET_FRIEND_REQUESTS_PENDING,
  GET_FRIEND_REQUESTS_SUCCESS,
  GET_FRIEND_REQUESTS_FAILED
} from "./constants";
import axios from "axios";

export const getFriendRequests = () => dispatch => {
  dispatch({
    type: GET_FRIEND_REQUESTS_PENDING
  });
  axios
    .get("http://localhost:8082/api/sosh/friend-requests")
    .then(res => {
      dispatch({
        type: GET_FRIEND_REQUESTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_FRIEND_REQUESTS_FAILED,
        payload: err
      });
    });
};
