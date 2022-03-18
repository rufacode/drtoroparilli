import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Container, Grid, Typography} from "@mui/material";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import {useEffect, useState} from 'react';
import ProceduresList from "../components/procedures/ProceduresList";
import ProcedureDetail from "../components/procedures/ProcedureDetail";
import {Element} from 'react-scroll'
import {useDispatch} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import LoadingScreen from "../components/LoadingScreen";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

export const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE,
  paddingBottom: APP_BAR_MOBILE * 2,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP,
    paddingBottom: APP_BAR_DESKTOP * 2,
  },
}))




export default function Procedures() {
  const [sex, setSex] = useState('male');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/procedures.jpg'))
  }, [])

  function changeSex(value) {
    setSex(value);
  }

  return (
    <RootStyle title='Articulos'>
      <Container>
        <Typography variant='h2'>Procedimientos</Typography>
      </Container>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FemaleIcon
            onClick={() => changeSex('female')}
            sx={{
              color:  sex === 'female' ? theme => theme.palette.secondary.lighter : 'lightgray',
              fontSize: '10rem',
              "&:hover": {
                color: theme => theme.palette.secondary.lighter,
                cursor: 'pointer'
              }
            }}
          />
          <MaleIcon
            onClick={() => changeSex('male')}
            sx={{
              color: sex === 'male' ? theme => theme.palette.primary.lighter : 'lightgray'  ,
              fontSize: '10rem',
              "&:hover": {
                color: theme => theme.palette.primary.lighter,
                cursor: 'pointer'
              }
            }}
          />
        </Grid>
        <ProceduresList state={sex} />
      </Grid>
    </RootStyle>
  )
}
