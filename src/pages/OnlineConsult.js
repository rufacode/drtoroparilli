import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Grid} from "@mui/material";
import ConsultInfo from "../components/onlineConsult/ConsultInfo";
import ConsultForm from "../components/onlineConsult/ConsultForm";
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
  paddingBottom: APP_BAR_MOBILE,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
    paddingBottom: APP_BAR_DESKTOP,
  },
}))



export default function OnlineConsult() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/consulta.jpg'))
  }, []);

  return (
    <RootStyle>
      <Grid container>
        <Grid item xs={12} md={4}>
          <ConsultInfo />
        </Grid>
        <Grid item xs={12} md={8}>
          <ConsultForm />
        </Grid>
      </Grid>
    </RootStyle>
  )
}
