import {styled} from "@mui/material/styles";
import Page from "../components/Page";

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



export default function Contact() {
  return (
    <RootStyle>
      hello  contact page
    </RootStyle>
  )
}
