import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------
//initial state
const initialState = {
  isLoading: false,
  error: false,
  status: null,
  id: null,
  questions: [],
};

const formsSlice = createSlice({
  //name of the slice
  name: "forms",
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
      state.status = action.payload.status;
      state.id = action.payload.id;
    },
  },
});

// export Reducer
export default formsSlice.reducer;

// ----------------------------------------------------------------------

// actions to perform some logic
export function Contact() {
  return async (dispatch) => {
    // dispatches to trigger reducers
    dispatch(formsSlice.actions.startLoading());
    try {
      const response = await axios.post("/contact");
      // dispatches to trigger reducers
      dispatch(formsSlice.actions.getQuestionsSuccess(response.data));
    } catch (error) {
      dispatch(formsSlice.actions.hasError(error));
    }
  };
}
