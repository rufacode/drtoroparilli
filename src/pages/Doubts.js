import {styled} from "@mui/material/styles";
import Page from "../components/Page";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "../redux/store";
import {updateImg} from "../redux/slices/backgroundImageSlice";
import {doubtButton, generalData} from "../utils/mock-data/doubts";
import QuestionsList from "../components/doubts/QuestionsList";
import QuestionModal from "../components/doubts/QuestionModal";

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



export default function Doubts() {
  const [section, setSection] = useState(null)

  const { sections, isLoading } = useSelector(state => state.language)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateImg('/static/img/dudas.jpg'));
  }, [])

  useEffect(() => {
    if (sections.doubts && !isLoading) {
      setSection(sections.doubts.options.buttons.general)
    }
  }, [sections])

  return (
    <RootStyle title='Articulos'>
      {
        sections.doubts && !isLoading &&
        <>
          <Container>
            <Typography variant='h2' fontWeight={'bold'} sx={{ mb: 2 }}>
              {sections.doubts.options.title}
            </Typography>
          </Container>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, minHeight: '30rem' }}>
                <Button
                  sx={{ fontSize: '.85rem' }}
                  fullWidth
                  variant={ section && section.view === 'general' && 'contained'}
                  onClick={() => setSection(sections.doubts.options.buttons.general)}
                >
                  {sections.doubts.options.buttons.general.name}
                </Button>
                <Grid container>
                  {
                    sections.doubts.options.buttons.restDoubts.map((el) => (
                      <Grid item xs={12} sm={6} key={el.id}>
                        <Button
                          fullWidth
                          sx={{ fontSize: '.85rem', mx: {md: 2}, my: 2 }}
                          variant={section && section.view === el.view && 'contained'}
                          onClick={() => setSection(el)}
                        >
                          {el.name}
                        </Button>
                      </Grid>
                    ))
                  }
                </Grid>
                <QuestionModal />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              {
                section &&
                <>
                  <Typography variant='h4' fontWeight='bold' sx={{ px: 4 }}>{section.name}</Typography>
                  <QuestionsList data={section} />
                </>
              }
            </Grid>
          </Grid>

        </>
      }



    </RootStyle>
  )
}
