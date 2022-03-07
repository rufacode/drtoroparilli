import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------
//initial state
const initialState = {
  isLoading: false,
  error: false,
  questions: [],
};

const exampleSlice = createSlice({
  //name of the slice
  name: "example",
  initialState,
  // reducers to update the state
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET QUESTIONS
    getQuestionsSuccess(state, action) {
      state.isLoading = false;
      state.questions = action.payload;
    },
  },
});

// export Reducer
export default exampleSlice.reducer;

// ----------------------------------------------------------------------

// actions to perform some logic
export function getSomeData() {
  return async (dispatch) => {
    // dispatches to trigger reducers
    dispatch(exampleSlice.actions.startLoading());
    try {
      const response = await axios.get("/preguntas_frecuentes/preguntas");
      // dispatches to trigger reducers
      dispatch(exampleSlice.actions.getQuestionsSuccess(response.data.data));
    } catch (error) {
      dispatch(exampleSlice.actions.hasError(error));
    }
  };
}
