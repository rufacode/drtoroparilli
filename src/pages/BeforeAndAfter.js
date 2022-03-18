import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {useDispatch} from "../redux/store";
import {useEffect} from "react";
import {updateImg} from "../redux/slices/backgroundImageSlice";

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



export default function BeforeAndAfter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/before-after.jpg'))
  }, [])

  return (
    <RootStyle title='Antes y despues'>
      hello before and after page
    </RootStyle>
  )
}
