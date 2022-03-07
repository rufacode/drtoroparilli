import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import exampleReducer from "./slices/exampleSlice";


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  example: exampleReducer
});

export { rootPersistConfig, rootReducer };
