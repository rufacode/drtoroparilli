import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {useDispatch, useSelector} from "../redux/store";
import {useEffect} from "react";
import {getSomeData} from "../redux/slices/exampleSlice";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

export const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
  },
}))



export default function LandingPage() {
  const dispatch = useDispatch();
  const {questions, isLoading} = useSelector(state => state.example)



  useEffect(() => {
    async function getData () {
      // some stuff
      await dispatch(getSomeData())
    }
  })


  return (
    <RootStyle title="Dr. Toro Parilli" id="move_top">
      hello landing page {questions}
    </RootStyle>
  )
}
