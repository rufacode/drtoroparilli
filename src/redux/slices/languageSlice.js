import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from "../../utils/axios";
import sectionsData from "../../utils/mock-data/sectionsData";
// ----------------------------------------------------------------------

// const delay = ms => new Promise(res => setTimeout(res, ms));

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
    stopLoading(state) {
      state.isLoading = false;
    },

    getCurrentLanguage(state) {
      return state.language;
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

    // GET QUESTIONS
    getSections(state, action) {
      state.isLoading = false;
      state.sections.common = action.payload.filter(x => x.section === 'common')[0];
      state.sections.home = action.payload.filter(x => x.section === 'home')[0];
      state.sections.articles = action.payload.filter(x => x.section === 'articles')[0];
      state.sections.doubts = action.payload.filter(x => x.section === 'doubts')[0];
      state.sections.onlineConsult = action.payload.filter(x => x.section === 'onlineConsult')[0];
      // state.sections = action.payload;
    },
  },
});

// export Reducer
export default languageSlice.reducer;

// ----------------------------------------------------------------------

export function setNewLanguage(language) {
  return  async(dispatch) => {
    dispatch(languageSlice.actions.startLoading());
    try {
      await new Promise(r => setTimeout(r, 1000));
      await dispatch(languageSlice.actions.storeChangeLanguage(language));
      const filtered = await sectionsData.filter(x => x.language === language)
      await dispatch(languageSlice.actions.getSections(filtered));
    } catch(e) {
      console.log(e)
      dispatch(languageSlice.actions.hasError(e));
      dispatch(languageSlice.actions.stopLoading());
    }
    //TODO luego esta funcion quedara sin ser asincrona para hacer uso de la que esta abajo
    dispatch(languageSlice.actions.stopLoading());
  }
}

// actions to perform some logic
export async function getAllData() {
  return async (dispatch) => {
    // dispatches to trigger reducers
    dispatch(languageSlice.actions.startLoading());
    try {
      const response = await axios.post("SOME_API", {language: languageSlice.actions.getCurrentLanguage()});
      // const response = await axios.get("people/1");
      // dispatches to trigger reducers
      dispatch(languageSlice.actions.getSectionsData(response));
    } catch (error) {
      dispatch(languageSlice.actions.hasError(error));
    }
  };
}
