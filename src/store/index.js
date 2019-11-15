import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./users/reducer";
import statusesReducer from "./statuses/reducer";
import friendsReducer from "./friends/reducer";
import messagesReducer from "./conversations/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  users: usersReducer,
  statuses: statusesReducer,
  friendRequests: friendsReducer,
  messages: messagesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
