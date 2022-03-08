import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import exampleReducer from "./slices/exampleSlice";
import formsReducer from "./slices/formsSlice";


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  example: exampleReducer,
  forms: formsReducer
});

export { rootPersistConfig, rootReducer };
