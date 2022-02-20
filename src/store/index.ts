import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "@/store/reducers/authReducer";
import modalReducer from "@/store/reducers/modalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
