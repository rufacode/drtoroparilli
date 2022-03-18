import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------
//initial state
const initialState = {
  backgroundImage: ''
};

const backgroundImageSlice = createSlice({
  //name of the slice
  name: "backgroundImage",
  initialState,
  // reducers to update the state
  reducers: {
   // CHAMGE BGIMG
    changeImage(state, action) {
      console.log(action);
      state.backgroundImage = action.payload;
    }

  },
});

// export Reducer
export default backgroundImageSlice.reducer;

// ----------------------------------------------------------------------

// actions to perform some logic
export function updateImg(img) {
  return (dispatch) => {
    // dispatches to trigger reducers
    dispatch(backgroundImageSlice.actions.changeImage(img));
  };
}
