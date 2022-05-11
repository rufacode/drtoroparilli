import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import exampleReducer from "./slices/exampleSlice";
import formsReducer from "./slices/formsSlice";
import backgroundImageReducer from "./slices/backgroundImageSlice";
import languageReducer from "./slices/languageSlice";
import sectionsReducer from "./slices/sections";


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  backgroundImage: backgroundImageReducer,
  example: exampleReducer,
  forms: formsReducer,
  language: languageReducer,
  sections: sectionsReducer,
});

export { rootPersistConfig, rootReducer };
