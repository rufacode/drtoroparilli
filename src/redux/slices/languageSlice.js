import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------
//initial state
const initialState = {
  language: 'ES',
  isLoading: false,
  error: false,
  sections: {},
};

const languageSlice = createSlice({
  //name of the slice
  name: "language",
  initialState,
  // reducers to update the state
  reducers: {
    //CHANGE LANGUAGE
    storeChangeLanguage(state, action) {
      state.language = action.payload;
      localStorage.language = action.payload;
    },
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET QUESTIONS
    getSectionsData(state, action) {
      console.log(action.payload)
      state.isLoading = false;
      state.sections = action.payload;
    },

  },
});

// export Reducer
export default languageSlice.reducer;

// ----------------------------------------------------------------------

export async function setNewLanguage(language) {
  return (dispatch) => {
    dispatch(languageSlice.actions.storeChangeLanguage(language));
  }
}

// actions to perform some logic
export function getAllData(language) {
  return async (dispatch) => {
    // dispatches to trigger reducers
    dispatch(languageSlice.actions.startLoading());
    try {
      const response = await axios.post("SOME_API", {language});
      // const response = await axios.get("people/1");
      // dispatches to trigger reducers
      dispatch(languageSlice.actions.getSectionsData(response));
    } catch (error) {
      dispatch(languageSlice.actions.hasError(error));
    }
  };
}
