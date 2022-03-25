import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Box, Button, Container, Grid, IconButton, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import Article from "../components/articles/Article";
import { useEffect } from 'react';
import {useDispatch} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

export const RootStyle = styled(Page)(({theme}) => ({
  height: "100%",
  width: "100%",
  position: "relative",
  paddingTop: APP_BAR_MOBILE * 2,
  paddingBottom: APP_BAR_MOBILE * 2,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP * 2,
    paddingBottom: APP_BAR_DESKTOP * 2,
  },
}))
export const SpecialBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
    alignItems: 'center'
  },
}))



export default function Articles() {
  const [category, setCategory] = useState('Seleccione una opcion');
  const [sex, setSex] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/articles.jpg'))
  }, []);


  return (
    <RootStyle title='Articulos'>
      <Container>
        <SpecialBox sx={{ mb: 4}}>
          <Typography variant='h1' sx={{ mb: 2 }}>Articulos</Typography>
          <SpecialBox >
            <Select
              sx={{ mx: 1, mb: {xs: 2, md: 0}  }}
              labelId="howDidYouKnow"
              id="howDidYouKnow"
              size='small'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value='Seleccione una opcion'>Seleccione una categoria</MenuItem>
              <MenuItem value='Cárnica'>Cárnica</MenuItem>
              <MenuItem value='Fruta y vertuda'>Fruta y vertuda</MenuItem>
              <MenuItem value='Pesquera'>Pesquera</MenuItem>
              <MenuItem value='Panadería'>Panadería</MenuItem>
              <MenuItem value='Vegano'>Vegano</MenuItem>
            </Select>
            <Button
              sx={{ mx: 1,  mb: {xs: 2, md: 0} }}
              variant={sex === 'hombre' ? 'contained' : 'outlined' }
              onClick={() => setSex('hombre')}
            >
              Hombre</Button>
            <Button
              sx={{ mx: 1,  mb: {xs: 2, md: 0} }}
              variant={sex === 'mujer' ? 'contained' : 'outlined' }
              onClick={() => setSex('mujer')}
            >
              Mujer</Button>
            <IconButton>
              <SendIcon color='primary'/>
            </IconButton>
          </SpecialBox>
        </SpecialBox>
        <Grid container spacing={2}>
          {
            [...Array.from('asdasdasd')].map((el, i) => (
              <Grid item xs={12} md={6} lg={4} key={i + 1}>
                <Article />
              </Grid>
            ))
          }
        </Grid>

      </Container>
    </RootStyle>
  )
}
