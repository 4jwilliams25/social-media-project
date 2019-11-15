import axios from "axios";
import {
  GET_MESSAGES_PENDING,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
  ADD_MESAGE_PENDING,
  ADD_MESAGE_SUCCESS,
  ADD_MESAGE_FAILED
} from "./constants";
import { ADD_STATUS_SUCCESS } from "../statuses/constants";
import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.5/node_modules/redux";

export const getMessages = id => dispatch => {
  dispatch({
    type: GET_MESSAGES_PENDING
  });
  axios
    .get(`http://localhost:8082/api/sosh/users/${id}/messages`)
    .then(res => {
      dispatch({
        type: GET_MESSAGES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MESSAGES_FAILED,
        payload: err
      });
    });
};

export const addMessage = newMessage => dispatch => {
  dispatch({
    type: ADD_MESAGE_PENDING
  });
  axios
    .post("http://localhost:8082/api/sosh/messages", newMessage)
    .then(res => {
      dispatch({
        type: ADD_MESAGE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_MESAGE_FAILED,
        payload: err
      });
    });
};
