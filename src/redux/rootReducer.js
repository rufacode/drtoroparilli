import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import exampleReducer from "./slices/exampleSlice";
import formsReducer from "./slices/formsSlice";
import backgroundImageSlice from "./slices/backgroundImageSlice";


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  backgroundImage: backgroundImageSlice,
  example: exampleReducer,
  forms: formsReducer
});

export { rootPersistConfig, rootReducer };
