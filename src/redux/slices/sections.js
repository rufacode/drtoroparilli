import {createSlice} from '@reduxjs/toolkit';
// utils
// import axios from "../../utils/axios";
import sectionsData from '../../utils/mock-data/sectionsData'


// ----------------------------------------------------------------------
//initial state
const initialState = {
  isLoading: false,
  error: false,
  sections: {},
};

const sectionsSlice = createSlice({
  //name of the slice
  name: "sections",
  initialState,
  // reducers to update the state
  reducers: {
    // START LOADING]
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET QUESTIONS
    getSections(state, action) {
      state.isLoading = false;
      state.sections.common = action.payload.filter(x => x.section === 'common')[0];
      state.sections.home = action.payload.filter(x => x.section === 'home')[0];
      // state.sections = action.payload;
    },
  },
});

// export Reducer
export default sectionsSlice.reducer;

// ----------------------------------------------------------------------

// actions to perform some logic
export function getSections(language) {
  console.log(language)
  return async (dispatch) => {
    // dispatches to trigger reducers
    dispatch(sectionsSlice.actions.startLoading());
    try {
      await new Promise(r => setTimeout(r, 1000));
      const filtered = await sectionsData.filter(x => x.language === language)
      await dispatch(sectionsSlice.actions.getSections(filtered));
    } catch (error) {
      dispatch(sectionsSlice.actions.hasError(error));
    }
  };
}
