import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {useDispatch} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography
} from "@mui/material";
import {useEffect, useState} from 'react';
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import {procedureList} from "../utils/mock-data/procedures";

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

function Male() {
  return (
    <Box>hello from male</Box>
  )
}

function Female() {
  return (
    <Box>hello from female</Box>
  )
}


export default function BeforeAndAfter() {
  const dispatch = useDispatch();
  const [view, setView] = useState('male');
  const [filtered, setFiltered] = useState([])
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedValue, setSelectedValue] = useState({});

  function getList(param) {
    const filtered = procedureList.filter((x) => x.label === param)
    setFiltered(filtered);
    const value = filtered.filter(x => x.images.length > 0)
    setSelectedValue(value[0])
    setSelectedImg(value[0].images[0].url)
  }

  function setInitImages(el) {
    setSelectedValue(el);
    setSelectedImg(el.images[0].url)
  }

  useEffect(() => {
    getList(view)
  }, [view])


  useEffect(() => {
    dispatch(updateImg('/static/img/before-after.jpg'))
  }, [])

  return (
    <RootStyle title='Antes y despues'>
      <Container>
        <Typography variant='h2'>
          Antes y despues
        </Typography>
      </Container>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{p: 3, minHeight: '30rem'}}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <IconButton onClick={() => setView('female')}>
                <FemaleIcon
                  sx={{
                    color: view === 'female' ? theme => theme.palette.secondary.lighter : 'lightgray',
                    fontSize: '5rem',
                    "&:hover": {
                      color: theme => theme.palette.secondary.lighter,
                      cursor: 'pointer'
                    }
                  }}
                />
              </IconButton>

              <IconButton onClick={() => setView('male')}>
                <MaleIcon
                  sx={{
                    color: view === 'male' ? theme => theme.palette.primary.lighter : 'lightgray',
                    fontSize: '5rem',
                    "&:hover": {
                      color: theme => theme.palette.primary.lighter,
                      cursor: 'pointer'
                    }
                  }}
                />
              </IconButton>
            </Box>
            <List sx={{maxHeight: '350px', overflowY: 'auto'}}>
              {
                filtered.filter(x => x.images.length > 0).map((el, i) => (
                  <>
                    <ListItemButton
                      key={i + 1}
                      sx={{py: 2}}
                      onClick={() => setInitImages(el)}
                      selected={el.id === selectedValue.id}
                    >
                      <ListItemText sx={{textAlign: 'center'}}>
                        {el.name}
                      </ListItemText>
                    </ListItemButton>
                    <Divider/>
                  </>
                ))
              }
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid container spacing={1} sx={{maxHeight: '450px', overflowY: 'auto'}}>
            {selectedValue.name && selectedValue.images.map((img, i) => (
              <Grid item xs={6}>
                <Box
                  onClick={() => setSelectedImg(img.url)}
                  component='img'
                  src={img.url}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {
            selectedImg &&
            <Box
              component='img'
              src={selectedImg}
              width={'100%'}
              sx={{ px: 2 }}
              height={500}
            />
          }
        </Grid>
      </Grid>


    </RootStyle>
  )
}

