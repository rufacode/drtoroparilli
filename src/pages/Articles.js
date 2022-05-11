import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {Box, Button, Container, Grid, IconButton, MenuItem, Select, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import Article from "../components/articles/Article";

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
  const [category, setCategory] = useState('Choose a category');
  const [sex, setSex] = useState('');
  const dispatch = useDispatch();

  const {isLoading, sections} = useSelector(state => state.language);

  useEffect(() => {
    dispatch(updateImg('/static/img/articles.jpg'))
  }, []);


  return (
    <RootStyle title='Articulos'>
      <Container>
        {
          sections.articles && !isLoading &&
          <SpecialBox sx={{mb: 4}}>
            <Typography variant='h1' sx={{mb: 2}}>{sections.articles.options.title}</Typography>
            <SpecialBox>
              <Select
                sx={{mx: 1, mb: {xs: 2, md: 0}}}
                labelId="howDidYouKnow"
                id="howDidYouKnow"
                size='small'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value='Seleccione una opcion'>{sections.articles.options.categoryText}</MenuItem>
                {
                  sections.articles.options.categories.map(category => (
                    <MenuItem key={category.text} value={category.text}>{category.text}</MenuItem>
                  ))
                }
              </Select>
              <Button
                sx={{mx: 1, mb: {xs: 2, md: 0}}}
                variant={sex === sections.articles.options.gender.male.text ? 'contained' : 'outlined'}
                onClick={() => setSex(sections.articles.options.gender.male.text)}
              >
                {sections.articles.options.gender.male.text}
              </Button>
              <Button
                sx={{mx: 1, mb: {xs: 2, md: 0}}}
                variant={sex === sections.articles.options.gender.female.text ? 'contained' : 'outlined'}
                onClick={() => setSex(sections.articles.options.gender.female.text)}
              >
                {sections.articles.options.gender.female.text}
              </Button>
              <IconButton>
                <SendIcon color='primary'/>
              </IconButton>
            </SpecialBox>
          </SpecialBox>
        }
        <Grid container spacing={2}>
          {
            sections.articles && !isLoading && sections.articles.options.cards.map((el) => (
              <Grid item xs={12} md={6} lg={4} key={el.id}>
                <Article data={el}/>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </RootStyle>
  )
}
