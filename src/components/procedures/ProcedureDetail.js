import {useState} from 'react';

import {Accordion, AccordionDetails, AccordionSummary, Box, Grid, Paper, Tab, Tabs, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const StyledPaper = styled(Box)(({theme}) => ({
//
//   "&::-webkit-scrollbar": {
//     width: '1em',
//   },
//   "&::-webkit-scrollbar-track": {
//     boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
//   },
//   "&::-webkit-scrollbar-thumb": {
//     backgroundColor: 'darkgrey',
//     outline: '1px solid slategrey',
//   }
// }))


const Circle = styled("div")(({theme}) => ({
  border: "solid",
  borderWidth: 2,
  borderColor: theme.palette.secondary.main,
  width: 30,
  height: 30,
  borderRadius: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 10,
  color: theme.palette.primary.dark,
  fontWeight: 700,
}));

export default function ProcedureDetail({item}) {
  const [tabValue, setTabValue] = useState(0)

  function handleChangeTab(event, newValue) {
    setTabValue(newValue)
  }

  function catchHtml(html) {
    return {
      __html: html
    }
  }


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{p: 3}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={3} sx={{p: 3}}>
      <Typography align='center' variant='h4' sx={{mb: 4}}>{item.name}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component='img'

            src={item.img}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tabs value={tabValue} variant='fullWidth' onChange={handleChangeTab} aria-label="basic tabs example">
            <Tab label="Detalles" {...a11yProps(0)} />
            <Tab label="Tus dudas" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <Box sx={{maxHeight: '380px', overflowY: 'auto'}}>
              <Typography dangerouslySetInnerHTML={catchHtml(item.detail)}/>
            </Box>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Box sx={{maxHeight: '380px', overflowY: 'auto'}}>
              {
                item.questions.map((el, i) => {
                  let key = i + 1;
                  return (
                    <Box sx={{mb: 2, mx: 2}}>
                      <Accordion sx={{boxShadow: "0px 3px 6px #00000029"}}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon/>}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Circle sx={{p: '10px'}}>{key}</Circle>
                          <Typography variant="body1" sx={{lineHeight: 1.8}}>
                            {el.title}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/*<Typography*/}
                          {/*  dangerouslySetInnerHTML={{__html: element.Contenido}}*/}
                          {/*/>*/}
                          <Typography>{el.text}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  )
                })
              }
            </Box>
          </TabPanel>
        </Grid>
      </Grid>
    </Paper>
  )
}
 
