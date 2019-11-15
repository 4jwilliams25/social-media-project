import axios from "axios";
import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from "../statuses/constants";

// Get Users Action Creator
export const getUsers = () => {
  return dispatch => {
    dispatch({
      type: GET_USERS_PENDING
    });
    axios
      .get("http://localhost:8082/api/users")
      .then(res => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_USERS_FAILED,
          payload: err
        });
      });
  };
};

// User Login Action Creator
export const userLogin = (creds, history) => dispatch => {
  dispatch({
    type: USER_LOGIN_PENDING
  });
  axios
    .post("http://localhost:8082/api/users/login", creds)
    .then(res => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data
      });
      history.push("/Dashboard");
      localStorage.setItem("loggedInUser", JSON.stringify(res.data));
      window.location.reload();
    })
    .catch(err => {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      });
    });
};
